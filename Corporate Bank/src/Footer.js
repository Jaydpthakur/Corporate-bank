import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
   <div class="footer">
      <div class="heading">
        <h2>CORPORATE Bank</h2>
      </div>
      <div class="content">
        <div class="services">
          <h4>Services</h4>
          <p><a href="#">Online Trading</a></p>
          <p><a href="#">Online Shopping</a></p>
          <p><a href="#">GST Payment</a></p>
          <p><a href="#">IMPS Fund Transfer</a></p>
        </div>
        <div class="social-media">
          <h4>Social</h4>
          <p>
            <a href="#"><i class="fab fa-linkedin"></i> Linkedin</a >
          </p>
          <p>
            <a href="#"><i class="fab fa-twitter"></i> Twitter</a>
          </p>
          <p>
            <a href="#"><i class="fab fa-github"></i> Github</a>
          </p>
          <p>
            <a href="#"><i class="fab fa-facebook"></i> Facebook</a>
          </p>
          <p>
            <a href="#"><i class="fab fa-instagram"></i> Instagram</a>
          </p>
        </div>
        <div class="links">
          <h4>Quick links</h4>
          <p><Link to="home/">Home</Link></p>
          <p><Link to="about/">About</Link></p>
          <p><Link to="vlog/">Blog</Link></p>
          <p><Link to="contact/">Contact</Link></p>
        </div>
        <div class="details">
          <h4 class="address">Address</h4>
          <p>
          M P Nagar, zone 1 <br></br>
          Bhopal
          </p>
          <h4 class="mobile">Mobile</h4>
          <p><a href="#">+91-7999326675</a></p>
          <h4 class="mail">Email</h4>
          <p><a href="#">Corporatebank04@gmail.com</a></p>
        </div>
      </div>
      <footer>
        <hr></hr>
      
        © 2023 Corporate bank.
      </footer>
    </div>
   
   
   </>
  )
}

export default Footer
