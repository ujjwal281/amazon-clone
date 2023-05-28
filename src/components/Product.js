import React from 'react'
import './Product.css'
const Product = (props) => {
     
  return(
    <div >
              <div className='firstgridBox'>
                  <div className='firstfirstgridBox'>
                      <strong className='containerName'> 
            {props.image0}
                      </strong>
                  </div>
                  <div  className='secondfirstgridBox'>
                      <div className='boxsecondfirstgridBox'><img alt="Refrigerators" src={props.image1} class="landscape-image" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg"/>
            </div>
                      <div className='boxsecondfirstgridBox'><img alt="Refrigerators" src={props.image2} class="landscape-image" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg"/>
                          
            </div>
                      <div className='boxsecondfirstgridBox'><img alt="Refrigerators" src={props.image3}  class="landscape-image" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg"/>
                          
            </div>
                      <div className='boxsecondfirstgridBox'><img alt="Refrigerators" src={props.image4}  class="landscape-image" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg"/>
                          
            </div>
        </div>
        <a href="/">{props.image5}</a>
          </div>
    </div>
  )
}

export default Product
