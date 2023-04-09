import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OrderHistory from '../orderHistory/OrderHistory';
import './orderReviews.css'
import { removeFromDb } from '../../utilities/fakedb';

const OrderReviews = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)
    const removeProductHandler = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <OrderHistory key={product.id} product={product} removeProductHandler={removeProductHandler}></OrderHistory>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReviews;