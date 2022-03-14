import { Carouse } from "../Components/Carousel";
import "../Styles/Activity.css";
import Product from "../Components/ProductSectionHome";
import Activity from "../Components/ActivitySectionHome";
import Phone from "../Components/PhoneSection";

export default function Realme() {
  return (
    <>
      <div>
        <Carouse />
        <div style={{ marginBottom: "310px" }}>
          <Product />
        </div>
        <div className="bigbox">
          <h1>Accessories</h1>
          <img
            className="imgbox"
            src="https://image01.realme.net/general/20220203/1643859952761.jpg"
            alt=""
          />
          <img
            className="imgbox2"
            src="https://image01.realme.net/general/20220207/1644217462783.jpg"
            alt=""
          />
          <img
            className="imgbox"
            src="https://image01.realme.net/general/20220202/1643815287000.jpg"
            alt=""
          />
          <img
            className="imgbox2"
            src="https://image01.realme.net/general/20211231/1640957957650.jpg"
            alt=""
          />
        </div>
      
        <Phone />
        <Activity />
      
       
      </div>
    </>
  );
}
