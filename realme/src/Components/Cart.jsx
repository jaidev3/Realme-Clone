import { useParams, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../ContextApi/AuthContext";
import "./Cart.css";

function Cart() {
  const { token } = useContext(AuthContext);

  // if (!token) {
  //   return <Navigate to={"/login"} />;
  // }


  
  return (
    <>
      <div className="cartmain">
        <div>
          <div className="carttitle">
            <h1>My Cart</h1>
          </div>

          <div className="cartheader">
            <div>
              <p>All</p>
            </div>{" "}
            <div className="cartheader1">
              {" "}
              <p>Price</p>
              <p>Count</p>
              <p>Amount</p>
            </div>
          </div>
          <div
            style={{
              height: "100px",
              width: "60%",
              backgroundColor: "white",
              margin: "auto",
            }}
          >
            <h1>Cart Items to be Added</h1>
          </div>
        </div>

        <div className="pincode">
          <p>Pincode</p>
          <div className="pincode1">
            <input placeholder="enter pincode for delivery details"></input>
            &nbsp; &nbsp;
            <button>Check</button>
          </div>
        </div>
        <div className="cartitems">
          <div>Continue shopping </div>
          <div className="cartitems1">
            <div>
              <p>
                Count : &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 0
              </p>{" "}
              <p>
                Total : &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; 0
              </p>
            </div>
            <div>
              <button>Place Order</button>
            </div>
          </div>
        </div>
        <div style={{ height: "80px" }}></div>
      </div>
    </>
  );
}

export default Cart;
