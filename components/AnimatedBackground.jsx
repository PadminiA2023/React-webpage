import React from 'react';

export default function AnimatedBackground({ children }) {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      {/* Deep black background layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black z-0" />

      {/* Neon vertical beam (background only) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[4px] h-full bg-gradient-to-b from-white via-blue-400 to-transparent opacity-90 blur-sm animate-energy-beam z-0 pointer-events-none" />

      {/* Soft vertical misty beam (blur effect) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[140px] h-full bg-gradient-to-b from-purple-400 via-blue-400 to-transparent opacity-70 blur-[100px] z-0 pointer-events-none" />

      {/* Outer glow beam */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-full bg-gradient-to-b from-purple-500 via-indigo-500 to-transparent opacity-20 blur-[200px] z-0 pointer-events-none animate-pulse-slow" />

      {/* Optional shimmer */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[30px] h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-20 blur-2xl animate-shimmer z-0 pointer-events-none" />

      {/* Main content goes here */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
