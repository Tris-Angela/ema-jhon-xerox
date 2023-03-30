import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const addProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };
    return (
        <div className='shop-container'>

            <div>
                <h4>All Products are Shown below</h4>
                <h5>Total Products:{products.length}</h5>
                <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                        intoCart={addProduct}
                        ></Product>)
                }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;