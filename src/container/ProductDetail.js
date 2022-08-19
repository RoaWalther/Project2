import React from "react";
import {ProductInfo} from '../components/ProductInfo';
import '../styles/productDetail.css';
import img from '../assets/icons/Img'

function ProductDetail({product, setToggleProduct, handleCart}){
    return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close" onClick={setToggleProduct(false)}>
				<img src={img.icon_close} alt="close" />
			</div>
			<ProductInfo product={product} 
			setToggleProduct={setToggleProduct} 
			handleCart={handleCart}
			/>
		</aside>
	);
}

export {ProductDetail};