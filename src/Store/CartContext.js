import React from'react';
const CartCntext = React.createContext({
    cartItems: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    updateQuantity: (id) => {},
    getTotal: () => {},
    
})
export default CartCntext;