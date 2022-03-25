import Data from "../ProductData/db.json";
import styled from "styled-components";
import Sanpshot from "../Images/ProductDescription.png";
import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../ContextApi/CartContext";

function ProductDetails() {
  const { total, count, handleCount,handleCart } = useContext(CartContext);
  const { id } = useParams();
  const [d, setD] = useState({});
  const da = Data.goneInFlash.filter((e) => e.id === `${id}`);

  useEffect(() => {
    setD(da[0]);
    console.log(da[0]);
  }, []);

  return (
    <>
      <Wrapper>
        <ProductBody>
          <Header>
            <div className="headerWidth">
              <div className="title">
                <span>{d.title}</span>
              </div>
              <div className="tabs">
                <span>Overview</span>
                <span>Specs</span>
                <span>R-Pass</span>
              </div>
            </div>
          </Header>

          <BodyData>
            <>
              <ImageSection>
                <div className="topimg">
                  <img src={d.imgOne} alt="img" />
                </div>

                <div className="thumb">
                  <img src={d.imgOne} alt="img" />
                  <img src={d.imgTwo} alt="img" />
                  <img src={d.imgThrid} alt="img" />
                  <img src={d.imgFourth} alt="img" />
                </div>
              </ImageSection>

              <DetailSection>
                <div>
                  <h2>{d.title}</h2>
                  <h1>₹ {d.price}</h1>
                </div>

                <Hr />

                <div>
                  <img src={Sanpshot} alt="img" />
                </div>

                <h2>Color</h2>
                <div className="box">
                  <p>color1</p>
                  <p>color2</p>
                </div>

                <h2>Configuration</h2>
                <div className="box">
                  <p>configuration</p>
                  <p>configuration</p>
                </div>

                <h2>Quantity</h2>
                <div className="quantity">
                  <span onClick={() => handleCount(-1,-d.price)}>-</span>
                  <span>{count}</span>
                  <span onClick={() => handleCount(1,d.price)}>+</span>
                </div>
                <h2>Pincode</h2>
                <div className="box">
                  <input></input>
                  <button>Check</button>
                </div>
                <Cart>
                  <div>Quantity : {count}</div>
                  <div>Total : {total}</div>
                  <div>
                    <Button onClick={()=>{handleCart(d)}}>Add to Cart</Button>
                    <Link to="/cart">
                      <Button>Buy Now</Button>
                    </Link>
                  </div>
                </Cart>
              </DetailSection>
            </>
          </BodyData>
        </ProductBody>
      </Wrapper>
      <hr></hr>
    </>
  );
}

export default ProductDetails;

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  background-color: white;
`;
const ProductBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  margin: auto;
  border: #f4f4f5 solid 1px;

  .headerWidth {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  .tabs {
    display: flex;
    width: 20%;
    justify-content: space-between;
    span {
      color: #9b9b9b;
      :hover {
        cursor: pointer;
        color: #ffc915;
      }
    }
  }
`;
const BodyData = styled.div`
  width: 80%;
  display: flex;
  margin: auto;
  padding-top: 30px;
`;
const ImageSection = styled.div`
  width: 55%;
  .thumb {
    display: flex;
    justify-content: space-around;
    margin: auto;
    width: 80%;
  }
  .thumb img {
    width: 80px;
    height: 100px;
  }
  img {
    width: 100%;
  }
  .topimg {
    width: 80%;
    margin: auto;
    padding: 70px;
  }
`;
const DetailSection = styled.div`
  width: 45%;
  text-align: left;
  img {
    width: 100%;
  }
  .box {
    display: flex;
  }
  .box p {
    margin-right: 20px;
    cursor: pointer;
    width: 200px;
    height: 50px;
    border: 1px solid black;
    color: black;
    text-align: center;
    align-items: center;
  }
  .quantity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    padding: 5px;
    cursor: pointer;
    width: 200px;
    height: 50px;
    border: 1px solid black;
    color: black;
    font-weight: 600;
    font-size: larger;
  }
  h2 {
    margin-top: 20px;
  }
`;

const Hr = styled.hr``;
const Button = styled.button`
  margin: 20px 20px 0px 0px;
  cursor: pointer;
  width: 200px;
  height: 50px;
  text-transform: uppercase;
  background: #ffc915;
  border: 1px solid #ffc915;
  color: black;
`;
const Cart = styled.div`
  margin-top: 20px;
  padding: 30px;
  background-color: aliceblue;
`;
