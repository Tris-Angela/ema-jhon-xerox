import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import OrderHistory from '../orderHistory/OrderHistory';
import './orderReviews.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const OrderReviews = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)
    const removeProductHandler = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    };

    const clearAll = () =>{
        setCart([]);
        deleteShoppingCart(); 
    }

    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <OrderHistory 
                        key={product.id} 
                        product={product} 
                        removeProductHandler={removeProductHandler}
                        ></OrderHistory>)
                }

            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                clearAll={clearAll}
                >
                    <Link className='shared-link' to="/checkout"> <button className='shared-style'>Proceed checkout</button> </Link>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReviews;