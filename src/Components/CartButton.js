import React,{useContext} from 'react';
import CartCntext from '../Store/CartContext';

function CartButton(props) {
    const cartCtx = useContext(CartCntext)

    const numberOfCartItems = cartCtx.cartItems.reduce((curNumber, item) => {
        return curNumber + 1
      }, 0)

    return (
        <div>
            <a className="btn btn-outline-primary fs-8 position-relative" href="#" role="button" onClick={props.onShow}>Cart<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger">{numberOfCartItems}</span></a>
        </div>
    )
}

export default CartButton;



