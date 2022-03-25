import React from "react";
import { BiSearch } from "react-icons/bi";
import home from "../assets/home.png";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// images
import SLIDE__1 from '../images/home de.jpg';
import SLIDE__2 from '../images/home de.png';
import SLIDE__3 from '../images/table1_800_faded.jpg';

function Home() {
  return (
    <div className="home">
      <div className="container mx-3 py-3">
        <div className="title-container">
          <h2>Browse Products for Your Needs</h2>
          {/* <div className="input-container">
            <input type="text" placeholder="I want to buy..." />
            <div className="icon">
              <BiSearch />
            </div>
          </div> */}
        </div>
        <div className="extra-image">
          {/* <Carousel>
          <Carousel.Item>
            <img
              className="rounded-3"
              src={SLIDE__1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="rounded-3"
              src={SLIDE__2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="rounded-3"
              src={SLIDE__3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel> */}
          <img src={SLIDE__1} alt="Home" />
        </div>
      </div>
    </div>
  );
}

export default Home;
