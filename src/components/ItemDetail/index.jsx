import React from "react";

const ItemDetail = ({data}) => {
    return (
        <div className="itemContainer">
            <a className="fotoItem" href="">
                <img src={data.image} alt={data.name} />
            </a>
            <span className="precio">${data.price}</span>
            <p>{data.name}</p>
            <p>{data.description}</p>
        </div>
    );
}

export default ItemDetail;