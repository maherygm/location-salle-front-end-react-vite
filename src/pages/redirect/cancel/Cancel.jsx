import { NavLink } from "react-router-dom";
import ButtonAnnimate from "../../../components/ui/button/ButtonAnnimate";

const Cancel = () => {
  return (
    <div>
      <div className="bg-white w-full h-screen flex justify-center items-center">
        <div className="w-fit  h-auto max-w-lg flex flex-col gap-5">
          <h1 className="text-6xl text-red-300">
            Votre Payement a n'est pas Effectuer
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
    </div>
  );
};

export default Cancel;
