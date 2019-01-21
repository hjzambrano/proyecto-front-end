import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


export default class FilmCard extends Component {
    handleClickDetalle  () {
        alert('Pendiente Elaborar otro Card con la siguiente información: \n \n' + 
              this.props.title +'\n'+
              this.props.episode_id +'\n'+
              this.props.release_date.split("-").reverse().join("-") +'\n'+
              this.props.director +'\n'+
              this.props.producer +'\n'+
              this.props.opening_crawl +'\n'+
              'Lista de Personajes'
              );
    }

    handleClickSinopsis() { 
        alert('Pendiente Diseñar salida de la sighuiente Sinopsis: \n \n'+this.props.opening_crawl);
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
                        <Button color="info" size="md" block onClick={() => this.handleClickSinopsis()}>Sinopsis</Button>
                        <Button color="secondary" size="md" block onClick={() => this.handleClickDetalle()}>Detalle</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}