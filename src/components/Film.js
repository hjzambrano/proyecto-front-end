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
                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=250&h=300" alt="Card image cap" 
                    />
                    <CardBody>
                    <CardTitle>Titulo: {this.props.title}</CardTitle>
                    <CardSubtitle>Episodio: {this.props.episode_id}</CardSubtitle>
                    <CardSubtitle>Fecha: {this.props.release_date}</CardSubtitle>
                    <CardSubtitle>Director: {this.props.director}</CardSubtitle>
                    <CardSubtitle>Productor: {this.props.producer}</CardSubtitle>

                    <Button color="Primary"
                        onClick={() => CartActions.addItemCart(this.props)}>Detalles</Button>
                    </CardBody>
                </Card>
            </div>    
        );
    }
}