import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    let shippingCharge = 0;
    let quantity = 0
    for(const product of cart){
        product.quantity = product.quantity||1;
        total = total + product.price*product.quantity;
        shippingCharge = shippingCharge + product.shipping;
        quantity = quantity + product.quantity
    }
    const vat = total*5/100;
    const totalAmount = total + shippingCharge + vat;
    return (
        <div className='cart'> 
            <h4>Order Summary </h4>
            <p>Selected items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total shipping cost: ${shippingCharge}</p>
            <p>VAT: ${vat.toFixed(2)}</p>
            <h3>Grand total: ${totalAmount.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;