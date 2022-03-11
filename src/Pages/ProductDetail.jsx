import "../Styles/Productdetails.css";
import axios from "axios";
import Data from "../ProductData/db.json";
import Sanpshot from "../Images/snapshot.png";
// import Screenshot from "../image/screenshot.png";
import { useState, useEffect } from "react";
import { useParams,Link} from "react-router-dom";
import { useNavigate} from "react-router-dom";

// let imgs = Data.phonesData;
// let images;
// for (let i = 0; i < imgs.length; i++) {
//   images = imgs[i].src;
// }
// const index = 0;

function ProductDetails() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const [d, setD] = useState([]);
  const da = Data.goneInFlash.filter((e) => e.id === `${id}`);

  useEffect(() => {
    setD(da);
    console.log(da[0]);
  }, []);

  const handleClick = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(d[0]),
    };
    fetch("http://localhost:3002/cart", requestOptions);
    // axios.post('http://localhost:3002/cart', da)
    console.log(d);
   
  };

  // const [Images, setImages] = useState(index);

  // const ImageClick = (index) => {
  //   setImages(index);
  // };

  return (
    <>
      <div>
        <div className="products_details">
          <div className="details">
            <p className="left">realme Pocket Bluetooth Speaker</p>
            <p className="right">R-Pass</p>
          </div>
          <hr />
          <div className="data">
            {d.map((e) => {
              return (
                <>
                  <div className="left_data">
                    <img src={e.imgOne} alt="img" />
                    <div className="thumb">
                      <img src={e.imgOne} alt="img" />
                      <img src={e.imgTwo} alt="img" />
                      <img src={e.imgThrid} alt="img" />
                      <img src={e.imgFourth} alt="img" />
                    </div>
                  </div>

                  <div className="right_data">
                    <h1>{e.title}</h1>
                    <div className="color">
                      <h2>₹ {e.price}</h2>
                    </div>
                    <div>
                      <img src={Sanpshot} alt="img" />
                    </div>
                    <h2>Color</h2>
                    <p>{e.color}</p>
                    <h2>Configuration</h2>
                    <p>{e.Configuration}</p>
                    <h2>Quantity</h2>
                    <div className="quan">
                      <p>-</p>
                      <p>{e.quantity}</p>
                      <p>+</p>
                    </div>
                    <button id="btn" onClick={handleClick}>
                      Add to Cart
                    </button>
                  <Link to="/cart"><button onClick={()=>{ <Navigate to="/cart" /> }}>Buy Now</button></Link> 
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
