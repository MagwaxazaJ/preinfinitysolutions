import React from 'react';
import './services.css';
import Header from '../header/Header';
import TopBar from '../topbar/topBar';
import Footer from '../footer/footer';
import {ComputerOutlined, Wifi, Lock, Brush, Build, Update } from "@material-ui/icons";
import Settings from "@material-ui/icons/Update";
 
export default function Services(){
    return(
        <div className="choose-us-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Services</h2>
          <p>
          We offer a guaranteed service
          </p>
        </div>
        <div className="content">
          <div className="choose-us">

            <div className="choose">
                <ComputerOutlined className='col__icon'/>
                <h4>Sales</h4>
                <p>We sell New items Rufurbished and second hand All our product are working and they all have guarantee according to thier class</p>
            </div>

            <div className="choose">
                <Build className='col__icon' />
                <h4>Repairs</h4>
                <p>We do repairs in all IT products eg desktops, laptops, printers and accesories.we do both hardware and software</p>
            </div>

            <div className="choose">
                <Update className='col__icon'/>
                <h4>Upgrade</h4>
                <p>All upgrade are done up the request of client. we do software upgrade and hardware upgrade.Best perfomance is our many good</p>
            </div>

            <div className="choose">
                <Wifi className='col__icon'/>
                <h4>Wireless and Wired Networking</h4>
                <p>We do all close range and long range connection. office connection and home connection, now we have add mobile connection so our client and pattenrs can enjoy thier work while traviling</p>
            </div>

            <div className="choose">
                <Lock className='col__icon' />
                <h4>Security</h4>
                <p>Protect your system for hacker and scammers, We offer deffierent security according to the demands of our client and patters</p>
            </div>

            <div className="choose">
                <Brush className='col__icon'/>
                <h4>Web Design</h4>
                <p>We offer websiter develop for commercial and personal, host and domain. Branding the your business is important</p>
            </div>

          </div>
          {/* <div className="delivery">
            <img src={choose} alt="delivery" />
          </div> */}
        </div>
      </div>
    </div>
    )
}