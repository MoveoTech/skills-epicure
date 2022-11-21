import './Homepage.css'
import Banner from '../../banner/Banner';
import Footer from '../../footer/Footer';
import Header from "../../header/Header";
import Stripe from '../../stripe/Stripe';
import Meaning from '../../meaning/Meaning';


function Homepage() {
  return (
      <div className="homepage-container">
        <Header/>
        <Banner/>
        <Stripe title="popular restaurant in epicure:" all={true} type="restaurants"/>
        <Stripe title="signature dish of:" all={false} type="dishes"/>
        <Meaning/>
        <Footer/>
      </div>
  );
}

export default Homepage;