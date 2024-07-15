
import './App.css';
import { useState } from'react';
import React, { Accordion, Button } from 'react-bootstrap';
import Body from './Components/Body';
import Header from './Components/Header';
import CartButton from './Components/CartButton';
import CartComponent from './Components/CartComponent';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
]

function App() { 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Header onShow={handleShow}/>
      {show &&<CartComponent onShow={handleShow} onClose={handleClose}/>}
      
      <CartComponent show={show}  onClose={handleClose}/>
      <Body productsArr={productsArr}/>
    </div>
  );
}

export default App;
