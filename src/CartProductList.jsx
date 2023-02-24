import React,{useState, useEffect} from "react";
import { getProductData } from "./api";
import CartRow from "./CartRow";
import { Loading } from "./Loading";


function CartProductList(){
    const mycart = JSON.parse(localStorage.getItem('my-cart'));
    console.log('mycart in cart page', mycart);
    const [products, setProducts] = useState([]);

    useEffect(function(){
        const promises = Object.keys(mycart).map(id => getProductData(id).then(res => res.data).catch(err => console.log(err)));

        Promise.all(promises).then(responses => setProducts(responses));
        
    }, []);
    console.log('products in cart page',products);


    return (
        <div className="px-2 pt-4" >
            <div className="table w-full border-2 border-gray-200 ">
                <div className="table-header-group">
                    <div className="table-row h-8 text-center bg-gray-200">
                        <div className="table-cell font-bold p-2"></div>
                        <div className="table-cell font-bold p-2"></div>
                        <div className="table-cell font-bold p-2 text-left">Product</div>
                        <div className="table-cell font-bold p-2 text-left">Price</div>
                        <div className="table-cell font-bold p-2 text-left">Quantity</div>
                        <div className="table-cell font-bold p-2 text-left">Subtotal</div>
                    </div>
                </div>
                <div className="table-row-group">
                    {products.map(product => {
                        return (<div className="table-row border-2 border-gray-200" >
                            <CartRow key={product.id} product={product}  quantity={mycart[product.id]} />
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default CartProductList;