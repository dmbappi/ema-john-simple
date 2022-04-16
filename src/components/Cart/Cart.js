import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    const totalReducer = (previous,product) => previous + product.price;
    const total = cart.reduce(totalReducer,0);

    // const total = cart.reduce((previous,product) => previous + product.price,0);
    // let total = 0;
    // for(const product of cart){
    //     total = total + product.price;
    // }
    return (
        <div>
            <h3> Order Summary</h3>
            <h5>Items Ordered: {props.cart.length}</h5>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cart;