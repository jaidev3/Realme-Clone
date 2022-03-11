import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({ count: 0,total:0, handleToken: () => {} });

export const CartContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const handleToken = (count,value) => {
    setCount(count+1);
    setTotal(total+value)
  };
  return (
    <CartContext.Provider value={{ total,count, handleToken }}>
      {children}
    </CartContext.Provider>
  );
};