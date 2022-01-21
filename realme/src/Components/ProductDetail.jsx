import "../styles/productdetails.css";
import Data from "../ProductData/db.json";
import Screenshot from "../image/screenshot.png";
import { useState } from "react";

let imgs = Data.phonesData;
let images;
for (let i = 0; i < imgs.length; i++) {
  images = imgs[i].src;
}
const index = 0;

function ProductDetails() {
  const [Images, setImages] = useState(index);

  const ImageClick = (index) => {
    setImages(index);
  };

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
            <div className="left_data">
              <div className="bigimg">
                {Data.phonesData.map((el, i) => {
                  return <img src={el.src[0]} alt="img" key={i} />;
                })}
              </div>
              <div className="thumb">
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
              </div>
            </div>
            <div className="right_data">
              {Data.phonesData.map((el, i) => {
                return (
                  <div>
                    <div className="detailsBox">
                      <h2>{el.title}</h2>
                      <div className="redColor">
                        <p>₹ {el.price}</p>
                      </div>
                      <img src={Screenshot} alt="img" />
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
      </div>
    </>
  );
}

export default ProductDetails;
