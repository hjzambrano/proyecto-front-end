import {EventEmitter} from 'events';
//import dispatcher from '../dispatcher';

class ProductStore extends EventEmitter {
    constructor(props) {
        super(props)
        this.films: []
    /*
          img:[
            { "Id": 1, "imgName": "the-phantom-menace.jpg"},
            { "Id": 2, "imgName": "attack-of-the-clones.jpg"},
            { "Id": 3, "imgName": "revenge-of-the-sith.jpg"},
            { "Id": 4, "imgName": "a-new-hope.jpg"},
            { "Id": 5, "imgName": "the-empire-strikes-back.jpg"},
            { "Id": 6, "imgName": "the-force-awakens"}
          ]
    */
    }
      
    componentDidMount() {
        axios.get('https://swapi.co/api/films/')
          .then(res => {
            const films = res.data.results;
            this.setState({ films });
          })
      }

    getAll(){
        return this.products;
    }
}

const productStore = new ProductStore();
export default productStore;