import React from "react";
import './footer.css';
import FaceBook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Whatsapp from "@material-ui/icons/WhatsApp";
import YouTube from "@material-ui/icons/YouTube";

export default function Footer(){
 
    return(
        <div className='footer'>
            <div className="footer__col__1">
                <p className="footer__parag">© 2019 http://www.preinfinitytechnologies.co.za. All Rights Reserved.</p>
            </div>
            <div className="footer__col__1">
                <p className="footer__parag">
                Follow us:
                <a href="http://www.facebook.com/Preinfinitytech"> <FaceBook className="footer__icon"/> </a>
                <a href="https://twitter.com/home"> <Twitter className="footer__icon"/> </a>
                <a href="https://wa.me/message/ZBZIOJEAYOXNO1"> <Whatsapp className="footer__icon"/> </a>
                <a href="https://wa.me/message/ZBZIOJEAYOXNO1"> <YouTube className="footer__icon"/> </a>
                </p>
            </div>
        </div>
    )
} 