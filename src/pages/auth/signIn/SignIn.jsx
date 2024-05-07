import { useEffect, useRef, useState } from "react";
import "bulma/css/bulma.min.css";
import Lottie from "lottie-react";
import "./__signIn.scss";
import groovyWalkAnimation from "../../../assets/lotties/walk.json";
import { ArrowBack, Lock, Person } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";

import ButtonAnnimate from "../../../components/ui/button/ButtonAnnimate";
import { NavLink, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { login } from "../../../services/clientService";

const SignIn = () => {
  const notifySuccess = () =>
    toast.success("Connection Reussis", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const notifyErr = () =>
    toast.error("Erreur d'authentification", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const navigate = useNavigate();
  function Nav(parameters) {
    navigate("/");
  }

  function log(parameters) {
    let islog = login(mail, mdp);
    islog.then((value) => {
      if (value.login) {
        localStorage.setItem("user", JSON.stringify(value.user));
        notifySuccess("Vous etes connecter 😁");
        setTimeout(() => {
          Nav();
        }, 3000);
      } else {
        notifyErr("Erreur de onnection 😥");
      }
    });
  }
  const [mail, setMail] = useState("");
  const [mdp, setMdp] = useState("");
  return (
    <div className="sign-in-main-container">
      <div className="back-btn">
        <NavLink className="nav-link" to={"/"}>
          <IconButton className="icons-btn">
            <ArrowBack />
          </IconButton>
          <p>Revenir en Arriere</p>
        </NavLink>
      </div>
      <div className="flex justify-center items-center flex-col w-full h-full ">
        <h2>ROYAL ESPACE</h2>
        <div className="flex justify-center items-center flex-col gap-7 max-w-screen-sm w-1/2 py-16 h-auto shadow-md px-28 rounded-xl">
          <h1 className="text-3xl">Connection</h1>
          <div className="w-full flex flex-col gap-4  ">
            <TextField
              placeholder="Email"
              value={mail}
              fullWidth
              variant="filled"
              onChange={(e) => setMail(e.target.value)}
            />
            <TextField
              placeholder="Mots de passes"
              type="password"
              fullWidth
              variant="filled"
              onChange={(e) => setMdp(e.target.value)}
              value={mdp}
            />
          </div>
          <ButtonAnnimate title={"se connecter"} onClick={() => log()} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
