import React from "react";
import {ProductList} from '../container/ProductList';
import {Header} from '../components/Header'

function Home(){
    return(
        <React.Fragment>
            <Header></Header>
            <ProductList />
        </React.Fragment>
    );
}

export {Home};