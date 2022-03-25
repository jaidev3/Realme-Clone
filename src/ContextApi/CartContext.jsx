import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  const handleCart = (payload) => {
    setCart([...cart, payload]);
    console.log(cart);
  };
  const handleDeletCart = (payload) => {
   setCart(cart.filter((e)=>{
  if(e.title!==payload.title){
    return e
  }
    }))
  };

  const handleCount = (value, price) => {
    setCount(count + value);
    setTotal(total + price);
  };
  console.log(cart);
  return (
    <CartContext.Provider
      value={{ total, count, cart, handleCount, handleCart,handleDeletCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
