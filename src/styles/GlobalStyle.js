import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* INTERPOL Brand Colors */
    --color-primary: #1a365d;
    --color-primary-light: #2d3748;
    --color-primary-dark: #0f1419;
    --color-secondary: #3182ce;
    --color-accent: #4299e1;
    
    /* Neutral Colors */
    --color-white: #ffffff;
    --color-gray-50: #f8f9fa;
    --color-gray-100: #f1f3f4;
    --color-gray-200: #e2e8f0;
    --color-gray-300: #cbd5e0;
    --color-gray-400: #a0aec0;
    --color-gray-500: #718096;
    --color-gray-600: #4a5568;
    --color-gray-700: #2d3748;
    --color-gray-800: #1a202c;
    --color-gray-900: #171923;
    
    /* Status Colors */
    --color-success: #38a169;
    --color-warning: #d69e2e;
    --color-error: #e53e3e;
    --color-info: #3182ce;
    
    /* Typography */
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    --font-size-5xl: 3rem;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;
    --spacing-4xl: 6rem;
    
    /* Border Radius */
    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;
    --radius-full: 9999px;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
    /* Transitions */
    --transition-fast: 150ms ease-in-out;
    --transition-normal: 250ms ease-in-out;
    --transition-slow: 350ms ease-in-out;
    
    /* Z-Index */
    --z-dropdown: 1000;
    --z-sticky: 1020;
    --z-fixed: 1030;
    --z-modal-backdrop: 1040;
    --z-modal: 1050;
    --z-popover: 1060;
    --z-tooltip: 1070;
  }
  
  * {
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--font-family);
    line-height: 1.6;
    color: var(--color-gray-700);
    background-color: var(--color-white);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
  }
  
  h1 {
    font-size: var(--font-size-4xl);
  }
  
  h2 {
    font-size: var(--font-size-3xl);
  }
  
  h3 {
    font-size: var(--font-size-2xl);
  }
  
  h4 {
    font-size: var(--font-size-xl);
  }
  
  h5 {
    font-size: var(--font-size-lg);
  }
  
  h6 {
    font-size: var(--font-size-base);
  }
  
  p {
    margin-bottom: var(--spacing-md);
    color: var(--color-gray-600);
  }
  
  a {
    color: var(--color-secondary);
    text-decoration: none;
    transition: color var(--transition-fast);
  }
  
  a:hover {
    color: var(--color-primary);
  }
  
  /* Buttons */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-sm) var(--spacing-lg);
    border: none;
    border-radius: var(--radius-md);
    font-size: var(--font-size-base);
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all var(--transition-fast);
    min-height: 44px;
  }
  
  .btn-primary {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
  
  .btn-primary:hover {
    background-color: var(--color-primary-light);
    transform: translateY(-1px);
  }
  
  .btn-secondary {
    background-color: var(--color-secondary);
    color: var(--color-white);
  }
  
  .btn-secondary:hover {
    background-color: var(--color-accent);
    transform: translateY(-1px);
  }
  
  .btn-outline {
    background-color: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
  }
  
  .btn-outline:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
  
  /* Cards */
  .card {
    background-color: var(--color-white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    padding: var(--spacing-xl);
    transition: box-shadow var(--transition-normal);
  }
  
  .card:hover {
    box-shadow: var(--shadow-lg);
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    :root {
      --font-size-4xl: 2rem;
      --font-size-3xl: 1.5rem;
      --font-size-2xl: 1.25rem;
    }
    
    .container {
      padding: 0 var(--spacing-md);
    }
  }
  
  /* Accessibility */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  
  /* Focus styles */
  *:focus {
    outline: 2px solid var(--color-secondary);
    outline-offset: 2px;
  }
  
  /* Print styles */
  @media print {
    * {
      background: transparent !important;
      color: black !important;
      box-shadow: none !important;
    }
  }
`;
