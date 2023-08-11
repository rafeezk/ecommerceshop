import React from 'react';
import { Link } from 'react-router-dom';
// import icon
import {IoMdArrowForward} from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
// import components
import CartItem from '../components/CartItem'
// sidebarcontext
import { SidebarContext } from '../contexts/SidebarContext';
import { useContext } from 'react';
// cartcontext
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const {isOpen, handleClose}= useContext(SidebarContext);
  const {cart, removeAll, total, itemAmmount} = useContext(CartContext);
  // console.log(isOpen)
  return <div className={`${
    isOpen ? 'right-0':'-right-full'
  } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] flex flex-col`}>
    <div className='flex items-center justify-between py-6 
    border-b'>

      <div className='uppercase text-sm font-semibold '>Shopping Bag ({itemAmmount})</div>
      {/*icon*/}
      <div onClick={handleClose} className='cursor-pointer w-8 h-8  flex 
      justify-center items-center'>
        <IoMdArrowForward className='text-2xl' />
      </div>
    </div>
    <div className='flex-1 border-b-2 mb-3 overflow-y-auto'>
      {cart.map(item =>{
      return <CartItem item={item} key={item.id} />
    })}
    </div>
    <div className='flex flex-col gap-y-3 items-center  flex-none mb-7'>
    {/* total */}
    <div className='flex justify-between items-center mt-3 w-full'>
    <p className='uppercase font-semibold'>
      <span className='mr-2'>Total:</span>$ {total}
    </p>
    {/* clear cart icon */}
    <div className="cursor-pointer bg-red-500 py-4 text-white w-12 h-12 text-xl flex justify-center items-center" onClick={removeAll}><FiTrash2/></div>
    </div>
    <Link to={'/'} className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium'>View Cart</Link>
    <Link to={'/'} className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'>CheckOut</Link>
    </div>
    </div>;
};

export default Sidebar;
