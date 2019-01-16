import React,{Component} from 'react';
import Product from '../components/Product';
import ProductStore from '../stores/ProductStore';


export default class ProductList extends Component{
    constructor(){
        super();
        this.state = {
            Products: ProductStore.getAll()
        }
    }

    render(){
        const ProductComp = this.state.Products.map((pro) => {
            return <Product key={pro.Id} {...pro}/>
        })
        return (
            <div className="row">
                {ProductComp}
            </div>
        );
    }
}