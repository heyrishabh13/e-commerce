import React from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Footer from './Footer';
import {Routes, Route, Link} from 'react-router-dom'
import ProductDescription from './ProductDescription'
import NotFound from './NotFound';

function App() {
  return (
    <>
      <Navbar/>

      

      <div className="h-vw">
        <Routes>
          <Route index element={<ProductList />} />
          <Route path='/product/:id' element={<ProductDescription/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>

      <Footer/>
    </>
  )
}

export default App;