import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app1 from '../../../images/app1.png';
import app2 from '../../../images/app2.png';
import payment from '../../../images/payment.png';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <Container>
          <Row className="gx-0 gy-sm-3 sy-sx-3" md={4} sm={1} xs={1}>
            <Col>
              <h5>Extras</h5>
              <div className="footer-links">
                <Link to="/">Brands</Link>
                <Link to="/">Gift Certificates</Link>
                <Link to="/">Affiliate</Link>
                <Link to="/">Specials</Link>
                <Link to="/">Site Map</Link>
              </div>
            </Col>
            <Col>
              <h5>Information</h5>
              <div className="footer-links">
                <Link to="/">About Us</Link>
                <Link to="/">Delivery Information</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Terms & Contditions</Link>
                <Link to="/">Contact US</Link>
              </div>
            </Col>
            <Col>
              <h5>My Account</h5>
              <div className="footer-links">
                <Link to="/">My Account</Link>
                <Link to="/">Order History</Link>
                <Link to="/">Wish List</Link>
                <Link to="/">Newsletter</Link>
                <Link to="/">Returns</Link>
              </div>
            </Col>
            <Col>
              <h5>Contact Us</h5>
              <div className="footer-contacts">
                <p>
                  <i className="fas fa-map-marker-alt"></i> 42 Dream House,
                  Dreammy street, 7131 Dreamville, USA
                </p>
                <p>
                  <i className="far fa-envelope"></i> company@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone-alt"></i> 456-456-4512
                </p>
                <p>
                  <i className="fas fa-paper-plane"></i> Dream City, USA
                </p>
              </div>
            </Col>
          </Row>

          <div className="footer-apps">
            <Row md={2} sm={1} sx={1}>
              <Col>
                <div className="apps">
                  <h5 className="me-4 d-none text-light d-lg-block">
                    DOWNLOAD OUR APP
                  </h5>
                  <img src={app1} alt="" />
                  <img className="ms-1" src={app2} alt="" />
                </div>
              </Col>
              <Col className="text-center">
                <img src={payment} alt="" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="footer-bottom">
        <span>Developed By Sweet &copy; 2021</span>
      </div>
    </div>
  );
};

export default Footer;
