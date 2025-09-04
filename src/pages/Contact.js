import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LocationIcon, PhoneIcon, EmailIcon, ClockIcon, ComputerIcon, ShieldIcon, GlobeIcon } from '../components/CSSIcons';

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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-2xl);
`;

const ContactCard = styled(motion.div)`
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
    background: var(--color-primary);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
  }
`;

const ContactHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-lg);
`;

const ContactIcon = styled.div`
  margin-right: var(--spacing-md);
  color: var(--color-primary);
`;

const ContactTitle = styled.h3`
  font-size: var(--font-size-xl);
  color: var(--color-primary);
  margin: 0;
`;

const ContactInfo = styled.div`
  p {
    color: var(--color-gray-600);
    margin-bottom: var(--spacing-sm);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  background: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  text-decoration: none;
  font-weight: 500;
  margin-top: var(--spacing-md);
  transition: all var(--transition-fast);
  
  &:hover {
    background: var(--color-primary-light);
    transform: translateY(-2px);
  }
`;

const EmergencyCard = styled(motion.div)`
  background: linear-gradient(135deg, #e53e3e, #c53030);
  color: var(--color-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
  }
`;

const EmergencyHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-lg);
`;

const EmergencyIcon = styled.div`
  margin-right: var(--spacing-md);
  color: var(--color-white);
`;

const EmergencyTitle = styled.h3`
  font-size: var(--font-size-xl);
  color: var(--color-white);
  margin: 0;
`;

const EmergencyDescription = styled.p`
  color: var(--color-gray-200);
  margin-bottom: var(--spacing-lg);
`;

const EmergencyButton = styled.a`
  display: inline-block;
  background: var(--color-white);
  color: var(--color-error);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-fast);
  
  &:hover {
    background: var(--color-gray-100);
    transform: translateY(-2px);
  }
`;

const ResourcesSection = styled.div`
  background: var(--color-white);
  padding: var(--spacing-3xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  margin-top: var(--spacing-2xl);
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
`;

const ResourceItem = styled.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-lg);
  background: var(--color-gray-50);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
  
  &:hover {
    background: var(--color-gray-100);
    transform: translateX(5px);
  }
  
  .resource-icon {
    font-size: 1.5rem;
    margin-right: var(--spacing-md);
  }
  
  .resource-text {
    color: var(--color-gray-700);
    font-weight: 500;
  }
`;

const Contact = () => {
  const offices = [
    {
      icon: LocationIcon,
      title: 'General Secretariat',
      address: '200 Quai Charles de Gaulle, 69006 Lyon, France',
      phone: '+33 4 72 44 70 00',
      email: 'contact@interpol.int'
    },
    {
      icon: GlobeIcon,
      title: 'Regional Bureau for Asia and the Pacific',
      address: 'Bangkok, Thailand',
      phone: '+66 2 205 4000',
      email: 'bangkok@interpol.int'
    },
    {
      icon: GlobeIcon,
      title: 'Regional Bureau for the Americas',
      address: 'Buenos Aires, Argentina',
      phone: '+54 11 4809 2000',
      email: 'buenosaires@interpol.int'
    },
    {
      icon: GlobeIcon,
      title: 'Regional Bureau for Africa',
      address: 'Abidjan, Côte d\'Ivoire',
      phone: '+225 20 30 40 50',
      email: 'abidjan@interpol.int'
    }
  ];

  const emergencyContacts = [
    {
      icon: ClockIcon,
      title: '24/7 Command and Coordination Centre',
      description: 'For urgent police assistance and coordination',
      phone: '+33 4 72 44 70 00'
    },
    {
      icon: ComputerIcon,
      title: 'Cybercrime Reporting',
      description: 'Report cybercrime incidents',
      email: 'cybercrime@interpol.int'
    },
    {
      icon: ShieldIcon,
      title: 'Terrorism Hotline',
      description: 'Counter-terrorism intelligence',
      phone: '+33 4 72 44 70 00'
    }
  ];

  const resources = [
    { icon: '🔍', text: 'Wanted Persons Database' },
    { icon: '🚗', text: 'Stolen Vehicle Database' },
    { icon: '📄', text: 'Stolen Travel Documents Database' },
    { icon: '📚', text: 'Training Materials' },
    { icon: '📊', text: 'Publications and Reports' },
    { icon: '🌐', text: 'Official Website' }
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
    <ContactContainer>
      <HeroSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>Contact INTERPOL</HeroTitle>
            <HeroSubtitle>
              Get in touch with the world's largest international police organization. 
              We're here to support law enforcement agencies worldwide.
            </HeroSubtitle>
          </motion.div>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Headquarters & Regional Offices</SectionTitle>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ContactGrid>
              {offices.map((office, index) => (
                <ContactCard
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <ContactHeader>
                    <ContactIcon>
                      <office.icon />
                    </ContactIcon>
                    <ContactTitle>{office.title}</ContactTitle>
                  </ContactHeader>
                  <ContactInfo>
                    <p>📍 {office.address}</p>
                    <ContactButton href={`tel:${office.phone}`}>
                      📞 {office.phone}
                    </ContactButton>
                    <ContactButton href={`mailto:${office.email}`}>
                      ✉️ {office.email}
                    </ContactButton>
                  </ContactInfo>
                </ContactCard>
              ))}
            </ContactGrid>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Emergency Contacts</SectionTitle>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ContactGrid>
              {emergencyContacts.map((contact, index) => (
                <EmergencyCard
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <EmergencyHeader>
                    <EmergencyIcon>
                      <contact.icon />
                    </EmergencyIcon>
                    <EmergencyTitle>{contact.title}</EmergencyTitle>
                  </EmergencyHeader>
                  <EmergencyDescription>{contact.description}</EmergencyDescription>
                  {contact.phone && (
                    <EmergencyButton href={`tel:${contact.phone}`}>
                      Call Now
                    </EmergencyButton>
                  )}
                  {contact.email && (
                    <EmergencyButton href={`mailto:${contact.email}`}>
                      Send Email
                    </EmergencyButton>
                  )}
                </EmergencyCard>
              ))}
            </ContactGrid>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Online Resources</SectionTitle>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ResourcesSection>
              <h3 style={{ textAlign: 'center', color: 'var(--color-primary)', marginBottom: 'var(--spacing-lg)' }}>
                Access INTERPOL's Online Services
              </h3>
              <p style={{ textAlign: 'center', color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-xl)' }}>
                Explore our comprehensive online resources and databases available to law enforcement agencies worldwide.
              </p>
              
              <ResourcesGrid>
                {resources.map((resource, index) => (
                  <ResourceItem key={index}>
                    <div className="resource-icon">{resource.icon}</div>
                    <div className="resource-text">{resource.text}</div>
                  </ResourceItem>
                ))}
              </ResourcesGrid>
              
              <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
                <ContactButton href="https://www.interpol.int" target="_blank" rel="noopener noreferrer">
                  🌐 Visit Official Website
                </ContactButton>
              </div>
            </ResourcesSection>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Media Inquiries</SectionTitle>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactCard>
              <ContactHeader>
                <ContactIcon>
                  <EmailIcon />
                </ContactIcon>
                <ContactTitle>Press & Media</ContactTitle>
              </ContactHeader>
              <ContactInfo>
                <p>For media inquiries and press releases, please contact our Communications Office.</p>
                <ContactButton href="mailto:media@interpol.int">
                  ✉️ media@interpol.int
                </ContactButton>
              </ContactInfo>
            </ContactCard>
          </motion.div>
        </Container>
      </Section>
    </ContactContainer>
  );
};

export default Contact;
