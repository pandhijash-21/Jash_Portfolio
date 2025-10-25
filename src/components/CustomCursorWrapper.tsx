'use client';

import { useEffect, useState } from 'react';

export default function CustomCursorWrapper() {
  const [isMobile, setIsMobile] = useState(true); // Start with mobile assumption
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Ultra-aggressive mobile detection
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isSmallScreen = window.innerWidth <= 768;
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileDevice = isMobileUA || isSmallScreen || hasTouch;
      
      setIsMobile(isMobileDevice);
      
      // Only allow rendering on desktop after confirmation
      if (!isMobileDevice) {
        setShouldRender(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Don't render anything on mobile devices - EVER
  if (isMobile || !shouldRender) {
    return null;
  }

  // Only render on desktop with double confirmation
  return null; // TEMPORARILY DISABLED - NO CURSOR AT ALL
}
