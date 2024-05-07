import React, { useState } from "react";
import soirée from "../../../../assets/illustr/soirée.jpg";
import "./___soiree.scss";
import { TextField } from "@mui/material";
import Calendar from "react-calendar";
import ButtonAnnimate from "../../../../components/ui/button/ButtonAnnimate";
import "react-calendar/dist/Calendar.css";
import { PayerOnline } from "../../../../services/clientService";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");
const Soire = () => {
  const [value, onChange] = useState(new Date());

  let user = JSON.parse(localStorage.getItem("user"));

  const [numberDay, setnumberDay] = useState(1);
  return (
    <div className="w-full h-fit">
      <div
        className="clip-path"
        style={{
          background: `url(${soirée})`,
        }}
      ></div>

      <div className="px-40 z-50 w-full justify-start">
        <div className="py-8">
          <h1 className="text-7xl">Notre espace de location pour soirées</h1>
          <h2 className="text-2xl">
            Réservez dès maintenant et créez des souvenirs mémorables dans un
            cadre exceptionnel
          </h2>
          <p className="text-2xl">
            Laissez-vous séduire par notre atmosphère chaleureuse et nos
            installations de qualité
          </p>
        </div>
        <div className="flex gap-5 z-50">
          <div className="flex gap-6 max-w-96 flex-wrap">
            <TextField
              placeholder="nom"
              value={user.nom}
              required
              variant="outlined"
              fullWidth
            />
            <TextField
              placeholder="prenom"
              value={user.prenom}
              required
              variant="outlined"
              fullWidth
            />
            <TextField
              placeholder="adresse email"
              required
              variant="outlined"
              fullWidth
              value={user.email}
            />
            <TextField
              placeholder="Nombre de Jour"
              required
              variant="outlined"
              fullWidth
              onChange={(e) => setnumberDay(e.target.value)}
              value={numberDay}
              type="number"
            />
            <TextField
              placeholder="prix"
              required
              variant="outlined"
              fullWidth
              value={"1.200.000 MGA"}
            />
            <ButtonAnnimate
              onClick={() =>
                PayerOnline({
                  id: "price_1PC7N6JEf8eLUxMoxBRFmpaY",
                  days: numberDay,
                  typesEvenement: "soirée",
                  dateEvenement: moment.utc(value).format("lll"),
                  prix: 1200000,
                  user_id: user.id,
                  mail: user.email,
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

export default Soire;
