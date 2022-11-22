import { useEffect, useState } from 'react';
import { fetchStripeData } from '../../../services/dataService.service';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Sort from '../../sort/Sort';
import Stripe from '../../stripe/Stripe';
import './Restaurants.css'



function Restaurants() {
  const [restaurants, setRestaurants] = useState<Array<any>>()

  useEffect(() => {
    (async () => {
      setRestaurants(await fetchStripeData("restaurants-page") as Array<any>)
    })()
}, [])

  return (
      <div className="restaurantspage-container">
        <Header/>
        <Sort/>
        { restaurants ? <Stripe title="" all={false} type="restaurants-page" data={restaurants}/> : "" }
        <Footer/>
      </div>
  );
}

export default Restaurants;