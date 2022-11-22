import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Sort from '../../sort/Sort';
import Stripe from '../../stripe/Stripe';
import './Restaurants.css'



function Restaurants() {
  return (
      <div className="restaurantspage-container">
        <Header/>
        <Sort/>
        <Stripe title="" all={false} type="restaurants-page"/>
        <Footer/>
      </div>
  );
}

export default Restaurants;