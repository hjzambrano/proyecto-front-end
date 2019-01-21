import React, { Component } from 'react';
import StarShipCard from '../components/StarShipCard';
import axios from 'axios';



export default class StarShipList extends Component {
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
        axios.get('https://swapi.co/api/starships/')
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
                <StarShipCard
                    key={d.url}
                    name={d.name}
                    model={d.model}
                    manufacturer={d.manufacturer}
                    crew={d.crew}
                    passengers={d.passengers}
                    starshipClass={d.starship_class}
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