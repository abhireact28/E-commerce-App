import React, { useState } from 'react';
import './signup.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    const submitData = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    email, password
                })
            })
            const data = await res.json();
            localStorage.setItem('token', data.token)
        } catch (error) {
            console.log(error);
        }
        navigate('/cart')

    }

    const inputChange = (e) => {
        setEmail(e.target.value);
        setPassword(e.target.value);
    }

  return (
    <>
    <div className="form-container">
        <div className="form-wrapper">
            
            <span className="title">LOGIN</span>
            <form className='form2' onSubmit={submitData}>
                <input type="email" className='input1' placeholder='Email' onChange={inputChange} required/>
                <input type="text" className='input1' placeholder='Password' onChange={inputChange} required/>
                <button type='submit' className='btn1'>Sign in</button>
            </form>
            <p>You don't have an account? <NavLink to='/signup'> <span className='span1'>Sign Up</span> </NavLink> </p>
        </div>
    </div>
      
    </>
  )
}

export default Login;




