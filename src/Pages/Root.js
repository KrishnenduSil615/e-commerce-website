import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import CartProvider from '../Store/CartProvider';

const productsArr = [
  {
    id: '1',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    description: 'A vibrant collection of colors that will bring life to any project.'
  },
  {
    id: '2',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    description: 'A classic combination of black and white, perfect for a sophisticated look.'
  },
  {
    id: '3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    description: 'A striking mix of yellow and black, ideal for making bold statements.'
  },
  {
    id: '4',
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    description: 'A calming blue hue, perfect for creating serene and peaceful designs.'
  }
];


function Root() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const outLetContext = {
    show: show,
    onShow: handleShow,
    onClose: handleClose,
    productsArr: productsArr, // Pass productsArr through context
  };

  return (
    <CartProvider>
      <Header onShow={handleShow} />
      <Outlet context={outLetContext} />
      <Footer />
    </CartProvider>
  );
}

export default Root;
