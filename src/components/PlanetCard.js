import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import '../App.css';



export default class PlanetCard extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-4 col-lg-3">
                <Card className="Card"  >
                    <CardImg
                        top
                        width="100%"
                        src={"./images/planets/" + this.props.name.split(" ").join("-").toLowerCase() + ".jpeg"} alt="Card image cap"
                    />
                    <CardBody>
                        <CardTitle align="center"><h5>{this.props.name}</h5></CardTitle>
                        <CardText></CardText>
                        <CardSubtitle><strong>Diametro:</strong> {this.props.diameter}</CardSubtitle>
                        <CardSubtitle><strong>Clima:</strong> {this.props.climate}</CardSubtitle>
                        <CardSubtitle><strong>Terrenos:</strong> {this.props.terrain}</CardSubtitle>
                        <CardSubtitle><strong>Superficie de Agua:</strong> {this.props.surfaceWater}</CardSubtitle>
                        <CardSubtitle><strong>Poblacion:</strong> {this.props.population}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        );
    }
}