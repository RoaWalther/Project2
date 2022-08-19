import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import '../styles/orderItem.css';
import img from '../assets/icons/Img';

function OrderItem({product, index}){
	const {deleteToCart} = useContext(AppContext);
	
    return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title}/>
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img 
			onClick={()=> deleteToCart(product,index)} 
			src={img.deleted} alt="close" className="cursor"/>
			
		</div>
		
	);
}

export {OrderItem};