import React from 'react';
import Banner from '../../banner/Banner';
import Header from "../../header/Header";
import Stripe from '../../stripe/Stripe';

function Homepage() {
  return (
      <div className="container">
        <Header/>
        <Banner/>
        <Stripe title="popular restaurant in epicure:" all={true} type="restaurants"/>
        <Stripe title="signature dish of:" all={false} type="dishes"/>
      </div>
  );
}

export default Homepage;