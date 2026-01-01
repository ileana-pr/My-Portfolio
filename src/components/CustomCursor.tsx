'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [showHeart, setShowHeart] = useState(true);
  const lastTouchTimeRef = useRef(0);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let trailId = 0;
    const trailPoints: Array<{ x: number; y: number; id: number }> = [];

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // add trail point
      trailPoints.push({ x: e.clientX, y: e.clientY, id: trailId++ });
      
      // keep only last 8 points
      if (trailPoints.length > 8) {
        trailPoints.shift();
      }
      
      setTrail([...trailPoints]);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target;
      // accept both HTMLElement and SVGElement (SVG elements are SVGElement, not HTMLElement)
      if (!target || !(target instanceof Element)) {
        setIsHovering(false);
        return;
      }
      
      // check if target is directly interactive
      const isDirectlyInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      // check if target is inside an interactive element (handles SVG inside links/buttons)
      const isInsideInteractive = 
        target.closest && (!!target.closest('a') || !!target.closest('button'));
      
      // check parent elements manually for SVG elements
      let parent = target.parentElement;
      let foundInteractiveParent = false;
      while (parent && !foundInteractiveParent) {
        if (parent.tagName === 'BUTTON' || parent.tagName === 'A' || window.getComputedStyle(parent).cursor === 'pointer') {
          foundInteractiveParent = true;
          break;
        }
        parent = parent.parentElement;
      }
      
      setIsHovering(isDirectlyInteractive || isInsideInteractive || foundInteractiveParent);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCursor(e);
      checkHover(e);
    };

    // show heart briefly on touch, then hide for mobile
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        // update position to touch location
        setPosition({ x: touch.clientX, y: touch.clientY });
        
        // check if touching an interactive element
        const target = e.target;
        if (target && target instanceof Element) {
          const isDirectlyInteractive = 
            target.tagName === 'A' || 
            target.tagName === 'BUTTON' ||
            window.getComputedStyle(target).cursor === 'pointer';
          
          const isInsideInteractive = 
            target.closest && (!!target.closest('a') || !!target.closest('button'));
          
          if (isDirectlyInteractive || isInsideInteractive) {
            // show heart briefly
            setIsHovering(true);
            setShowHeart(true);
            
            // clear any existing timeout
            if (hideTimeoutRef.current) {
              clearTimeout(hideTimeoutRef.current);
            }
            
            // hide after 300ms
            hideTimeoutRef.current = setTimeout(() => {
              setShowHeart(false);
              setIsHovering(false);
            }, 300);
          } else {
            // not interactive, hide immediately
            setShowHeart(false);
          }
        } else {
          setShowHeart(false);
        }
      }
      lastTouchTimeRef.current = Date.now();
    };

    // handle touchmove - update position but don't show heart
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        setPosition({ x: touch.clientX, y: touch.clientY });
      }
      // hide heart on any touch movement
      setShowHeart(false);
      setIsHovering(false);
    };

    // hide heart on scroll for mobile
    const handleScroll = () => {
      setShowHeart(false);
    };

    // show heart again on mouse move (desktop)
    // but only if there hasn't been a recent touch (to prevent showing after mobile taps)
    const handleMouseMoveWithHeart = (e: MouseEvent) => {
      // if touch happened recently (within last 500ms), don't show heart
      // this prevents heart from appearing after mobile taps that trigger mouse events
      if (Date.now() - lastTouchTimeRef.current > 500) {
        setShowHeart(true);
      }
      handleMouseMove(e);
    };

    // hide default cursor
    document.body.style.cursor = 'none';
    document.addEventListener('mousemove', handleMouseMoveWithHeart);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('scroll', handleScroll, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMoveWithHeart);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('scroll', handleScroll, true);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* trail particles */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: 'translate(-50%, -50%)',
            opacity: (index + 1) / trail.length * 0.6,
            transition: 'opacity 0.3s ease',
          }}
        >
          <div
            className="w-2 h-2 rounded-full bg-purple-400 dark:bg-purple-500"
            style={{
              transform: `scale(${0.3 + (index / trail.length) * 0.7})`,
            }}
          />
        </div>
      ))}
      
      {/* main cursor - hidden on mobile after touch/scroll */}
      {showHeart && (
        <div
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div
            className={`text-purple-500 dark:text-purple-400 transition-all duration-200 ${
              isHovering ? 'scale-125 text-xl' : 'scale-100 text-base'
            }`}
          >
            {isHovering ? '❤️' : '•'}
          </div>
        </div>
      )}
    </>
  );
}

