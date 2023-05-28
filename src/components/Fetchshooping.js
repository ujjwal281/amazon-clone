import React  from 'react'
// import  { useState } from 'react';
import "./FetchShooping.css"
const Fetchshooping = (props) => {

  // let url = "https://fakestoreapi.com/products";
  // let data = fetch(url);
  // console.log(data);
  let count = props.counting;
  let setCount = props.setting;
  let amount = props.amount;

  return (
    <div className='fullcard'>
      
      <div className='imageGround'>
        <img className='images' src={props.image} alt="redShirt" />
      </div>
      
      <div>
        <div className='itemPrice'>
          FADMAN SOLDERING IRON |KIT OF 7| ₹{props.amount}
        </div>

        <div>
          <button className='buttonsize' type="text" onClick={() => { setCount(count + amount) }} > Add to Cart </button>
        </div>

        <div>
          <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" />
          
        </div>

        <div className='tickbox'>
          This will be a giftThis is a gift Learn more
        </div>
        
        <small>&#10031; &#10031; &#10031; &#10031;</small>
       

        <div className='moreInfo'>
          {/* <button className='buttonsize' type="">QLT</button> */}
          delete  |  Save for later  |  See more like this
        </div>
        
      </div>
    </div>

  );
};

export default Fetchshooping
