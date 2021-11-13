import React from 'react';
import { Offcanvas, Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css';
const Header = () => {
  const history = useHistory();
  const { logOut, user } = useAuth();
  return (
    <div className="pb-5 mb-5">
      <Navbar className="py-4" fixed="top" bg="light" expand={false}>
        <Container>
          <Navbar.Brand>
            <img className="nav-logo" src={logo} alt="" />
          </Navbar.Brand>

          <Nav className="d-none d-lg-flex flex-row align-items-center ms-auto pe-3">
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
            <NavLink className="navbar-link" to="/products">
              Explore
            </NavLink>

            {user.email && (
              <NavLink className="navbar-link" to="/">
                {user.displayName}
              </NavLink>
            )}

            {user.email && (
              <NavLink className="navbar-link" to="/dashboard">
                <i className="fas fa-chart-line me-2"></i>
                Dashboard
              </NavLink>
            )}
            {user.email ? (
              <button onClick={logOut} className="btn btn-primary mx-2">
                Logout
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
                <NavLink className="navbar-link" to="/products">
                  Explore
                </NavLink>
                {user.email && (
                  <NavLink className="navbar-link" to="/">
                    hello
                  </NavLink>
                )}
                {user.email && (
                  <NavLink className="navbar-link" to="/dashboard">
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
                  <button
                    onClick={() => history.push('/login')}
                    className="btn btn-primary mx-2 d-inline mt-3"
                  >
                    <i className="fas fa-sign-in-alt me-2"></i> Login
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
