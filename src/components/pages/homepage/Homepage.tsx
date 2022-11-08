import React from 'react';
import Banner from '../../banner/Banner';
import Header from "../../header/Header";

function Homepage() {
  return (
      <div className="container">
        <Header/>
        <Banner/>
      </div>
  );
}

export default Homepage;