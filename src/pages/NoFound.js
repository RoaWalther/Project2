import React from "react";
import '../styles/noFound.css'


function NotFound(){
    return(
        <div> 
            <h1>404 Error Page </h1>
            <p className="zoom-area"> ¡Upps page no found. </p>
            <section className="error-container">
            <span>4</span>
            <span><span className="screen-reader-text">0</span></span>
            <span>4</span>
            </section>
            <div className="link-container">
            <a target="_blank" href="https://www.silocreativo.com/en/creative-examples-404-error-css/" 
            className="more-link">Visit the original article</a>
            </div>
        </div>
    );
}

export {NotFound};