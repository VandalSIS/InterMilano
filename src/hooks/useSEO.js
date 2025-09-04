import { useEffect } from 'react';
import { pageSEO, updatePageTitle, updateMetaTag, updateOGTag } from '../utils/seo';

export const useSEO = (page) => {
  useEffect(() => {
    const seoData = pageSEO[page] || pageSEO.home;
    
    // Update page title
    updatePageTitle(seoData.title);
    
    // Update meta tags
    updateMetaTag('description', seoData.description);
    updateMetaTag('keywords', seoData.keywords);
    
    // Update Open Graph tags
    updateOGTag('og:title', seoData.title);
    updateOGTag('og:description', seoData.description);
    updateOGTag('og:url', window.location.href);
    
    // Update Twitter Card tags
    updateMetaTag('twitter:title', seoData.title);
    updateMetaTag('twitter:description', seoData.description);
    
  }, [page]);
};
