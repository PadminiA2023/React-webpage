export default function CoreSolutions() {
  const cards = [
    {
      title: 'Multi-domain IoT Solutions',
      description: 'Tailored IoT services for manufacturing, CPG, life sciences, and energy.',
      gradient: 'bg-gradient-to-r from-[#0a0a1a] to-[#1e3a8a]',
    },
    {
      title: 'Container Platform Modernization',
      description: 'Modernize your application stack with secure, scalable containers.',
      gradient: 'bg-gradient-to-r from-[#0a0a1a] to-[#1e3a8a]',
    },
    {
      title: 'Advanced Generative AI Solutions',
      description: 'Enable next-gen automation and insights through custom-built AI workflows.',
      gradient: 'bg-gradient-to-r from-[#0a0a1a] to-[#1e3a8a]',
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-white">
        Our Core Solutions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`card group relative w-full h-[400px] sm:h-[450px] rounded-2xl overflow-hidden transform transition-all duration-500 ${card.gradient} shadow-xl hover:shadow-2xl hover:scale-[1.03]`}
          >
            {/* Title Face (background) */}
            <div className="face face2 flex items-center justify-center p-6 transition-all duration-300 group-hover:pt-12 bg-black/10">
              <h2 className="font-bold text-white text-2xl sm:text-3xl text-center px-4 leading-tight opacity-80">
                {card.title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h2>
            </div>

            {/* Description + Button Face (foreground) */}
            <div className="face face1 p-8 flex flex-col items-center justify-center text-white text-center bg-black/90 backdrop-blur-md translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-base sm:text-lg mb-8 leading-relaxed text-gray-100">
                {card.description}
              </p>
              <button className="know-more-btn px-6 py-3 rounded-lg font-semibold bg-[#1e3a8a] text-white border border-[#3b82f6] hover:bg-[#3b82f6] hover:text-black transition-all duration-300 shadow-lg hover:shadow-blue-500/40 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 delay-150">
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
