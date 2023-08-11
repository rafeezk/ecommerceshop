import React, {createContext, useState, useEffect} from 'react';
import CartItem from '../components/CartItem';

// export context#
export const CartContext = createContext()
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  // item ammount state
  const [itemAmmount, setItemAmmount] = useState(0);
  // total price state
  const [total, setTotal] = useState(0);
  const AddToCart = (id, product) => {
    const newItem = {...product, ammount: 1};
    // console.log(newItem)
    // console.log(`${product.title} added to cart`)
    const CartItem = cart.find((item) => {
      return item.id === id;
    })
    if (CartItem) {
      const newCart = [...cart].map((item) =>{
        if (item.id === id) {
          return {...item, ammount: CartItem.ammount + 1};
        } else {
          return item;
        }
      });
      setCart(newCart)
    } else{
      setCart([...cart, newItem])
    }
  };

// item count
useEffect(() => {
  if (cart) {
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.ammount;
    }, 0);
    setItemAmmount(amount);
  }
}, [cart]);

// price total
useEffect(() => {
  const total = cart.reduce((accumulator, currentItem)=>{
    return currentItem.ammount * currentItem.price + accumulator ;
  }, 0)
  const finalPrice = parseFloat(total).toFixed(2)
  setTotal(finalPrice)
})
  // remove cart
  const removeCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id!== id;
    });
    setCart(newCart)
  };
  // update cart
  const addAmmount = (id) => {
    const item = cart.find((item)=> item.id === id);
    AddToCart(id, item);
  };

  const minusCart = (id) => {
    const findItem = cart.find((item) =>{
     return item.id === id
    });
    if (findItem) {
      const newCart = cart.map((item) => {
        if (item.id) {
          return {...item, ammount: findItem.ammount - 1}
        } else {
          return item;
        }
      })
      setCart(newCart)
    }
      if (findItem.ammount === 1) {
        removeCart(id)
      }
  }
  const removeAll = () => {
    setCart([]);
  }
  // console.log(cart)
  return <CartContext.Provider value={{removeAll, cart,AddToCart, removeCart, addAmmount, minusCart, itemAmmount, setItemAmmount, total}}>{children}</CartContext.Provider>;
};

export default CartProvider;
