import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Hero.css';
import jellyfish from '../assets/jellyfish.png';
import startfish from '../assets/starfish.png';


const Hero = () => {
  return (<>
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-heading">Discover the Deep Blue</h1>
        <p className="hero-subheading">Dive into the world of sea animals</p>
        <button className="hero-btn">Explore Now</button>
      </div>
      
      <div className="hero-img-container1">
        <img src={jellyfish} alt="Jellyfish" className="hero-img1" />
      </div>
      <div className="hero-img-container2">
        <img src={startfish} alt="Jellyfish" className="hero-img2" />
      </div>
      
    </section>
    </>
  );
};

export default Hero;
