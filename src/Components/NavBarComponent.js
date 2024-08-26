import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartComponent from './CartComponent';
import CartButton from './CartButton';
import { NavLink, useLocation } from 'react-router-dom';

function NavBarComponent(props) {
  const location = useLocation();

  // Check if the current path is either /store or /store/:productId
  const showCartButton = location.pathname.startsWith('/store');

  return (
    <div>
      <Navbar className="bg-body-tertiary fs-5 mb-1" data-bs-theme="dark">
        <Container>
          <Nav className="mx-auto text-md">
            <Nav.Link as={NavLink} to='/' className="mx-3" href="#home">HOME</Nav.Link>
            <Nav.Link as={NavLink} to='/store' className="mx-3" href="#store">STORE</Nav.Link>
            <Nav.Link as={NavLink} to='/about' className="mx-3" href="#about">ABOUT</Nav.Link>
            <Nav.Link as={NavLink} to='/contact' className="mx-3" href="#about">CONTACT</Nav.Link>
          </Nav>
          {showCartButton && <CartButton onShow={props.onShow} />}
          <CartComponent />
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarComponent;
