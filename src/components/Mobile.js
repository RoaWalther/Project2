import React from "react";
import '../styles/mobile.css'

function Mobile(){
    return(
        <div class="mobile-menu">
             <p>CATEGORIES</p>
            <ol>
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
                    <a href="/">Other</a>
                </li>
            </ol>

            <ul>
                <li>
                    <a href="/account">My account</a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="/account" class="email">roawalter95@gmail.com</a>
                </li>
                <li>
                    <a href="/signup" class="sign-out">Sign out</a>
                </li>
            </ul>
        </div>
    );
}

export {Mobile};