import React from 'react';
import { Offcanvas, Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css';
const Header = () => {
  const { logOut, user } = useAuth();
  return (
    <div>
      <Navbar bg="light" expand={false}>
        <Container>
          <Navbar.Brand>
            <img className="nav-logo" src={logo} alt="" />
          </Navbar.Brand>

          <Nav className="d-none d-lg-flex flex-row me-auto pe-3">
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
            <NavLink className="navbar-link" to="/">
              Products
            </NavLink>
          </Nav>

          <Nav className="d-none d-lg-flex flex-row align-items-center ms-auto pe-3">
            {user.email && (
              <NavLink className="navbar-link" to="/">
                <i className="fas fa-chart-line me-2"></i>
                Dashboard
              </NavLink>
            )}
            {user.email ? (
              <button onClick={logOut} className="btn btn-primary mx-2">
                <i className="fas fa-sign-in-alt me-2"></i> Logout
              </button>
            ) : (
              <NavLink to="/login" className="btn btn-primary mx-2">
                <i className="fas fa-sign-in-alt me-2"></i>Login
              </NavLink>
            )}
          </Nav>

          <Navbar.Toggle
            className="d-lg-none"
            aria-controls="offcanvasNavbar"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <img className="offcanvas-logo" src={logo} alt="" />
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="navbar-link" to="/">
                  Home
                </NavLink>
                <NavLink className="navbar-link" to="/">
                  Products
                </NavLink>
                {user.email && (
                  <NavLink className="navbar-link" to="/">
                    Dashboard
                  </NavLink>
                )}
                {user.email ? (
                  <button
                    onClick={logOut}
                    className="btn btn-primary mx-2 d-inline mt-3"
                  >
                    Logout
                  </button>
                ) : (
                  <button className="btn btn-primary mx-2 d-inline mt-3">
                    Login
                  </button>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
