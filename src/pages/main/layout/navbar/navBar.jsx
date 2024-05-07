import React, { useEffect, useState } from "react";
import "./navbar.scss";
import SwitchMode from "../../../../components/ui/switchMode/switchMode";
import ButtonAnnimate from "../../../../components/ui/button/ButtonAnnimate";
import { NavLink, useNavigate } from "react-router-dom";
import LangSelection from "../../../../components/langaugesSelection/langSelection";
import { t } from "../../../../utils/helpers/translation/i18nHelper";
import { Avatar } from "@mui/material";
const NavBar = () => {
  const [active, setActiver] = useState(0);

  const [userCon, setUserConn] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  // setUserConn();
  // useEffect(() => {

  //   if (userCon) {
  //     setUserConn(true);
  //   }
  // }, [userCon]);
  const navigate = useNavigate();
  function navigateTO(parameters) {
    navigate(parameters);
  }
  return (
    <div className="nav-bar-main-containner">
      <div className="logo">
        <h1 className="text-green-600/85 text-3xl">ROYAL ESPACE </h1>
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
              {t("navbar.home")}
            </li>
          </NavLink>
          <NavLink to={"/visite"}>
            <li
              onClick={() => setActiver(2)}
              className={`text-zinc-800   px-4 py-2 rounded-3xl  hover:bg-green-600/85 hover:text-white ${
                active === 2 ? "bg-green-600/85" : ""
              }`}
            >
              {t("navbar.visite")}
            </li>
          </NavLink>
          <NavLink to={"/abouts"}>
            <li
              onClick={() => setActiver(3)}
              className={`text-zinc-800   px-4 py-2 rounded-3xl  hover:bg-green-600/85 hover:text-white ${
                active === 3 ? "bg-green-600/85" : ""
              }`}
            >
              {t("navbar.about")}
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="action-containner">
        <SwitchMode />
        <>
          {userCon ? (
            <div className="flex gap-3">
              <Avatar>{userCon.nom[0].toUpperCase()}</Avatar>
              <p> {userCon.email}</p>
            </div>
          ) : (
            <ButtonAnnimate
              title={t("navbar.signIn")}
              onClick={() => navigateTO("/sign/signin")}
            />
          )}
        </>
      </div>
      <LangSelection />
    </div>
  );
};

export default NavBar;
