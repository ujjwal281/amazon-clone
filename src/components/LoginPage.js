import React from 'react';
import {  useState } from 'react'
import "./LoginPage.css";
import { Link,Outlet } from "react-router-dom";
const LoginPage = () => {

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='LoginPageBackground'>
      <div className='amazonlogo'>
              <img className='amazonlogoimage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="" />
      </div>
      <br/>
          <div className='cardBox'>
              <div className='SignIpContent'>
                Sign-In
              </div>
              <br/>

        <b className='EmailContent'>
          <div className='emailtype'>
                  E-mail
          </div>
              <input className='emailInput' type="text"  value={email} placeholder='Enter your E-mail' onChange={e=>setEmail(e.target.value)}/>
              </b>
              <br/>

        <b className='passwordContent'>
          <div className='passwordtype'>
                  Password
          </div>
              <input className='passwordInput' type="password" value={password} placeholder='Enter your password' onChange={e=>setPassword(e.target.value)} />
              </b>
        <br />
        <br />

        <Link to = '/'>
        <div className='SignIn'>
          <button className='SignInButton' >  Sign In </button> 
                </div>
          </Link>
                <br/>
              <div className='content'>
              By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
              </div>
        <div className='createAccount'>
        <button className='createAccountButton' type="">Create an Account</button>
              </div>
          </div>
          <Outlet/>
         </div >
           
  )
}
export default LoginPage
