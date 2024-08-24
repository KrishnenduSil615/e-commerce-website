import React from 'react'
import { useOutletContext } from 'react-router-dom'
import CartComponent from '../Components/CartComponent'
import Body from '../Components/Body'

function Store() {
  const outLetCtx = useOutletContext()
  console.log(outLetCtx)
  return (
    <div>
      <CartComponent show={outLetCtx.show}  onClose={outLetCtx.onClose}/>
      <Body productsArr={outLetCtx.productsArr}  onShow={outLetCtx.onShow}/>
    </div>
  )
}

export default Store
      
         