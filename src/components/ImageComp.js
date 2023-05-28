import React from 'react'
import './ImageComp.css';
const ImageComp = (props) => {
   
  return (
      <div className='imageview'>
          <div className='firstview'>
            <img alt="Top DSLR &amp; Mirrorless Cameras - Canon, Sony &amp; Nikon from INR 37,990 - Upto 12 M NCEMI" src={props.name} class="product-image _deals-shoveler-v2_style_dealImage__3nlqg" data-a-hires="https://m.media-amazon.com/images/I/51UHoxzInpL._AC_SY400_.jpg"/>
          </div>
          <div className='secondview'>
            <div className='firstsecondview'>
                Up to 15 % off
              </div>
              <br/>
              <div className='secondsecondview'>
                Deal of the Day
              </div>
          </div>
    </div>
  )
}
export default ImageComp
