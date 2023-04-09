import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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

    useEffect(()=>{
        const storedProducts = getShoppingCart();
        console.log(storedProducts)
        const savedProducts = [];
        // step-1: get id of stored products from local storage
        for(const id in storedProducts){
            // step-2: get product by id in local storage
            const addedProducts = products.find(product => product.id === id)
            if(addedProducts){
                const quantity = storedProducts[id];
                addedProducts.quantity = quantity;
                console.log(addedProducts)
                savedProducts.push(addedProducts);
            }
        }
        setCart(savedProducts)
    },[products])

    const addProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
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