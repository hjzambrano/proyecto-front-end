import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import '../App.css';



export default class VehicleCard extends Component {
    render() {
        return (
            <div className="col-sm-6 col-md-4 col-lg-3">
                <Card className="Card"  >
                    <CardImg
                        top
                        width="100%"
                        src={"./images/vehicles/" + this.props.name.split(" ").join("-").toLowerCase().replace('/','-') + ".jpeg"} alt="Card image cap"
                    />
                    <CardBody>
                    <CardTitle align="center"><h5>{this.props.name}</h5></CardTitle>
                        <CardText></CardText>
                        <CardSubtitle><strong>Modelo:</strong> {this.props.model}</CardSubtitle>
                        <CardSubtitle><strong>Longitud:</strong> {this.props.length}</CardSubtitle>
                        <CardSubtitle><strong>Tripulación:</strong> {this.props.crew}</CardSubtitle>
                        <CardSubtitle><strong>Pasajeros:</strong> {this.props.passengers}</CardSubtitle>
                        <CardSubtitle><strong>Clase de Vehículo:</strong> {this.props.vehicleClass}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        );
    }
}