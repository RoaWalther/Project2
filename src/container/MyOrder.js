import React, { useContext, useState } from "react";
import {OrderItem} from '../components/OrderItem';
import { AppContext } from "../context/AppContext";
import img from '../assets/icons/Img';
import {Checkout} from '../pages/Checkout';
import '../styles/myOrder.css';


function MyOrder({toggleOrder}){
	const [ toggle, setToggle ] = useState(false);
	const {state} = useContext(AppContext);

	const sumaTotal= ()=>{
		let suma = 0;
		state.cart.map(product => {
			suma += product.price;
		}); 
		return suma;
	}
	const handleToggleOrder=()=>{
		toggleOrder(false);
	}

    return (
		<aside className="MyOrder">
			<div className="title-container"
			onClick={handleToggleOrder}
			>
				<img src={img.flechita} alt="arrow" />
				<p className="title">Return</p>
			</div>
			<div className="my-order-content">
				<div className= "scroll-container">
				{state.cart.map((product, index) =>
					<OrderItem product={product} key={`-${index}--${product.id}`} index={index}/>
				)}
				</div>
				<div className="order-myorder">
					<p>
						<span>Total</span>
					</p>
					<p>${sumaTotal()}</p>
				</div>
				<button className="primary-button" onClick={() => setToggle(true)}>
					Checkout
				</button>
			</div>
			{toggle && <Checkout setToggle={setToggle}/>}
		</aside>
	);
}

export {MyOrder};