import React from "react";
import ItemQuantitySelector from "../ItemQuantitySelector";
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({data}) => {
    
    
    const [goToCart, setGoToCart] = useState(false);


    const onAdd = (quantity) => {
        setGoToCart(true)
    }


    return (
        <div className="itemContainer">
            <a className="fotoItem" href="">
                <img src={data.image} alt={data.name} />
            </a>
            <span className="precio">${data.price}</span>
            <p>{data.name}</p>
            <p>{data.description}</p>
            { goToCart ? <Link to="/cart">Terminar Compra</Link> :<ItemQuantitySelector inicial={0} stock={10} onAdd={onAdd}/> }
        </div>
    );
}

export default ItemDetail;