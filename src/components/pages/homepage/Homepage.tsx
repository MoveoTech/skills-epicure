import React from 'react';
import Banner from '../../banner/Banner';
import Header from "../../header/Header";
import Stripe from '../../stripe/Stripe';

function Homepage() {
  return (
      <div className="container">
        <Header/>
        <Banner/>
        <Stripe title="popular restaurant in epicure:" all={true}/>
      </div>
  );
}

export default Homepage;