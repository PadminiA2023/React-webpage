import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function MetricsSection() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const metrics = [
    { label: 'TB Storage', value: 12 },
    { label: 'Connected Devices', value: 5000 },
    { label: 'Data Sources', value: 200 },
    { label: 'Uptime', value: 99.9, suffix: '%' },
  ];

  return (
    <motion.section
      ref={ref}
      className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-transparent relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeUp}
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
      >
        Key Performance Indicators
      </motion.h2>

      <div className="flex flex-wrap justify-center items-center relative max-w-6xl mx-auto">
        {metrics.map((metric, idx) => (
          <motion.div
            key={idx}
            className="relative w-full md:w-1/4 p-4 flex flex-col items-center"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUp}
          >
            {/*Blue lines and dots:*/}
            <div className="w-6 h-6 bg-blue-500 rounded-full mb-4 border-4 border-white z-10"></div>
            <div className="bg-[#1e293b] rounded-lg p-6 shadow-lg text-center w-full">
              <span className="text-4xl font-bold mb-2 block text-white">
                {inView ? (
                  <CountUp
                    end={metric.value}
                    duration={2}
                    suffix={metric.suffix || '+'}
                  />
                ) : (
                  '0'
                )}
              </span>
              <span className="text-sm uppercase tracking-wide text-gray-300">
                {metric.label}
              </span>
            </div>
            {idx < metrics.length - 1 && (
              <div className="hidden md:block absolute top-3 right-[-2rem] w-16 h-px bg-blue-500"></div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
