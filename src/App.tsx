import React from 'react';
import './App.css';
import Homepage from './components/pages/homepage/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Restaurants from './components/pages/restaurants-page/Restaurants';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/restaurants' element={<Restaurants/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;