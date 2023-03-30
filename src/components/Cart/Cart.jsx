import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    let shippingCharge = 0;
    for(const product of cart){
        total = total + product.price;
        shippingCharge = shippingCharge + product.shipping;
    }
    const vat = total*5/100;
    const totalAmount = total + shippingCharge + vat;
    return (
        <div className='cart'> 
            <h4>Order Summary </h4>
            <p>Selected items: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Total shipping cost: ${shippingCharge}</p>
            <p>VAT: ${vat.toFixed(2)}</p>
            <h3>Grand total: ${totalAmount.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;