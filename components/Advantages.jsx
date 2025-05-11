import { motion } from "framer-motion";

const advantageData = [
  {
    title: "Instant Root Cause Detection",
    description: "Identify issues the moment they occur with high-fidelity signal tracing.",
  },
  {
    title: "Actionable Intelligence, Always",
    description: "Your data, translated into decisions—automatically.",
  },
  {
    title: "Predictive Insights, Not Just Reports",
    description: "Move from historic charts to proactive alerts.",
  },
  {
    title: "Seamless Sensor-to-Dashboard Flow",
    description: "Eliminate bottlenecks between device and insight.",
  },
  {
    title: "Unified Visibility Across Devices",
    description: "One dashboard. All data streams.",
  },
  {
    title: "Built for Speed, Scale & Security",
    description: "Modern architecture meets enterprise-grade reliability.",
  },
];

export default function Advantages() {
  return (
    <section className="w-full px-6 py-24 sm:px-12 lg:px-24 text-white text-center">
      {/* Heading (no animation) */}
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
         Still exploring options?
      </h2>

      {/* Subheading with scroll animation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-12"
>
        We connect what others miss.
      </motion.p>

      {/* Grid - All tiles animate together */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.25, 0.8, 0.25, 1],
        }}
      viewport={{ once: false, amount: 0.2 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 max-w-6xl mx-auto"

      >
        {advantageData.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center group text-xl font-semibold text-gray-400 hover:text-blue-400 transition transform hover:scale-105 cursor-pointer"
          >
            {item.title}
            <div className="absolute top-full mt-4 w-72 p-4 rounded-xl bg-[#111827] text-sm text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 pointer-events-none">
              {item.description}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
