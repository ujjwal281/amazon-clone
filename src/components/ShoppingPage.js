import React,{ useState } from 'react'
import SubTotal from './SubTotal';
import "./ShoppingPage.css";
import Fetchshooping from './Fetchshooping';

const shoppingPage = () => {
  const [count, setCount] = useState(100);
  return (
      <div className='shoopingPage'>
        <div className='maindivision'>
        <div className='divsiontwo'>
          <div className='imagetext'>
            <div className='image'>
              <img width={1000} height={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5cJZy3DRMv0JFlski0_F_orzZURJqljTkw&usqp=CAU" alt="add"/>
            </div >
            <div className='text'>
              intelligence lerning in 
            </div>
          </div>

          <b className='shoppingbasket'>
            Your Shopping Basket
            <section><Fetchshooping/></section>
            <section><Fetchshooping/></section>
            <section><Fetchshooping/></section>
            <section><Fetchshooping/></section>
            <section><Fetchshooping/></section>
          </b>

          </div>
        <b className='subtotal'>
          <SubTotal/>
        </b>
      </div>
      <br/>
    </div>
  )
}

export default shoppingPage
