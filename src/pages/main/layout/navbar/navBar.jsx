import React from "react";
import "./navbar.scss";
import SwitchMode from "../../../../components/ui/switchMode/switchMode";
import ButtonAnnimate from "../../../../components/ui/button/ButtonAnnimate";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav-bar-main-containner ">
      <div className="logo">
        <h1>ITF</h1>
      </div>
      <div className="main-navigation">
        <ul>
          <NavLink to={"/"}>
            <li className="hover:text-green-600">Home </li>
          </NavLink>
          <NavLink to={"/visite"}>
            <li className="hover:text-green-600">Nous Visiter </li>
          </NavLink>
          <NavLink>
            <li className="hover:text-green-600">A propos </li>
          </NavLink>
        </ul>
      </div>
      <div className="action-containner">
        <SwitchMode />
        <NavLink to={"/sign/signin"}>
          <ButtonAnnimate title={"sign In"} />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
