import React, { useContext, useState } from "react";
import '../styles/header.css';
import {Menu} from './Menu';
import {AppContext} from '../context/AppContext';
import img from '../assets/icons/Img';
import {MyOrder} from '../container/MyOrder';
import { Mobile } from "./Mobile";


function Header(){
	const [toggleOrder, setToggleOrder] = useState(false);
	const [toggle,setToggle]= useState(false);
	const [toggleMobile,setToggleMobile]= useState(false);
	const {state} = useContext(AppContext);

	const mobileMenu= ()=>{
		setToggleMobile(!toggleMobile);
	}

	const handleToggle = ()=>{
		setToggle(!toggle);
	}
    return(
        <nav className="body">
			<img src={img.menu} alt="menu" className="menu" onClick={mobileMenu} />
			<div className="navbar-left">
				<img src={img.logo} alt="logo" className="logo-header" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li onClick={handleToggle} className="navbar-email">
						roawalter95@gmail.com</li>
					<li 
					onClick={()=> setToggleOrder(!toggleOrder)} 
					className="navbar-shopping-cart">
						<img src={img.shopping} alt="shopping cart" />
						{state.cart.length > 0 ? <div> ${state.cart.length} </div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu/>}
			{toggleOrder && <MyOrder toggleOrder={setToggleOrder}/>}
			{toggleMobile && <Mobile/>}
		</nav>
    );
}

export {Header};