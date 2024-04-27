import ConnectionStatus from "../../../../components/ui/connexionStatus/connectionStatus";
import ScrollToTop from "../../../../components/ui/scrollToTop/scrollToTop";
import ScrollSlider from "../../../../components/ui/sliderScroll/ScrollSlider";
import ChatbotComponent from "../../../../components/assistance/ChatbotComponent";
import VideoAnnimationHover from "../../../../components/ui/banner/VideoAnnimationHover";
import SliderCard from "../../../../components/ui/sliderCard/SliderCard";

const Home = () => {
  return (
    <div className="w-full">
      <>
        <ConnectionStatus />
        <ScrollToTop />
        <ScrollSlider />
        <ChatbotComponent />
      </>
      <VideoAnnimationHover />
      <SliderCard />
    </div>
  );
};

export default Home;
