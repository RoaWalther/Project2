import React from "react";
import {ProductItem} from '../components/ProductItem';
import '../styles/productList.css';
import { useGetProducts } from "../hooks/useGetProduct";

const API= 'https://api.escuelajs.co/api/v1/products';

function ProductList(){
	const product= useGetProducts(API);

    return (
		<section className="main-container">
			<div className="ProductList">
				{product.map(product => 
					<ProductItem product={product} key={product.id}/>
				)}
				
			</div>
		</section>
	);
}

export {ProductList};