import "./Item.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom"

import { CartContext } from "../../Context/CartContext";

const Item = ({info}) => {

    return(
        <div className="itemContainer">
            <Link className="fotoItem" to={`/detalle/${info.id}`}>
                <img src={info.image}  alt={info.name} />
            </Link>
            <span className="precio">${info.price}</span>
            <p>{info.name}</p>
            <p>{info.description}</p>
        </div>
            

    )
}

export default Item;