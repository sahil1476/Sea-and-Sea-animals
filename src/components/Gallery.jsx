import React from 'react';
import './Gallery.css';
import back from '../assets/backicon.png';
import fish1 from '../assets/f1.png'; 
import fish2 from '../assets/f2.png'; 
import fish3 from '../assets/f3.png'; 
import fish4 from '../assets/f4.png'; 
import fish5 from '../assets/f5.png'; 
import bubble_1 from '../assets/airbubble-1.png'

const Gallery = () => {

  const getRandomPosition = () => Math.random() * 100; 
  const Bubble = ({ src }) => {
    useEffect(() => {
      document.documentElement.style.setProperty('--random-x', getRandomPosition());
    }, []);
  
    return <img src={src} alt="Bubble" className="img" />;
  };

  return (
    <div className="gallery">

<div className="img-container">
        <img src={bubble_1} alt="bubble" className="img1" />
        <img src={bubble_1} alt="bubble" className="img2" />
        <img src={bubble_1} alt="bubble" className="img3" />
        <img src={bubble_1} alt="bubble" className="img4" />
        <img src={bubble_1} alt="bubble" className="img5" />
    </div>

      <div className="backtoHome">
        <a href="/">
          <button className="back-home-button">
            <img src={back} alt="Back to Home" className="back-icon" />
          </button>
        </a>
      </div>
      <div className="sea">
        <div className="fish fish1" style={{ backgroundImage: `url(${fish1})` }}></div>
        <div className="fish fish2" style={{ backgroundImage: `url(${fish2})` }}></div>
        <div className="fish fish3" style={{ backgroundImage: `url(${fish3})` }}></div>
        <div className="fish fish4" style={{ backgroundImage: `url(${fish4})` }}></div>
        <div className="fish fish5" style={{ backgroundImage: `url(${fish5})` }}></div>
        <div className="fish fish6" style={{ backgroundImage: `url(${fish2})` }}></div>
        <div className="fish fish7" style={{ backgroundImage: `url(${fish4})` }}></div>
        <div className="fish fish8" style={{ backgroundImage: `url(${fish3})` }}></div>
        <div className="fish fish9" style={{ backgroundImage: `url(${fish4})` }}></div>
        <div className="fish fish10" style={{ backgroundImage: `url(${fish1})` }}></div>
      </div>

    </div>
  );
};

export default Gallery;
