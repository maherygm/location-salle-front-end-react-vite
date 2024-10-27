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
           oups 😥 vous avez annuler votre payement 
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
