import React, { useContext } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const existedUser = result.user;
            console.log(existedUser)
            form.reset();
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className='form-container'>
           <h2 className='form-title'>Login</h2>
           <form onSubmit={handleLogin}>
            <div className='form-control'>
                <label>Email</label>
                <input type='email' name='email' required/>
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type='password' name='password' required/>
            </div>
            <input className='btn-submit' type="submit" value="Login" />
           </form>
           <p><small>New to Ema-jhon? <Link to="/signup">Sign Up first.</Link></small></p>
        </div>
    );
};

export default Login;