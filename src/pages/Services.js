import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RedNoticeIcon, BlueNoticeIcon, GreenNoticeIcon, YellowNoticeIcon, BlackNoticeIcon, PurpleNoticeIcon, ComputerIcon, ShieldIcon, ScaleIcon, GlobeIcon, StarIcon, CheckIcon } from '../components/CSSIcons';

const ServicesContainer = styled.div`
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

const SectionDescription = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-gray-600);
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-3xl);
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-2xl);
`;

const ServiceCard = styled(motion.div)`
  background: var(--color-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-gray-200);
  position: relative;
  overflow: hidden;
  transition: all var(--transition-normal);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.color || 'var(--color-primary)'};
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
  }
`;

const ServiceIcon = styled.div`
  margin-bottom: var(--spacing-lg);
  display: flex;
  justify-content: center;
  color: var(--color-primary);
`;

const ServiceTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  text-align: center;
`;

const ServiceDescription = styled.p`
  color: var(--color-gray-600);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  text-align: center;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: var(--spacing-lg);
  
  li {
    color: var(--color-gray-600);
    margin-bottom: var(--spacing-sm);
    display: flex;
    align-items: center;
    
    &::before {
      content: '✓';
      color: var(--color-success);
      font-weight: bold;
      margin-right: var(--spacing-sm);
    }
  }
`;

const SpecializedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-2xl);
`;

const SpecializedCard = styled(motion.div)`
  background: var(--color-white);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  text-align: center;
  border-top: 4px solid var(--color-primary);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
  }
`;

const SpecializedIcon = styled.div`
  margin-bottom: var(--spacing-lg);
  color: var(--color-primary);
  display: flex;
  justify-content: center;
`;

const SpecializedTitle = styled.h4`
  font-size: var(--font-size-lg);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
`;

const SpecializedDescription = styled.p`
  color: var(--color-gray-600);
  line-height: 1.6;
`;

const InfoSection = styled.div`
  background: var(--color-white);
  padding: var(--spacing-3xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  margin-top: var(--spacing-2xl);
  
  h3 {
    color: var(--color-primary);
    margin-bottom: var(--spacing-lg);
    text-align: center;
  }
  
  p {
    color: var(--color-gray-600);
    line-height: 1.7;
    margin-bottom: var(--spacing-lg);
  }
`;

const Services = () => {
  const notices = [
    {
      icon: RedNoticeIcon,
      title: 'Red Notices',
      description: 'International wanted persons notices for fugitives wanted for prosecution or to serve a sentence.',
      color: '#e53e3e',
      features: [
        'Global arrest warrants',
        'International cooperation',
        'Real-time updates',
        'Secure database access'
      ]
    },
    {
      icon: BlueNoticeIcon,
      title: 'Blue Notices',
      description: 'Requests for information about a person\'s identity, location, or activities in relation to a crime.',
      color: '#3182ce',
      features: [
        'Identity verification',
        'Location tracking',
        'Criminal intelligence',
        'Cross-border cooperation'
      ]
    },
    {
      icon: GreenNoticeIcon,
      title: 'Green Notices',
      description: 'Warnings and intelligence about persons who have committed criminal offenses and may repeat them.',
      color: '#38a169',
      features: [
        'Criminal warnings',
        'Intelligence sharing',
        'Prevention alerts',
        'Risk assessment'
      ]
    },
    {
      icon: YellowNoticeIcon,
      title: 'Yellow Notices',
      description: 'Used to help locate missing persons, often minors, or to help identify persons unable to identify themselves.',
      color: '#d69e2e',
      features: [
        'Missing persons alerts',
        'Identity assistance',
        'Family reunification',
        'Vulnerable persons protection'
      ]
    },
    {
      icon: BlackNoticeIcon,
      title: 'Black Notices',
      description: 'Used to seek information on unidentified bodies found in member countries.',
      color: '#2d3748',
      features: [
        'Unidentified bodies',
        'Forensic information',
        'Identification assistance',
        'Cross-border cooperation'
      ]
    },
    {
      icon: PurpleNoticeIcon,
      title: 'Purple Notices',
      description: 'Seek or provide information on modus operandi, objects, devices, and concealment methods used by criminals.',
      color: '#805ad5',
      features: [
        'Criminal methods',
        'Modus operandi',
        'Technology analysis',
        'Investigation support'
      ]
    }
  ];

  const specializedServices = [
    {
      icon: ComputerIcon,
      title: 'Cybercrime',
      description: 'Comprehensive support for combating cyber threats and digital crimes worldwide.'
    },
    {
      icon: ShieldIcon,
      title: 'Counter-terrorism',
      description: 'Specialized support and intelligence for counter-terrorism operations globally.'
    },
    {
      icon: ScaleIcon,
      title: 'Organized Crime',
      description: 'Fighting transnational organized crime networks and criminal enterprises.'
    },
    {
      icon: StarIcon,
      title: 'Financial Crime',
      description: 'Anti-money laundering, asset recovery, and financial investigations.'
    },
    {
      icon: GlobeIcon,
      title: 'Environmental Crime',
      description: 'Protecting wildlife and environment through specialized law enforcement support.'
    },
    {
      icon: CheckIcon,
      title: 'Human Trafficking',
      description: 'Combatting human trafficking networks and protecting victims.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <ServicesContainer>
      <HeroSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>Our Services</HeroTitle>
            <HeroSubtitle>
              Comprehensive global policing solutions to support law enforcement 
              agencies worldwide in their fight against transnational crime.
            </HeroSubtitle>
          </motion.div>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>INTERPOL Notices</SectionTitle>
          <SectionDescription>
            INTERPOL issues various types of notices to help law enforcement agencies worldwide 
            share critical information about crimes and criminals.
          </SectionDescription>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ServicesGrid>
              {notices.map((notice, index) => (
                <ServiceCard
                  key={index}
                  variants={itemVariants}
                  color={notice.color}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <ServiceIcon>
                    <notice.icon />
                  </ServiceIcon>
                  <ServiceTitle>{notice.title}</ServiceTitle>
                  <ServiceDescription>{notice.description}</ServiceDescription>
                  <ServiceFeatures>
                    {notice.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ServiceFeatures>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Specialized Crime Areas</SectionTitle>
          <SectionDescription>
            INTERPOL provides specialized support and expertise in key areas of transnational crime.
          </SectionDescription>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SpecializedGrid>
              {specializedServices.map((service, index) => (
                <SpecializedCard
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <SpecializedIcon>
                    <service.icon />
                  </SpecializedIcon>
                  <SpecializedTitle>{service.title}</SpecializedTitle>
                  <SpecializedDescription>{service.description}</SpecializedDescription>
                </SpecializedCard>
              ))}
            </SpecializedGrid>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>I-24/7 Global Communication System</SectionTitle>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <InfoSection>
              <h3>Secure Global Police Communications</h3>
              <p>
                INTERPOL's secure global police communications system enables member countries to 
                exchange information in real-time, 24 hours a day, 365 days a year. This system 
                allows police forces worldwide to access INTERPOL's databases and share critical 
                information instantly, helping to prevent and solve crimes.
              </p>
              <p>
                The I-24/7 system provides secure access to INTERPOL's databases including wanted 
                persons, stolen vehicles, stolen travel documents, and other critical law enforcement 
                information. This real-time access helps police officers make informed decisions 
                and take immediate action when needed.
              </p>
            </InfoSection>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Training and Capacity Building</SectionTitle>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <InfoSection>
              <h3>Enhancing Global Law Enforcement Capabilities</h3>
              <p>
                INTERPOL provides comprehensive training programs and capacity-building initiatives 
                to help member countries enhance their law enforcement capabilities and stay ahead 
                of evolving criminal threats. Our training programs cover a wide range of topics 
                including cybercrime investigation, counter-terrorism, financial crime, and 
                environmental protection.
              </p>
              <p>
                Through our global network of training centers and partnerships with academic 
                institutions, we deliver specialized training programs tailored to the specific 
                needs of different regions and law enforcement agencies. This ensures that police 
                officers worldwide have access to the latest techniques and technologies in 
                crime fighting.
              </p>
            </InfoSection>
          </motion.div>
        </Container>
      </Section>
    </ServicesContainer>
  );
};

export default Services;
