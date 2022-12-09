import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { useUser } from '@auth0/nextjs-auth0/client';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import { usePaystackPayment } from 'react-paystack';
import emailjs from "@emailjs/browser";



const Cartlogin = () => {
  const cartRef = useRef();
  const { user } = useUser();
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a4ti7od",
        "template_i36ys5d",
        form.current,
        "qKcs0-60JEaHBzgTv"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
  const config = {
    reference: (new Date()).getTime(),
    username: `${user.name}`,
    email: `${user.email}`,
    amount: `${totalPrice * 100}`,
    //publicKey: 'pk_live_7b0117b105694184900ff75ce52987cae7c1b04f',
    publicKey: 'pk_test_1156b935d863b0c6d92a19b3678d034562cf062a',
    currency: 'GHS'
};
 
// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div className='btn-container'>
          <button  type = 'button' className='btn' onClick={() => {
              initializePayment(onSuccess, onClose)
          }}>Pay with Paystack</button>
      </div>
    );
};

 
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading"
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4> GHC {item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <p className="quantity-desc">
                    <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec') }>
                    <AiOutlineMinus />
                    </span>
                    <span className="num" onClick="">{item.quantity}</span>
                    <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc') }><AiOutlinePlus /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3> GHC {totalPrice}</h3>
            </div>
            <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <br />
      <input type="text" name="user_name" />
      <br />
      <label>Email</label>
      <br />
      <input type="email" name="email" />
      <br />
      <label> Summary</label>
      <br />
         
         {/* <Cartmessage /> */}
          
         <div>
         <div >
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <div >
                <div >
                  <ol>
                  <h5>{item.name} : {totalQuantities}</h5>
                  </ol>
                  
                </div>
                
              </div>
            </div>
          
          ))}
        </div>
    </div>
    <label>Paste Cart Summary in the field below</label>
      <br />
      <input type="email" name="message" />
    
         
        
        
      <br />
      <input type="submit" value="Send" />
    </form>
            
              
              <PaystackHookExample />
              
            
          </div>
        )}
      </div>
    </div>
  )
}

export default Cartlogin