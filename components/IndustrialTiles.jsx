import { useState, useEffect } from 'react';

export default function IndustrialTiles() {
  const [currentCycle, setCurrentCycle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentCycle((prev) => (prev + 1) % 2);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const tiles = [
  { title: 'Data Integration', icon: 'fa-database', desc: 'Seamlessly unify your data streams.' },
  { title: 'Insight Enablement', icon: 'fa-lightbulb', desc: 'Drive decisions with real-time insights.' },
  { title: 'Custom Interfaces', icon: 'fa-cogs', desc: 'Tailor solutions to your operations.' },
  { title: 'Operational Excellence', icon: 'fa-line-chart', desc: 'Boost performance and efficiency.' },
];


  return (
    <section className="relative w-full flex flex-col justify-center items-center text-center mt-24">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white">
        Industrial Data Fabric
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-300">
       Discover how Industrial Data Fabric bridges the gap between the edge and the enterprise, integrating diverse data sources into a unified layer that enables predictive analytics, agile decision-making, and resilient operations. Whether you’re driving manufacturing efficiency, energy optimization, or smart asset management — this is the platform that empowers your teams to act faster and smarter.
      </p>

      <div className="tile-container relative w-full overflow-hidden">
        <div
          className={`tile-strip flex transition-transform duration-700 ease-in-out ${
            currentCycle === 0 ? 'translate-x-0' : '-translate-x-1/2'
          }`}
          style={{ width: '200%' }}
        >
          {[0, 1].map((cycle) => (
            <div key={cycle} className="cycle flex w-1/2 justify-center gap-8">
              {tiles.slice(cycle * 2, cycle * 2 + 2).map((tile, idx) => (
                
              <div
  key={idx}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  className="relative w-72 h-60 rounded-xl overflow-hidden cursor-pointer group shadow-lg"
>
  {/* DARK BLUE SECTION (BOTTOM) */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center text-white text-5xl transition-transform duration-700 transform group-hover:-translate-y-full">
    <i className={`fa ${tile.icon}`} />
  </div>

  {/* DARK GRAY SECTION (TOP) */}
  <div className="absolute inset-0 bg-[#1e293b] flex flex-col items-center justify-center text-center px-4 py-6 transition-transform duration-700 transform translate-y-full group-hover:translate-y-0">
    <h3 className="text-xl font-semibold mb-2 text-gray-300">{tile.title}</h3>
    <p className="text-sm text-gray-400">{tile.desc}</p>
    <div className="mt-2 w-10 h-1 bg-blue-500 rounded-full" />
  </div>
</div>


              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
