import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CrimeReportForm from '../components/CrimeReportForm';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding-top: var(--spacing-2xl);
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: var(--color-white);
  padding: var(--spacing-4xl) 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`;

const HeroTitle = styled.h1`
  font-size: var(--font-size-5xl);
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
  color: var(--color-white);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
  }
`;

const HeroSubtitle = styled.p`
  font-size: var(--font-size-xl);
  color: var(--color-gray-200);
  max-width: 800px;
  margin: 0 auto var(--spacing-2xl) auto;
  line-height: 1.6;
`;

const HeroButton = styled(motion.button)`
  background: var(--color-white);
  color: var(--color-primary);
  border: none;
  padding: var(--spacing-lg) var(--spacing-2xl);
  border-radius: var(--radius-md);
  font-size: var(--font-size-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background: var(--color-gray-100);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;

const Section = styled.section`
  padding: var(--spacing-4xl) 0;
  
  &:nth-child(even) {
    background-color: var(--color-gray-50);
  }
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-4xl);
  font-weight: 600;
  color: var(--color-primary);
  text-align: center;
  margin-bottom: var(--spacing-3xl);
`;


const Contact = () => {
  const crimeReportRef = useRef(null);

  useEffect(() => {
    // Scroll to crime report form when component mounts
    if (crimeReportRef.current) {
      setTimeout(() => {
        crimeReportRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  }, []);

  const scrollToCrimeReport = () => {
    if (crimeReportRef.current) {
      crimeReportRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <ContactContainer>
      <HeroSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>Report a Crime to INTERPOL Canada</HeroTitle>
            <HeroSubtitle>
              Report criminal activity, get assistance, and connect with Canadian law enforcement. 
              Your safety and security are our priority. Use the form below to submit your report.
            </HeroSubtitle>
            <HeroButton
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={scrollToCrimeReport}
            >
              Start Crime Report →
            </HeroButton>
          </motion.div>
        </Container>
      </HeroSection>

      <Section ref={crimeReportRef}>
        <Container>
          <SectionTitle>Report a Crime</SectionTitle>
          <CrimeReportForm />
        </Container>
      </Section>
    </ContactContainer>
  );
};

export default Contact;
