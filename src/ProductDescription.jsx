import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductData } from "./api";
import { Loading } from "./Loading"; 
import Button from "./Button";
import NotFound from "./NotFound";

function ProductDescription(){
    const {id} = useParams();
    const [product, setProductData] = useState();
    // const [loading, setLoading] = useState(true);

    useEffect(function(){
        
        getProductData(id).then(res => {console.log(res);setProductData(res.data);})
        console.log('Inside useEffect', product);
        
    }, [id]);

    // if(!product){
    //     if(!loading){
    //         return (<NotFound/>);
    //     }
    //     else{
    //         return (<Loading/>);
    //     }
    // }

    return (
        product ? <div className="bg-gray-500">
            <div className="flex gap-2">
                <img src={product.thumbnail} alt="Product Image" />
                <div>
                    <h2>{product.title}</h2>
                    <h3>{product.price}</h3>
                    <p>{product.description}</p>
                    <div>
                        <input type="number" />
                        <Button content="ADD TO CART" />
                    </div>
                </div>
            </div>
        </div> : <Loading />
    );
}

export default ProductDescription;