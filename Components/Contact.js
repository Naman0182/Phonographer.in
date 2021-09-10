import React from 'react'
import './Contact.css'
function Contact() {
    return (
        
           <>
        <div className='contact-container'>
        <div className='get_in_touch'>
            <img src='images/ContactPageFinal.jpg'/>
            <h1>GET IN TOUCH !</h1>
        </div>
          <div class="contact-form">
            <div class='form-heading'>
                <h1>CONTACT</h1>
            </div>
            <form>
            
            <span class='label-text'>Name *</span>
            <input type='text' class='fname'/>
   
            <span class='label-text'>E - mail Address *</span>
            <input type='email' className='email_text'/>
  
            <span class='label-text'>Messege*</span>
            <textarea/>
            
            <input type='submit' />
            </form>
          </div> 
        </div> 
        </> 
        
    )
}

export default Contact
