import { useEffect, useRef, useState } from "react";
import "bulma/css/bulma.min.css";
import Lottie from "lottie-react";
import "./__signIn.scss";
import groovyWalkAnimation from "../../../assets/lotties/walk.json";
import { ArrowBack, Lock, Person } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import ButtonAnnimate from "../../../components/ui/button/ButtonAnnimate";
import { NavLink, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

const SignIn = () => {
  const lotieRef = useRef();

  // useEffect(() => {
  //   lotieRef.current.pause();
  // });

  const navigate = useNavigate();

  function navigateTo(params) {
    navigate("/dashboard/home");
  }

  const [emails, setEmails] = useState("");
  const [mdp, setMdp] = useState("");

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
      <div className="section-sign-in-pages">
        <div className="section section-1">
          <form>
            <p>Visual |space</p>
            <h2>
              Over 30 Million <br /> Shaping the perfect space
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              tempora impedit laboriosam accusantium vel sint ipsum dignissimos
              sed suscipit magni?
            </p>

            <div className="field ">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input is-medium"
                  type="texte"
                  placeholder="Entrez Votre Emails"
                  onBlur={() => lotieRef.current.pause()}
                  onChange={(e) => {
                    lotieRef.current.play();
                    setEmails(e.target.value);
                  }}
                  onKeyUp={() =>
                    setTimeout(() => {
                      lotieRef.current.pause();
                    }, 2000)
                  }
                  value={emails}
                />
                <span className="icon is-small is-left">
                  <Person />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input  is-medium"
                  type="password"
                  placeholder="mots de passe"
                  onBlur={() => lotieRef.current.pause()}
                  onChange={(e) => {
                    lotieRef.current.play();
                    setMdp(e.target.value);
                  }}
                  onKeyUp={() =>
                    setTimeout(() => {
                      lotieRef.current.pause();
                    }, 5000)
                  }
                  value={mdp}
                />
                <span className="icon is-small is-left">
                  <Lock />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div
              className="btn-container"
              onMouseEnter={() => lotieRef.current.play()}
              onMouseLeave={() => lotieRef.current.pause()}
            >
              <ButtonAnnimate title={"Connection"} />
            </div>
            <div className="fotter-sign">
              <p> No account Yet ? </p>
              <NavLink to={"/sign/signup"}>
                <p> Registered</p>
              </NavLink>
            </div>
          </form>
        </div>
        <div className="section section-2">
          <div className="lottie-container">
            <Lottie
              lottieRef={lotieRef}
              animationData={groovyWalkAnimation}
              autoPlay={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
