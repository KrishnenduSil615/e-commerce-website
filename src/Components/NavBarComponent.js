import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartComponent from './CartComponent';
import CartButton from './CartButton';


function NavBarComponent(props) {
  return (
    <div>
         <Navbar className="bg-body-tertiary fs-5 mb-1" data-bs-theme="dark">
            <Container>
                <Nav className="mx-auto text-md ">
                    <Nav.Link className="mx-3" href="#home" >HOME</Nav.Link>
                    <Nav.Link className="mx-3" href="#store">STORE</Nav.Link>
                    <Nav.Link className="mx-3" href="#about">ABOUT</Nav.Link>
                </Nav>
                <CartButton onShow={props.onShow}/>
                <CartComponent/>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBarComponent