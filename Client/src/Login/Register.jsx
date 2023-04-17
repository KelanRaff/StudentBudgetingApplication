import React, {useState} from 'react';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className='auth-form-container'>
             <form onSubmit={handleSubmit}>
                <label htmlfor="name">Full Name</label>
                <input value={name} name="name" id="name" placeholder="Full name"/>

                <label htmlfor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youraddress@gmail.com" id="email" name="email"></input>

                <label htmlfor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>
                <button type="submit">Login In</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}> Already have an account? Login here</button>
        </div>
       )
}