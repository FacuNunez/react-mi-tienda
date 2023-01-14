import React from "react";
import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";

const product =
{
    id: 4,
        name: "Short Suplente River",
            description: "Short rojo con bandas blancas, suplente",
                price: 11380,
                    category: "shorts",
                        stock: 10,
                            image: "https://newsport.vteximg.com.br/arquivos/ids/14313283-1000-1000/HE6303-A.jpg?v=637986033895970000"

}



const ItemDetailContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(product);
            }, 1500);
        });
        getData.then(res => setData(res));
    }, [])

    return(
            <ItemDetail  data={data}/>
        )
    }

    export default ItemDetailContainer;