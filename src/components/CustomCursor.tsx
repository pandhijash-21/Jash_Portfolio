'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Smooth cursor animation with proper easing
    const animateCursor = () => {
      if (cursorRef.current && dotRef.current) {
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
      
      animationRef.current = requestAnimationFrame(animateCursor);
    };

    // Start the animation loop
    animationRef.current = requestAnimationFrame(animateCursor);

    // Add event listeners
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

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
        element.removeEventListener('mousedown', handleMouseDown);
        element.removeEventListener('mouseup', handleMouseUp);
      });
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

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
