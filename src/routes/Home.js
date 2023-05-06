import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import {BsFacebook, BsTwitter, BsInstagram, BsYoutube} from "react-icons/bs";



function Home() {
    return (
        <div className="background">
        <nav>
        <h1>MercyDiva</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="shop">Shop</NavLink>
            <NavLink to="contact">Contact</NavLink>
        </nav>
        <Outlet />
        <footer>
      <div className="footer-container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>We are an e-commerce store that specializes in selling high-quality beauty products at affordable prices. Our mission is to make beauty accessible to everyone.</p>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>123 Main St<br/>New York, NY 10001<br/>Phone: (555) 555-5555<br/>Email: info@mercydiva.com</p>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <ul className="social-icons">
              <li><a href="#"><BsFacebook/></a></li>
              <li><a href="#"><BsTwitter/></a></li>
              <li><a href="#"><BsInstagram/></a></li>
              <li><a href="#"><BsYoutube/></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <p>&copy; 2023 MercyDiva. All rights reserved.</p>
        </div>
      </div>
    </footer>
        </div>

        
    );
    }

export default Home;
            