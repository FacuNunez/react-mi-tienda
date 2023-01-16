import React from "react";
import ItemQuantitySelector from "../ItemQuantitySelector";
import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({data}) => {
    
    
    const [goToCart, setGoToCart] = useState(false);
    const {add} = useCartContext();


    const onAdd = (cantidad) => {
        setGoToCart(true)
        add(data,cantidad);
    }


    return (
        <div className="itemContainer">
            <a className="fotoItem" href="">
                <img src={data.image} alt={data.name} />
            </a>
            <span className="precio">${data.price}</span>
            <p>{data.name}</p>
            <p>{data.description}</p>
            <div className="botTerCom">
                { goToCart ? <Link to="/cart">Terminar Compra</Link> :<ItemQuantitySelector inicial={0} stock={10} onAdd={onAdd}/> }
            </div>
            
        </div>
    );
}

export default ItemDetail;