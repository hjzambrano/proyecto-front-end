import React, { Component } from 'react';
import PeopleCard from './PeopleCard';
import axios from 'axios';


export default class PeopleDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            species: [],
            language: [],
            homeWorld: [],
            othersFilms: [],
        }
    }

    componentDidMount() {

        this.getSpeciesAndLanguage();

        this.getHomeWorld();

        this.getFilms();
    }

    getSpeciesAndLanguage() {
        axios.get(this.props.species)
            .then((json) => {
                this.setState({
                    species: json.data.name + " - " + json.data.classification,
                    language: json.data.language
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    getHomeWorld() {
        axios.get(this.props.homeWorld)
            .then((json) => {
                this.setState({ 
                    homeWorld: json.data.name
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    getFilms() {
        const filmsArray = [];

        const allFilms = this.props.films.map((filmUrl) => {
            axios.get(filmUrl) 
            .then((json) => {
                filmsArray.push(json.data.episode_id + ' - '+ json.data.title)
                this.setState({
                    othersFilms: filmsArray
                })                
            })      
            .catch((err) => {
                console.log(err)
            })
        })
    }


    render() {  
   
        return (
            <PeopleCard 
                name={this.props.name}
                species={this.state.species}
                homeWorld={this.state.homeWorld}
                language={this.state.language}
                films={this.state.othersFilms}
            />

        )
      }
    
}
