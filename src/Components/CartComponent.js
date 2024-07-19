import React, { useContext } from 'react'
import { Container, Offcanvas, Row, Col, Button } from 'react-bootstrap';
import CartCntext from '../Store/CartContext';
// const cartElements = [ cartCtx.cartItems]
function CartComponent(props) {

  const cartCtx = useContext(CartCntext)

  return (
    <>
      <Offcanvas scroll="true" show={props.show} placement="end" onHide={props.onClose} style={{ width: "40rem", top: "4rem" }}>
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row className='text-uppercase border-bottom' style={{ fontSize: "25px", fontWeight: "bold" }}>
              <Col xs={6}>Items</Col>
              <Col xs={3}>price</Col>
              <Col xs={3}>Quantity</Col>
            </Row>
            {cartCtx.cartItems.map((item) => {
              console.log(item)
              return (
                <Container>
                  <Row className='border-bottom' key={item.id}>
                    <Col xs={6} className='d-flex'>
                      <img className='rounded-5' src={item.imageUrl} alt={item.title} style={{ width: "8rem", height: "8rem", padding: "10px" }} />
                      <h5 className='my-auto p-2 t'>{item.title}</h5>
                    </Col>
                    <Col xs={3} className='my-auto p-4'>
                      <p>{item.price} </p>
                    </Col>
                    <Col xs={3} className='my-auto d-flex'>
                      <input className='me-2' style={{ width: "50%", padding: "3px",textAlign:"center" }} value={item.quantity}></input>
                      <Button className='rounded-2' variant="danger" onClick={cartCtx.removeItem.bind(null, item)}>Remove</Button>
                    </Col>
                  </Row>
                </Container>
              )
            }
          )}
            <p style={{justifyContent:"end", display:"flex", fontSize:"40px"}}>Total Amount:{cartCtx.totalAmount}</p>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartComponent;
             
