import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul>
          <li>
            <a href="#">
              <MegaMenu title={"realme Smartphones"} />
            </a>
          </li>
          <li>
            <a href="#">
              <MegaMenu title={"narzo Smartphones"} />
            </a>
          </li>
          <li>
            <a href="#">
              <MegaMenu title={"realme TV"} />
            </a>
          </li>
          <li>
            <a href="#">
              <MegaMenu title={"Laptop & Tablet"} />
            </a>
          </li>
          <li>
            <a href="#">
              <MegaMenu title={"Audio"} />
            </a>
          </li>
          <li>
            <a href="#">
              <MegaMenu title={"Smart Life"} />
            </a>
          </li>
          <li>
            <a href="#">
              <MegaMenu title={"Accessories & Lifestyle"} />
            </a>
          </li>
        </ul>
        <i class="bi bi-search"></i>
      </div>
    </>
  );
}
export default Sticky;
