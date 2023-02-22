import React, { useEffect } from "react";
import { Loading } from "./Loading";
import { getProductData } from "./api";

function Cart(){
    const productsIdsInCart = JSON.parse(localStorage.getItem('productsIdsInCart'));
    const [productsArray, setProductsArray] = useState([]);

    useEffect(function(){
        setProductsArray(Objects.keys(productsIdsInCart).map(id => {
            getProductData(id).then(res => res.data);
        }))
    }, []);
    console.log('productsArray',productsArray);
    return (
        <Loading/>
    )
}

export default Cart;