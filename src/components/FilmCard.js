import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


export default class FilmCard extends Component {
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
                        <CardSubtitle>Fecha: {this.props.release_date.split("-").reverse().join("-")} </CardSubtitle>
                        <CardSubtitle>Director: {this.props.director}</CardSubtitle>
                        <CardSubtitle>Productor: {this.props.producer}</CardSubtitle>
                        <CardText></CardText>
                        <Button color="info" size="md" block>Sinopsis</Button>
                        <Button color="secondary" size="md" block>Detalle</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}