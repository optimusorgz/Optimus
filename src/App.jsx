import React, { useEffect } from 'react';
import { ThemeProvider as CustomThemeProvider } from './context/ThemeContext.jsx';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles.jsx';
import { useTheme } from './context/ThemeContext.jsx';
import Navbar from './components/Navbar.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import Hero from './components/Hero.jsx';
import { Highlights } from './components/Highlights.jsx';
import Mission from './components/Mission.jsx';
import GalleryComponent from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Team from './pages/Team.jsx';
import Gallery from './pages/Gallery.jsx';
import Events from './pages/Events.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

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
    <AppContainer theme={theme} isDarkTheme={theme.isDarkTheme}>
      <GlobalStyles theme={theme} />
      <Navbar />
      <Routes>
        <Route index element={
          <>
            <Hero />
            <Highlights />
            <Mission />
            <GalleryComponent />
          </>
        } />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
`;


function App() {
  return (
    <CustomThemeProvider>
      <AppWrapper />
    </CustomThemeProvider>
  );
}

function AppWrapper() {
  const { theme } = useTheme();
  return (
    <StyledThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </StyledThemeProvider>
  );
}

export default App;