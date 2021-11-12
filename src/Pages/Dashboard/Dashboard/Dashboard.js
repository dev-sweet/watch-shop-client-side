import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import logo from '../../../images/logo.png';
import './Dashboard.css';
import MyOrders from '../MyOrders/MyOrders';
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Row>
        <Col className="drawar" md={3} sm={12} xs={12}>
          <div className="dashboard-menu-container">
            <div className="text-center">
              <img style={{ width: '200px' }} src={logo} alt="" />
            </div>
            <div className="dashboard-nav">
              <NavLink to={`${url}`}>
                <i className="fas fa-list"></i> My Orders
              </NavLink>
              <NavLink to={`${url}/payment`}>
                <i className="fas fa-money-check-alt"></i>Payment
              </NavLink>
              <NavLink to={`${url}/review`}>
                <i className="fas fa-comment-alt"></i> Review
              </NavLink>
            </div>
          </div>
        </Col>
        <Col md={9} sm={12} xs={12}>
          <Switch>
            <Route exact path={`${path}`}>
              <MyOrders />
            </Route>
            <Route exact path={`${path}/payment`}>
              <Payment />
            </Route>

            <Route path={`${path}/review`}>
              <Review />
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
