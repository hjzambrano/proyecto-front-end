import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import * as CartActions from '../actions/CardActions';

export default class Films extends Component {
    render(){
        return (
            <div className="col-md-3">
                <Card>
                    <CardImg 
                        top 
                        width="100" 
                        src={"./images/" + this.props.title.split(" ").join("-").toLowerCase() + ".jpg"} alt="Card image cap" 
                    />
                    <CardBody>
                    <CardTitle>Titulo: {this.props.title}</CardTitle>
                    <CardSubtitle>Episodio: {this.props.episode_id}</CardSubtitle>
                    <CardSubtitle>Fecha: {this.props.release_date}</CardSubtitle>
                    <CardSubtitle>Director: {this.props.director}</CardSubtitle>
                    <CardSubtitle>Productor: {this.props.producer}</CardSubtitle>
                    <CardText>{"./images/" + this.props.title.split(" ").join("-").toLowerCase() + ".jpg"}</CardText>

                    <Button color="Primary">Detalles</Button>
                    </CardBody>
                </Card>
            </div>    
        );
    }
}