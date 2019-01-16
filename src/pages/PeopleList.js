import React,{Component} from 'react';
import Film from '../components/Film';
import axios from 'axios';

export default class PeopleList extends Component{
    constructor(props) {
        super(props)
        this.state = {
          people: []
      }
    }
    
    componentDidMount() {
        axios.get('https://swapi.co/api/people/')
          .then(json => {
            const people = json.data.results;
            console.log(people);
          })
          .catch((err) => {
            console.log(err)
          })
      }


}