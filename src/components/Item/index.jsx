import "./Item.css";
import React from "react";

const Item = ({info}) => {
    return(
        <div className="itemContainer">
            <a className="fotoItem" href="">
                <img src={info.image}  alt={info.name} />
            </a>
            <span className="precio">${info.price}</span>
            <p>{info.name}</p>
            <p>{info.description}</p>
        </div>
            

    )
}

export default Item;