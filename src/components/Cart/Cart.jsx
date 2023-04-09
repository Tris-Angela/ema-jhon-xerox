import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, clearAll, children}) => {
    let total = 0;
    let shippingCharge = 0;
    let quantity = 0
    for(const product of cart){
        console.log(product)
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
            <button onClick={clearAll} className='clear-cart-btn'> <span>Clear All Items</span> <FontAwesomeIcon className='delete-icon' icon={faTrash} />
            </button>
            {children}
        </div>
    );
};

export default Cart;