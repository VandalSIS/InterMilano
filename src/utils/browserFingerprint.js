// Browser fingerprinting utility
export const getBrowserFingerprint = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.textBaseline = 'top';
  ctx.font = '14px Arial';
  ctx.fillText('Browser fingerprint', 2, 2);
  
  const fingerprint = {
    userAgent: navigator.userAgent || '',
    language: navigator.language || '',
    languages: navigator.languages ? navigator.languages.join(',') : '',
    platform: navigator.platform || '',
    cookieEnabled: navigator.cookieEnabled,
    doNotTrack: navigator.doNotTrack || '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
    screenResolution: `${screen.width}x${screen.height}`,
    screenColorDepth: screen.colorDepth || '',
    availableScreenResolution: `${screen.availWidth}x${screen.availHeight}`,
    canvasFingerprint: canvas.toDataURL(),
    webglVendor: getWebGLVendor(),
    webglRenderer: getWebGLRenderer(),
    touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    hardwareConcurrency: navigator.hardwareConcurrency || '',
    deviceMemory: navigator.deviceMemory || '',
    connectionType: getConnectionType(),
    timestamp: new Date().toISOString(),
    localTime: new Date().toString(),
    sessionStorage: typeof(Storage) !== 'undefined' && !!sessionStorage,
    localStorage: typeof(Storage) !== 'undefined' && !!localStorage,
    indexedDB: !!window.indexedDB,
    cpuClass: navigator.cpuClass || '',
    plugins: getPluginsList(),
    mimeTypes: getMimeTypesList()
  };

  return fingerprint;
};

const getWebGLVendor = () => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      return debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : '';
    }
  } catch (e) {
    return '';
  }
  return '';
};

const getWebGLRenderer = () => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      return debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : '';
    }
  } catch (e) {
    return '';
  }
  return '';
};

const getConnectionType = () => {
  try {
    return navigator.connection ? navigator.connection.effectiveType || navigator.connection.type || '' : '';
  } catch (e) {
    return '';
  }
};

const getPluginsList = () => {
  try {
    return Array.from(navigator.plugins || [])
      .map(plugin => plugin.name)
      .join(';');
  } catch (e) {
    return '';
  }
};

const getMimeTypesList = () => {
  try {
    return Array.from(navigator.mimeTypes || [])
      .map(mimeType => mimeType.type)
      .join(';');
  } catch (e) {
    return '';
  }
};

// Get IP address using multiple methods
export const getIPAddress = async () => {
  try {
    // Try multiple IP services
    const ipServices = [
      'https://api.ipify.org?format=json',
      'https://ipapi.co/json/',
      'https://ip-api.com/json/',
      'https://httpbin.org/ip'
    ];

    for (const service of ipServices) {
      try {
        const response = await fetch(service);
        const data = await response.json();
        
        // Different services return IP in different formats
        const ip = data.ip || data.query || data.origin || '';
        if (ip) return ip;
      } catch (e) {
        continue; // Try next service
      }
    }
    
    return 'Unable to detect';
  } catch (error) {
    return 'Unable to detect';
  }
};

// Create a unique fingerprint hash
export const createFingerprintHash = (fingerprint) => {
  const str = JSON.stringify(fingerprint);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(16);
};
