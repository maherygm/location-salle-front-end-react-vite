import { useState } from "react";
import "./__contact.css";
import LocationIcons from "../../../../../../assets/image/icon/svg/contactIcons/location-pin-alt-1-svgrepo-com.svg";

import EmailIcons from "../../../../../../assets/image/icon/svg/contactIcons/email-svgrepo-com.svg";

import PhoneIcons from "../../../../../../assets/image/icon/svg/contactIcons/phone-rounded-svgrepo-com.svg";

import SendIcons from "../../../../../../assets/image/icon/svg/contactIcons/send-2-svgrepo-com.svg";

// import  UserIcons  from "../../../../../../assets/image/icon/svg/contactIcons/user-rounded-svgrepo-com.svg";
const Contact = () => {
  const infos = [
    {
      icons: <img src={LocationIcons} className="icons" />,
      title: "Adress",
      content: "Fianarantsoa, Madagascar",
    },
    {
      icons: <img src={PhoneIcons} className="icons" />,
      title: "Telephone",
      content: "+261 01 537 37 ",
    },
    {
      icons: <img src={EmailIcons} className="icons" />,
      title: "Mail",
      content: "royalespacefianar@gmail.com ",
    },
  ];
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  let handlemousemove = (e) => {
    setVisible(true);
    let element = e.currentTarget;

    let client = element.getBoundingClientRect();

    let x = e.clientX - client.left - 40;
    let y = e.clientY - client.top - 50;

    setPosition({ x, y });
  };

  let handlemouseleave = () => {
    setVisible(false);
  };
  return (
    <div className="contact" id="contact">
      <div
        className="container-contact"
        onMouseMove={handlemousemove}
        onMouseLeave={handlemouseleave}
      >
        {visible && (
          <div
            className="round-contact"
            style={{
              position: "absolute",
              transform: `translate(${position.x}px,${position.y}px)`,
            }}
          ></div>
        )}
        <div className="main-contact-section">
          <div className="header-contact">
            <h3>Contactez nous</h3>
            <p>
              Nous sommes ravis d'établir le contact avec vous ! Votre avis est
              important pour nous. N'hésitez pas à remplir le formulaire
              ci-dessous nous joindre directement.
            </p>
          </div>
          <div className="main-contact">
            <div className="info-conact-us">
              {infos.map((info) => (
                <div className="info">
                  <div className="icon-contact">{info.icons}</div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="message-contact" onMouseEnter={handlemouseleave}>
              <h3>Envoyer un Message</h3>
              <div className="form-contact">
                <div className="text-field-contenaire name-users">
                  <input
                    type="text"
                    placeholder="Nom et Prenom"
                    className="text-field"
                  />
                </div>
                <div className="text-field-contenaire email-user">
                  <input
                    type="text"
                    className="text-field"
                    placeholder="E-mail"
                  />
                </div>
                <div className="text-area-contenaire message">
                  <textarea
                    type="text"
                    className="text-field text-area-message"
                    placeholder="Message"
                  />
                </div>
                <div className="btn-contact">
                  <button>
                    <img src={SendIcons} className="icons send-icon" />
                    {/* <SendIcons className="icons send-icon" /> */}
                    <p>Envoyer</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
