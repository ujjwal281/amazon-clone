
import React from 'react'
import Card from './Card'
import Header from './Header'
import './Home.css'
import ImageComp from './ImageComp'
import Product from './Product'

const Home = () => {
  let image1 = "https://m.media-amazon.com/images/I/51UHoxzInpL._AC_SY200_.jpg"
  let image2 = "https://m.media-amazon.com/images/I/31XoHk1MsvL._AC_SY200_.jpg";
  let image3 ="https://m.media-amazon.com/images/I/31-W9RtD2OL._AC_SY200_.jpg";
  let image4 ="https://m.media-amazon.com/images/I/31VfkewLnlL._AC_SY200_.jpg"
  let image5 ="https://m.media-amazon.com/images/I/41vpIEPhpIL._AC_SY200_.jpg"
  let image6 = "https://m.media-amazon.com/images/I/312afPe2piL._AC_SY200_.jpg"
  let image7 = "https://m.media-amazon.com/images/I/31VHrvwNS+L._AC_SY200_.jpg";
  let image8 = "https://m.media-amazon.com/images/I/51YpHs6gCjL._AC_SY200_.jpg"
  let image9 = "https://m.media-amazon.com/images/I/51R-sFEOZgL._AC_SY200_.jpg"
  let image10 = "https://m.media-amazon.com/images/I/31nyuYH0Y1L._AC_SY200_.jpg"

  let obj1 = {
    name0:"Top picks for your home",
    name1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    name2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    name3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
    name4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
    name5:"see more"
  }

  let obj2 = {
    name0:"Up to 60% off | Styles for Men",
    name1: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
    name2: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg",
    name3: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg",
    name4: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
    name5:"see all offers"
  }

  let obj3 = {
    name0:"Redefine your living room",
    name1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_03_low._SY116_CB605507312_.jpg",
    name2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_04_low._SY116_CB605507312_.jpg",
    name3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_01_low._SY116_CB605507312_.jpg",
    name4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_02_low._SY116_CB605507312_.jpg",
    name5:"visit our furniture"
  }

  let obj4 = {
    name0:"Up to 60% off | Styles for Women",
    name1: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg",
    name2: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg",
    name3: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg",
    name4: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg",
    name5:"See all offers"
  }

  let obj5 = {
    name0:"Shop by Category",
    name1: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg",
    name2: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg",
    name3: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg",
    name4: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg",
    name5:"See more"
  }

  let obj6 = {
    name0:"Upgrade your home | Amazon Brands & more",
    name1: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_11._SY116_CB606110532_.jpg",
    name2: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_6._SY116_CB606110532_.jpg",
    name3: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_4._SY116_CB606110532_.jpg",
    name4: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_2._SY116_CB606110532_.jpg",
    name5:"Shop now"
  }

  let obj7 = {
    name0:"Exclusive offers on travel tickets",
    name1: "https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/flight-1_186x116._SY116_CB606987228_.jpg",
    name2: "https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/Train-2_186x116._SY116_CB606987228_.jpg",
    name3: "https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/Bus-3_186x116._SY116_CB606987228_.jpg",
    name4: "https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/PCQC/travel_acces-4_186x116._SY116_CB606987228_.jpg",
    name5:"See all offers"
  }

  const imageHome0 = "https://m.media-amazon.com/images/I/61iV+-ws85L._SX3000_.jpg";
  const imageHome1 = "https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg";
  const imageHome2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungM/M14/Sale-live-now/D77911710_IN_WLME_SamsungM_M145G_Launch_tallhero_3000x1200._CB590368077_.jpg";
  const imageHome3 = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/New_Benefits/Gaming/PG_3000x1200_apr._CB590572011_.jpg";
  const imageHome4 = "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Sports/April/Getfitdays/GW/Hero/Desktop/Graphic-5-3000X1200-citi._CB590410728_.jpg";
  

  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n){
    var i;
    var x = document.getElementsByClassName("body_image");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) { slideIndex = x.length - 1 }
    
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }

  return (
    <div >
      <Header/>
      <section>
        <div  className='body_images'>
          <img className='body_image' src={imageHome0} alt="Electronics under 1999" width={1550} />
          <img className='body_image' src={imageHome1} alt="Electronics under 1999" width={1550} />
          <img className='body_image' src={imageHome2} alt="Electronics under 1999"  width={1550} />
          <img className='body_image' src={imageHome3} alt="Electronics under 1999" width={1550} />
          <img className='body_image' src={imageHome4} alt="Electronics under 1999" width={1550} />
          
          <button class="w3-button w3-black w3-display-left" onclick={plusDivs(-1)}>&#10094;</button>
          <button class="w3-button w3-black w3-display-right" onclick={plusDivs(1)}>&#10095;</button>

        </div>      
      </section>

      <section className='information'>
      <nav id='menu'>
  <input type='checkbox' id='responsive-menu' onclick='updatemenu()'/><label></label>
  <ul>
    <li><a href='http://'>=All</a></li>
    <li><a href='http://'>Fresh</a></li>
    <li><a href='http://'>Amazon miniTV</a></li>
    <li><a href='http://'>Amazon Pay</a></li>
    <li><a href='http://'>Gift Cards</a></li>
    <li><a href='http://'>GIft Ideas</a></li>
    <li><a href='http://'>Health,Household & Personal Care</a></li>
    <li><a href='http://'>AmazoBasics</a></li>
    <li><a href='http://'>Books</a></li>
    <li><a href='http://'>House Improvement</a></li>
    <li><img className='imagenavbar' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Multi-title-Drishyam2-RamSetu-Kantara-Farzi/400x39-SWM._CB612652932_.jpg" alt="" />
    </li>
  </ul>
</nav>
      </section>
         
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

        <section className='containerMain' >
          
          <Product image0={obj1.name0} image1={obj1.name1} image2={obj1.name2} image3={obj1.name3} image4={obj1.name4}  image5 = {obj1.name5}/>
          <Product image0={obj2.name0} image1={obj2.name1} image2={obj2.name2} image3={obj2.name3} image4={obj2.name4}  image5 = {obj2.name5}/>
          <Product image0={obj3.name0} image1={obj3.name1} image2={obj3.name2} image3={obj3.name3} image4={obj3.name4}  image5 = {obj3.name5}/>
          <Card/>    
          <Product image0={obj4.name0} image1={obj4.name1} image2={obj4.name2} image3={obj4.name3} image4={obj4.name4}  image5 = {obj4.name5}/>
          <Product image0={obj5.name0} image1={obj5.name1} image2={obj5.name2} image3={obj5.name3} image4={obj5.name4}  image5 = {obj5.name5}/>
          <Product image0={obj6.name0} image1={obj6.name1} image2={obj6.name2} image3={obj6.name3} image4={obj6.name4}  image5 = {obj6.name5}/>
          <Product image0={obj7.name0} image1={obj7.name1} image2={obj7.name2} image3={obj7.name3} image4={obj7.name4}  image5 = {obj7.name5}/>         
      </section>

      <section className="secondLane">
        <ImageComp name={image1} /> 
        <ImageComp  name={image2}/> 
        <ImageComp  name={image3}/> 
        <ImageComp  name={image4}/> 
        <ImageComp  name={image5}/> 
        <ImageComp name={image6} /> 
        <ImageComp  name={image7}/> 
        <ImageComp  name={image8}/> 
        <ImageComp  name={image9}/> 
        <ImageComp  name={image10}/> 
      </section>
      </div>
  )
}

export default Home
