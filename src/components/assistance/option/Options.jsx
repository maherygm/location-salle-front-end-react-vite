import React from "react";
import "./__option.css";
const Options = (props) => {
  const options = [
    {
      text: "Information sur Nous",
      handler: props.actionProvider.handleAbouts,
      id: 1,
    },
    {
      text: "trouver le bon lieux",
      handler: props.actionProvider.handleLocation,
      id: 2,
    },
    {
      text: "Notre Service",
      handler: props.actionProvider.handleService,
      id: 3,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="option-button-quiz"
    >
      {option.text}
    </button>
  ));

  return (
    <div className="container-option-quiz">
      <h1 className="Title-option">Nos Service</h1>
      <div className="options-countainer-quiz">{buttonsMarkup}</div>
    </div>
  );
};

export default Options;
