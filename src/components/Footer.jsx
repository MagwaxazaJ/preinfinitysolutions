import React from "react";
import { BsFacebook,  BsTwitter, BsYoutube, BsWhatsapp } from "react-icons/bs";
import TopBar from "./topbar/topBar";

function Footer() {

  return (
    <footer className="py-3 mx-3">
      <div className="brand-container">
        <div className="brand">
          <span>Pre Infinity Solutions</span>
          <span className="dot">.</span>
        </div>

        <ul className="social-links">
          {/* {socialLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))} */}
           <a href="http://www.facebook.com/Preinfinitytech"><li><BsFacebook /></li></a>
           <a href="https://twitter.com/home"><li><BsTwitter /></li></a>
           <a href="https://wa.me/message/ZBZIOJEAYOXNO1"><li><BsWhatsapp /></li></a>
           <a href="https://wa.me/message/ZBZIOJEAYOXNO1"><li><BsYoutube /></li></a>
        </ul>
      </div>
      <div className="links">
            <div className="link">
              <ul>
                <li>
                  <TopBar email="sales@preinfinitysolutions.co.za"/>
                </li>
                <li>
                  <a href="#">© 2019 http://www.preinfinitytechnologies.co.za. All Rights Reserved.</a> 
                </li>
              </ul>
            </div>
      </div>
    </footer>
  );
}

export default Footer;
