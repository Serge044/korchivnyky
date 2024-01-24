import "./App.css";

import Header from "./header/Header";
import AboutUs from "./about-us/AboutUs";
import ResultInNumbers from "./resultInNumbers/ResultInNumbers";
import CurrentProjects from "./currentProjects/CurrentProjects";
import DonationFair from "./donationFair/DonationFair";
import HowToHelpUs from "./howToHelpUS/HowToHelpUs";
import Offers from "./offers/Offers";
import PhotoReports from "./photoReports/PhotoReports";
import Chevrons from "./chevrons/Chevrons";
import OurTeam from "./ourTeam/OurTeam";
import OurСommunity from "./ourСommunity/OurСommunity";
import OurPartners from "./ourPartners/ourPartners";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="siteContainer">
      <div className="siteContent">
        <Header />
        <AboutUs />
        <ResultInNumbers />
        <CurrentProjects />
        <DonationFair />
        <HowToHelpUs />
        <Offers />
        <PhotoReports />
        <Chevrons />
        <OurTeam />
        <OurСommunity />
        <OurPartners />
        <Footer />
      </div>
    </div>
  );
}

export default App;
