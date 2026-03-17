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
    $chatwoot?: { toggle: (state?: 'open' | 'close') => void };
  }
}

// Configuration constants
const CHATWOOT_CONFIG = {
  websiteToken: process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN || 'o1RszgbvV7d5QF3tT1fbGuHF',
  baseUrl: process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL || 'https://app.chatwoot.com',
  sdkPath: '/packs/js/sdk.js',
} as const;

// Geekonomy avatar used as chatbot launcher (no X when open, only avatar visible)
const CHATWOOT_AVATAR_SRC = '/geekonomy-avatar-branded%20(1).svg';
const GEEKONOMY_CHATWOOT_STYLES_ID = 'geekonomy-chatwoot-avatar-styles';
const GEEKONOMY_AVATAR_OVERLAY_ID = 'geekonomy-chatwoot-avatar-overlay';

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

  // Hide "Powered by Chatwoot" branding: viewport-positioned overlay over chat iframe bottom
  useEffect(() => {
    const COVER_ID = 'geekonomy-chatwoot-branding-cover';
    const BRANDING_STRIP_HEIGHT = 26;

    const hideInDocumentBranding = () => {
      document.querySelectorAll('[class*="branding"]').forEach((el) => {
        if (el instanceof HTMLElement) el.style.display = 'none';
      });
    };

    const getChatPanelElement = (): Element | null => {
      const holder = document.querySelector('#woot-widget-holder, .woot-widget-holder, [id*="woot-widget"]');
      const iframe = holder?.querySelector('iframe') ?? document.querySelector('.woot-widget-holder iframe');
      if (iframe) return iframe;
      const iframes = Array.from(document.querySelectorAll('iframe'));
      const chatIframe = iframes.find((f) => {
        const src = (f as HTMLIFrameElement).src || '';
        const r = f.getBoundingClientRect();
        return src.includes('chatwoot') || (r.width >= 280 && r.height >= 400 && r.top >= 0);
      });
      if (chatIframe) return chatIframe;
      return holder?.querySelector('[class*="bubble"]:not(.woot--bubble-holder)') ?? holder?.querySelector('[class*="widget-bubble"]') ?? null;
    };

    const updateCoverPosition = () => {
      const panel = getChatPanelElement();
      let cover = document.getElementById(COVER_ID);
      if (!panel) {
        cover?.remove();
        return;
      }
      const rect = panel.getBoundingClientRect();
      if (rect.width < 50 || rect.height < 100) {
        cover?.remove();
        return;
      }
      if (!cover) {
        cover = document.createElement('div');
        cover.id = COVER_ID;
        cover.setAttribute('aria-hidden', 'true');
        cover.style.cssText = [
          'position:fixed',
          'z-index:2147483647',
          'background:#f9f9fb',
          'pointer-events:none',
          'border-radius:0 0 12px 12px',
        ].join(';');
      }
      const top = rect.bottom - BRANDING_STRIP_HEIGHT;
      cover.style.top = `${top}px`;
      cover.style.left = `${rect.left}px`;
      cover.style.width = `${rect.width}px`;
      cover.style.height = `${BRANDING_STRIP_HEIGHT}px`;
      const el = cover;
      requestAnimationFrame(() => {
        if (el && document.body) document.body.appendChild(el);
      });
    };

    const run = () => {
      hideInDocumentBranding();
      updateCoverPosition();
    };

    run();
    const interval = setInterval(run, 300);
    const observer = new MutationObserver(run);
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('resize', run);
    window.addEventListener('scroll', run, true);
    return () => {
      clearInterval(interval);
      observer.disconnect();
      window.removeEventListener('resize', run);
      window.removeEventListener('scroll', run, true);
      document.getElementById(COVER_ID)?.remove();
    };
  }, []);

  // Geekonomy avatar as launcher; when open hide X and keep only avatar visible
  useEffect(() => {
    const injectAvatarStyles = () => {
      if (document.getElementById(GEEKONOMY_CHATWOOT_STYLES_ID)) return;
      const style = document.createElement('style');
      style.id = GEEKONOMY_CHATWOOT_STYLES_ID;
      style.textContent = `
        /* Keep bubble holder visible even when chat is open (Chatwoot often hides it) */
        #woot-widget-holder .woot--bubble-holder,
        .woot--bubble-holder,
        #woot-widget-holder.is-open .woot--bubble-holder,
        #woot-widget-holder[class*="open"] .woot--bubble-holder {
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        /* Hide default Chatwoot bubble icon and close (X) so only avatar shows */
        #woot-widget-holder [id*="bubble-icon"],
        #woot-widget-holder .woot-widget-bubble img:not(.geekonomy-chat-avatar),
        .woot--bubble-holder [id*="bubble-icon"],
        .woot--bubble-holder .woot-widget-bubble > img:not(.geekonomy-chat-avatar),
        .woot--bubble-holder .woot-widget-bubble > span { display: none !important; }
        /* When open: hide only the X icon inside close button, keep button visible for avatar */
        #woot-widget-holder .woot--close > *:not(.geekonomy-chat-avatar),
        #woot-widget-holder [class*="close"] > *:not(.geekonomy-chat-avatar),
        .woot--bubble-holder .woot--close > *:not(.geekonomy-chat-avatar),
        .woot--bubble-holder [class*="close"] > *:not(.geekonomy-chat-avatar) { display: none !important; }
        /* Bubble shows avatar only; size the custom avatar */
        .woot--bubble-holder .woot-widget-bubble,
        #woot-widget-holder .woot-widget-bubble {
          background: transparent !important;
          padding: 0 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        .woot--bubble-holder .geekonomy-chat-avatar,
        #woot-widget-holder .geekonomy-chat-avatar {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        /* When open: close button shows avatar only, same size as bubble */
        #woot-widget-holder .woot--close,
        #woot-widget-holder [class*="close"] {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        /* Hide native close (X) when our overlay is shown - overlay shows avatar and handles close */
        #woot-widget-holder.is-open .woot--close,
        #woot-widget-holder.is-open [class*="close"],
        #woot-widget-holder[class*="open"] .woot--close,
        #woot-widget-holder[class*="open"] [class*="close"] {
          visibility: hidden !important;
          pointer-events: none !important;
        }
      `;
      document.head.appendChild(style);
    };

    const applyAvatarToBubble = () => {
      const holders = document.querySelectorAll('.woot--bubble-holder, #woot-widget-holder');
      holders.forEach((holder) => {
        const bubble = holder.querySelector('.woot-widget-bubble, [class*="bubble"]');
        if (!bubble) return;
        if (bubble.querySelector('.geekonomy-chat-avatar')) return;
        const img = document.createElement('img');
        img.src = CHATWOOT_AVATAR_SRC;
        img.alt = 'Chat';
        img.className = 'geekonomy-chat-avatar';
        img.setAttribute('aria-hidden', 'true');
        bubble.appendChild(img);
      });
      /* When open, Chatwoot may show a separate close/toggle element; keep avatar there too */
      const closeButtons = document.querySelectorAll(
        '#woot-widget-holder .woot--close, #woot-widget-holder [class*="close"]'
      );
      closeButtons.forEach((el) => {
        const btn = el as HTMLElement;
        if (btn.querySelector('.geekonomy-chat-avatar')) return;
        const img = document.createElement('img');
        img.src = CHATWOOT_AVATAR_SRC;
        img.alt = 'Close chat';
        img.className = 'geekonomy-chat-avatar';
        img.setAttribute('aria-hidden', 'true');
        btn.style.background = 'transparent';
        btn.style.display = 'flex';
        btn.style.alignItems = 'center';
        btn.style.justifyContent = 'center';
        Array.from(btn.children).forEach((c) => ((c as HTMLElement).style.display = 'none'));
        btn.appendChild(img);
      });
    };

    const isWidgetOpen = (): boolean => {
      const holder = document.getElementById('woot-widget-holder');
      if (!holder) return false;
      const c = holder.className || '';
      return /is-open|open|expanded|active/.test(c);
    };

    const updateAvatarOverlay = () => {
      const open = isWidgetOpen();
      let overlay = document.getElementById(GEEKONOMY_AVATAR_OVERLAY_ID) as HTMLElement | null;
      const bubbleHolder = document.querySelector('.woot--bubble-holder') as HTMLElement | null;
      if (open && bubbleHolder) {
        if (!overlay) {
          overlay = document.createElement('div');
          overlay.id = GEEKONOMY_AVATAR_OVERLAY_ID;
          overlay.setAttribute('aria-label', 'Close chat');
          overlay.role = 'button';
          overlay.tabIndex = 0;
          overlay.style.cssText = [
            'position:fixed',
            'z-index:2147483647',
            'cursor:pointer',
            'display:flex',
            'align-items:center',
            'justify-content:center',
            'background:transparent',
            'border:none',
            'padding:0',
            'border-radius:50%',
            'overflow:hidden',
          ].join(';');
          const img = document.createElement('img');
          img.src = CHATWOOT_AVATAR_SRC;
          img.alt = 'Close chat';
          img.style.cssText = 'width:100%;height:100%;object-fit:contain;pointer-events:none;';
          overlay.appendChild(img);
          overlay.onclick = () => {
            if (typeof window.$chatwoot?.toggle === 'function') {
              window.$chatwoot.toggle('close');
            }
          };
          document.body.appendChild(overlay);
        }
        const rect = bubbleHolder.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height, 56);
        overlay.style.width = `${size}px`;
        overlay.style.height = `${size}px`;
        overlay.style.left = `${rect.left}px`;
        overlay.style.top = `${rect.top}px`;
        overlay.style.display = 'flex';
      } else if (overlay) {
        overlay.style.display = 'none';
      }
    };

    injectAvatarStyles();
    const t = setTimeout(applyAvatarToBubble, 500);
    const interval = setInterval(() => {
      applyAvatarToBubble();
      updateAvatarOverlay();
    }, 300);
    const mo = new MutationObserver(() => {
      applyAvatarToBubble();
      updateAvatarOverlay();
    });
    mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
    updateAvatarOverlay();
    return () => {
      clearTimeout(t);
      clearInterval(interval);
      mo.disconnect();
      document.getElementById(GEEKONOMY_CHATWOOT_STYLES_ID)?.remove();
      document.getElementById(GEEKONOMY_AVATAR_OVERLAY_ID)?.remove();
    };
  }, []);

  return null;
}
