'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    chatwootSDK?: {
      run: (config: {
        websiteToken: string;
        baseUrl: string;
      }) => void;
      setCustomAttributes: (attributes: Record<string, string>) => void;
    };
  }
}

// Configuration constants
const CHATWOOT_CONFIG = {
  websiteToken: process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN || 'o1RszgbvV7d5QF3tT1fbGuHF',
  baseUrl: process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL || 'https://app.chatwoot.com',
  sdkPath: '/packs/js/sdk.js',
} as const;

// Page type mapping for custom attributes
const PAGE_TYPE_MAP: Record<string, string> = {
  '/branding-solutions': 'branding',
  '/digital-marketing': 'marketing',
  '/custom-development': 'development',
  '/customer-retention': 'retention',
};


const getCustomAttributes = (pathname: string | null): Record<string, string> => {
  const attributes: Record<string, string> = {
    currentPage: pathname || '/',
  };

  if (!pathname) return attributes;

  // Check for page type matches
  for (const [path, pageType] of Object.entries(PAGE_TYPE_MAP)) {
    if (pathname.includes(path)) {
      attributes.pageType = pageType;
      break;
    }
  }

  return attributes;
};


const initializeChatwoot = (
  websiteToken: string,
  baseUrl: string,
  pathname: string | null
): void => {
  if (!window.chatwootSDK) {
    console.warn('Chatwoot SDK not available');
    return;
  }

  try {
    // Initialize widget
    window.chatwootSDK.run({
      websiteToken,
      baseUrl,
    });

    // Set custom attributes
    if (window.chatwootSDK.setCustomAttributes) {
      const attributes = getCustomAttributes(pathname);
      window.chatwootSDK.setCustomAttributes(attributes);
    }
  } catch (error) {
    console.error('Chatwoot: Error initializing widget', error);
  }
};


const loadChatwootSDK = (
  baseUrl: string,
  onLoad: () => void
): void => {
  const script = document.createElement('script');
  script.src = `${baseUrl}${CHATWOOT_CONFIG.sdkPath}`;
  script.async = true;

  script.onload = () => {
    // Small delay to ensure SDK is fully available
    setTimeout(() => {
      onLoad();
    }, 100);
  };

  script.onerror = () => {
    console.error('Chatwoot: Failed to load SDK script');
  };

  // Insert script before first script tag or append to body
  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.body.appendChild(script);
  }
};

export default function ChatwootIntegration() {
  const pathname = usePathname();

  useEffect(() => {
    const { websiteToken, baseUrl } = CHATWOOT_CONFIG;

    // Check if SDK script already exists
    const existingScript = document.querySelector(
      `script[src="${baseUrl}${CHATWOOT_CONFIG.sdkPath}"]`
    );

    if (existingScript && window.chatwootSDK) {
      // SDK already loaded, just initialize
      initializeChatwoot(websiteToken, baseUrl, pathname);
      return;
    }

    if (existingScript && !window.chatwootSDK) {
      // Script exists but SDK not ready, wait a bit
      setTimeout(() => {
        if (window.chatwootSDK) {
          initializeChatwoot(websiteToken, baseUrl, pathname);
        }
      }, 1000);
      return;
    }

    // Load SDK script
    loadChatwootSDK(baseUrl, () => {
      initializeChatwoot(websiteToken, baseUrl, pathname);
    });
  }, [pathname]);

  return null;
}
