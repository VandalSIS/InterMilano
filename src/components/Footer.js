import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LocationIcon, PhoneIcon, EmailIcon } from './CSSIcons';

const FooterContainer = styled.footer`
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-4xl) 0 var(--spacing-xl);
  margin-top: var(--spacing-4xl);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
`;

const FooterSection = styled.div`
  h3 {
    color: var(--color-white);
    margin-bottom: var(--spacing-lg);
    font-size: var(--font-size-lg);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: var(--spacing-sm);
  
  a {
    color: var(--color-gray-200);
    text-decoration: none;
    transition: color var(--transition-fast);
    
    &:hover {
      color: var(--color-white);
    }
  }
`;

const ContactInfo = styled.div`
  p {
    color: var(--color-gray-200);
    margin-bottom: var(--spacing-sm);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  text-decoration: none;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--color-secondary);
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--spacing-xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: var(--color-gray-200);
  margin: 0;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  a {
    color: var(--color-gray-200);
    text-decoration: none;
    font-size: var(--font-size-sm);
    transition: color var(--transition-fast);
    
    &:hover {
      color: var(--color-white);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <h3>About INTERPOL</h3>
            <p style={{ color: 'var(--color-gray-200)', marginBottom: 'var(--spacing-lg)' }}>
              The world's largest international police organization, connecting police 
              for a safer world through global cooperation.
            </p>
            <ContactInfo>
              <p><LocationIcon style={{ display: 'inline-block', marginRight: '8px' }} /> 200 Quai Charles de Gaulle, 69006 Lyon, France</p>
              <p><PhoneIcon style={{ display: 'inline-block', marginRight: '8px' }} /> +33 4 72 44 70 00</p>
              <p><EmailIcon style={{ display: 'inline-block', marginRight: '8px' }} /> contact@interpol.int</p>
            </ContactInfo>
          </FooterSection>

          <FooterSection>
            <h3>Quick Links</h3>
            <FooterLinks>
              <FooterLink><Link to="/">Home</Link></FooterLink>
              <FooterLink><Link to="/about">About Us</Link></FooterLink>
              <FooterLink><Link to="/services">Our Services</Link></FooterLink>
              <FooterLink><Link to="/contact">Contact</Link></FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>Our Services</h3>
            <FooterLinks>
              <FooterLink><a href="#red-notices">Red Notices</a></FooterLink>
              <FooterLink><a href="#blue-notices">Blue Notices</a></FooterLink>
              <FooterLink><a href="#cybercrime">Cybercrime</a></FooterLink>
              <FooterLink><a href="#terrorism">Counter-terrorism</a></FooterLink>
              <FooterLink><a href="#organized-crime">Organized Crime</a></FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>Connect With Us</h3>
            <p style={{ color: 'var(--color-gray-200)', marginBottom: 'var(--spacing-lg)' }}>
              Follow us for the latest updates on global law enforcement cooperation.
            </p>
            <SocialLinks>
              <SocialLink href="https://twitter.com/INTERPOL_HQ" target="_blank" rel="noopener noreferrer">
                T
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/company/interpol" target="_blank" rel="noopener noreferrer">
                L
              </SocialLink>
              <SocialLink href="https://www.youtube.com/user/INTERPOLHQ" target="_blank" rel="noopener noreferrer">
                Y
              </SocialLink>
              <SocialLink href="https://www.instagram.com/interpol_hq" target="_blank" rel="noopener noreferrer">
                I
              </SocialLink>
            </SocialLinks>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © 2024 INTERPOL. All rights reserved. Connecting Police for a Safer World.
          </Copyright>
          <LegalLinks>
            <a href="https://www.interpol.int/Who-we-are/Terms-of-use" target="_blank" rel="noopener noreferrer">
              Terms of Use
            </a>
            <a href="https://www.interpol.int/Who-we-are/Privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <a href="https://www.interpol.int/Who-we-are/Cookie-policy" target="_blank" rel="noopener noreferrer">
              Cookie Policy
            </a>
          </LegalLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
