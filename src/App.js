import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Home from './pages/Home'; // Import the Home component

function AppContent() {
  const { theme } = useTheme();
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  return (
    <HomePage theme={theme} isDarkTheme={theme.isDarkTheme}>
      <GlobalStyles theme={theme} />
      <Router basename="/Optimus">
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> {/* Add route for Home page */}
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
      </Router>
      {/* Removed components rendered outside Router */}
    </HomePage>
  );
}

const HomePage = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.background};
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.isDarkTheme 
      ? 'linear-gradient(120deg, rgba(0, 27, 47, 0.95), rgba(56, 0, 61, 0.95))'
      : 'linear-gradient(120deg, rgba(255, 255, 255, 0.95), rgba(240, 240, 255, 0.95))'};
    z-index: -1;
    transition: all 0.3s ease;
  }
`;

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
