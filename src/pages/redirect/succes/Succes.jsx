import React from "react";
import { NavLink } from "react-router-dom";
import ConfettiComp from "../../../components/confetii/ContettiComp";
import ButtonAnnimate from "../../../components/ui/button/ButtonAnnimate";

const Succes = () => {
  return (
    <>
      <ConfettiComp activate={true} />
      <div className="bg-white w-full h-screen flex justify-center items-center">
        <div className="w-fit  h-auto max-w-lg flex flex-col gap-5">
          <h1 className="text-6xl  text-green-600 ">
            Votre Payement a éte Bien Efectuer ✅
          </h1>
          <p>vous allez recevoir votre facture par email merci a bientot 😊</p>
          <NavLink to={"/"}>
            <ButtonAnnimate title={"retourner Vers la page d'acueil"} />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Succes;
