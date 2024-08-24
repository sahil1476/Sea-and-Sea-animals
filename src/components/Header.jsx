                
// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (<div className='fix'>
//     <header className="header">
//       <nav className="navbar">
//         <ul className="nav-items">
//           <li className="nav-item">Home</li>
//           <li className="nav-item">Sea-Animals</li>
//           <li className="nav-item">Gallery</li>
//           <li className="nav-item">Contact</li>
//         </ul>
//       </nav>
//     </header>
//     </div>
//   );
// };

// export default Header;


import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import wave from '../assets/wave.png';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='fix'>
      <header className="header">
        <nav className="navbar">
          <ul className="nav-items">
            <li className="nav-item" onClick={() => scrollToSection('hero')}>
              Home
            </li>
            <li className="nav-item" onClick={() => scrollToSection('sea-animals')}>
              Sea-Animals
            </li>
            <li className="nav-item">
              <Link to="/gallery">🌊Sea</Link>
            </li>
            <li className="nav-item" onClick={() => scrollToSection('contact')}>
              Contact
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

