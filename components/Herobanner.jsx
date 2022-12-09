import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Herobanner = ({herobanner}) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'> {}

            </p>
            <h3 className='text-gradient'>
                {herobanner.midText}
            </h3>
           
            
            <img src = {urlFor(herobanner.image)} alt ='sneakers' className='hero-banner-image' />
            <div>
                <Link href = {`/product/${herobanner.product}`}>
                

                    <button type = 'button ' >{herobanner.buttonText}</button>
                   
                </Link>
                <div className='desc'>
                   
                    <p>{herobanner.desc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herobanner