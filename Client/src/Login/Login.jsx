import React, {useState} from 'react';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

   return (
    <div className='auth-form-container'>
         <form className='login-form' onSubmit={handleSubmit}>
            <label htmlfor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youraddress@gmail.com" id="email" name="email"></input>
            <label htmlfor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>
            <button type="submit">Login In</button>
        </form>
            <button className='link-btn' onClick={() => props.onFormSwitch('register')}> Dont have an account? Register here</button>
    </div>
   )
}