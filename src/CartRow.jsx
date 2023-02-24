import React, { useState } from "react";
import { RxCrossCircled } from 'react-icons/rx'
import { Link } from "react-router-dom";
import ProductDescription from "./ProductDescription";

function CartRow({ product, quantity }) {
    console.log('product & quantity inside CartRow', product, quantity);
    const [newQuantity, setNewQuantiy] = useState(quantity);

    function handleQuantity(e) {
        setNewQuantiy(e.target.value);
    }


    return (
        <>
            <div className="table-cell"><RxCrossCircled /></div>
            <div className="table-cell"><img src={product.thumbnail} alt="proudct Image" /></div>
            <div className="table-cell"><Link to={`/product/` + product.id} element={<ProductDescription />}>{product.title}</Link></div>
            <div className="table-cell">${product.price}</div>
            <div className="table-cell">
                <input className="p-1 w-8" value={newQuantity} type="number" onChange={handleQuantity} />
            </div>
            <div className="table-cell">${product.price * newQuantity}</div>
        </>
    )
}

export default CartRow;