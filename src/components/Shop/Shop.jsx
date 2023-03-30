import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='shop-container'>

            <div>
                <h4>All Products are Shown below</h4>
                <h5>Total Products:{products.length}</h5>
                <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
                </div>
            </div>
            <div className="cart-container">
                <h4>Order Summary </h4>
            </div>
        </div>
    );
};

export default Shop;