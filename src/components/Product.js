import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
// kalau error nama variable products ganti jadi Product
const Products = ({ Product }) => {
  // console.log(Product)
     {/* Destruction Products */}
     const { id, image,category, title, price} = Product;
     const {AddToCart} = useContext(CartContext)
    //  console.log(image)
  return <div>
    {/* card */}
    <div className="border h-[300px] overflow-hidden relative group transition">
      <div className="w-full h-full flex justify-center items-center">
        {/* images */}
        <Link to={`/product/${id}`} className="w-[200px] mx-auto flex justify-center items-center">
          <img src={image} alt="gambar rusak" className='max-h-[150px] group-hover:scale-110 transition-all'/>
        </Link>
        <div className="flex flex-col absolute top-2 right-0 group-hover:right-6 gap-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className='w-9 h-9 bg-red-500 flex justify-center shadow'>
            <button onClick={() => AddToCart(id, Product)}>
              <BsPlus className='text text-2xl text-white'/>
            </button>
          </div>
          <div className="bg-white w-9 h-9 flex justify-center shadow">
            <Link to={`/product/${id}`} className='flex items-center'><BsEyeFill/></Link>
          </div>
        </div>
      </div>
    </div>
    {/* category & title & price */}
    <div>
      <p className='text-sm text-gray-500 capitalize'>{category}</p>
      <Link to={`/product/${id}`}>
      <h2 className='font-semibold my-2'>{title}</h2>
      </Link>
      <p className='font-semibold'>$ {price}</p>
    </div>
  </div>;
};

// Ini juga jadi Product
export default Products;
