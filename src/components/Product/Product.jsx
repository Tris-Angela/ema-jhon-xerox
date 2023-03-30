import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, seller, price, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h4 className='product-name'>{name}</h4>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
            </div>
            <button className='cart-btn'> Add to Cart</button>
        </div>
    );
};

export default Product;