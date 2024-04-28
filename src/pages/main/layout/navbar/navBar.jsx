import React, { useState } from "react";
import "./navbar.scss";
import SwitchMode from "../../../../components/ui/switchMode/switchMode";
import ButtonAnnimate from "../../../../components/ui/button/ButtonAnnimate";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const [active, setActiver] = useState(0);
  return (
    <div className="nav-bar-main-containner ">
      <div className="logo">
        <h1>ROYAL ESPACE </h1>
      </div>
      <div className="main-navigation">
        <ul>
          <NavLink to={"/"}>
            <li
              onClick={() => setActiver(1)}
              className={`text-zinc-800   px-4 py-2 rounded-3xl  hover:bg-green-600/85 hover:text-white ${
                active === 1 ? "bg-green-600/85" : ""
              }`}
            >
              Home{" "}
            </li>
          </NavLink>
          <NavLink to={"/visite"}>
            <li
              onClick={() => setActiver(2)}
              className={`text-zinc-800   px-4 py-2 rounded-3xl  hover:bg-green-600/85 hover:text-white ${
                active === 2 ? "bg-green-600/85" : ""
              }`}
            >
              Nous Visiter{" "}
            </li>
          </NavLink>
          <NavLink>
            <li
              onClick={() => setActiver(3)}
              className={`text-zinc-800   px-4 py-2 rounded-3xl  hover:bg-green-600/85 hover:text-white ${
                active === 3 ? "bg-green-600/85" : ""
              }`}
            >
              A propos{" "}
            </li>
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
