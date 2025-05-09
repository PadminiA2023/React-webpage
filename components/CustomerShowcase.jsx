import React, { useState, useEffect, useRef } from 'react';

const logos = [
  '/images/ge.png', '/images/siemens.png', '/images/abb.png',
  '/images/bosch.png', '/images/honeywell.png', '/images/shell.png',
  '/images/bp.png', '/images/schneider.png', '/images/engie.png',
  '/images/pfizer.png',
  '/images/novartis.png',
  '/images/iff.png', '/images/unilever.png', '/images/nestle.png'
];

export default function CustomerShowcase() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState('forward');
  const [fade, setFade] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const displayCount = 6;
  const total = logos.length;
  const sectionRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setStartIndex((prev) => {
          if (direction === 'forward') {
            if (prev + displayCount >= total) {
              setDirection('backward');
              return prev - displayCount;
            } else {
              return prev + displayCount;
            }
          } else {
            if (prev - displayCount < 0) {
              setDirection('forward');
              return prev + displayCount;
            } else {
              return prev - displayCount;
            }
          }
        });
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [direction, total]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const getVisibleLogos = () => {
    const endIndex = startIndex + displayCount;
    if (endIndex <= total) {
      return logos.slice(startIndex, endIndex);
    } else {
      return [...logos.slice(startIndex), ...logos.slice(0, endIndex - total)];
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[300px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 text-white px-6 py-8">
        <h2
          className={`text-3xl font-bold mb-4 text-center transform transition duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Trusted by Global Leaders Across Industries
        </h2>
        <p
          className={`max-w-2xl mx-auto text-center mb-8 text-gray-300 transform transition duration-5000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          From automotive and energy giants to life sciences pioneers and CPG innovators like IFF, Data Destination drives digital transformation at scale.
        </p>

        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <div
            className={`grid grid-cols-6 gap-4 transition-opacity duration-500 ${
              fade ? 'opacity-100' : 'opacity-0'
            } ${isHovered ? 'blur-sm' : ''}`}
          >
            {getVisibleLogos().map((logo, idx) => (
              <div key={idx} className="flex justify-center items-center">
                <img
                  src={logo}
                  alt={`Customer logo ${idx + 1}`}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
            ))}
          </div>

          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-gray-800 text-gray-200 px-6 py-3 rounded-full shadow-lg border border-gray-600 text-lg transform hover:scale-110 hover:bg-gray-700 transition">
                Know More About Our Customers →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
