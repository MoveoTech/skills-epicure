import { useEffect, useState } from 'react';
import { IRestaurant } from '../../../interfaces/IRestaurant.interface';
import { fetchStripeData } from '../../../services/dataService.service';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import Sort from '../../sort/Sort';
import Stripe from '../../stripe/Stripe';
import './Restaurants.css'



function Restaurants() {
  const [originalRestaurants, setOriginalRestaurants] = useState<Array<IRestaurant>>()
  const [restaurants, setRestaurants] = useState<Array<IRestaurant>>()

  useEffect(() => {
    (async () => {
      const restaurantsData = await fetchStripeData("restaurants-page") as Array<any>
      setOriginalRestaurants(restaurantsData)
      setRestaurants(restaurantsData)
    })()
  }, [])

  function sortRestaurants(sortStar: number) {
    if (sortStar === -1) {
      setRestaurants(originalRestaurants)
    }
    else if (originalRestaurants) 
      setRestaurants(Array.from((originalRestaurants).filter((restaurant) => restaurant.rating === sortStar )))
    
  }

  return (
      <div className="restaurantspage-container">
        <Header/>
        <Sort sortRestaurants={sortRestaurants} />
        { restaurants ? <Stripe title="" all={false} type="restaurants-page" data={restaurants}/> : "" }
        <Footer/>
      </div>
  )
}

export default Restaurants
