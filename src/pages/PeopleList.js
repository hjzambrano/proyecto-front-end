import React, { Component } from 'react';
import People from '../components/PeopleCard';
import PeopleDetails from '../components/PeopleDetails';
import axios from 'axios';



export default class PeopleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getFilms()

    }
    
    getFilms() {
        axios.get('https://swapi.co/api/people/')
            .then((json) => {
                this.setState({
                    data: json.data.results
                })
            })
            .catch((err) => console.log(err))
    }


    render() {

            const cardList = this.state.data.map((d) => {
                return (
                    <PeopleDetails
                        key={d.url}
                        name={d.name}
                        species={d.species}
                        homeWorld={d.homeworld}
                        films={d.films}
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