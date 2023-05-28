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

          <div className='headerBar'>
          <Link to="/">
              <span className='headerFirst'>Hello</span>
              <span className='headerSecond'>Sign Up</span>
              </Link>
          </div>
          
                <Link to="/ShoppingPage">
                <div className='headerBar'>
                    <span className='headerFirst'>returns</span>
                    <span className='headerSecond'>&Orders</span>
                </div>
          </Link>

                <div className='headerBar'>
                    <span className='headerFirst'>Your</span>
                    <span className='headerSecond'>Prime</span>
                </div>

                <a href="https://www.amazon.in/gp/cart/view.html?ref_=nav_cart" aria-label="0 items in cart" class="nav-a nav-a-2 nav-progressive-attribute" id="nav-cart">
                 <div id="nav-cart-count-container">
                   <span id="nav-cart-count" aria-hidden="true" class="nav-cart-count nav-cart-0 nav-progressive-attribute nav-progressive-content">0</span>
                   <span class="nav-cart-icon nav-sprite"></span>
                 </div>
                 <div id="nav-cart-text-container" class=" nav-progressive-attribute">
                   <span aria-hidden="true" class="nav-line-1">
                   </span>
                   <span aria-hidden="true" class="nav-line-2">
                     Cart
                       <span class="nav-icon nav-arrow"></span>
                     </span>
                   </div>
                 </a>
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
      
        </div>
        <Outlet/>
      </>
  )
}

export default Header
