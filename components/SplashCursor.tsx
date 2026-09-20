'use client';

import { useEffect, useRef } from 'react';

interface SplashCursorProps {
  DENSITY_DISSIPATION?: number;
  VELOCITY_DISSIPATION?: number;
  PRESSURE?: number;
  CURL?: number;
  SPLAT_RADIUS?: number;
  SPLAT_FORCE?: number;
  COLOR_UPDATE_SPEED?: number;
  SHADING?: boolean;
  RAINBOW_MODE?: boolean;
  COLOR?: string;
}

export default function SplashCursor({
  DENSITY_DISSIPATION = 3.5,
  VELOCITY_DISSIPATION = 2,
  PRESSURE = 0.1,
  CURL = 3,
  SPLAT_RADIUS = 0.2,
  SPLAT_FORCE = 6000,
  COLOR_UPDATE_SPEED = 10,
  SHADING = true,
  RAINBOW_MODE = false,
  COLOR = '#89d8be',
}: SplashCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let lastX = -1000;
    let lastY = -1000;
    let hue = 0;
    const particles: { x: number; y: number; vx: number; vy: number; life: number; size: number }[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const color = () => {
      if (RAINBOW_MODE) {
        hue = (hue + COLOR_UPDATE_SPEED * 0.08) % 360;
        return `hsla(${hue}, 80%, 70%, 0.22)`;
      }
      return `${COLOR}3d`;
    };

    const splat = (x: number, y: number, dx: number, dy: number) => {
      const count = Math.max(3, Math.min(14, Math.round(SPLAT_FORCE / 700)));
      for (let i = 0; i < count; i++) {
        const a = Math.random() * Math.PI * 2;
        const speed = Math.hypot(dx, dy) * (0.15 + Math.random() * 0.35);
        particles.push({
          x,
          y,
          vx: Math.cos(a) * speed + dx * 0.35,
          vy: Math.sin(a) * speed + dy * 0.35,
          life: 1,
          size: 10 + Math.random() * SPLAT_RADIUS * 90,
        });
      }
    };

    const move = (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (lastX > -500) splat(x, y, (x - lastX) * 0.18, (y - lastY) * 0.18);
      lastX = x;
      lastY = y;
    };

    const click = (e: PointerEvent) => splat(e.clientX, e.clientY, 0, 0);

    const frame = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= Math.max(0.9, 1 - VELOCITY_DISSIPATION * 0.012);
        p.vy *= Math.max(0.9, 1 - VELOCITY_DISSIPATION * 0.012);
        p.vy += CURL * 0.002;
        p.life *= Math.max(0.92, 1 - DENSITY_DISSIPATION * 0.012);
        p.size *= 0.997;
        if (p.life < 0.015 || p.size < 1) {
          particles.splice(i, 1);
          continue;
        }
        const radius = p.size * (0.7 + PRESSURE);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        g.addColorStop(0, color());
        g.addColorStop(1, `${COLOR}00`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
        if (SHADING) {
          ctx.globalCompositeOperation = 'screen';
          ctx.fillStyle = `${COLOR}18`;
          ctx.beginPath();
          ctx.arc(p.x - radius * 0.25, p.y - radius * 0.25, radius * 0.45, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalCompositeOperation = 'source-over';
        }
      }
      raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', click, { passive: true });
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', click);
    };
  }, [DENSITY_DISSIPATION, VELOCITY_DISSIPATION, PRESSURE, CURL, SPLAT_RADIUS, SPLAT_FORCE, COLOR_UPDATE_SPEED, SHADING, RAINBOW_MODE, COLOR]);

  return <canvas ref={canvasRef} aria-hidden="true" style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 50 }} />;
}
