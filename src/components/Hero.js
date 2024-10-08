import React from 'react';
import './Hero.css'; 
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="Sect">
      <img src="/img with blur.png" alt="Curtain" className="Sect-img" />
      <div className="Sect-text">
        <img src="/pic1.png" alt="Curtain" className="logo" />
        <h1>Comfort to Elegance</h1>
        <p>Welcome to Glorious Fabric Pvt Ltd.</p>
        <Link to="/QUOTATION"><a className="button">QUOTATION</a></Link>
      </div>
    </section>
  );
}

export default Hero;