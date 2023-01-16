import "./ItemListContainer.css";
import React from "react";
import Title from "../Title";
import{ getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import ItemList from "../ItemList";
import { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";



const ItemListContainer = ({ texto }) => {
    
    const [data, setData] = useState([]);
    
    const {categoriaid} = useParams()
    
    useEffect( () => {
        const db = getFirestore()
        const collectionRef= collection(db, `products`); 
        if (categoriaid) {
            const filter = query(collectionRef, where("category", "===", "categoriaid" ))
        getDocs(filter)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        }else{
            getDocs(collectionRef)
            .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        };
    },[categoriaid])




    
    
    
    return (
        <div className="containerItemList">
            <Title greeting={texto} />
            <ItemList data={data} />
            
        </div>

    )
}

export default ItemListContainer;