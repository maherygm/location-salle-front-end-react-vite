import React, { useState } from "react";
import seminaire from "../../../../assets/illustr/seminaire.jpg";
import "./__seminaire.scss";
import { TextField } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ButtonAnnimate from "../../../../components/ui/button/ButtonAnnimate";
import { PayerOnline } from "../../../../services/clientService";
const Seminaire = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="w-full h-fit">
      <div
        className="clip-path"
        style={{
          background: `url(${seminaire})`,
        }}
      ></div>
      <div className="px-40 z-50 w-full justify-start">
        <div className="py-8">
          <h1 className="text-7xl">
            Location de Salle pour Séminaires : Votre Espace Inspiran
          </h1>
          <h2 className="text-2xl">
            un environnement inspirant et des équipements modernes, notre salle
            offre le cadre parfait
          </h2>
          <p className="text-2xl">
            Découvrez notre espace de location de salle idéal pour vos
            séminaires
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
              value={"700.000 MGA"}
            />
            <ButtonAnnimate
              onClick={() =>
                PayerOnline({
                  id: "price_1PC7HqJEf8eLUxMoNtPBJtng",
                  days: 2,
                  typesEvenement: "seminaire",
                  dateEvenement: "10-12-2020",
                  prix: 700000,
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

export default Seminaire;
