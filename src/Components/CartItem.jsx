import React,{useContext} from "react";
import styled from "styled-components";
import { CartContext } from "../ContextApi/CartContext";

function CartItem({ value }) {

    const { handleDeletCart } = useContext(CartContext);
  return (
    <Wrapper>
      <h3>{value.title}</h3>
      <p>{value.price}</p>
      <p>{value.quantity}</p>
      <button onClick={()=>handleDeletCart(value)}>Remove</button>
    </Wrapper>
  );
}

export default CartItem;

const Wrapper = styled.div`
  background-color: aliceblue;
  width: 60%;
  margin: auto;
  display: flex;
  margin-top: 5px;
  h3 {
    padding: 15px;
    width: 50%;
    text-align: start;
  }
  p {
    padding: 15px;
    width: 20%;
    text-align: end;
  }
  button {
    height: 30px;
    align-self: center;
  }
`;
