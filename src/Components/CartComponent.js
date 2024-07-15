import React from 'react'
import { Container, Offcanvas, Row, Col } from 'react-bootstrap';

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },

  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },

  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  }

]
function CartComponent(props) {
  return (
    <>

      <Offcanvas scroll="true" show={props.show} placement="end" onHide={props.onClose} style={{width:"40rem",top:"4rem"}}>
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row className='text-uppercase border-bottom' style={{ fontSize:"25px", fontWeight:"bold"}}>
              <Col xs={6}>Items</Col>
              <Col xs={3}>price</Col>
              <Col xs={3}>Quantity</Col>
            </Row>
        {cartElements.map((item)=>{
          return(
          <Row className='border-bottom' key={item.title}>
            <Col  xs={6} className='d-flex'><img className='rounded-5' src={item.imageUrl} alt={item.title} style={{width: "8rem", height: "8rem", padding:"10px"}}/><h5 className='my-auto p-2 t'>{item.title}</h5></Col>
            <Col xs={3} className='my-auto p-4'><p>{item.price} </p></Col>
            <Col xs={3} className='my-auto d-flex'><input type='number' className='me-2' style={{width:"50%", padding:"3px"}}></input><button className='rounded-2' style={{background:"red", color:"white"}}>Remove</button></Col>
            
          </Row>
          )
        })}
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartComponent;