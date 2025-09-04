import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GlobeIcon, ShieldIcon, ClockIcon } from './CSSIcons';

const HeroContainer = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4xl);
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    text-align: center;
  }
`;

const HeroText = styled.div`
  color: var(--color-white);
  
  h1 {
    font-size: var(--font-size-5xl);
    font-weight: 700;
    margin-bottom: var(--spacing-lg);
    line-height: 1.1;
    color: var(--color-white);
    
    @media (max-width: 768px) {
      font-size: var(--font-size-4xl);
    }
  }
  
  .subtitle {
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-xl);
    color: var(--color-gray-200);
    font-weight: 300;
  }
  
  .description {
    font-size: var(--font-size-lg);
    margin-bottom: var(--spacing-2xl);
    color: var(--color-gray-200);
    line-height: 1.6;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const HeroVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const LogoContainer = styled.div`
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.1);
      opacity: 0;
    }
  }
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const HeroLogo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-top: var(--spacing-2xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: var(--spacing-lg);
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  .stat-number {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    color: var(--color-white);
    margin-bottom: var(--spacing-sm);
  }
  
  .stat-label {
    font-size: var(--font-size-sm);
    color: var(--color-gray-200);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            INTERPOL
          </motion.h1>
          
          <motion.div
            className="subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            International Criminal Police Organization
          </motion.div>
          
          <motion.p
            className="description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Connecting Police for a Safer World. We are the world's largest 
            international police organization, with 195 member countries working 
            together to combat transnational crime and terrorism.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ButtonGroup>
              <Link to="/services" className="btn btn-secondary">
                Our Services
              </Link>
              <Link to="/about" className="btn btn-outline" style={{ 
                borderColor: 'var(--color-white)', 
                color: 'var(--color-white)' 
              }}>
                Learn More
              </Link>
            </ButtonGroup>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <StatsGrid>
              <StatItem>
                <GlobeIcon style={{ marginBottom: '8px', color: 'var(--color-white)' }} />
                <div className="stat-number">195</div>
                <div className="stat-label">Member Countries</div>
              </StatItem>
              <StatItem>
                <ShieldIcon style={{ marginBottom: '8px', color: 'var(--color-white)' }} />
                <div className="stat-number">100+</div>
                <div className="stat-label">Years of Service</div>
              </StatItem>
              <StatItem>
                <ClockIcon style={{ marginBottom: '8px', color: 'var(--color-white)' }} />
                <div className="stat-number">24/7</div>
                <div className="stat-label">Global Support</div>
              </StatItem>
            </StatsGrid>
          </motion.div>
        </HeroText>
        
        <HeroVisual>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <LogoContainer>
              <HeroLogo 
                src="https://sagiuomwnhl6t6cz.public.blob.vercel-storage.com/logo.png" 
                alt="INTERPOL Logo"
              />
            </LogoContainer>
          </motion.div>
        </HeroVisual>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
