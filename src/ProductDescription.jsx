import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductData } from "./api";
import { Loading } from "./Loading"; 
import GeneralButton from "./GeneralButton";
import NotFound from "./NotFound";
import {IoArrowBackOutline} from 'react-icons/io5'


function ProductDescription({onAddToCart}){
    let {id} = useParams();
    const [product, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(1);

    useEffect(function(){
        getProductData(id).then(res => {setProductData(res.data)}).catch(err => setLoading(false));
        setCount(1);
        
    }, [id]);

    function handleCountChange(event){
        setCount(event.target.value);
    }

    function handleAddToCart(){
        
        onAddToCart(id, count);
    }

    if(!product){
        if(!loading){
            return (<NotFound/>);
        }
        else{
            return (<Loading/>);
        }
    }

    return (
        <div className="my-8 bg-gray-200">
            <Link to={'/'}><div className="ml-32"><IoArrowBackOutline className="text-3xl"/></div></Link>
            <div className="mt-6 flex gap-2 w-3/5 mx-auto bg-white p-8 rounded-md border-gray-200">
                <div>
                    <img src={product.thumbnail} alt="Product Image" />
                </div>
                <div className="">
                    <h2>{product.title}</h2>
                    <h3>{product.price}</h3>
                    <p>{product.description}</p>
                    <div className="flex gap-4">
                        <input type="number" value={count} onChange={handleCountChange} className="w-14 px-2 border-2 rounded-md border-black" />
                        <GeneralButton content="ADD TO CART" functionName={handleAddToCart} />
                    </div>
                </div>
            </div>
            <div className="flex justify-between px-32 mt-12">
                <div>{ id > 1 && <Link to={'/product/' + (+id - 1)}><GeneralButton content="Previous" /></Link>}</div>
                <div>{ id < 30 && <Link to={'/product/' + (+id + 1)}><GeneralButton content="Next" /></Link>} </div>   
            </div>
        </div>
    );
}

export default ProductDescription;

