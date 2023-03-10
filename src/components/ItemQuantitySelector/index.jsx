import "./ItemQuantitySelector.css";
import React, { useState, useEffect } from "react";

const ItemQuantitySelector = ({ inicial, stock, onAdd }) => {
    const [contar, setContar] = useState(inicial);

    const restar = () => {
        setContar(contar - 1);
    }

    const sumar = () => {
        setContar(contar + 1);
    }

    useEffect(() => { setContar(parseInt(inicial));
    },[inicial])

    return (
        <div className="counter">
            <div>
                <button className="colorButton" disabled={contar <= 0} onClick={restar}>-</button>
                <span className="colorNum">{contar}</span>
                <button className="colorButton" disabled={contar >= stock} onClick={sumar}>+</button>
            </div>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(contar)} className="colorButton">Agregar al Carrito</button>
            </div>
        </div>
    )

}

export default ItemQuantitySelector;