import React,{ useState } from 'react'
import SubTotal from './SubTotal';
import "./ShoppingPage.css";
import Fetchshooping from './Fetchshooping';
import Header from './Header';
// import Apishopping from './apishopping'; 


const shoppingPage = () => {
  let setinterval = 0;
  const [count, setCount] = useState(setinterval);

  let image1 = "https://5.imimg.com/data5/AQ/HD/MY-38850010/jeans-500x500.jpg";
  let image2 = "https://media.istockphoto.com/id/498852901/photo/red-plaid-shirt.jpg?s=612x612&w=0&k=20&c=FN0dBgzq0_GDJo5fKwRyM-QDz37TUVxAGKK4o3TSLnI=";
  let image3 = "https://5.imimg.com/data5/YA/BE/MY-40698162/mens-jackets-500x500.jpg";
  let image4 = "https://5.imimg.com/data5/YS/RU/SZ/SELLER-3749501/mens-shirts-500x500.jpg";
  let image5 = "https://images.meesho.com/images/products/41237705/rtawp_512.jpg";
  let image6 = "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19289844/2022/7/28/a4a4dad8-e6b5-4342-87f5-76ea55bd41b61659027516427AdidasWomensPackof3Low-CutSocks1.jpg"
  let image7 = "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/46662a6b-1fd0-4a87-91be-bb11258f3b25/lebron-witness-6-basketball-shoes-HXbMw7.png"
  let image8 = "https://m.media-amazon.com/images/I/41Kq2EdzWuL.jpg";


  let amount1 = 800;
  let amount2 = 1700;
  let amount3 = 500;
  let amount4 = 890;
  let amount5 = 499;
  let amount6 = 99;
  let amount7 = 3999;
  let amount8 = 1999;

  

  return (
    <div className='shoopingPage'>
      <Header/>
        <div className='maindivision'>
        <div className='divsiontwo'>
          <div className='imagetext'>
            <div className='image'>
              <img width={1000} height={100} src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="add"/>
            </div >
            <div className='text'>
              intelligence lerning in 
            </div>
          </div>

          <b className='shoppingbasket'>
            Your Shopping Basket
            <section><Fetchshooping setting={setCount} counting={count} image = {image1} amount = {amount1}/></section>
            <section><Fetchshooping setting={setCount} counting={count} image = {image2} amount = {amount2}/></section>
            <section><Fetchshooping setting={setCount} counting={count} image = {image3} amount = {amount3}/></section>
            <section><Fetchshooping setting={setCount} counting={count} image = {image4} amount = {amount4}/></section>
            <section><Fetchshooping setting={setCount} counting={count} image = {image5} amount = {amount5} /></section>
            <section><Fetchshooping setting={setCount} counting={count} image = {image6} amount = {amount6}/></section>
            <section><Fetchshooping setting={setCount} counting={count} image = {image7} amount = {amount7}/></section>
            <section><Fetchshooping setting={setCount} counting={count} image = {image8} amount = {amount8}/></section>
            {/* <Apishopping/> */}

          </b>
          </div>
        <div className='subtotal'>
          <SubTotal counting={count} />
        </div>
      </div>
      <br/>
    </div>
  )
}

export default shoppingPage
