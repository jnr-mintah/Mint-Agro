import React from "react";
import Agro from "../Navbar/Agro.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "./footer.css"; 

const Footer = () => {
  return (
<>
<div className="foot">
      <div className="inside">
        <div className="footer-logo">
          {/* Add your logo here */}
          <img src={Agro} alt="Footer Logo" />
          <p>
            At MINT-AGRO, we are dedicated to fostering sustainable farming
            practices and delivering the highest quality produce. Our commitment
            to innovation and community drives us to continually improve and
            embrace new agricultural techniques. Join us on our journey towards
            a healthier, greener future, and stay connected with us through our
            newsletter and social media channels.
          </p>
        </div>
        <hr />
        <div className="menu">
          {/* Add your menu items here */}
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="social-media">
          {/* Add your social media links with icons here */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>

    <div className="copy">
    <p>© 2024 Mint-Agro. All rights reserved.</p>
    </div>
</>
    
  );
};

export default Footer;
