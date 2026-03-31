'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [showHeart, setShowHeart] = useState(true);
  const lastTouchTimeRef = useRef(0);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | null>(null);
  const latestPositionRef = useRef({ x: 0, y: 0 });
  const latestHoverRef = useRef(false);

  useEffect(() => {
    let trailId = 0;
    const trailPoints: Array<{ x: number; y: number; id: number }> = [];

    const isInteractiveTarget = (target: EventTarget | null) => {
      if (!target || !(target instanceof Element)) {
        return false;
      }

      return Boolean(
        target.closest('a, button, [role="button"], input, textarea, select, summary')
      );
    };

    const flushCursorFrame = () => {
      rafRef.current = null;
      setPosition({ ...latestPositionRef.current });
      setIsHovering(latestHoverRef.current);
      setTrail([...trailPoints]);
    };

    const scheduleCursorFrame = () => {
      if (rafRef.current !== null) {
        return;
      }

      rafRef.current = requestAnimationFrame(flushCursorFrame);
    };

    const handleMouseMove = (e: MouseEvent) => {
      latestPositionRef.current = { x: e.clientX, y: e.clientY };
      latestHoverRef.current = isInteractiveTarget(e.target);

      // add trail point
      trailPoints.push({ x: e.clientX, y: e.clientY, id: trailId++ });

      // keep only last 8 points
      if (trailPoints.length > 8) {
        trailPoints.shift();
      }

      scheduleCursorFrame();
    };

    // show heart briefly on touch, then hide for mobile
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        // update position to touch location
        latestPositionRef.current = { x: touch.clientX, y: touch.clientY };
        setPosition({ x: touch.clientX, y: touch.clientY });
        
        // check if touching an interactive element
        if (isInteractiveTarget(e.target)) {
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
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
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

