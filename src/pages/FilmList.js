import React,{Component} from 'react';
import Film from '../components/Film';
import FilmStore from '../stores/FilmStore';


export default class FilmList extends Component{
    constructor(props){
        super(props);
        this.state = {
            Films: FilmStore.getAll()
        }
    }

render(){
    const ListComp = this.state.Films.map((pro) => {
        return <Film key={pro.episode_id} {...pro}/>
    })    
    return (
        <div className="row">
            {ListComp}
        </div>
    );
    }
}