import Sticky from "./StickyHeader";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "600px",
            alignItems: "center",
            alignContent: "center",
            padding: "10px",
            wordSpacing: "8px",
          }}
        >
          Realme | Brand | Support | Community | App | Bulk Order | UI 3.0
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "250px",
            padding: "10px",
            wordSpacing: "8px",
          }}
        >
          <Link style={{ color: "black" }} to="/login">
            Login{" "}
          </Link>{" "}
          |{" "}
          <Link style={{ color: "black" }} to="/cart">
            My-Order
          </Link>{" "}
          |{" "}
          <Link style={{ color: "black" }} to="/cart">
            Cart{" "}
          </Link>
        </div>
      </div>
      <hr style={{ padding: "0", margin: "0" }} />
      <Sticky />
    </>
  );
}

export default Navbar;
