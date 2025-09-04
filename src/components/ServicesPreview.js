import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RedNoticeIcon, BlueNoticeIcon, ComputerIcon, ShieldIcon, ScaleIcon, GlobeIcon } from './CSSIcons';

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

const ServiceButton = styled(Link)`
  display: block;
  text-align: center;
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--radius-md);
  text-decoration: none;
  font-weight: 500;
  transition: all var(--transition-fast);
  
  &:hover {
    background: var(--color-primary-light);
    transform: translateY(-2px);
  }
`;

const ServicesPreview = () => {
  const services = [
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
      icon: ComputerIcon,
      title: 'Cybercrime',
      description: 'Comprehensive support for combating cyber threats and digital crimes worldwide.',
      color: '#805ad5',
      features: [
        'Digital forensics',
        'Threat intelligence',
        'Capacity building',
        'Incident response'
      ]
    },
    {
      icon: ShieldIcon,
      title: 'Counter-terrorism',
      description: 'Specialized support and intelligence for counter-terrorism operations globally.',
      color: '#d69e2e',
      features: [
        'Intelligence sharing',
        'Operational support',
        'Training programs',
        'Crisis response'
      ]
    },
    {
      icon: ScaleIcon,
      title: 'Organized Crime',
      description: 'Fighting transnational organized crime networks and criminal enterprises.',
      color: '#38a169',
      features: [
        'Network disruption',
        'Asset recovery',
        'Financial investigations',
        'International cooperation'
      ]
    },
    {
      icon: GlobeIcon,
      title: 'Environmental Crime',
      description: 'Protecting wildlife and environment through specialized law enforcement support.',
      color: '#38a169',
      features: [
        'Wildlife protection',
        'Environmental monitoring',
        'Illegal trade prevention',
        'Capacity building'
      ]
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            variants={itemVariants}
            color={service.color}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
                              <ServiceIcon>
                    <service.icon />
                  </ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServiceFeatures>
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ServiceFeatures>
            <ServiceButton to="/services">
              Learn More
            </ServiceButton>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </motion.div>
  );
};

export default ServicesPreview;
