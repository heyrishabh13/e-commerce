import react from 'react';

function Navbar(){
  return (
    <div className='h-16'>
      <div className='w-3/5 h-16 m-auto flex justify-between'>
        <img className='h-16' src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"></img>
        <img className='h-10 self-center' src="https://as2.ftcdn.net/v2/jpg/02/66/71/71/1000_F_266717164_J8Fqw4OcXRkKtNwFyHD02zIEsxPI7qHH.jpg" />
      </div>
    </div>    
  )
}

export default Navbar;