import React from "react";
import s from "./style.module.scss";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={s.nav_wrapper}>
      <div className={s.nav}>
        <div className={s.nav__item}>
          <NavLink className={s.nav__item_link} activeClassName={s.active} to="/profile">
            Profile
          </NavLink>
        </div>
        <div className={s.nav__item}>
          <NavLink className={s.nav__item_link} activeClassName={s.active} to="/dialogs">
            Messages
          </NavLink>
        </div>
        <div className={s.nav__item}>
          <NavLink className={s.nav__item_link} activeClassName={s.active} to="/page1">
            News
          </NavLink>
        </div>
        <div>
          <NavLink className={s.nav__item_link} activeClassName={s.active} to="/page2">
            Music
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
