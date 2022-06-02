import React from 'react';
import './App.css';
import Logo from './Logo';
import Navbar from './Navbar';
import image from './image-hero-desktop.png';
import Footer from './Footer'
import {Container} from './styles/Container.styled'


const App = () => {
  return (
    <div className="App">
      <Logo />
      <Navbar />
      <Container>
      <p>Get your team in sync, no matter your location. Streaming processes, create team rituals, and watch productivity soar.</p>
      </Container>
      <img src={image} alt='' />
      <Footer />
    </div>
  );
}

export default App;
