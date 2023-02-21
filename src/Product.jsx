import react from 'react';
import { Link } from 'react-router-dom';

function Product({thumbnail, category, title, price, id}) {
  return (
    <div className='ml-4 mb-4'>
      <img className='w-48 h-48 ' src={
        thumbnail} />
      <h2 className='text-gray-400'>{category}</h2>
      <h2>{title}</h2>
      <h2>{'$' + price}</h2>
      <Link className="px-4 py-2 mb-4 text-white rounded-full bg-violet-700" to={'/product/' + id}>View Detail</Link>
    </div>
  );
}

export default Product;