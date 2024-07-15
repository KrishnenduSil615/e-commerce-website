import React from 'react';


function CartButton(props) {
    
    return (
        <div>
            <a class="btn btn-outline-primary fs-8 position-relative" href="#" role="button" onClick={props.onShow}>Cart<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">0</span></a>
        </div>
    )
}

export default CartButton;



