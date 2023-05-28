import React from 'react'
import "./SubTotal.css";

const subTotal = (props) => {
  
  return (
    <div>
      <div className="card"  width={23}>
        <div className="card-body">
          <h6 className='verify'>We noticed this is your First order in this category. Part of your order qualifies for FREE Delivery. Details</h6>
          <h5 className="card-title">Subtotal (4 items): {props.counting}</h5>
          <h6 >This order contains a gift</h6>
          <button className='cardcolours' href="/"  >Proceed to Buy</button>        
  </div>
      </div>   
    </div>
  )
}
export default subTotal
