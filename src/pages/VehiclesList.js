import React, { Component } from 'react';
import VehicleCard from '../components/VehicleCard';
import axios from 'axios';



export default class VehiclesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getPlanets()

    }
    
    getPlanets() {
        axios.get('https://swapi.co/api/vehicles/')
            .then((json) => {
                this.setState({
                    data: json.data.results
                })
                console.log(json.data.results)
            })
            .catch((err) => console.log(err))
    }


    render() {

        const cardList = this.state.data.map((d) => {
            return (
                <VehicleCard
                    key={d.url}
                    name={d.name}
                    model={d.model}
                    length={d.length}
                    crew={d.crew}
                    passengers={d.passengers}
                    vehicleClass={d.vehicle_class}
                />
            )
        })

        return (
            <div className="row">
                {cardList}
            </div>
        );
    }
}