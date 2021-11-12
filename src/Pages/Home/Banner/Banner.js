import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/slider3.jpg';
import slider2 from '../../../images/slider2.jpg';
import slider3 from '../../../images/slider1.jpg';
import './Banner.css';
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="item1 slider-item">
          <img
            className="d-block w-100"
            style={{ height: '100%' }}
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption className="slider-details">
            <div className="slider-text">
              <span>TIMELESSS AND ELEGANT</span>
              <h1 className="py-1 py-md-2">THE CLASSICS</h1>
              <p>
                Complete your everyday look with a classic leather strap watch
              </p>
              <button className="btn btn-outline-light btn-large px-5 mt-3">
                Explore
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item1 slider-item">
          <img
            className="d-block w-100"
            style={{ height: '100%' }}
            src={slider2}
            alt="First slide"
          />
          <Carousel.Caption className="slider-details">
            <div className="slider-text">
              <span>TIMELESSS AND ELEGANT</span>
              <h1 className="py-1 py-md-2">NEW ARRIVALS</h1>
              <p>
                Complete your everyday look with a classic leather strap watch
              </p>
              <button className="btn btn-outline-light btn-large px-5 mt-3">
                Explore
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item1 slider-item">
          <img
            className="d-block w-100"
            style={{ height: '100%' }}
            src={slider3}
            alt="First slide"
          />
          <Carousel.Caption className="slider-details">
            <div className="slider-text">
              <span>TIMELESSS AND ELEGANT</span>
              <h1 className="py-1 py-lg-2">BEST SELLER</h1>
              <p>
                Complete your everyday look with a classic leather strap watch
              </p>
              <button className="btn btn-outline-light btn-large px-5 mt-3">
                Explore
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
