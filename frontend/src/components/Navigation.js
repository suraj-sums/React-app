import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar color="light" light expand="md" className="sticky main-navbar">
      <div className="container">
        <Link to="/" className="navbar-brand font-bold">
          <img src={logo} height="40" width="40" alt="logo" /> {process.env.REACT_APP_NAME}
        </Link>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/how-to-download-facebook-videos" className="nav-link">
                How To
              </Link>
            </NavItem>
            <NavItem className="mr-10px">
              <Link to="/contact" className="nav-link">
                Support
              </Link>
            </NavItem>
            <NavItem>
              <a
                target="_blank"
                rel="noreferrer"
                href={process.env.REACT_APP_CHROME_EXT_URL}
                className="btn btn-primary rounded-pill font-bold download-ext"
              >
                Download Extension
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
