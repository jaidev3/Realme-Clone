import { Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthContext";
import { CartContext } from "../ContextApi/CartContext";
import "../Styles/Cart.css";

function Cart() {
  const { total, count, cart } = useContext(CartContext);
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  

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
            </div>
          </div>
          <div>
            {/* design cart here */}
            {cart.map((e, i) => (
              <>
                <div key={i}>
                  <CartItem value={e} />
                </div>
              </>
            ))}
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
          <Link to="/">
            <div>Continue shopping</div>
          </Link>
          <div className="cartitems1">
            <div>
              <p>Count :</p> <p>Total :</p>
            </div>
            <div>
              <Link to="/checkout">
                <button>Place Order</button>
              </Link>
            </div>
          </div>
        </div>
        <div style={{ height: "80px" }}></div>
      </div>
    </>
  );
}

export default Cart;
