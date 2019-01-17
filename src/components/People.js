import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


export default class People extends Component {
    render() {
        return (
            <div className="col-md-3">
                <Card>
                    <CardImg
                        top
                        width="100%"
                        src={"./images/people/" + this.props.name.split(" ").join("-").toLowerCase() + ".jpeg"} alt="Card image cap"
                    />
                    <CardBody>
                        <CardTitle align="center"><h5>{this.props.name}</h5></CardTitle>
                        <CardSubtitle align="center"><h6>Altura: {this.props.height}</h6></CardSubtitle>
                        <CardText></CardText>

                    </CardBody>
                </Card>
            </div>
        );
    }
}