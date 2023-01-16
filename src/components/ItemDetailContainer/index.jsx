import React from "react";
import { getFirestore, doc, getDoc} from "firebase/firestore";
import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [data, setData] = useState([]);

    const {detalleid} = useParams()

    useEffect(() => {
        const db = getFirestore();
        const productsRef = doc(db, `products`, `6uimXUvz7KFx4tj8oq5e`);
        getDoc(productsRef)
            .then(res => setData({id: res.id, ...res.data()})) 
    }, [])

    return(
            <ItemDetail  data={data}/>
        )
    }

    export default ItemDetailContainer;