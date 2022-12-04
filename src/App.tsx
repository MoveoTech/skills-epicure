import React from 'react';
import './App.css';
import Homepage from './components/pages/homepage/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Restaurants from './components/pages/restaurants-page/Restaurants';
import Restaurant from './components/pages/restaurnat-page/Restaurant';
import Chefs from './components/pages/chefs-page/Chefs';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/restaurants' element={<Restaurants/>} />
          <Route path='/restaurant-page/:name' element={<Restaurant/>} />
          <Route path='/chefs/' element={<Chefs/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;