import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ComputerIcon, ShieldIcon, GlobeIcon, ClockIcon, StarIcon, CheckIcon } from './CSSIcons';

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-2xl);
`;

const NewsCard = styled(motion.div)`
  background: var(--color-white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-gray-200);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
  }
`;

const NewsImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(transparent, rgba(0,0,0,0.1));
  }
`;

const NewsContent = styled.div`
  padding: var(--spacing-xl);
`;

const NewsCategory = styled.div`
  display: inline-block;
  background: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-md);
`;

const NewsTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
  line-height: 1.3;
`;

const NewsExcerpt = styled.p`
  color: var(--color-gray-600);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const NewsMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-gray-200);
`;

const NewsDate = styled.span`
  color: var(--color-gray-500);
  font-size: var(--font-size-sm);
`;

const ReadMore = styled.a`
  color: var(--color-secondary);
  font-size: var(--font-size-sm);
  font-weight: 500;
  text-decoration: none;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--color-primary);
  }
`;

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      category: 'Operations',
      title: 'Global Operation Targets Cybercrime Networks',
      excerpt: 'INTERPOL coordinates with 50 countries in a major operation to disrupt international cybercrime networks, resulting in hundreds of arrests and the seizure of millions in assets.',
      date: '2024-01-15',
      icon: ComputerIcon
    },
    {
      id: 2,
      category: 'Training',
      title: 'New Counter-Terrorism Training Program Launched',
      excerpt: 'INTERPOL launches advanced counter-terrorism training program for law enforcement agencies, focusing on intelligence sharing and operational coordination.',
      date: '2024-01-12',
      icon: ShieldIcon
    },
    {
      id: 3,
      category: 'Cooperation',
      title: 'Enhanced Partnership with Regional Organizations',
      excerpt: 'INTERPOL strengthens cooperation with regional law enforcement organizations to improve cross-border crime fighting capabilities and information sharing.',
      date: '2024-01-10',
      icon: GlobeIcon
    },
    {
      id: 4,
      category: 'Technology',
      title: 'I-24/7 System Upgrades for Better Performance',
      excerpt: 'Major upgrades to INTERPOL\'s I-24/7 global communication system enhance security, speed, and reliability for member countries worldwide.',
      date: '2024-01-08',
      icon: ClockIcon
    },
    {
      id: 5,
      category: 'Environmental',
      title: 'Operation Targets Wildlife Trafficking Networks',
      excerpt: 'International operation coordinated by INTERPOL successfully disrupts major wildlife trafficking networks across multiple continents, protecting endangered species.',
      date: '2024-01-05',
      icon: GlobeIcon
    },
    {
      id: 6,
      category: 'Innovation',
      title: 'AI-Powered Crime Analysis Tools Deployed',
      excerpt: 'INTERPOL introduces advanced artificial intelligence tools to help member countries analyze crime patterns and predict criminal activities more effectively.',
      date: '2024-01-03',
      icon: StarIcon
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
      <NewsGrid>
        {newsItems.map((item) => (
          <NewsCard
            key={item.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <NewsImage>
              <item.icon />
            </NewsImage>
            <NewsContent>
              <NewsCategory>{item.category}</NewsCategory>
              <NewsTitle>{item.title}</NewsTitle>
              <NewsExcerpt>{item.excerpt}</NewsExcerpt>
              <NewsMeta>
                <NewsDate>{new Date(item.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</NewsDate>
                <ReadMore href="#" onClick={(e) => e.preventDefault()}>
                  Read More →
                </ReadMore>
              </NewsMeta>
            </NewsContent>
          </NewsCard>
        ))}
      </NewsGrid>
    </motion.div>
  );
};

export default NewsSection;
