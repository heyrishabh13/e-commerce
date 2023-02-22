import react from 'react';
import {CgShoppingCart} from "react-icons/cg"
import { Link } from 'react-router-dom';
import Cart from "./Cart";


function Navbar(){

  const cart = JSON.parse(localStorage.getItem('my-cart')) || null;

  const totalCount = cart ? Object.keys(cart).reduce( (accumulator, current) => {
    return accumulator + cart[current];
  }, 0) : 0;

  return (
    <div className='h-16 bg-white'>
      <div className='w-3/5 h-16 m-auto flex justify-between'>
        <img className='h-16' src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"></img>
        {/* <img className='' src="https://as2.ftcdn.net/v2/jpg/02/66/71/71/1000_F_266717164_J8Fqw4OcXRkKtNwFyHD02zIEsxPI7qHH.jpg" /> */}
        <div className='flex items-center'>
          <Link to={"/cart"} element={<Cart />}><CgShoppingCart className="h-10 self-center text-4xl" /></Link>
          <div className='ml-[-18px] text-xs'>{totalCount}</div>
        </div>
      </div>
    </div>    
  )
}

export default Navbar;