import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Document from './Document';
import Demo from './Demo';
import About from './About';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Document showNavbarFooter={false} />
      <Demo showNavbarFooter={false} />
      <About showNavbarFooter={false} />
      <Footer />
    </div>
  );
};

export default Home;
