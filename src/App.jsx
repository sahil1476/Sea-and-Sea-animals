// import './App.css'
// import Header from './components/header'
// import Hero from './components/Hero'
// import InfinityCard from './components/InfinityCards'
// import QuizComponent from './components/QuizComponent'
// import Footer from './components/Footer'
// function App() {
  
//  return (
//     <>
//     <Header />
//     <Hero />    
//     <InfinityCard />
//     <QuizComponent />
//     <Footer />
//     </>
//  )
// }

// export default App

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import InfinityCard from './components/InfinityCards';
import QuizComponent from './components/QuizComponent';
import Footer from './components/Footer';
import Gallery from './components/Gallery'; // Import the Gallery component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <Routes>
      <Route path="/" element={
            <>
            <Header />
            <div id="hero">
                 <Hero />
              </div><div id="sea-animals">
                    <InfinityCard />
                 </div><QuizComponent />
                 <div id="contact">
                    <Footer />
                 </div></>
      } />
            <Route path="/gallery" element={<Gallery />} />
      </Routes>      
    </Router>
  );
}

export default App;

