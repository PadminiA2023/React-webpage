import React, { useState, useEffect } from 'react';

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
  const displayCount = 6;
  const total = logos.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + displayCount) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  const getVisibleLogos = () => {
    const endIndex = startIndex + displayCount;
    if (endIndex <= total) {
      return logos.slice(startIndex, endIndex);
    } else {
      return [...logos.slice(startIndex), ...logos.slice(0, endIndex - total)];
    }
  };

  return (
    <section className="relative w-full min-h-[300px] bg-transparent overflow-hidden">
      <div className="relative z-10 text-white px-6 py-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Trusted by Global Leaders Across Industries
        </h2>
        <p className="max-w-2xl mx-auto text-center mb-8 text-gray-300">
          From automotive and energy giants to life sciences pioneers and CPG innovators like IFF, Data Destination drives digital transformation at scale.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${startIndex * (100 / displayCount)}%)` }}
          >
            {logos.concat(logos).map((logo, idx) => (
              <div key={idx} className="flex-none w-1/6 px-4 py-2">
                <img
                  src={logo}
                  alt={`Customer logo ${idx + 1}`}
                  className="h-12 mx-auto grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
