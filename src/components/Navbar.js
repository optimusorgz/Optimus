import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 10;
  
  backdrop-filter: blur(20px);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1%;
`;

const Logo = styled(Link)`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;

  &.active {
    color: ${props => props.theme.activeNavLink};
    &::after {
      width: 100%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const JoinButton = styled.a`
  color: ${props => props.theme.primary};
  text-decoration: none;
  padding: 8px 20px;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 25px;
  transition: all 0.3s ease;
  margin-left: 2rem;

  &:hover {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.background};
  }
`;

const Navbar = () => {
  const { theme } = useTheme();
  const location = useLocation();
  
  return (
    <Nav theme={theme}>
      <Container>
        <img src={require('../assets/symbol.png')} alt="logo" height="40" />
        <NavLinks theme={theme}>
          <li><NavLink to="/" theme={theme} className={location.pathname === '/' ? 'active' : ''}>HOME</NavLink></li>
          <li><NavLink to="/team" theme={theme} className={location.pathname === '/team' ? 'active' : ''}>TEAM</NavLink></li>
          <li><NavLink to="/gallery" theme={theme} className={location.pathname === '/gallery' ? 'active' : ''}>GALLERY</NavLink></li>
          <li><NavLink to="/events" theme={theme} className={location.pathname === '/events' ? 'active' : ''}>EVENTS</NavLink></li>
        </NavLinks>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <JoinButton 
            href="https://github.com/optimusorgz" 
            target="_blank" 
            rel="noopener noreferrer"
            theme={theme}
          >
            Join us
          </JoinButton>
          
        </div>
      </Container>
    </Nav>
  );
};

export default Navbar;
