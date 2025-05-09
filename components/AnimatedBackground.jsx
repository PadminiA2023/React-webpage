import React from 'react';

export default function AnimatedBackground({ children }) {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated black with subtle dark blue hint */}
      <div className="absolute inset-0 animate-subtle-blue-gradient bg-gradient-to-br from-black via-[#050b25] to-black opacity-90" />

      {/* Optional ultra-light noise overlay */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-2" />

      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
