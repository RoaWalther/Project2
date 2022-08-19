import React, { useContext, useState } from "react";
import '../styles/checkout.css';
import { AppContext } from "../context/AppContext";
import img from '../assets/icons/Img';

function Checkout({ setToggle }){
	const { state, deleteToCart } = useContext(AppContext);
	const today = new Date(Date.now()).toLocaleString().split(', ')[0];

	const sumaTotal= ()=>{
		let suma = 0;
		state.cart.map(product => {
			suma += product.price;
		}); 
		return suma;
	}
    return (
		<div className="Checkout">
			<div className="Checkout-container">
				<div className="title-checkout" onClick={() => setToggle(false)} >
					<img src={img.flechita} alt="arrow" />
					<h1 className="title-checkout">My order</h1>
				</div>
				<div className="orderItem-checkout">
					{state.cart.map((product,index) => (
						<div className="border-checkout">
							<figure className="border-checkout-img">
								<img src={product.images[0]} alt={product.title}/>
							</figure>
							<p>{product.title}</p>
							<p>${product.price}</p>
							{/* <img 
							onClick={()=> deleteToCart(product,index)} 
							src={img.deleted} alt="close" className="cursor"/> */}
						</div>
					))}
				</div>
				<div className="Checkout-content">
					<div className="order-checkout">
						<p>
							<span>{today}</span>
							<span>{state.cart.length} articles</span>
						</p>
						<p>${(state.cart.length > 0)?sumaTotal() : 0}</p>
					</div>
				</div>
				
			</div>
		</div>
	);
}

export {Checkout};