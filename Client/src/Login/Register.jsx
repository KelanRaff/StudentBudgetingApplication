import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LoginService from './LoginService';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(LoginService.addUser(email, password)) {
            alert('User successfully registered.')
            navigate('/login', { replace: true })
        } else {
            alert('Something went wrong. Please try again.');
        }
    }

    return (
        <div className='auth-form-container'>
                <h2 className='form-title' >Register</h2>
             <form className='register-form' onSubmit={handleSubmit}>
                <label htmlfor="name">Full Name</label>
                <input value={name} name="name" id="name" placeholder="Full name"/>

                <label htmlfor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youraddress@gmail.com" id="email" name="email"></input>

                <label htmlfor="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>
                <button type="submit">Login In</button>
            </form>
            <Link to="/login">
                <button className='link-btn'> Already have an account? Login here</button>
            </Link>
        </div>
       )
}