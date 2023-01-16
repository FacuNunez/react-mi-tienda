import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../ItemCart";

const Cart = () => {
    const {cart, precioTotal} = useCartContext();
    if (cart.lenght === 0){
        return(
            <>
                <p>Carrito Vacio</p>
                <Link to="/">Volver a la Tienda</Link>
            </>
        )
    }

    return (
        <>
        {
             cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <p>
            total: {precioTotal}
        </p>
           
        </>
    )
}

export default Cart;