import React from 'react'
import { Herobanner, Product } from '../components/index'
import { client } from '../lib/client'
//if banner data is available ln7 then parse the first element as a prop to herobanner instead

//import { useUser } from '@auth0/nextjs-auth0/client';
const index = ({products, bannerData} ) => {
  return (
    <div>
      <Herobanner herobanner = { bannerData.length && bannerData[0] } />
    
      
      <div className='products-heading'>
        <h2>Best Selling Sneaker</h2>
        <p>Variety of Sneakers</p>
      </div>
       <div className='products-container'>
         
          {products.map((product) => <Product  key =
          {product._id} product = {product}/>)}
       </div>
       
    </div>
  )
}
//create sanity query
export const getServerSideProps = async () => {
 const query = '*[_type== "product" ]';
 const products = await client.fetch(query);

 const bannerquery = '*[_type== "banner" ]';
 const bannerData = await client.fetch(bannerquery);

 return {
   props: {
     products,
     bannerData
    }
   }
}

export default index
