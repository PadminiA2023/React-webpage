// components/NeonButton.jsx
import { useState } from 'react';

export default function NeonButton({ children, onClick }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  function handleMouseMove(e) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - (left + width / 2)) / (width / 2);
    const relY = (e.clientY - (top + height / 2)) / (height / 2);
    // increase to 30px max shift
    setOffset({ x: relX * 30, y: relY * 30 });
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
      ${offset.x}px ${offset.y}px 60px -15px rgba(138, 43, 226, 0.8),
      ${-offset.x}px ${-offset.y}px 60px -15px rgba(30, 144, 255, 0.8)
    `,
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
        bg-gradient-to-r
        ${hover ? 'from-blue-500 to-purple-600' : 'from-purple-600 to-blue-500'}
        text-white text-lg font-semibold rounded-full
        transition-all duration-150 ease-out
        active:scale-95
      `}
    >
      {children}
    </button>
  );
}
