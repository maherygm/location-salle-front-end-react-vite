import { Outlet } from "react-router-dom";
import React from "react";
import NavBar from "./layout/navbar/navBar";
import MainFooter from "./layout/footer/mainFooter";
const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <MainFooter />
    </div>
  );
};

export default Main;
