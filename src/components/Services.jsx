import React from "react";
import {Link} from 'react-router-dom';
import { HiArrowSmRight } from "react-icons/hi";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/photo1.png";
import service4 from "../assets/service4.png";

function Services() {
  return (
    <div className="services-container mx-3 py-3">
      <div className="container">
        <div className="service one">
          <h4>WELCOME</h4>
          <p>Dear customer welcome to PRE INFINITY SOLUTIONS. We provide infinity solution for all our customers it might be business/office/personal computer. we bring innovation systems and commucation. We proved a solution that keep all our customer happy and smiling.  We kindly request you to visit our store or contact us whenever you have problems with your computer /laptop /printer and others</p>
          <button>View Directions</button>
          <div className="image">
            {/* <img src={service1} alt="service" /> */}
          </div>
        </div>
        <div className="service two">
          <div className="content">
            <h4>Graphic Design</h4>
            {/* <p>
              Learn More <HiArrowSmRight />
            </p> */}
          </div>
          <div className="image">
            <img src={service2} alt="service" />
          </div>
        </div>
        <div className="service three">
          <div className="image">
            <img src={service3} alt="service" height={20}/>
          </div>
          <div className="content">
            <h4>Photography</h4>
            {/* <p>
              Learn More <HiArrowSmRight />
            </p> */}
          </div>
        </div>
        <div className="service four">
          <p>Monthly Deals</p>
          <h4>Want To Know more</h4>
          <Link to='/contact'>
          <p>
            Contact Us <HiArrowSmRight />
          </p>
          </Link>
          <div className="image">
            <img src={service4} alt="service" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
