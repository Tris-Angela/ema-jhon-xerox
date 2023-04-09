import React from 'react';
import './orderHistory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const OrderHistory = ({product, removeProductHandler}) => {
    console.log(product)
    const {id, img, name, quantity, price} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='product-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='color-effect'>${price}</span></p>
                <p>quantity: <span className='color-effect'>{quantity}</span></p>
            </div>
            <button onClick={() => removeProductHandler(id)} className='delete-product'><FontAwesomeIcon className='delete-icon' icon={faTrash} /></button>
        </div>
    );
};

export default OrderHistory;