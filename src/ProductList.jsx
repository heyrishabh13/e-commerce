import React,{useEffect, useState} from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import { getProductList } from "./api";

function ProductList(){

    const [products, setProductsData] = useState([]);
    const [query, setQuery] = useState('');
    const [option, setOption] = useState('default');

    useEffect(function(){
        const promise = getProductList();
    
        promise.then(function(response) {
            setProductsData(response.data.products);
        })
    }, [])

    let data = products.filter(function(item){
        return item.title.toLowerCase().indexOf(query.toLowerCase()) != -1;
    })

    if(option == 'lowToHigh'){
        data.sort(function(x, y){
            return x.price - y.price;
        })
    }
    else if(option == 'highToLow'){
        data.sort(function(x, y){
            return y.price - x.price;
        })
    }
    else if(option == 'name'){
        data.sort(function(x, y){
            return x.title < y.title ? -1 : 1;
        })
    }
    
    console.log(data);
    console.log('query is', query);
    console.log('option is ', option);

    function handleQuery(event){
        setQuery(event.target.value);
    }

    function handleOption(event){
        setOption(event.target.value);
    }

    return (
        <div className='bg-gray-200 py-12'>
            <div className='w-3/5 m-auto  bg-white p-16 rounded-md'>
            <div className='flex justify-end gap-4'>
                <input className="flex-grow border py-2 px-4 rounded-full" placeholder="search" value={query} onChange={handleQuery}  />
                
                <select className='border p-2 pr-8 rounded-full ' value={option} onChange={handleOption}>
                    <option value='default'>Default Sorting</option>
                    <option value='lowToHigh'>Sort by price: low to high</option>
                    <option value='highToLow'>Sort by price: high to low</option>
                    <option value='name'>Sort by names</option>\
                </select>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {data.map( (item) =>  

                    <Product key={item.title} {...item} />
)}
                
            </div>  
            </div>
      </div>
    );
}

export default ProductList;
