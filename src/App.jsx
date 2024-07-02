import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FAQ from './FAQ/FAQ';
import Home from './Home';
import Header from './Sections/Header/Header';
import Footer from './Sections/Footer/Footer';

function App() {
  return (
    <BrowserRouter basename='/korchivnyky'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='faq' element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
