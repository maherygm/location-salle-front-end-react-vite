import ConnectionStatus from "../../../../components/ui/connexionStatus/connectionStatus";
import ScrollToTop from "../../../../components/ui/scrollToTop/scrollToTop";
import ScrollSlider from "../../../../components/ui/sliderScroll/ScrollSlider";
import ChatbotComponent from "../../../../components/assistance/ChatbotComponent";
import VideoAnnimationHover from "../../../../components/ui/banner/VideoAnnimationHover";
import SliderCard from "../../../../components/ui/sliderCard/SliderCard";
import About from "./content/about/about";
import Contact from "./content/contact/Contact";
import CallToAction1 from "./content/callToAction1/callToAction1";
import { useEffect } from "react";
import Aos from "aos";

import { Link } from "react-router-dom";
import { t } from "../../../../utils/helpers/translation/i18nHelper";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-full">
      <>
        <ConnectionStatus />
        <ScrollToTop />
        <ScrollSlider />
        <ChatbotComponent />
      </>
      <VideoAnnimationHover />
      <About />
      <div className="flex justify-center items-center p-6">
        <div className="cta1-content h-fit">
          <h1
            data-aos="fade-right"
            className="text-7xl text-about"
            style={{
              color: "var(--darkFontColor)",
            }}
            data-aos-delay="300"
          >
            {t("cta1.Title")}
          </h1>
          <p
            data-aos="fade-down"
            style={{
              color: "var(--darkFontColor)",
            }}
            className="text-2xl text-about"
            data-aos-delay="400"
          >
            {t("cta1.paragraphe")}
          </p>
        </div>
      </div>
      <SliderCard />
      <CallToAction1 />
      <Contact />
    </div>
  );
};

export default Home;
