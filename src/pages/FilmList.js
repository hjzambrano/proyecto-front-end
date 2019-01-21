import React,{Component} from 'react';
import FilmCard from '../components/FilmCard';
import axios from 'axios';


export default class FilmList extends Component{
    constructor(props){
        super(props)
        this.state = {
            films: []
        }
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/films/')
        .then((json) => {
            this.setState({
                films: json.data.results
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

     
    render(){
        const ListComp = this.state.films.map((pro) => {
            return <FilmCard key={pro.episode_id} {...pro}/>
        })    
        return (
            <div className="row">
                {ListComp}
            </div>
        );
        }
    }
