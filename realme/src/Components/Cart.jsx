import { useParams, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextApi/AuthContext";

function Cart() {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <h1>Cart</h1>
    </>
  );
}

export default Cart;
