import { ADD_CART } from "./actionType";

const initState = { loading: false, cart: "", errors: false };

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_CART:
      return {
        ...state,
        cart: payload,
      };

    default:
      return state;
  }
};

export { reducer };
