import React, { useState } from "react";
import { t } from "../../../../../../utils/helpers/translation/i18nHelper";

// style imporation
import "./_about.css";

// Assets importation
import bibliotecIcon from "../../../../../../assets/image/icon/png/icons8_books_48px.png";
import classIcon from "../../../../../../assets/image/icon/png/icons8_google_classroom_48px_1.png";
import certificateIcon from "../../../../../../assets/image/icon/png/icons8_contract_48px_1.png";
import schoolIcon from "../../../../../../assets/image/icon/png/icons8_school_building_48px.png";
import AboutIllustration from "../../../../../../assets/image/illustration/floatingYoung.png";

function About() {
  return (
    <div className="supernova-container about flex w-full justify-center items-center">
      <div
        className="supernova-content max-w-7xl h-screen flex justify-center items-center"
        id="about"
      >
        <div className="leftside w-1/2">
          <small data-aos="fade-right" data-aos-delay="300">
            {t("about.lTitle")}
          </small>
          <h1 data-aos="fade-right" data-aos-delay="300">
            {t("about.Title")}
          </h1>
          <p data-aos="fade-up-right">{t("about.paragraphe1")}</p>
          <div className="distinct-info">
            <div
              className="distinct-info-items"
              data-aos="zoom-in-right"
              data-aos-delay="300"
            >
              <img src={bibliotecIcon} alt="about Icon" width={"35x"} />
              <span className="text-2xl">{t("about.info1")}</span>
            </div>
            <div
              className="distinct-info-items"
              data-aos="zoom-in-right"
              data-aos-delay="400"
            >
              <img src={classIcon} alt="about Icon" width={"35x"} />
              <span className="text-2xl">{t("about.info2")}</span>
            </div>
            <div
              className="distinct-info-items"
              data-aos="zoom-in-right"
              data-aos-delay="500"
            >
              <img src={schoolIcon} alt="about Icon" width={"35x"} />
              <span className="text-2xl">{t("about.info3")}</span>
            </div>
            <div
              className="distinct-info-items"
              data-aos="zoom-in-right"
              data-aos-delay="600"
            >
              <img src={certificateIcon} alt="about Icon" width={"35x"} />
              <span className="text-2xl">{t("about.info4")}</span>
            </div>
          </div>
          <button data-aos="zoom-in-right">{t("about.btn")}</button>
        </div>
        <div className="rigthside w-96">
          <img
            src={AboutIllustration}
            alt="About Illustration"
            data-aos="fade-up"
            data-aos-delay="600"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
