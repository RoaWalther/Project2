import React, { useEffect, useState } from "react";
import axios from 'axios';


function useGetProducts(API){
    
	const [product,setproduct] = useState([]);

	useEffect( async ()=>{
		const res = await axios(API);
		setproduct(res.data);
	},[]);
    return product;
}

export {useGetProducts};