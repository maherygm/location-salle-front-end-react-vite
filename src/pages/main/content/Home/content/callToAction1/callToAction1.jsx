import React from "react";
import { Link } from "react-router-dom";
import { t } from "../../../../../../utils/helpers/translation/i18nHelper";

import "./_callToAction1.css";

// Assets importation
import CTAIllustration from "../../../../../../assets/image/illustration/roundArrow.png";

function CallToAction1() {
  return (
    <div className="supernova-container callToAction flex mt-20 ">
      <div className="cta1 h-full flex flex-col items-center">
        <div className="cta1-content h-fit">
          <h1 data-aos="fade-right" data-aos-delay="300">
            {t("cta1.Title")}
          </h1>
          <p data-aos="fade-down" data-aos-delay="400">
            {t("cta1.paragraphe")}
          </p>
          <Link className="cta1-btn" data-aos="fade-down" data-aos-delay="400">
            {t("cta1.btn")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CallToAction1;
