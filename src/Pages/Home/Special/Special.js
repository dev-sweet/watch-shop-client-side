import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import clock from '../../../images/clock.png';
import './Special.css';
const Special = () => {
  return (
    <div className="special">
      <Container>
        <Row md={2} sm={1} xs={1}>
          <Col>
            <div className="special-container">
              <div>
                <h2 className="special-title">Our Special Product</h2>
                <div className="text-light">
                  <h3>
                    Constantin <br />
                    Chronograph Watch
                  </h3>
                  <p>
                    Suspendisse enim turpis, dictum sed, iaculis a, condimentum
                    nec, nisi.Vestibulum purus Vivamus aliquet elit ac
                    nisl.Suspendisse non nisl sit amet velit hendreritrutrum.
                    Sed augue ipsum, egestas nec, vestibulum et, malesuada
                    adipiscing, dui. Curabitur ullamcorperultricies nisi. Sed
                    aliquam ultrices mauris. Nullam cursus lacinia erat.
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <div className="special-feature">
                    <div className="feature">
                      <span>
                        <i className="fab fa-elementor"></i>
                      </span>
                      Warranty: 2 Year International
                    </div>
                    <div className="feature">
                      <span>
                        {' '}
                        <i className="fas fa-gift"></i>
                      </span>
                      Free Gift Boxes
                    </div>
                  </div>
                </div>
                <button className="details-btn">View Details</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <img className="special-watch mt-5 mt-md-0" src={clock} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Special;
