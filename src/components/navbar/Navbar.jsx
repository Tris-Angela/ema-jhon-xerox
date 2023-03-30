import React from 'react';
import './Navbar.css';
import logo from '../../images/Logo.svg';

const Navbar = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
            <a href="/order">Order</a>
            <a href="/order review">Order Review</a>
            <a href="/inventory">Manage Inventory</a>
            <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Navbar;