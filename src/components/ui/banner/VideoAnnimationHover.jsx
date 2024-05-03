import React, { useEffect, useRef } from "react";
import "./__videoannimation.css";
import videoM from "../../../assets/video/vid.mp4";
import { t } from "../../../utils/helpers/translation/i18nHelper";
import ButtonAnnimate from "../button/ButtonAnnimate";
import { useNavigate } from "react-router-dom";
const VideoAnnimationHover = () => {
  const videoRef = useRef(null);

  const canvasRef = useRef();

  useEffect(() => {
    const canvasCurent = canvasRef.current;
    const videoCurent = videoRef.current;
    function resizeCanvas() {
      canvasCurent.width = window.innerWidth;
      canvasCurent.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let ctx = canvasCurent.getContext("2d");

    let posX = 0;
    canvasCurent.addEventListener("mousemove", (event) => {
      setTimeout(() => (posX = event.offsetX), 100);
      console.log(posX);
    });

    function annimation() {
      ctx.clearRect(0, 0, canvasCurent.width, canvasCurent.height);

      ctx.save();
      ctx.beginPath();
      ctx.rect(posX - 600 / 2, 0, 600, canvasCurent.height);

      ctx.clip();

      ctx.drawImage(videoCurent, 0, 0, canvasCurent.width, canvasCurent.height);
      ctx.restore();
      requestAnimationFrame(annimation);
    }
    annimation();
  }, []);

  const navigate = useNavigate();

  function navigateTo(parameters) {
    navigate(parameters);
  }

  return (
    <div className="main-container-video relative">
      <canvas ref={canvasRef} className="canvas-viedo z-0" />
      <video
        ref={videoRef}
        className="video"
        type="video/mp4"
        autoPlay
        loop
        muted
      >
        <source src={videoM} />
      </video>
      <div className="absolute top-28">
        <h1 className="text-9xl z-10 mix-blend-difference text-white">
          {t("banner.lTitle")}
        </h1>
        <h1 className="text-7xl z-10 px-7 text-bann">{t("banner.bTitle1")}</h1>
      </div>
      <div className="absolute bottom-28 right-10">
        <ButtonAnnimate
          onClick={() => navigateTo("/loyer")}
          title={t("banner.bTitle3")}
        />
        <h1 className="text-7xl text-right w-full text-bann">
          {t("banner.bTitle2")}
        </h1>
      </div>
    </div>
  );
};

export default VideoAnnimationHover;
