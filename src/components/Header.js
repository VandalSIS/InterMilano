import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MenuIcon, CloseIcon } from './CSSIcons';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-white);
  box-shadow: var(--shadow-md);
  z-index: var(--z-fixed);
  transition: all var(--transition-normal);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--color-secondary);
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: var(--spacing-sm);
  object-fit: contain;
  transition: transform var(--transition-fast);
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--color-white);
    flex-direction: column;
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-lg);
    gap: var(--spacing-md);
  }
`;

const NavLink = styled(Link)`
  color: var(--color-gray-600);
  text-decoration: none;
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  position: relative;
  
  &:hover {
    color: var(--color-primary);
    background-color: var(--color-gray-50);
  }
  
  &.active {
    color: var(--color-primary);
    background-color: var(--color-gray-50);
  }
  
  &.active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 2px;
    background-color: var(--color-primary);
    border-radius: var(--radius-full);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
  color: var(--color-primary);
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <HeaderContainer style={{ 
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'var(--color-white)',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none'
    }}>
      <HeaderContent>
        <Logo to="/" onClick={closeMobileMenu}>
          <LogoImage 
            src="https://sagiuomwnhl6t6cz.public.blob.vercel-storage.com/logo.png" 
            alt="INTERPOL Logo"
          />
          INTERPOL
        </Logo>

        <Nav isOpen={isMobileMenuOpen}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </Nav>

        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </MobileMenuButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
