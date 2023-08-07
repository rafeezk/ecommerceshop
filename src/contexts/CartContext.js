import React, {createContext, useState, useEffect} from 'react';

// export context#
export const CartContext = createContext()
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
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
  // console.log(cart)
  return <CartContext.Provider value={{cart,AddToCart}}>{children}</CartContext.Provider>;
};

export default CartProvider;
