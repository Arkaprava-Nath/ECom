import React from 'react'
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Watches</span>
      
        </div>
    
        <div className="item">
          <h1>About</h1>
          <span>
          Welcome to Fashion Grand Bazaar!<br></br>
          At Grand Bazaar, we believe that style is not just about what you wear but also the statement you make with every tick of the clock. We are your one-stop destination for the trendiest dresses and chic watches that complement your unique personality and elevate your fashion game.

          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span className="contact">
     

📞 Customer Helpline 📞
<br></br>
If you prefer to speak to us directly, our customer helpline is available during business hours. Call us at +1 800 123-4567, and our knowledgeable team will be delighted to assist you with any inquiries or order-related matters.
          <br></br>
 📧 Email Us 📧
<br></br>
Prefer to send an email? You can reach us at support@fashiontimepiecesandbeyond.com. Drop us a message, and we'll respond within 24 hours. Feel free to share any suggestions, concerns, or testimonials  we love hearing from you!          
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Grand Bazaar</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
       <img src="/images/payment.png" alt="" />


        </div>
      </div>
    </div>
  )
}

export default Footer