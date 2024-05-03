import React from "react";
import ConfettiComp from "../../../components/confetii/ContettiComp";
import ButtonAnnimate from "../../../components/ui/button/ButtonAnnimate";
import { NavLink } from "react-router-dom";

const Succes = () => {
  return (
    <>
      <ConfettiComp activate={true} />
      <div className="bg-white w-full h-screen flex justify-center items-center">
        <div className="w-fit  h-auto max-w-lg flex flex-col gap-5">
          <h1 className="text-6xl  text-green-600 ">
            Votre Payement a éte Bien Efectuer
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus accusamus dicta eaque, non numquam temporibus fuga
            minus beatae? Similique, beatae. Quae ratione sequi, quod temporibus
            ad accusamus! Quibusdam cumque facere expedita minus illo, beatae
            quam quis quaerat vitae iusto tenetur a harum officiis similique
            maxime. Ab repellat praesentium sequi. Nesciunt.
          </p>

          <NavLink to={"/"}>
            <ButtonAnnimate title={"retourner Vers la page d'acueil"} />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Succes;
