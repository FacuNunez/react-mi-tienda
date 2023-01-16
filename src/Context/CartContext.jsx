import React from "react";
import { useState, useContext } from "react";


const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
    const[cart, setCart] = useState([]);
  
    const add = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({...item, quantity: newQuantity});
        setCart(newCart);


    }

    const precioTotal = () => {return cart.reduce((prev,act ) => prev + act.quantity * act.price, 0) }
    
    const totalProducts = () => cart.reduce((acumulador, productoActual)=> acumulador + productoActual.quantity, 0);

    const clear = () => setCart([]);

    const isIn = (id) => cart.find(product => product.id === id) ? true : false;

    const remove = (id) => setCart(cart.filter(product => product.id !== id));    
    
  
    
    
    return(
        <CartContext.Provider value={{
            clear,
            isIn,
            remove,
            add,
            precioTotal,
            totalProducts,
            cart,
        }}>
        {children}
        </CartContext.Provider>
    )

}
export default CartProvider;