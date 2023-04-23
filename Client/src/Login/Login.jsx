import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LoginService from './LoginService';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(LoginService.validateLogin(email, password)) {
            navigate('/budget', { replace: true })
        } else {
            alert('Login information incorrect. Please try again.');
        }
    }

   return (
    <div className='auth-form-container'>
            <h2 className='form-title' >Login</h2>
         <form className='login-form' onSubmit={handleSubmit}>
            <label htmlfor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youraddress@gmail.com" id="email" name="email"></input>
            <label htmlfor="password">Password</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>
            <button type="submit">Login In</button>
        </form>
        <Link to="/register">
            <button className='link-btn'> Dont have an account? Register here</button>
        </Link>
    </div>
   )
}