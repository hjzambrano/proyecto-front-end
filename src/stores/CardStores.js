import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

class CartStore extends EventEmitter {
    constructor(){
        super();
        this.cart = [];
    }

    addItemCart(item){
        this.cart.push(item);
        this.emit('change');
    }

    deleteItemCart(item){
        this.cart = this.cart.filter((cartItem) => {
            return cartItem.Id !== item.Id
        })
        this.emit('change');
    }

    countItemCart(){
        return this.cart.length;
    }

    getAll(){
        return this.cart;
    }

    handleItemCart(action){
        switch(action.type){
            case 'ADD_ITEM_CART':
                this.addItemCart(action.item);
                break;
            case 'DELETE_ITEM_CART':
                this.deleteItemCart(action.item);
                break;
            default:
            break;
        }
    }
}

const cartStore = new CartStore();
dispatcher.register(cartStore.handleItemCart.bind(cartStore));
export default cartStore;