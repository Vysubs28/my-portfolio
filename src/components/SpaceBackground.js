import React, { useEffect, useRef } from 'react';

export default function SpaceBackground() {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;

    function init() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      starsRef.current = [];
      for (let i = 0; i < 150; i++) {
        starsRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.1,
          speed: 0.05 + Math.random() * 0.1,
          direction: Math.random() < 0.5 ? 1 : -1,
          opacity: Math.random(),
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#000014';
      ctx.fillRect(0, 0, width, height);

      starsRef.current.forEach(star => {
        star.x += star.speed * star.direction;
        if (star.x > width) star.x = 0;
        else if (star.x < 0) star.x = width;

        star.opacity += (Math.random() - 0.5) * 0.05;
        star.opacity = Math.min(Math.max(star.opacity, 0.3), 1);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.shadowColor = 'white';
        ctx.shadowBlur = 5;
        ctx.fill();
      });

      animationFrameIdRef.current = requestAnimationFrame(draw);
    }

    let resizeTimeout;
    function handleResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        init();
      }, 200);
    }

    init();
    draw();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'radial-gradient(ellipse at center, #111 0%, #000 100%)',
          zIndex: -2,
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          display: 'block',
          pointerEvents: 'none',
        }}
      />
    </>
  );
}

