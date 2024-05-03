import React, { useState } from "react";
import "./__marriage.scss";
import marriage from "../../../../assets/illustr/marriage.jpg";
import { TextField } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ButtonAnnimate from "../../../../components/ui/button/ButtonAnnimate";

import { PayerOnline } from "../../../../services/clientService";
let ValuePiece = Date | null;

let Value = ValuePiece | [ValuePiece, ValuePiece];
const Marriage = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="w-full h-fit">
      <div
        className="clip-path"
        style={{
          background: `url(${marriage})`,
          zIndex: 0,
        }}
      ></div>

      <div className="px-40 z-50 w-full justify-start">
        <div className="py-8">
          <h1 className="text-7xl">
            Dans le doux éclat du soleil, deux <br /> âmes se rejoignent pour un
            voyage éternel
          </h1>
          <h2 className="text-2xl">
            À ce couple merveilleux, que ce jour de mariage soit le début
          </h2>
          <p className="text-2xl">d'une aventure inoubliable.</p>
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
              value={"1.000.000 MGA"}
            />
            <ButtonAnnimate
              onClick={() =>
                PayerOnline({
                  id: "price_1PC6gOJEf8eLUxMoFsjKAIlT",
                  days: 4,
                  typesEvenement: "marriage",
                  dateEvenement: "10-12-2020",
                  prix: 1000000,
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

export default Marriage;
