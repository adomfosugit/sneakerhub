import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useStateContext } from '../context/StateContext';

const ContactUs = () => {
    const {  totalQuantities, cartItems, cont, setCont} = useStateContext();
  const form = useRef();

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
          alert('Order Received...Proceed to Payment');
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div>
         <div>
        <div class = 'formcontainer'>
	<form ref={form} onSubmit={sendEmail}>
       <div class = 'row'> 
        <div class = 'col-75'>
      <label>Name</label>
      
  
      <input type="text" name="user_name" placeholder = 'Your Name ' required/>
      </div>
      </div>
      <div class = 'row'> 
        <div class = 'col-75'>
      <label>Email</label>
      
  
      <input type="text" name="email" placeholder = 'Email ' required/>
      </div>
      </div>
      
      <div class = 'row'> 
        <div class = 'col-75'>
      <label>Phone</label>
      
  
      <input type="text" name="message" placeholder = ' Phone ' required/>
      </div>
      </div>
      <div class = 'row'> 
        <div class = 'col-75'>
      <label>Address</label>
      
  
      <input type="text" name="message" placeholder = 'Address ' required/>
      </div>
      </div>
      
           
      <label> Summary</label>
      <br />
         
         {/* <Cartmessage /> */}
          
         <div >
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
    <div class = 'row'> 
        <div class = 'col-75'>
      <label>Paste Your cart Summary Below</label>
      
  
      <input type="text" name="message" placeholder = 'Your Cart ' required/>
      </div>
      </div>
      <br/>
      <input type="submit" value="Confirm Order" />
      <input onClick={() => setCont(false)} type="submit" value="Cancel" />
      
    </form>
</div>
    </div>
    </div>
  );
};

export default ContactUs
