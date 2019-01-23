import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Popover, PopoverHeader, PopoverBody
} from 'reactstrap';
import axios from 'axios';


export default class FilmCard extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleBtn2 = this.toggleBtn2.bind(this);        
        this.state = {
            popoverOpenBtn1: false,
            popoverOpenBtn2: false,
            charactersName: []
        };
    }

    toggle() {
        this.setState({
            popoverOpenBtn1: !this.state.popoverOpenBtn1    
        });
    }

    toggleBtn2() {
        this.setState({
            popoverOpenBtn2: !this.state.popoverOpenBtn2
        });
    }

    componentDidMount() {

        this.getPeople();

    }

    getPeople() {

        const peopleArray = [];

        const allPeople = this.props.characters.map((peopleUrl) => {
            axios.get(peopleUrl) 
            .then((json) => {
                peopleArray.push(json.data.name+", ")
                this.setState({
                    charactersName: peopleArray
                })                
            })      
            .catch((err) => {
                console.log(err)
            })
        })
    }


    render() {
        return (
            <div className="col-sm-6 col-md-4 col-lg-3">
                <Card className="Card">
                    <CardImg
                        top
                        width="100%"
                        src={"./images/films/" + this.props.title.split(" ").join("-").toLowerCase() + ".png"} alt="Card image cap"
                    />
                    <CardBody>
                        <CardTitle align="center"><h5>{this.props.title}</h5></CardTitle>
                        <CardSubtitle align="center"><h6>Episodio: {this.props.episode_id}</h6></CardSubtitle>
                        <CardText></CardText>
                        <CardSubtitle><strong>Fecha:</strong> {this.props.release_date.split("-").reverse().join("-")} </CardSubtitle>
                        <CardSubtitle><strong>Director:</strong> {this.props.director}</CardSubtitle>
                        <CardSubtitle><strong>Productor:</strong> {this.props.producer}</CardSubtitle>
                        <CardText></CardText>

                        <Button id={this.props.title.split(" ").join("")} type="button" color="info" block>
                            Sinopsis
                            </Button>
                        <Popover placement="top" isOpen={this.state.popoverOpenBtn1} 
                                 target={this.props.title.split(" ").join("")} toggle={this.toggle}>
                            <PopoverHeader>{this.props.title} (Sinopsis)</PopoverHeader>
                            <PopoverBody>{this.props.opening_crawl}</PopoverBody>
                        </Popover>

                        <Button id={this.props.title.split(" ").join("") + "1"} type="button" color="secondary" block>
                            Personajes
                            </Button>
                        <Popover placement="top" isOpen={this.state.popoverOpenBtn2} 
                                 target={this.props.title.split(" ").join("") + "1"} toggle={this.toggleBtn2}>
                            <PopoverHeader>{this.props.title} (Personajes)</PopoverHeader>
                            <PopoverBody> 
                                {this.state.charactersName.sort()}
                            </PopoverBody>
                        </Popover>


                    </CardBody>
                </Card>
            </div>
        );
    }
}