import React from 'react'
import Navbar from './Navbar'
import { Footer } from './Footer'
import image1 from '../Images/Impact on Cycle Length.png'
import image2 from '../Images/Impact on Interest Earned.png'
import image3 from '../Images/Impact on Order Quantity.png'
import image4 from '../Images/Impact on Revenue.png'
import image5 from '../Images/Impact on Selling Price.png'
import image6 from '../Images/Impact on Total Proft.png'
import image7 from '../Images/Total Expected Cost.png'


const Analysis = () => {
  return (
    <>
    <Navbar/>

    <div className="m-5">
              <h1>Analytical Graphs</h1>

        <div className='row text-center'>
            <div className='col-4'>
            <img src={image1} width={'400px'} height={'auto'} />

            </div>
            <div className='col-4'>
            <img src={image2} width={'400px'} height={'auto'} />

            </div>
            <div className='col-4'>
            <img src={image3} width={'400px'} height={'auto'} />

            </div>
        </div>

        <div className='row text-center'>
            <div className='col-4'>
            <img src={image4} width={'400px'} height={'auto'} />


            </div>
            <div className='col-4'>
            <img src={image5} width={'400px'} height={'auto'} />

                
            </div>
            <div className='col-4'>
            <img src={image6} width={'400px'} height={'auto'} />

                
            </div>
        </div>

        <div className='row text-center'>
        <div className='col-4'></div>
            <div className='col-4'>
            <img src={image7} width={'400px'} height={'auto'} />


            </div>
            
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Analysis