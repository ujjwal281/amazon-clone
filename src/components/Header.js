import React from 'react'
import './Header.css';
import { Outlet, Link } from "react-router-dom";
const Header = () => {
    return (
      <>
      <div className='Header'>
                <img className='headerBar' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" width={130} alt="" />
                
                <div className='headerBar'>
                    <input className='search' type="" name="" value="" />
                    <input className='buttonSearch' id="nav-search-submit-button" type="submit" class="nav-input nav-progressive-attribute" value="Go" tabindex="0"/>
                </div>

          <Link to="/" >
          <div className='headerBar'>
              <span className='headerFirst'>Hello</span>
              <span className='headerSecond'>Sign Up</span>
          </div>
              </Link>
          
                <Link to="/ShoppingPage">
                <div className='headerBar'>
                    <span className='headerFirst'>returns</span>
                    <span className='headerSecond'>&Orders</span>
                </div>
          </Link>

          <Link to="/Apishopping">
                <div className='headerBar'>
                    <span className='headerFirst'>More</span>
                    <span className='headerSecond'>Shopping</span>
                </div>
          </Link>

          <a href="/LoginPage"><div className='headerBar'>
                    <span className='headerFirst'>Login</span>
                    <span className='headerSecond'>&SignUp</span>
                </div></a>

                <div className='headerBar'>
                    <span className='headerFirst'>Your</span>
                    <span className='headerSecond'>Prime</span>
                </div>
            </div>

            <div className='Header2'>
                <img className='headerBar' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" width={130} alt="" />
                
                <div className='headerBar'>
                    <input className='search' type="" name="" value="" />
                    <input className='buttonSearch' id="nav-search-submit-button" type="submit" class="nav-input nav-progressive-attribute" value="Go" tabindex="0"/>
                </div>

                <div className='headerBar'>
                    <span className='headerFirst'>Hello</span>
                    <span className='headerSecond'>Sign Up</span>
                </div>

                <div className='headerBar'>
                    <span className='headerFirst' >returns</span>
                    <span className='headerSecond' >&Orders</span>
                </div>

                <div className='headerBar'>
                    <span className='headerFirst'>Your</span>
                    <span className='headerSecond'>Prime</span>
          </div>
          
          <div className='headerBar'>
                    <span className='headerFirst'>Login</span>
                    <span className='headerSecond'>SignUp</span>
                </div>
      
        </div>
        <Outlet/>
      </>
  )
}

export default Header
