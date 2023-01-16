import React from "react";
import { useCartContext } from "../../Context/CartContext";
import "./ItemCart.css";

const ItemCart =({ product }) => {
    const { remove } = useCartContext();
    return (
        <div className="itemCart">
            <img src={product.image} alt={product.name}/>
            <div className="infoProduct">
                <p>Nombre: {product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio unidad: {product.price}</p>
                <p>Subtotal: ${product.quantity*product.price} </p>
                <button className="botonRemove" onClick={() => remove(product.id)}>Eliminar Compra</button>
            </div>
        </div>

    )

}

export default ItemCart;