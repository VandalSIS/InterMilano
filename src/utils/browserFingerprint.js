// Browser fingerprinting utility
export const getBrowserFingerprint = () => {
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.fillText('Browser fingerprint', 2, 2);
    }
    
    const fingerprint = {
      userAgent: (typeof navigator !== 'undefined' && navigator.userAgent) || '',
      language: (typeof navigator !== 'undefined' && navigator.language) || '',
      languages: (typeof navigator !== 'undefined' && navigator.languages) ? navigator.languages.join(',') : '',
      platform: (typeof navigator !== 'undefined' && navigator.platform) || '',
      cookieEnabled: (typeof navigator !== 'undefined' && navigator.cookieEnabled) || false,
      doNotTrack: (typeof navigator !== 'undefined' && navigator.doNotTrack) || '',
      timezone: (typeof Intl !== 'undefined') ? (Intl.DateTimeFormat().resolvedOptions().timeZone || '') : '',
      screenResolution: (typeof window !== 'undefined' && window.screen) ? `${window.screen.width}x${window.screen.height}` : '',
      screenColorDepth: (typeof window !== 'undefined' && window.screen && window.screen.colorDepth) || '',
      availableScreenResolution: (typeof window !== 'undefined' && window.screen) ? `${window.screen.availWidth}x${window.screen.availHeight}` : '',
      canvasFingerprint: ctx ? canvas.toDataURL() : '',
      webglVendor: getWebGLVendor(),
      webglRenderer: getWebGLRenderer(),
      touchSupport: (typeof window !== 'undefined') ? ('ontouchstart' in window || (navigator.maxTouchPoints > 0)) : false,
      hardwareConcurrency: (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) || '',
      deviceMemory: (typeof navigator !== 'undefined' && navigator.deviceMemory) || '',
      connectionType: getConnectionType(),
      timestamp: new Date().toISOString(),
      localTime: new Date().toString(),
      sessionStorage: (typeof Storage !== 'undefined' && typeof sessionStorage !== 'undefined') ? !!sessionStorage : false,
      localStorage: (typeof Storage !== 'undefined' && typeof localStorage !== 'undefined') ? !!localStorage : false,
      indexedDB: (typeof window !== 'undefined' && !!window.indexedDB) || false,
      cpuClass: (typeof navigator !== 'undefined' && navigator.cpuClass) || '',
      plugins: getPluginsList(),
      mimeTypes: getMimeTypesList()
    };

    return fingerprint;
  } catch (error) {
    console.error('Error generating browser fingerprint:', error);
    return {
      userAgent: '', language: '', languages: '', platform: '', cookieEnabled: false,
      doNotTrack: '', timezone: '', screenResolution: '', screenColorDepth: '',
      availableScreenResolution: '', canvasFingerprint: '', webglVendor: '',
      webglRenderer: '', touchSupport: false, hardwareConcurrency: '',
      deviceMemory: '', connectionType: '', timestamp: new Date().toISOString(),
      localTime: new Date().toString(), sessionStorage: false, localStorage: false,
      indexedDB: false, cpuClass: '', plugins: '', mimeTypes: ''
    };
  }
};

const getWebGLVendor = () => {
  try {
    if (typeof document === 'undefined') return '';
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
    if (typeof document === 'undefined') return '';
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
    if (typeof navigator === 'undefined') return '';
    return navigator.connection ? navigator.connection.effectiveType || navigator.connection.type || '' : '';
  } catch (e) {
    return '';
  }
};

const getPluginsList = () => {
  try {
    if (typeof navigator === 'undefined' || !navigator.plugins) return '';
    return Array.from(navigator.plugins)
      .map(plugin => plugin.name)
      .join(';');
  } catch (e) {
    return '';
  }
};

const getMimeTypesList = () => {
  try {
    if (typeof navigator === 'undefined' || !navigator.mimeTypes) return '';
    return Array.from(navigator.mimeTypes)
      .map(mimeType => mimeType.type)
      .join(';');
  } catch (e) {
    return '';
  }
};

// Get IP address using multiple methods
export const getIPAddress = async () => {
  try {
    if (typeof fetch === 'undefined') {
      return 'Unable to detect (no fetch)';
    }

    // Try multiple IP services
    const ipServices = [
      'https://api.ipify.org?format=json',
      'https://ipapi.co/json/',
      'https://ip-api.com/json/',
      'https://httpbin.org/ip'
    ];

    for (const service of ipServices) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
        const response = await fetch(service, {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json',
          }
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) continue;
        
        const data = await response.json();
        
        // Different services return IP in different formats
        const ip = data.ip || data.query || data.origin || '';
        if (ip && typeof ip === 'string') return ip;
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
