import React from 'react';
import './Navbar.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
            <Link to="/">Shop</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/inventory">Manage Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
};

export default Navbar;