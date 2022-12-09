import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineLogin } from 'react-icons/ai'

import { Cart } from './Cart';
import { useStateContext } from '../context/StateContext';



const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Sneakers Hub</Link>
      </p>
    <div>
      <Link href= '/api/auth/login'>
      <button type="button" className="cart-icon" >
        <AiOutlineLogin />
      </button>
      </Link>
    
      
      <button type="button" className="cart-icon" onClick= {() =>
      setShowCart(true)}>
        <AiOutlineShopping />
        
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
        { showCart && < Cart />} 

      </div>
      
    </div>
  )
}

export default Navbar