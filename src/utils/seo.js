// SEO utilities for the INTERPOL website

export const defaultSEO = {
  title: 'INTERPOL - International Criminal Police Organization',
  description: 'Connecting Police for a Safer World. The world\'s largest international police organization with 195 member countries working together to combat transnational crime.',
  keywords: 'INTERPOL, international police, law enforcement, global security, criminal investigation, police cooperation',
  author: 'INTERPOL',
  url: 'https://www.interpol.int',
  image: '/og-image.jpg',
  type: 'website'
};

export const pageSEO = {
  home: {
    title: 'INTERPOL - International Criminal Police Organization',
    description: 'Connecting Police for a Safer World. 195 member countries working together for global security and law enforcement cooperation.',
    keywords: 'INTERPOL, international police, law enforcement, global security, police cooperation'
  },
  about: {
    title: 'About INTERPOL - International Criminal Police Organization',
    description: 'Learn about INTERPOL\'s mission, history, and role as the world\'s largest international police organization with 195 member countries.',
    keywords: 'about INTERPOL, international police organization, law enforcement history, police cooperation'
  },
  services: {
    title: 'INTERPOL Services - Global Law Enforcement Solutions',
    description: 'Explore INTERPOL\'s comprehensive services including notices, cybercrime support, counter-terrorism, and specialized crime areas.',
    keywords: 'INTERPOL services, police notices, cybercrime, counter-terrorism, law enforcement services'
  },
  contact: {
    title: 'Contact INTERPOL - Get in Touch with Global Law Enforcement',
    description: 'Contact INTERPOL headquarters and regional offices. Emergency contacts and online resources for law enforcement agencies worldwide.',
    keywords: 'contact INTERPOL, police contacts, law enforcement support, emergency contacts'
  }
};

export const generateStructuredData = (page = 'home') => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "INTERPOL",
    "alternateName": "International Criminal Police Organization",
    "url": "https://www.interpol.int",
    "logo": "https://www.interpol.int/logo.png",
    "description": "The world's largest international police organization, connecting police for a safer world.",
    "foundingDate": "1923",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "200 Quai Charles de Gaulle",
      "addressLocality": "Lyon",
      "postalCode": "69006",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-4-72-44-70-00",
      "contactType": "customer service",
      "email": "contact@interpol.int"
    },
    "sameAs": [
      "https://twitter.com/INTERPOL_HQ",
      "https://www.linkedin.com/company/interpol",
      "https://www.youtube.com/user/INTERPOLHQ"
    ]
  };

  return baseData;
};

export const updatePageTitle = (title) => {
  document.title = title;
};

export const updateMetaTag = (name, content) => {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

export const updateOGTag = (property, content) => {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.property = property;
    document.head.appendChild(meta);
  }
  meta.content = content;
};
