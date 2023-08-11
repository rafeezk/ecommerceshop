 import React from 'react';
import { Link } from 'react-router-dom';
import {IoMdAdd, IoMdClose, IoMdRemove} from 'react-icons/io'
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';

const CartItem = ({item}) => {
  const {removeCart, addAmmount, minusCart} = useContext(CartContext);
  console.log(item)
  const {id, title, image, price, ammount} = item;
  // console.log(ammount)
  return <div className='gap-x-4 py-3 lg:px-6 border-b border-gray-300 w-full font-light text-gray-500'>
    {/* card */}
    <div className='w-full min-h-[100px] flex items-center gap-x-5 '>
      {/* image */}
      <Link to={`/product/${id}`}>
        <img src={image} alt="gambar rusak" className='max-w-[60px]' />
      </Link>
      <div className='w-full flex flex-col'>
      {/* title */}
      <div className='flex justify-between mb-2'>
        <Link to={`/product/${id}`} className='uppercase text-sm font-medium max-w-[220px] text-primary hover:underline'>
          {title}
        </Link>
        {/* remove icon */}
        <div className='text-xl cursor-pointer' onClick={()=>removeCart(id)}>
          <IoMdClose className='text-gray-500 hover:text-red-500 transition'/>
        </div>
      </div>
      <div className=' flex gap-x-2 h-[35px] text-sm'>
      {/* quntity */}
      <div className='flex flex-1 max-w-[100px]
       items-center h-full border text-primary font-medium'>
        {/* minus icon */}
        <div className="flex-1 h-full flex items-center justify-center cursor-pointer border" onClick={()=> minusCart(id)}>
        <IoMdRemove/>
        </div>
        {/* amount */}
        <div className='h-full flex justify-center items-center px-2 text-primary border'>
          {ammount}
        </div>
        <div className='flex-1 h-full flex justify-center items-center cursor-pointer border' onClick={()=>addAmmount(id)}>
        <IoMdAdd/>
        </div>
      </div>
      {/* item price */}
      <p className='flex-1 flex justify-around items-center text-gray-600 font-light'>$.{price}</p>
      {/* final price */}
      <p className='flex-1 flex justify-end items-center text-primary font-semibold'>$.{parseFloat (price * ammount).toFixed(2)}</p>
      </div>
      </div>
    </div>
  </div>;
};

export default CartItem;
