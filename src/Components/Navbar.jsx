import Sticky from "./StickyHeader";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <>
      <Navwidth>
        <Wrapper>
          <div className="leftHeader">
            <span>Realme</span>|<span>Brand</span>|<span>Support</span>|{" "}
            <span>Community</span>|<span>App</span>|<span>Bulk Order</span>|
            <span>UI 3.0</span>
          </div>
          <div className="rightHeader">
            <Link style={{ color: "black" }} to="/login">
              <span>Login</span>{" "}
            </Link>{" "}
            |{" "}
            <Link style={{ color: "black" }} to="/cart">
              <span>My-Order</span>
            </Link>{" "}
            |{" "}
            <Link style={{ color: "black" }} to="/cart">
              <span>Cart</span>{" "}
            </Link>
          </div>
        </Wrapper>
      </Navwidth>
      {/* sticky header imported */}
      <Navwidth>
        <Sticky />
      </Navwidth>
    </>
  );
}

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  font-size: 12px;
  color: #676c73;
  font-family: sans-serif;
  justify-content: space-between;
  margin: auto;
  text-align: center;
  background-color: white;

  .leftHeader {
    display: flex;
    justify-content: space-between;
    width: 550px;
    align-items: center;
    align-content: center;
    padding: 8px;
    letter-spacing: 1px;
    span:hover {
      cursor: pointer;
      color: #ffc915;
    }
  }
  .rightHeader {
    display: flex;
    justify-content: space-evenly;
    width: 230px;
    padding: 8px;
    span:hover {
      cursor: pointer;
      color: #ffc915;
    }
  }
  span {
    font-size: 12px;
    color: #676c73;
  }
`;

const Navwidth = styled.div`
  background-color: white;
  border: #eeeeee 1px solid;
`;
