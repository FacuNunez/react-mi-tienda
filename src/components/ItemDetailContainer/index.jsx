import React from "react";
import { getFirestore, doc, getDoc} from "firebase/firestore";
import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailContainer.css"


const ItemDetailContainer = () => {
    const [data, setData] = useState([]);

    const {detalleid} = useParams()

    useEffect(() => {
        const db = getFirestore();
        const productsRef = doc(db, `products`, detalleid);
        getDoc(productsRef)
            .then((res) => setData({id: res.id, ...res.data()})) 
    }, [detalleid])

    return(
            <ItemDetail  data={data}/>
        )
    }

    export default ItemDetailContainer;