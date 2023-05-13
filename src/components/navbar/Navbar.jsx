import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () =>{
        
    }
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
            <Link to="/">Shop</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/inventory">Manage Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            {user && <span>welcome {user.email} <button onClick={handleLogOut}>Sign Out</button></span>}
            </div>
        </div>
    );
};

export default Navbar;