import React from "react";
import '../styles/menu.css';

function Menu(){
    return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/" className="title">My orders</a>
				</li>
				<li>
					<a href="/">My account</a>
				</li>
				<li className="buton">
					<a href="/">Sign out</a>
				</li>
			</ul>
		</div>
	);
}

export {Menu};