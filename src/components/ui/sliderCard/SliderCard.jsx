import React, { useEffect, useRef, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Slider.css";

import cardimage1 from "../../../assets/branding/img/480x320/img27.jpg";
import cardimage2 from "../../../assets/branding/img/480x320/img28.jpg";
import cardimage3 from "../../../assets/branding/img/480x320/img29.jpg";
import cardimage4 from "../../../assets/branding/img/480x320/img30.jpg";
import cardimage5 from "../../../assets/branding/img/480x320/img31.jpg";
import cardimage6 from "../../../assets/branding/img/480x320/img32.jpg";
import { getEvent } from "../../../services/clientService";

import marriage from "../../../assets/illustr/marriage.jpg";
import seminaire from "../../../assets/illustr/seminaire.jpg";
import autre from "../../../assets/illustr/autre.jpg";
import soiree from "../../../assets/illustr/soirée.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "100%",
        background: "gray",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        borderRadius: "100%",
        display: "block",
        background: "gray",
      }}
      onClick={onClick}
    />
  );
}

const SliderCard = () => {
  const cardsData = [
    {
      title: "Card 1",
      image: cardimage1,
      content: "Content for Card 1",
    },
    {
      title: "Card 2",
      image: cardimage2,
      content: "Content for Card 2",
    },
    {
      title: "Card 3",
      image: cardimage3,
      content: "Content for Card 3",
    },
    {
      title: "Card 4",
      image: cardimage4,
      content: "Content for Card 3",
    },
    {
      title: "Card 5",
      image: cardimage5,
      content: "Content for Card 3",
    },
    {
      title: "Card 6",
      image: cardimage6,
      content: "Content for Card 3",
    },
    // Ajoutez d'autres données de carte selon vos besoins
  ];

  let [data, setdata] = useState([]);
  useEffect(() => {
    let dataF = getEvent();

    dataF.then((value) => {
      setdata(value.data);
    });
  }, [data]);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //annimation drag
  let [Position, setPosition] = useState({ x: null, y: null });

  let [visible, setVisible] = useState(false);

  let handlemousemove = (e) => {
    setVisible(true);
    let element = e.currentTarget;

    let client = element.getBoundingClientRect();

    let x = e.clientX - client.left;
    let y = e.clientY - client.top + 10;

    setPosition({ x, y });
  };

  let handlemouseleave = () => {
    setVisible(false);
  };

  const sliderRef = useRef();

  // Fonction pour passer à la diapositive suivante
  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  // Fonction pour revenir à la diapositive précédente
  const handlePreviousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const [mousePressed, setMousePressed] = useState(false);
  const handlemousedown = () => {
    setMousePressed(true);
  };
  const handlemouseup = () => {
    setMousePressed(false);
  };

  function checktypes(types) {
    let event = "";
    switch (types) {
      case "marriage":
        event = marriage;
        break;
      case "soirée":
        event = soiree;
        break;

      case "seminaire":
        event = seminaire;
        break;
      case "autre":
        event = autre;
        break;
      default:
        break;
    }
    return event;
  }

  console.log(sliderRef);
  return (
    <div
      className="slider-content-card"
      onMouseMove={handlemousemove}
      onMouseLeave={handlemouseleave}
      onMouseDown={handlemousedown}
      onMouseUp={handlemouseup}
    >
      {visible && (
        <div
          className={`hovered-component ${mousePressed ? "pressed" : ""}`}
          style={{
            position: "absolute",
            transform: `translate(${Position.x}px, ${Position.y}px)`,
          }}
          on
        >
          {!mousePressed && <p>Drag</p>}
          {mousePressed && (
            <>
              <div className="triangle triangle-1"></div>
              <div className="triangle triangle-2"></div>
            </>
          )}
        </div>
      )}

      <div
        onMouseLeave={() => {
          setVisible(false);
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {data.map((el, index) => (
            <div className="card" key={index}>
              <div
                className={`card-body`}
                style={{
                  background: `url(${checktypes(el.types)})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="contenaire-texte">
                  <h3 className="card-slider-title text-3xl">{el.types}</h3>
                  <p className="card-slider-content text-2xl">
                    {el.date_evenement}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderCard;
