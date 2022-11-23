import { useEffect, useState } from 'react';
import { IRestaurant } from '../../../interfaces/IRestaurant.interface';
import { fetchStripeData } from '../../../services/dataService.service';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Sort from '../../sort/Sort';
import Stripe from '../../stripe/Stripe';
import './Restaurants.css'



function Restaurants() {
  const [restaurants, setRestaurants] = useState<Array<any>>()
  const [direction, setDirection] = useState<number>(1)

  useEffect(() => {
    (async () => {
      setRestaurants(await fetchStripeData("restaurants-page") as Array<any>)
    })()
  }, [])

  function sortRestaurants(sortedBy: String) {
    if (restaurants) {
      let sortedRestaurants: Array<IRestaurant> = []
      switch (sortedBy) {
        case 'Rating':
          sortedRestaurants = Array.from((restaurants as Array<IRestaurant>).sort((a, b) => a.rating > b.rating ? direction : -1 * direction))
          setDirection(-1*direction)
          setRestaurants(sortedRestaurants)
          break
        default:
          break
      }
    }
  }

  return (
      <div className="restaurantspage-container">
        <Header/>
        <Sort onSort={sortRestaurants} />
        { restaurants ? <Stripe title="" all={false} type="restaurants-page" data={restaurants}/> : "" }
        <Footer/>
      </div>
  );
}

export default Restaurants
