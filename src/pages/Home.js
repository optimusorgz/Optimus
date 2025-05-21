import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero';
import { Highlights } from '../components/Highlights';
import Mission from '../components/Mission';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

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

const Home = () => {
  const { theme, isDarkTheme } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  return (
    <HomePage theme={theme} isDarkTheme={isDarkTheme}>
      <Hero />
      <Highlights />
      <Mission />
      <Gallery />
      <Footer />
    </HomePage>
  );
};

export default Home;