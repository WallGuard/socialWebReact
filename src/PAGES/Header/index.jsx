import React from "react";
import logo from "../../logo.svg";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className='header__logo' alt="logo" />
      <input className='header__search'></input>
    </header>
  );
};

export default Header;
