import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ScaleIcon, GlobeIcon, ShieldIcon, StarIcon } from '../components/CSSIcons';

const AboutContainer = styled.div`
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
  margin: 0 auto;
  line-height: 1.6;
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
`;

const ContentText = styled.div`
  h3 {
    font-size: var(--font-size-2xl);
    color: var(--color-primary);
    margin-bottom: var(--spacing-lg);
  }
  
  p {
    color: var(--color-gray-600);
    line-height: 1.7;
    margin-bottom: var(--spacing-lg);
  }
`;

const ContentVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  background: var(--color-white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  color: var(--color-primary);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-2xl);
`;

const StatCard = styled.div`
  text-align: center;
  padding: var(--spacing-xl);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  
  .stat-number {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: var(--spacing-sm);
  }
  
  .stat-label {
    color: var(--color-gray-600);
    font-weight: 500;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-2xl);
`;

const ValueCard = styled.div`
  background: var(--color-white);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  text-align: center;
  border-top: 4px solid var(--color-primary);
  
  .value-icon {
    margin-bottom: var(--spacing-lg);
    color: var(--color-primary);
    display: flex;
    justify-content: center;
  }
  
  h4 {
    font-size: var(--font-size-xl);
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
  }
  
  p {
    color: var(--color-gray-600);
    line-height: 1.6;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--color-primary);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: var(--spacing-3xl);
  padding-left: 50%;
  
  @media (max-width: 768px) {
    padding-left: 60px;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 20px;
    width: 16px;
    height: 16px;
    background: var(--color-primary);
    border-radius: 50%;
    border: 4px solid var(--color-white);
    box-shadow: 0 0 0 4px var(--color-primary);
    
    @media (max-width: 768px) {
      left: 12px;
    }
  }
  
  .timeline-content {
    background: var(--color-white);
    padding: var(--spacing-xl);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    
    .year {
      color: var(--color-primary);
      font-weight: 700;
      font-size: var(--font-size-lg);
      margin-bottom: var(--spacing-sm);
    }
    
    h4 {
      color: var(--color-primary);
      margin-bottom: var(--spacing-sm);
    }
    
    p {
      color: var(--color-gray-600);
      line-height: 1.6;
    }
  }
`;

const About = () => {
  const keyFacts = [
    { number: '1923', label: 'Founded' },
    { number: '195', label: 'Member Countries' },
    { number: '1000+', label: 'Staff Members' },
    { number: '24/7', label: 'Operations' }
  ];

  const values = [
    {
      icon: ScaleIcon,
      title: 'Neutrality',
      description: 'INTERPOL remains politically neutral and does not intervene in political, military, religious, or racial matters.'
    },
    {
      icon: GlobeIcon,
      title: 'Cooperation',
      description: 'We facilitate international police cooperation to combat transnational crime and terrorism.'
    },
    {
      icon: StarIcon,
      title: 'Innovation',
      description: 'We use cutting-edge technology and innovative approaches to support law enforcement worldwide.'
    },
    {
      icon: ShieldIcon,
      title: 'Transparency',
      description: 'We maintain transparency in our operations while respecting the confidentiality of ongoing investigations.'
    }
  ];

  const timeline = [
    {
      year: '1923',
      title: 'Foundation',
      description: 'INTERPOL was founded in Vienna, Austria, as the International Criminal Police Commission.'
    },
    {
      year: '1946',
      title: 'Post-War Revival',
      description: 'The organization was revived after World War II and moved its headquarters to Paris, France.'
    },
    {
      year: '1989',
      title: 'Lyon Headquarters',
      description: 'INTERPOL moved its General Secretariat to Lyon, France, where it remains today.'
    },
    {
      year: '2000s',
      title: 'Digital Transformation',
      description: 'Launch of I-24/7 global communication system and digital databases for international cooperation.'
    },
    {
      year: 'Today',
      title: 'Global Leadership',
      description: 'Leading international police cooperation with 195 member countries and advanced technology systems.'
    }
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>About INTERPOL</HeroTitle>
            <HeroSubtitle>
              The world's largest international police organization, connecting police 
              for a safer world through global cooperation and innovation.
            </HeroSubtitle>
          </motion.div>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Our Mission</SectionTitle>
          <ContentGrid>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContentText>
                <h3>Connecting Police for a Safer World</h3>
                <p>
                  INTERPOL is the world's largest international police organization, with 195 member countries. 
                  Our role is to enable police around the world to work together to make the world a safer place.
                </p>
                <p>
                  We provide a range of expertise and capabilities to support three main areas of transnational crime: 
                  terrorism, cybercrime, and organized crime. Our global network ensures that law enforcement 
                  agencies can share information and coordinate operations across borders.
                </p>
              </ContentText>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContentVisual>
                <GlobeIcon />
              </ContentVisual>
            </motion.div>
          </ContentGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Key Facts</SectionTitle>
          <StatsGrid>
            {keyFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StatCard>
                  <div className="stat-number">{fact.number}</div>
                  <div className="stat-label">{fact.label}</div>
                </StatCard>
              </motion.div>
            ))}
          </StatsGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Our Core Values</SectionTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ValueCard>
                  <div className="value-icon">
                    <value.icon />
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </ValueCard>
              </motion.div>
            ))}
          </ValuesGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Our History</SectionTitle>
          <Timeline>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TimelineItem>
                  <div className="timeline-content">
                    <div className="year">{item.year}</div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </TimelineItem>
              </motion.div>
            ))}
          </Timeline>
        </Container>
      </Section>

      <Section>
        <Container>
          <ContentGrid>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContentVisual>
                <ShieldIcon />
              </ContentVisual>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContentText>
                <h3>Governance</h3>
                <p>
                  INTERPOL is governed by a General Assembly, which meets annually and is composed of delegates 
                  appointed by the governments of member countries. The Executive Committee, elected by the 
                  General Assembly, supervises the execution of the decisions of the General Assembly.
                </p>
                <p>
                  The General Secretariat, headed by the Secretary General, is responsible for the day-to-day 
                  work of fighting international crime. Our headquarters in Lyon, France, serves as the central 
                  hub for global police cooperation.
                </p>
              </ContentText>
            </motion.div>
          </ContentGrid>
        </Container>
      </Section>
    </AboutContainer>
  );
};

export default About;
