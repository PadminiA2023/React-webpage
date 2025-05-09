import { useState } from 'react';

export default function NeonButton({ children, onClick }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  function handleMouseMove(e) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - (left + width / 2)) / (width / 2);
    const relY = (e.clientY - (top + height / 2)) / (height / 2);
    setOffset({ x: relX * 20, y: relY * 20 }); // smoother, smaller shift
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
    setHover(false);
  }

  function handleMouseEnter() {
    setHover(true);
  }

  const glowStyle = {
    boxShadow: `
      ${offset.x}px ${offset.y}px 40px -10px rgba(138, 43, 226, 0.6),
      ${-offset.x}px ${-offset.y}px 40px -10px rgba(30, 144, 255, 0.6)
    `,
    background: hover ? 'linear-gradient(90deg, #1e293b, #334155)' : 'linear-gradient(90deg, #0f172a, #1e293b)',
  };

  return (
    <button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      style={glowStyle}
      className={`
        relative inline-block px-8 py-4
        text-white text-lg font-semibold rounded-full
        border border-gray-600
        transition-all duration-300 ease-out
        active:scale-95
        hover:border-gray-400
      `}
    >
      {children}
    </button>
  );
}
