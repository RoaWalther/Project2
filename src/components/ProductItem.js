import React, { useContext, useState } from "react";
import '../styles/productItem.css';
import img from '../assets/icons/Img';
import {AppContext} from '../context/AppContext';
import {ProductDetail} from '../container/ProductDetail';

function ProductItem({product}){
	const [toggleProduct, setToggleProduct] = useState(false);
	const {state,addToCart }= useContext(AppContext);

	const handleCart = (item)=>{
		addToCart(item)
	}
	const addAndAdded = (item) => {
		if(state.cart.includes(item)) {
			return img.bt_add;
		} else {
			return img.bt_added;
		}
	}

    return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} 
			onClick={() => setToggleProduct(!toggleProduct)}
			/>
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={()=> handleCart(product)}>
					<img src={addAndAdded(product)} alt="" />
				</figure>
			</div>
			{toggleProduct && <ProductDetail
			product={product} 
			setToggleProduct={setToggleProduct} 
			handleCart={handleCart}/>}
		</div>
	);
}

export {ProductItem};