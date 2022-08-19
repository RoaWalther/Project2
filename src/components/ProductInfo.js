import React from "react";
import '../styles/productInfo.css';
import img from '../assets/icons/Img';

function ProductInfo({product, setToggleProduct, handleCart}){

	const addToCartAndClose = () => {
		handleCart(product);
		setToggleProduct(false);
	}
    return (
		<>
			<img src={product.images[0]} alt={product.name} />
			<div className="ProductInfo">
				<p>${product.price}</p>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<button className="primary-button add-to-cart-button"
				onClick={addToCartAndClose}>
					<img src={img.bt_add} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export {ProductInfo};