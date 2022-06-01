import React from 'react';
import './App.css';
import Logo from './Logo';
import Navbar from './Navbar';
import image from './image-hero-desktop.png';
import Footer from './Footer'


const App = () => {
  return (
    <div className="App">
      <Logo />
      <Navbar />
      <img src={image} alt='' />
      <Footer />
    </div>
  );
}

export default App;
