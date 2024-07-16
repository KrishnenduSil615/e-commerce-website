import React, { useState } from 'react'
import CartCntext from './CartContext'
function CartProvider(props) {

    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);


    const addItemToCartHandler = (item) => {
        const updateTotalAmount = +totalAmount + item.price;

        const existingCartItemIndex = items.findIndex(i => i.id === item.id);
        const existingCartItem = items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + item.quantity
            };
            updatedItems = [...items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = items.concat(item);
        }

        setItems(updatedItems);
        setTotalAmount(updateTotalAmount);
    };

    const removeFromCartHandel = (item) => {
        const updateTotalAmount = +totalAmount - item.price;
        const existingCartItemIndex = items.findIndex(prevItem => prevItem.id === item.id);
        const existingCartItem = items[existingCartItemIndex];


        if (existingCartItem.quantity === 1) {
            setItems((prevSetItems) => {
                return prevSetItems.filter((prevItem) => prevItem.id !== item.id)
            })

        } else {
            const updatedItems = [...items];
            updatedItems[existingCartItemIndex] = { ...existingCartItem, quantity: existingCartItem.quantity - 1 }
            setItems(updatedItems)
        }

        setTotalAmount(updateTotalAmount)
    };

    const cartContext = {
        cartItems: items,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeFromCartHandel,
    }


    return (
        <CartCntext.Provider value={cartContext}>
            {props.children}
        </CartCntext.Provider>
    )
}

export default CartProvider;






