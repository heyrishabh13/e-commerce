import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Footer from './Footer';
import {Routes, Route, Link, json} from 'react-router-dom'
import ProductDescription from './ProductDescription'
import NotFound from './NotFound';
import Cart from './Cart';

function App() {
  
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('my-cart') || '{}'));

  function handleAddToCart(productId, count){
    count = +count;
    const oldCount = cart[productId] || 0;
    const newCart = {...cart, [productId]:oldCount + count };
    setCart(newCart);
    
    localStorage.setItem('my-cart', JSON.stringify(newCart));
  }



  return (
    <div className='bg-gray-200 h-screen overflow-y-scroll flex flex-col'>
      <Navbar />

      <div className='grow'>
        <Routes>
          <Route index element={<ProductList />} />
          <Route path='/product/:id' element={<ProductDescription onAddToCart={handleAddToCart} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>

      <Footer/>
    </div>
  )
}

export default App;