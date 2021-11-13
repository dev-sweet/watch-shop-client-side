import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import logo from '../../../images/logo.png';
import './Dashboard.css';
import MyOrders from '../MyOrders/MyOrders';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import useAuth from '../../../hooks/useAuth';
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { isAdmin } = useAuth();
  return (
    <div>
      <Row>
        <Col className="drawar" lg={3} md={4} sm={12} xs={12}>
          <div className="dashboard-menu-container">
            <div className="text-center">
              <img className="dashboard-logo" src={logo} alt="" />
            </div>
            <div className="dashboard-nav">
              {isAdmin ? (
                <>
                  <NavLink to={`${url}/manageOrders`}>
                    <i class="fas fa-sliders-h"></i> Manage All Orders
                  </NavLink>
                  <NavLink to={`${url}/addProduct`}>
                    <i class="fas fa-plus-square"></i> Add A Product
                  </NavLink>
                  <NavLink to={`${url}/makeAdmin`}>
                    <i class="fas fa-user-plus"></i> Make Admin
                  </NavLink>
                  <NavLink to={`${url}/manageProducts`}>
                    <i class="fas fa-cog"></i> Manage Products
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink className="" to={`${url}`}>
                    <i className="fas fa-list"></i> My Orders
                  </NavLink>
                  <NavLink to={`${url}/payment`}>
                    <i className="fas fa-money-check-alt"></i>Payment
                  </NavLink>
                  <NavLink to={`${url}/review`}>
                    <i className="fas fa-comment-alt"></i> Review
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </Col>
        <Col lg={9} md={8} sm={12} xs={12}>
          <Switch>
            {isAdmin ? (
              <AdminRoute exact path={`${path}`}>
                <ManageOrders />
              </AdminRoute>
            ) : (
              <Route exact path={`${path}`}>
                <MyOrders />
              </Route>
            )}
            <Route exact path={`${path}/payment`}>
              <Payment />
            </Route>

            <Route path={`${path}/review`}>
              <Review />
            </Route>
            <AdminRoute path={`${path}/manageOrders`}>
              <ManageOrders />
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct />
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
              <ManageProducts />
            </AdminRoute>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
