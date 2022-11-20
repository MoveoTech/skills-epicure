import React from 'react';
import Banner from '../../banner/Banner';
import Footer from '../../footer/Footer';
import Header from "../../header/Header";

function Homepage() {
  return (
      <div className="homepage-container">
        <Header/>
        <Banner/>
        <Footer/>
      </div>
  );
}

export default Homepage;