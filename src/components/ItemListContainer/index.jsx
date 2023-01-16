import "./ItemListContainer.css";
import React from "react";

import{ getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import ItemList from "../ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {
    
    const [data, setData] = useState([]);
    
    const {categoriaid} = useParams()
    
    useEffect( () => {
        const db = getFirestore()
        const collectionRef= collection(db, "products"); 
        if (categoriaid) {
            const filter = query(collectionRef, where("categoria", "==", categoriaid ))
                getDocs(filter)
                .then(res => setData(res.docs.map(products => ({id: products.id, ...products.data() }))))
        }else{
            getDocs(collectionRef)
            .then(res => setData(res.docs.map(products => ({id: products.id, ...products.data() }))))
        };
    },[categoriaid])




    
    
    
    return (
        <div className="containerItemList">
            <ItemList data={data} />
            
        </div>

    )
}

export default ItemListContainer;