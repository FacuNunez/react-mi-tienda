import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../ItemCart";
import "./Cart.css";

const Cart = () => {
	const { cart, precioTotal } = useCartContext();

	const order = {
		buyer: {
			name: "Facund",
			email: "Fnunez1981@gmail.com",
			phone: "1130598946",
			address: "INgeniero Marconi 471",
		},
		items: cart.map((products) => ({
			id: products.id,
			title: products.name,
			price: products.price,
			quantity: products.quantity,
		})),
		total: precioTotal(),
	};

	const handleClick = () => {
		const db = getFirestore();
		const ordersRef = collection(db, "orders");
		addDoc(ordersRef, order).then(({ id }) => console.log(id));
	};

	if (cart.length === 0) {
		return (
			<div className="styleCart">
				<p >No hay elementos en el carrito</p>
				<Link className="boton" to="/">volver a la tienda</Link>
			</div>
		);
	}

	return (
		<div className="styleCart" >
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p className="total" >total: $ {precioTotal()}</p>
			<button className="boton" onClick={handleClick}>Emitir compra</button>
		</div>
	);
};

export default Cart;