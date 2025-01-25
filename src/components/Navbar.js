import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = React.forwardRef((props, ref) => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => setClick(!click);

  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"} ref={ref}>
      <Link to="/">
        <img className="logo" src="images/logo.png" alt="logo" />
      </Link>
      <ul className={click ? "nav-bar active" : "nav-bar"}>
        <li>
          <Link to="/documentation">Documentation</Link>
        </li>
        <li>
          <Link to="/demo">Demo</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
    </div>
  );
});

export default Navbar;
