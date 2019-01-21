import React, { Component } from 'react';
import PlanetCard from '../components/PlanetCard';
import axios from 'axios';



export default class PlanetsList extends Component {
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
        axios.get('https://swapi.co/api/planets/')
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
                <PlanetCard
                    key={d.url}
                    name={d.name}
                    diameter={d.diameter}
                    climate={d.climate}
                    terrain={d.terrain}
                    surfaceWater={d.surface_water}
                    population={d.population}
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