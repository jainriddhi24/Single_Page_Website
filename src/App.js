import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import Contact from './components/Contact';
import Course from './components/Course';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Attach the scroll event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Home />
        <About />
        <Course />
        <Contact />
        <Work />
        
        {showArrow && (
          <div
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              cursor: 'pointer',
            }}
          >
            <FaArrowUp onClick={scrollToTop} style={{ fontSize: 'large' }} />
          </div>
        )}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
