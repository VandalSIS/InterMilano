import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GlobeIcon, ShieldIcon, ClockIcon, StarIcon, CheckIcon, ScaleIcon } from './CSSIcons';

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-2xl);
`;

const StatCard = styled(motion.div)`
  background: var(--color-white);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  text-align: center;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-gray-200);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
  }
`;

const StatIcon = styled.div`
  margin-bottom: var(--spacing-lg);
  display: flex;
  justify-content: center;
  color: var(--color-primary);
`;

const StatNumber = styled.div`
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: var(--font-size-lg);
  color: var(--color-gray-600);
  font-weight: 500;
  margin-bottom: var(--spacing-sm);
`;

const StatDescription = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  line-height: 1.5;
`;

const StatsSection = () => {
  const stats = [
    {
      icon: GlobeIcon,
      number: '195',
      label: 'Member Countries',
      description: 'Global network spanning every continent, ensuring worldwide police cooperation and coordination.'
    },
    {
      icon: ShieldIcon,
      number: '100+',
      label: 'Years of Service',
      description: 'Over a century of experience in international law enforcement and criminal justice cooperation.'
    },
    {
      icon: ClockIcon,
      number: '24/7',
      label: 'Global Operations',
      description: 'Round-the-clock support and coordination for law enforcement agencies worldwide.'
    },
    {
      icon: StarIcon,
      number: '50K+',
      label: 'Active Cases',
      description: 'Ongoing investigations and operations supporting member countries in fighting crime.'
    },
    {
      icon: GlobeIcon,
      number: 'I-24/7',
      label: 'Communication Network',
      description: 'Secure global police communications system connecting law enforcement worldwide.'
    },
    {
      icon: CheckIcon,
      number: '6',
      label: 'Notice Types',
      description: 'Comprehensive notice system for wanted persons, missing persons, and criminal intelligence.'
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
    hidden: { opacity: 0, y: 20 },
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
      <StatsContainer>
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <StatIcon>
              <stat.icon />
            </StatIcon>
            <StatNumber>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
            <StatDescription>{stat.description}</StatDescription>
          </StatCard>
        ))}
      </StatsContainer>
    </motion.div>
  );
};

export default StatsSection;
