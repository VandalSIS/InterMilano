import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import ServicesPreview from '../components/ServicesPreview';
import NewsSection from '../components/NewsSection';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const Section = styled.section`
  padding: var(--spacing-4xl) 0;
  
  &:nth-child(even) {
    background-color: var(--color-gray-50);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-3xl);
  
  h2 {
    font-size: var(--font-size-4xl);
    margin-bottom: var(--spacing-lg);
    color: var(--color-primary);
  }
  
  p {
    font-size: var(--font-size-lg);
    color: var(--color-gray-600);
    max-width: 600px;
    margin: 0 auto;
  }
`;

const CTA = styled.div`
  text-align: center;
  padding: var(--spacing-4xl) 0;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: var(--color-white);
  
  h2 {
    color: var(--color-white);
    margin-bottom: var(--spacing-lg);
  }
  
  p {
    color: var(--color-gray-200);
    margin-bottom: var(--spacing-xl);
    font-size: var(--font-size-lg);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      
      <Section>
        <Container>
          <SectionHeader>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Global Law Enforcement Excellence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              INTERPOL is the world's largest international police organization, 
              enabling police around the world to work together to make the world a safer place.
            </motion.p>
          </SectionHeader>
          
          <StatsSection />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Core Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We provide a comprehensive range of services to support law enforcement 
              agencies worldwide in their fight against transnational crime.
            </motion.p>
          </SectionHeader>
          
          <ServicesPreview />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Latest Updates
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Stay informed about INTERPOL's latest operations, initiatives, and 
              global law enforcement cooperation efforts.
            </motion.p>
          </SectionHeader>
          
          <NewsSection />
        </Container>
      </Section>

      <CTA>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Learn More?</h2>
            <p>
              Discover how INTERPOL can support your law enforcement needs 
              and join our global network of police cooperation.
            </p>
            <ButtonGroup>
              <Link to="/services" className="btn btn-secondary">
                Explore Our Services
              </Link>
              <Link to="/contact" className="btn btn-outline" style={{ 
                borderColor: 'var(--color-white)', 
                color: 'var(--color-white)' 
              }}>
                Get in Touch
              </Link>
            </ButtonGroup>
          </motion.div>
        </Container>
      </CTA>
    </HomeContainer>
  );
};

export default Home;
