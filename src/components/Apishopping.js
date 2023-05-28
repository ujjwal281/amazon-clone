import React from 'react'
import {  useState,axios } from 'react'

import './Apishopping.css';
import Header from './Header';
import Mainproduct from './Mainproduct';

const Apishopping = () => {

  // const [searchKey, setSearchKey] = useState("")
  const [a, seta] = useState([])
  
  //   const searchArtists = async (e) => {
  //     e.preventDefault() 
  const searcha = async (e) => {
    e.preventDefault() 
    const {data} = await axios.get("https://fakestoreapi.com/products")
    console.log(data);
    seta(data.a.items)
}
 
const renderArtists = () => {
    return a.map(b => (
        <div>
        {b.id}
        </div>
    ))
}
  
    return (
      <div>
        <Header />
        <section className='betweencomponents' >

          <section className='AllContents'>
              <Mainproduct />
              <Mainproduct/>
              <Mainproduct/>
              <Mainproduct/>
              <Mainproduct/>
              <Mainproduct/>
              <Mainproduct/>
              <Mainproduct/>
              <Mainproduct /> 
          </section>

          <br/>
          {/* <div>
             <form onSubmit={searchArtists}>
             <input type="text" className="text-black" onChange={e => setSearchKey(e.target.value)} /> 
             <button type={"submit"}>Search</button>
         </form>
          </div>  
         : <h2>Please login</h2> */}
          <button type="button" onClick={searcha} className="">Primary</button>

          <div className="grid grid-cols-6 m-4 p-4 text-white">
          {renderArtists()}
          </div>

        </section>
        </div>
    );
  }

export default Apishopping


