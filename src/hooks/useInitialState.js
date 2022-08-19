import { useState } from "react";

const initialState = {
    cart: [],
    total: 0,
}

const useInitialState = ()=>{
    const [state, setState] = useState(initialState);

    const addToCart = (payload)=>{
        setState({
            ...state,
            cart: [...state.cart, payload],
            total: state.total + payload.price,
        })
    }

    const deleteToCart = (payload, indexValue)=>{
        setState({
            ...state,
            cart: state.cart.filter((item, index )=> item.id != payload && index != indexValue),
            total: state.total - payload.price
        })
    }
    return {
         state, addToCart, deleteToCart,}
}


export {useInitialState};