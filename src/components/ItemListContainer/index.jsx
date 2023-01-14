import "./ItemListContainer.css";
import React from "react";
import Title from "../Title";
import ItemQuantitySelector from "../ItemQuantitySelector";
import ItemList from "../ItemList";
import { useEffect, useState } from "react";



const products = [
    {
        id: 1,
        name: "Camiseta Titular River",
        description: "Camiseta Titular Club Atletico River Plate",
        price: 22650,
        category: "camisetas",
        stock: 10,
        image: "https://newsport.vteximg.com.br/arquivos/ids/14189699-1000-1000/GB7592-A.jpg?v=637962774204900000"

    },
    {
        id: 2,
        name: "Camiseta Suplente River",
        description: "Camiseta Suplente Club Atletico River Plate",
        price: 22650,
        category: "camisetas",
        stock: 10,
        image: "https://todosobrecamisetas.com/wp-content/uploads/camiseta-suplente-adidas-river-plate-2022-23-3.jpg"
    },
    {
        id: 3,
        name: "Shorts Titular River",
        description: "Short negro con bandas blancas, titular",
        price: 11380,
        category: "shorts",
        stock: 10,
        image: "https://ferreira.vteximg.com.br/arquivos/ids/306133-1000-1000/ad_dx5929.jpg?v=637010444724970000"
    },
    {
        id: 4,
        name: "Short Suplente River",
        description: "Short rojo con bandas blancas, suplente",
        price: 11380,
        category: "shorts",
        stock: 10,
        image: "https://newsport.vteximg.com.br/arquivos/ids/14313283-1000-1000/HE6303-A.jpg?v=637986033895970000"

    }
]

const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    useEffect( () => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(products);
            }, 1500);
        });
        getData.then(res => setData(res));
    },[])




    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} de productos`);
    }
    
    
    return (
        <div className="containerItemList">
            <Title greeting={texto} />
            <ItemList data={data} />
            <ItemQuantitySelector inicial={0} stock={10} onAdd={onAdd}/>
        </div>

    )
}

export default ItemListContainer;