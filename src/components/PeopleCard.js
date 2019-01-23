import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import '../App.css';



export default class People extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-4 col-lg-3">
                <Card className="Card"  >
                    <CardImg
                        top
                        width="100%"
                        src={"./images/people/" + this.props.name.split(" ").join("-").toLowerCase() + ".jpeg"} alt="Card image cap"
                    />
                    <CardBody>
                        <CardTitle align="center"><h5>{this.props.name}</h5></CardTitle>
                        <CardSubtitle align="center"><h6>({this.props.species})</h6></CardSubtitle>
                        <CardText></CardText>
                        <CardSubtitle><strong>Planeta:</strong> {this.props.homeWorld}</CardSubtitle>
                        <CardSubtitle><strong>Idioma:</strong> {this.props.language}</CardSubtitle>
                        <CardText></CardText>
                        <CardText>
                        <p><strong>Ep. - Pelicula</strong></p>
                        {this.props.films.map((film) => (
                            <p>{film}</p>
                        ))}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}