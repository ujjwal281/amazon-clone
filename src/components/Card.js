import React from 'react'
import './Card.css';
import { Link , Outlet } from "react-router-dom";

const Card = () => {
  return (
    <div className='signinsecurely'>
      <br/>
    <div className="card"  width={23}>
  <div className="card-body">
          <h5 className="card-title">Sign in for your best experience</h5>
          <Link to = '/LoginPage'>
            <div>
              <button className = 'cardcolour' href="/"  style={{background:"yellow"} } > Sign in securely</button>
            </div>
          </Link>
  </div>
      </div>    
      <Outlet/>
    </div>
  )
}
export default Card
