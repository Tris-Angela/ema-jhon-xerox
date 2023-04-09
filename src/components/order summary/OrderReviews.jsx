import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const OrderReviews = () => {
    const cart = useLoaderData();

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    cart.map(product => <OrderReviews key={product.id} product={product}></OrderReviews>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReviews;