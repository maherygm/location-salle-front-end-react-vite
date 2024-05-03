import React, { useState } from "react";
import autre from "../../../../assets/illustr/autre.jpg";
import "./__autres.scss";
import { TextField } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ButtonAnnimate from "../../../../components/ui/button/ButtonAnnimate";
import { PayerOnline } from "../../../../services/clientService";
const Autres = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="w-full h-fit">
      <div
        className="clip-path"
        style={{
          background: `url(${autre})`,
        }}
      ></div>
      <div className="px-40 z-50 w-full justify-start">
        <div className="py-8">
          <h1 className="text-7xl">salles pour tous types d'événements</h1>
          <h2 className="text-2xl">
            Que ce soit pour des séminaires, des soirées, des réunions ou
            d'autres occasions spéciales
          </h2>
          <p className="text-2xl">
            Réservez dès aujourd'hui et profitez d'un cadre exceptionnel pour
            votre événement.
          </p>
        </div>
        <div className="flex gap-5 z-50">
          <div className="flex gap-6 max-w-96 flex-wrap">
            <TextField
              placeholder="nom"
              required
              variant="outlined"
              fullWidth
            />
            <TextField
              placeholder="prenom"
              required
              variant="outlined"
              fullWidth
            />
            <TextField
              placeholder="adresse email"
              required
              variant="outlined"
              fullWidth
            />
            <TextField
              placeholder="prix"
              required
              variant="outlined"
              fullWidth
              value={"600.000 MGA"}
            />
            <ButtonAnnimate
              onClick={() =>
                PayerOnline({
                  id: "price_1PC7U5JEf8eLUxMo9NAmPmLq",
                  days: 1,
                  typesEvenement: "autres",
                  dateEvenement: "10-12-2020",
                  prix: 600000,
                  user_id: 1,
                  mail: "maheryrak1234@gmail.com",
                })
              }
              title={"Faire une Reservation"}
            />
          </div>
          <div className="z-50">
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autres;
