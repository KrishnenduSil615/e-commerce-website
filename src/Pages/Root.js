
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import { useState } from 'react';
import Header from '../Components/Header';
import CartProvider from '../Store/CartProvider';


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

function Root() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const outLetContext={
    productsArr: productsArr,
    show: show,
    onShow: handleShow,
    onClose: handleClose
  }
     
  return (
    <CartProvider>
       <Header onShow={handleShow}/> 
      <Outlet context={outLetContext}/>
      <Footer />
    </CartProvider>
  )
}

export default Root