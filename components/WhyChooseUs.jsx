import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};


export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="w-full px-6 py-20 sm:px-12 lg:px-24 bg-[#0a0a1a] text-white">
      
      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
        {/* LEFT SIDE */}
        <motion.div
          className="lg:w-5/12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeUp}
        >
          <span className="text-base sm:text-lg text-blue-400 font-semibold mb-4 block uppercase tracking-wide">
            / Why Choose Us?
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Why Choose <br /> Industrial Data Fabric
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            For over a decade, we’ve been transforming enterprises with unified data solutions,
            building trust, speed, and innovation across manufacturing, energy, and beyond.
          </p>
          <div className="flex gap-6">
            <button className="text-blue-400 text-lg font-semibold hover:underline">
              Contact Us →
            </button>
            <button className="text-blue-400 text-lg font-semibold hover:underline">
              Request Demo →
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:w-7/12">
          {[
            {
              icon: '⚙',
              title: 'Seamless Integration',
              desc: 'Unlock real-time connectivity across devices and systems without the heavy lift.',
            },
            {
              icon: '📊',
              title: 'Actionable Insights',
              desc: 'Turn raw data into predictive, automated decisions that improve efficiency.',
            },
            {
              icon: '🚀',
              title: 'Scalable Innovation',
              desc: 'Future-proof your operations with a cloud-native platform built to grow with you.',
            },
            {
              icon: '💡',
              title: 'Proven Expertise',
              desc: 'Leverage industry-leading solutions trusted by top global enterprises.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="border-l-4 border-blue-500 pl-4"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeUp}
            >
              <h3 className="text-2xl font-semibold text-white mb-3">
                {item.icon} {item.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
