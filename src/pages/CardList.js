import React, {Component} from 'react';
import Product from '../components/Product';
import CartStore from '../stores/CardStores';

export default class CartList extends Component {
    constructor(){
        super();
        this.state = {
            products: CartStore.getAll()
        }
    }

    componentWillMount(){
        CartStore.on('change', () => {
            this.setState({
                products: CartStore.getAll()
            });
        });
    }

    render(){
        const productComp = this.state.products.map((pro) => {
            return <Product key={pro.Id} {...pro} />
        })
        return (
            <div className="row">
            <div className="col-md-12 text-center">
                Shopping Cart
            </div>
            {productComp}
            </div>
        );
    }
}