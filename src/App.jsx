import './App.css';

import Header from './Sections/Header/Header';
import AboutUs from './Sections/AboutUs/AboutUs';
import ResultInNumbers from './Sections/ResultsInNumbers/ResultsInNumbers';
import CurrentProjects from './Sections/CurrentProjects/CurrentProjects';
import DonationFair from './Sections/DonationFair/DonationFair';
import HowToHelpUs from './Sections/HowToHelpUS/HowToHelpUs';
import Offers from './Sections/Offers/Offers';
import PhotoReports from './Sections/PhotoReports/PhotoReports';
import Chevrons from './Sections/Chevrons/Chevrons';
import OurTeam from './Sections/OurTeam/OurTeam';
import OurСommunity from './Sections/OurСommunity/OurСommunity';
import Footer from './Sections/Footer/Footer';

function App() {
  return (
    <div className='site-container'>
      <div className='site-content'>
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
