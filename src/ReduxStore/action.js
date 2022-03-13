import { ADD_CART } from "./actionType";

export const addCart = (data) => {
  return {
    type: ADD_CART,
    payload: data,
  };
};
