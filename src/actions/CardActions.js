import dispatcher from '../dispatcher';

export function addItemCart(item){
    dispatcher.dispatch({
        type: 'ADD_ITEM_CART',
        item
    });
}

export function deleteItemCart(item){
    dispatcher.dispatch({
        type: 'DELETE_ITEM_CART',
        item
    });
}