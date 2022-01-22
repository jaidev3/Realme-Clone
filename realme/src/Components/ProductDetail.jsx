import "../styles/productdetails.css";
import axios from "axios";
import data from "../ProductData/db.json";
// import Screenshot from "../image/screenshot.png";
import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";

// let imgs = Data.phonesData;
// let images;
// for (let i = 0; i < imgs.length; i++) {
//   images = imgs[i].src;
// }
// const index = 0;

function ProductDetails() {
  const { id } = useParams();
  const [d,setD]=useState([]);
  const da = data.goneInFlash.filter((e) => e.id==`${id}`)
  
  useEffect(() => {
    setD(da)
    console.log(da[0])
  },[])
  

 const handleClick=()=>{
   
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(d[0])
};
fetch('http://localhost:3002/cart', requestOptions)
  // axios.post('http://localhost:3002/cart', da)
console.log(d)
 }
  
 
  // const [Images, setImages] = useState(index);

  // const ImageClick = (index) => {
  //   setImages(index);
  // };
 
  return (
    <>
    
{d.map((e)=>{
  return (
    <>

  <h1>{e.title},{e.price},{e.quantity}</h1>
  <button onClick={handleClick}>AddtoCart</button>
  </>
  )
  
}) }
      {/* <div>
        <div className="products_details">
          <div className="details">
            <p className="left">realme Pocket Bluetooth Speaker</p>
            <p className="right">R-Pass</p>
          </div>
          <hr />
          <div className="data">
            <div className="left_data">
              <div className="bigimg">
                {Data.phonesData.map((el, i) => {
                  return <img src={el.src[0]} alt="img" key={i} />;
                })}
              </div> */}
              {/* <div className="thumb">
                {images.map((img, index) => {
                  return (
                    <img
                      src={img}
                      alt="img"
                      onClick={() => ImageClick(index)}
                      key={index}
                    />
                  );
                })}
              </div> */}
            {/* </div>
            <div className="right_data">
              {Data.phonesData.map((el, i) => {
                return (
                  <div>
                    <div className="detailsBox">
                      <h2>{el.title}</h2>
                      <div className="redColor">
                        <p>₹ {el.price}</p>
                      </div>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="img" />
                      <h4>Color</h4>
                      <div className="color">
                        <h6>{el.color[0]}</h6>
                        <h6>{el.color[1]}</h6>
                      </div>
                      <h4>Configuration</h4>
                      <div className="color">
                        <h6>{el.Configuration[0]}</h6>
                        <h6>{el.Configuration[1]}</h6>
                      </div>
                      <h4>Quantity</h4>
                      <div className="quantity">
                        <p>-</p>
                        <h6>{el.quantity}</h6>
                        <p>+</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
<button>Hiiii</button>
export default ProductDetails;
