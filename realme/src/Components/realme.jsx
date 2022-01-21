import { Carouse } from "./Carousel";
import Product from "./Product";
import Activity from "./Activity";
import Phone from "./Phones";
function Realme() {
  return (
    <>
      <div style={{ margin: "auto" }}>
        <Carouse />
        <div style={{ marginBottom: "300px" }}>
          <Product />
        </div>
        <Phone />
        <Activity />
      </div>
    </>
  );
}

export default Realme;
