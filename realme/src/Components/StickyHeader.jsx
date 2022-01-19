import React, { useEffect, useState } from "react";
import "./StickyHeader.css";
import MegaMenu from "./MegaMenu";
import logo from "../image/realmeimg.svg";
function Sticky() {
  const [sticky1, setSticky] = useState("");

  const onScroll = () => {
    const windowHeight = window.scrollY;
    windowHeight > 20 ? setSticky("sticky") : setSticky("");
  };
  window.addEventListener("scroll", onScroll);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={`nav ${sticky1}`}>
        <div className="logo">
          <a href="#"><img src={logo} alt="" /></a>
        </div>
        <ul>
          <li>
            <a href="#"><MegaMenu title={"Home"}/></a>
          </li>
          <li>
            <a href="#"><MegaMenu title={"Phones"}/></a>
          </li>
          <li>
            <a href="#"><MegaMenu title={"Tvs"}/></a>
          </li>
          <li>
            <a href="#"><MegaMenu title={"Headphone"}/></a>
          </li>
          <li>
            <a href="#"><MegaMenu title={"Others"}/></a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Sticky;
