'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Start with mobile assumption
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // More aggressive mobile detection
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isSmallScreen = window.innerWidth <= 768;
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileDevice = isMobileUA || isSmallScreen || hasTouch;
      
      setIsMobile(isMobileDevice);
      
      // If mobile, disable cursor immediately
      if (isMobileDevice && cursorRef.current && dotRef.current) {
        cursorRef.current.style.display = 'none';
        dotRef.current.style.display = 'none';
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Only proceed if not mobile
    if (isMobile) {
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Smooth cursor animation with proper easing
    const animateCursor = () => {
      if (cursorRef.current && dotRef.current && !isMobile) {
        const cursor = cursorRef.current;
        const dot = dotRef.current;
        
        // Get current positions from style properties
        const currentCursorX = parseFloat(cursor.style.left) || 0;
        const currentCursorY = parseFloat(cursor.style.top) || 0;
        const currentDotX = parseFloat(dot.style.left) || 0;
        const currentDotY = parseFloat(dot.style.top) || 0;
        
        // Target positions (centered on mouse)
        const targetCursorX = mousePosition.x - 20; // Offset for cursor center
        const targetCursorY = mousePosition.y - 20;
        const targetDotX = mousePosition.x - 4;     // Offset for dot center
        const targetDotY = mousePosition.y - 4;
        
        // Smooth easing for natural movement
        const cursorEase = 0.15; // Main cursor follows closely
        const dotEase = 0.12;   // Dot follows slightly behind but not too much
        
        // Calculate new positions with smooth interpolation
        const newCursorX = currentCursorX + (targetCursorX - currentCursorX) * cursorEase;
        const newCursorY = currentCursorY + (targetCursorY - currentCursorY) * cursorEase;
        const newDotX = currentDotX + (targetDotX - currentDotX) * dotEase;
        const newDotY = currentDotY + (targetDotY - currentDotY) * dotEase;
        
        // Apply positions
        cursor.style.left = `${newCursorX}px`;
        cursor.style.top = `${newCursorY}px`;
        dot.style.left = `${newDotX}px`;
        dot.style.top = `${newDotY}px`;
      }
      
      if (!isMobile) {
        animationRef.current = requestAnimationFrame(animateCursor);
      }
    };

    // Start the animation loop only on desktop
    if (!isMobile) {
      animationRef.current = requestAnimationFrame(animateCursor);
    }

    // Add event listeners only on desktop
    if (!isMobile) {
      window.addEventListener('mousemove', updateMousePosition);
      
      // Add hover listeners to interactive elements
      const interactiveElements = document.querySelectorAll('button, a, .interactive, .card-hover, .btn-hover, input, textarea, [role="button"]');
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('mousedown', handleMouseDown);
        element.addEventListener('mouseup', handleMouseUp);
      });

      // Add click listeners
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      
      if (!isMobile) {
        window.removeEventListener('mousemove', updateMousePosition);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        
        const interactiveElements = document.querySelectorAll('button, a, .interactive, .card-hover, .btn-hover, input, textarea, [role="button"]');
        interactiveElements.forEach(element => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
          element.removeEventListener('mousedown', handleMouseDown);
          element.removeEventListener('mouseup', handleMouseUp);
        });
        
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      }
    };
  }, [mousePosition, isMobile]);

  // Don't render anything on mobile
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'cursor-hover' : ''} ${isClicking ? 'cursor-click' : ''}`}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 10000,
          transition: 'none', // Remove any CSS transitions for smooth animation
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
      />
      
      {/* Cursor dot */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'none', // Remove any CSS transitions for smooth animation
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
      />
    </>
  );
}
