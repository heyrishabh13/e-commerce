import React, { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { getProductData } from "./api";

function Cart(){
    const cartProductsIds = JSON.parse(localStorage.getItem('my-cart'));
    console.log('cartProductsIds in cart page', cartProductsIds);
    const [products, setProducts] = useState([]);

    useEffect(function(){
        const arr = Object.keys(cartProductsIds).map(id => {
            getProductData(id).then(res => {res.data; console.log('res.data', res.data)}).catch(err => console.log('Error while retrieving data from getProduct api in cart page',err))});
            
        console.log('array',arr);    
        setProducts(arr)
    }, []);
    console.log('products in cart page',products);
    return (
        // products.length ? products.map( ({title}) => {
        //     <div>{title}</div>
        
        // }) : 
        <Loading />
    )
}

export default Cart;