import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css';
import { Link } from 'react-router-dom';

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

    const clearAll = () =>{
        setCart([]);
        deleteShoppingCart();
    }
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
                <Cart 
                cart={cart}
                clearAll={clearAll}
                >
                    <Link className='shared-link' to="/review"> <button className='shared-style'>Order History</button> </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;