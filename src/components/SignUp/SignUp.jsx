import React, { useContext, useState } from 'react';
import './signup.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext)

    const handleSignUp = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPassword.value;
        console.log(email, password, confirmPass)

        setError('')
        if(password !== confirmPass){
            setError('password did not match. Try Again.');
            return;
        }
        else if(password.length < 6){
            setError('password must contain 6 characters');
            return;
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })

    }
    return (
        <div className='form-container'>
           <h2 className='form-title'>Sign Up</h2>
           <form onSubmit={handleSignUp}>
            <div className='form-control'>
                <label>Email</label>
                <input type='email' name='email' required/>
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type='password' name='password' required/>
            </div>
            <div className='form-control'>
                <label>Confirm Password</label>
                <input type='password' name='confirmPassword' required/>
                <p className='passError'>{error}</p>
            </div>
            <input className='btn-submit' type="submit" value="Sign Up" />
           </form>
           <p><small>Already have an account? <Link to='/login'>Login Here</Link></small></p>
        </div>
    );
};

export default SignUp;