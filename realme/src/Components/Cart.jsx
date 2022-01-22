import { useParams, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthContext";
import "../styles/cart.css";

function Cart() {
  const { token } = useContext(AuthContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

 // with initial value to avoid when the array is empty
 useEffect(() => {
  const sum = data.reduce(add, 0);
  // const sum1 = data.reduce(add1, 0);
  function add(accumulator,a) {

    return accumulator + a.price;
  
  }  

  // function add1(accumulatora,a1) {

  //   return accumulatora + a1.quantity;
  
  // } 
  setTotalAmount(sum)
  // setCount(sum1)
   console.log(sum)
  //  console.log(sum1)

 },[])
  
 useEffect(() => {
  
  const sum1 = data.reduce(add1, 0);
  

  function add1(accumulatora,a1) {

    return accumulatora + a1.quantity;
  
  } 
 
   setCount(sum1)
  
   console.log(sum1)

 },[])
  useEffect(() => {
    fetch("http://localhost:3002/cart")
      .then((res) => res.json())
      .then((res) => {
        return (
          <>
            {" "}
            {setData(res)}
        
           
            
           {" "}
          </>
        );
      });
  }, []);
  console.log(data);
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

       
          <div    className="n">
            {data.map((e) => {
              return (
                <>
            
                  <img className="imageproduct" src={e.imgOne} alt="img" />

                
                  <p className="titleproduct">{e.title}</p>
                  <p className="priceproduct"> {e.price}</p>
                  <p className="quantityproduct"> {e.quantity}</p>
                  <p className="ppriceproduct"> {e.price}</p>
                
                  </>
              );
            })}
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
            <div>Continue shopping~</div>
          </Link>
          <div className="cartitems1">
            <div>
              <p>
                <></>
                Count : &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; {count}
              </p>{" "}
              <p>
                Total : &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; {totalAmount}
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
