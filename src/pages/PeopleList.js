import React,{Component} from 'react';
import People from '../components/People';
import axios from 'axios';


export default class PeopleList extends Component{
    constructor(props){
        super(props)
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/people/')
        .then((json) => {
            this.setState({
                people: json.data.results

            })
            console.log(json.data.results)
        })
        .catch((err) => {
            console.log(err)
        })

    }
      
    render(){
        const ListComp = this.state.people.map((pro) => {
            return <People name={pro.name} {...pro}/>
        })    
        return (
            <div className="row">
                {ListComp}
            </div>
        );
        }
    }
