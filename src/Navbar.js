import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobal } from "./context";

const Navbar = () => {
  const { openSideBar, openSubMenu, closeSubMenu } = useGlobal();
  const onButtonHover = (e) => {
    const text = e.target.textContent;
    const btn = e.target.getBoundingClientRect();
    const center = (btn.left + btn.right) / 2;
    const bottom = btn.bottom;
    openSubMenu(text, { center, bottom });
  };
  return (
    <nav className="nav">
      <section className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe-logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={onButtonHover}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={onButtonHover}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={onButtonHover}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </section>
    </nav>
  );
};

export default Navbar;
