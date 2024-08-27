import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Contact from '../src/pages/Contact';
import About from '../src/pages/About';
import Catering from '../src/pages/Catering';
import Menu from '../src/pages/Menu';
import Footer from '../src/components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;
