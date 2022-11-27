import './Homepage.css'
import Banner from '../../banner/Banner';
import Footer from '../../footer/Footer';
import Header from "../../header/Header";
import Stripe from '../../stripe/Stripe';
import Meaning from '../../meaning/Meaning';
import Chef from '../../chef/Chef';
import { useEffect, useState } from 'react';
import { fetchStripeData } from '../../../services/dataService.service';
import About from '../../about/About';


function Homepage() {
  const [popularRestaurants, setPopularRestaurants] = useState<Array<any>>()
  const [signatureDishes, setSignatureDishes] = useState<Array<any>>()

  useEffect(() => {
    (async () => {
      setPopularRestaurants(await fetchStripeData("restaurants") as Array<any>)
      setSignatureDishes(await fetchStripeData("dishes") as Array<any>)
    })()
}, [])

  return (
      <div className="homepage-container">
        <Header/>
        <Banner/>
        {popularRestaurants ? <Stripe title="popular restaurant in epicure:" all={true} type="restaurants" data={popularRestaurants}/> : ""}
        {signatureDishes ? <Stripe title="signature dish of:" all={false} type="dishes" data={signatureDishes}/> : ""}
        <Meaning/>
        <Chef/>
        <About/>
        <Footer/>
      </div>
  );
}

export default Homepage;