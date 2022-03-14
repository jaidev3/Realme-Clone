import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../Styles/StickyHeader.css";
import MegaMenu from "./DropdownNavbar";
import logo from "../Images/realmeimg.svg";
import { BsSearch } from "react-icons/bs";

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
      <div className={`${sticky1}`}>
        <div className={`nav`}>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul>
            <li>
              <a href="#">
                <MegaMenu title={"Realme Smartphones"} />
              </a>
            </li>
            <li>
              <a href="#">
                <MegaMenu title={"Narzo Smartphones"} />
              </a>
            </li>
            <li>
              <a href="#">
                <MegaMenu title={"Realme TV"} />
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
          <div className="search">
            <Link to="/search">
              <BsSearch />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sticky;
