'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isHovering, setIsHovering] = useState(false);

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

    // hide default cursor
    document.body.style.cursor = 'none';
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
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
      
      {/* main cursor */}
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
    </>
  );
}

