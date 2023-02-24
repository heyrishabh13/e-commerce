import React, { useEffect, useState } from "react";
import { Loading } from "./Loading";
import NotFound from "./NotFound";
import { getProductData } from "./api";
import CartProductList from "./CartProductList";

function Cart(){
    
    return (
        <div className='bg-gray-200 py-12'>
            <div className='w-3/5 m-auto  bg-white p-16 rounded-md'>
                <CartProductList />
            </div>
        </div>
    )
}

export default Cart;