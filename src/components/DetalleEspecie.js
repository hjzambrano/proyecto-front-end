import React,{Component} from 'react';
import People from '../components/People';
import DetEspecie from '../components/DetalleEspecie';
import axios from 'axios';


export default class DetalleEspecie extends Component{
    constructor(props){
        super(props)
        this.state = {
            especie: ""
        }
    }

    componentDidMount() {
        axios.get(this.props.url)
        .then((json) => {
            this.setState({
                especie: "Especie: ( " + json.name + ", " + json.calsification +")"
            })
            console.log(json)
        })
        .catch((err) => {
            console.log(err)
        })

    }


    render(){
        const ListComp = <DetalleEspecie especie={this.state.especie}/>

        return (
            {ListComp}
        );
        }
    }
