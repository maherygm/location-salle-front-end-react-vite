import { useState } from "react";
import { NavLink } from "react-router-dom";
import ButtonAnnimate from "../../../../components/ui/button/ButtonAnnimate";

const Header = () => {
  const [active, setActiver] = useState(1);
  return (
    <div className="w-full flex justify-center items-center z-50">
      <ul className="flex  gap-5 mt-3 px-8 py-4 bg-white rounded-full shadow-md">
        <NavLink to={"/loyer"}>
          <li
            onClick={() => setActiver(1)}
            className={`text-3xl ${
              active === 1 ? "bg-black/85 " : ""
            } text-black/65  cursor-pointer px-3 py-1 rounded-full`}
          >
            <p className={`${active === 1 ? " text-white" : "text-black"}`}>
              {" "}
              Marriages
            </p>
          </li>
        </NavLink>
        <NavLink to={"/loyer/seminaire"}>
          <li
            onClick={() => setActiver(2)}
            className={`text-3xl ${
              active === 2 ? "bg-black/85 text-white" : ""
            } text-black/65 cursor-pointer px-3 py-1 rounded-full`}
          >
            <p className={`${active === 2 ? " text-white" : "text-black"}`}>
              Seminaires
            </p>
          </li>
        </NavLink>

        <NavLink to={"/loyer/soiree"}>
          <li
            onClick={() => setActiver(3)}
            className={`text-3xl ${
              active === 3 ? "bg-black/85 text-white" : ""
            } text-black/65 cursor-pointer px-3 py-1 rounded-full`}
          >
            <p className={`${active === 3 ? " text-white" : "text-black"}`}>
              {" "}
              Soirée
            </p>
          </li>
        </NavLink>
        <NavLink to={"/loyer/autres"}>
          <li
            onClick={() => setActiver(4)}
            className={`text-3xl ${
              active === 4 ? "bg-black/85 text-white" : ""
            } text-black/65 cursor-pointer px-3 py-1 rounded-full`}
          >
            <p className={`${active === 4 ? " text-white" : "text-black"}`}>
              Autres
            </p>
          </li>
        </NavLink>
        <NavLink to={"/"}>
          <ButtonAnnimate title={"Accueil"} />
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
