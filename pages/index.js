import Head from 'next/head';
import NeonButton from '../components/NeonButton';
import CountUp from 'react-countup';
import AnimatedBackground from '../components/AnimatedBackground';
import CustomerShowcase from '../components/CustomerShowcase';
import IndustrialTiles from '../components/IndustrialTiles';
import MetricsSection from '../components/MetricsSection';
import WhyChooseUs from '../components/WhyChooseUs';

import { motion } from 'framer-motion';

import { useTypewriter } from 'react-simple-typewriter';

import { useEffect, useState } from 'react';


// TILE COMPONENT
function Tile({ title, details }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className={`rounded-2xl p-6 shadow-lg text-white transition-all transform hover:scale-105 cursor-pointer bg-cover bg-center`}
      style={{
        backgroundImage: "url('/images/tilebg.png')",
      }}
    >
      <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>

      <div className="text-center mb-2">
        <span className="inline-block text-xl transition-transform duration-300">
          {expanded ? '↓' : '→'}
        </span>
      </div>

      <div
        className={`transition-all ease-in-out duration-500 overflow-hidden ${
          expanded ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm text-center">{details}</p>
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
  }, []);

const [text] = useTypewriter({
  words: [
    'Seamlessly integrate, contextualize, and deliver real-time industrial IoT data across your enterprise — from the edge to the cloud — unlocking actionable insights, improved operations, and scalable innovation.',
  ],
  loop: false,
  typeSpeed: 30,
  deleteSpeed: 0,
  delaySpeed: 1000,
});


  return (
    <>
      <Head>
        <title>Data Destination</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link
    rel="stylesheet"
   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      {/* HEADER */}
      <header className="w-full flex justify-between items-center py-6 px-6 absolute top-0 z-20">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-8 w-8" />
            <span className="text-white text-2xl font-bold tracking-wide">Data Destination</span>
          </div>
          <nav className="flex gap-6 text-white text-sm font-medium">
            <a href="#" className="hover:text-gray-300">Pricing</a>
            <a href="#" className="hover:text-gray-300">Resources</a>
            <a href="#" className="hover:text-gray-300">Community</a>
            <a href="#" className="hover:text-gray-300">Download</a>
          </nav>
        </div>
        <div className="flex items-center">
          <button className="text-white text-sm px-4 py-1 border border-white rounded-full hover:bg-white/10 transition">
            SIGN IN
          </button>
        </div>
      </header>

      {/* BACKGROUND */}
      <AnimatedBackground>
       <main className="relative z-10 flex flex-col items-center justify-start w-full">


          {/* HERO */}
<section className="relative w-full min-h-screen bg-gradient-to-b from-black to-[#001f3f] flex flex-col justify-center items-center text-center text-white">
  <h1 className="text-4xl md:text-6xl font-bold mb-6">
    Accelerate Industrial Transformation with <br />
    Data Fabric
  </h1>
  <p className="text-lg md:text-xl mb-8 max-w-2xl md:max-w-3xl">
    {text}
  </p>
  <div className="holographic-button-container">
    <button className="holographic-button">
      Get Started →
    </button>
  </div>
</section>



      
          
          
          
          
          
         





          {/* TILE SECTION WITH METRICS */}
          
 


<div className="mt-20">
  <IndustrialTiles />
</div>

<div className="flex flex-col md:flex-row gap-4 justify-center items-center my-12">
  <button className="holographic-button">
    Why Choose Us?
  </button>
  <a href="#iot-action" className="holographic-button">
    Explore More
  </a>
</div>



<MetricsSection />


<WhyChooseUs />





 <CustomerShowcase />



      {/* 🔥 Key Solutions Section */}
<section
  className="w-full py-20 px-6 sm:px-12 lg:px-24 fade-in-up"
  id="core-solutions"
>

  <section className="w-full py-20 px-6 sm:px-12 lg:px-24">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-white">
    Our Core Solutions
  </h2>

  <div className="flex flex-wrap justify-center gap-8">
    {[
      {
        title: 'Multi-domain IoT Solutions',
        description: 'Tailored IoT services for manufacturing, CPG, life sciences, and energy…',
        gradient: 'from-pink-500 to-yellow-400',
      },
      {
        title: 'Container Platform Modernization',
        description: 'Modernize your application stack with secure, scalable containers…',
        gradient: 'from-blue-500 to-purple-600',
      },
      {
        title: 'Advanced Generative AI Solutions',
        description: 'Enable next-gen automation and insights through custom-built AI workflows…',
        gradient: 'from-green-400 to-cyan-500',
      },
    ].map((item, idx) => (
      <div key={idx} className="relative w-80 h-96 group">
        {/* Neon slanted background */}
        <div
          className={`absolute -rotate-12 w-64 h-96 bg-gradient-to-tr ${item.gradient} rounded-lg blur-2xl opacity-70 group-hover:opacity-100 transition duration-700`}
        ></div>

        {/* Glass card */}
        <div className="relative w-full h-full bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col justify-between shadow-xl border border-white/20">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.description}</p>
          </div>
          <a
            href="#"
            className="mt-4 inline-block px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Know More →
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


</section>



          

          

{/* 📝 Multi-domain IoT Solutions – Enhanced Layout */}
<section
  id="multi-domain"
  className="relative overflow-hidden py-24 px-6 sm:px-12 lg:px-24"
>
  {/* subtle background gradient */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,50,100,0.4) 50%, rgba(0,0,0,0.8) 100%)",
    }}
  />

  <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center space-y-10">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-white fade-in-up">
      Multi-domain IoT Solutions
    </h2>

    <p className="text-gray-300 leading-relaxed fade-in-up max-w-3xl">
      Elevate your operations with AWS IoT enabled solutions. We help businesses drive automation,
      reduce costs, and unlock real-time insights through a seamless sensor-to-dashboard pipeline.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full">
      {[
        {
          title: "Manufacturing",
          description: "Predictive maintenance to minimize downtime & optimize supply chains.",
        },
        {
          title: "CPG",
          description: "Demand forecasting & personalized engagement via connected devices.",
        },
        {
          title: "Life Sciences",
          description: "Lab & bioreactor monitoring for yield improvement.",
        },
        {
          title: "Energy",
          description: "Smart grid management & real-time monitoring of renewables.",
        },
      ].map((item, idx) => (
        <div key={idx} className="group perspective w-full h-48">
          <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
            {/* Front Side */}
            <div className="absolute w-full h-full bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white rounded-2xl flex items-center justify-center font-bold text-lg backface-hidden transform transition-transform duration-300 hover:scale-105">
              {item.title}
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full bg-[#0f172a] text-gray-200 rounded-2xl p-4 flex items-center justify-center text-sm text-center rotate-y-180 backface-hidden">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



{/* 🐳 Container Platform Modernization – Centered Layout */}
<section
  id="container-modernization"
  className="relative overflow-hidden py-24 px-6 sm:px-12 lg:px-24"
>
  {/* subtle background gradient */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(50,0,100,0.4) 50%, rgba(0,0,0,0.8) 100%)",
    }}
  />

  <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center space-y-10">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-white fade-in-up">
      Container Platform Modernization
    </h2>

    <p className="text-gray-300 leading-relaxed fade-in-up max-w-3xl">
      Modern container platforms deliver faster deployments, better resource efficiency, and
      enterprise-grade resilience. We help you assess, plan, and execute a seamless migration
      from monolithic servers to orchestrated, cloud‐native containers.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full">
      {[
        {
          title: "Lightweight Containerization",
          description: "Package applications and dependencies into portable, consistent images.",
        },
        {
          title: "Ecosystem & Orchestrators",
          description: "Use Docker, ECS/EKS, GKE, AKS, and OpenShift for container orchestration.",
        },
        {
          title: "Operational Efficiency",
          description: "Reduce infra overhead and enable faster CI/CD scaling on demand.",
        },
        {
          title: "Cost & Performance Insights",
          description: "Track ROI using metrics like deployment velocity, utilization, and failure rate.",
        },
        {
          title: "Roadmap to Production",
          description: "Plan PoCs, validate orchestration, and scale production with governance.",
        },
      ].map((item, idx) => (
        <div key={idx} className="group perspective w-full h-48">
          <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
            {/* Front Side */}
            <div className="absolute w-full h-full bg-gradient-to-br from-[#1e1b4b] to-[#3b0764] text-white rounded-2xl flex items-center justify-center font-semibold text-md backface-hidden transform transition-transform duration-300 hover:scale-105">
              {item.title}
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full bg-[#0f172a] text-gray-200 rounded-2xl p-4 flex items-center justify-center text-sm text-center rotate-y-180 backface-hidden">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* 🤖 Advanced Generative AI Enabled Solutions – Centered Layout */}
<section
  id="gen-ai"
  className="relative overflow-hidden py-24 px-6 sm:px-12 lg:px-24 fade-in-up"
>
  {/* subtle background gradient */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(50,0,80,0.4) 50%, rgba(0,0,0,0.8) 100%)",
    }}
  />

  <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center space-y-10">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-white fade-in-up">
      Advanced Generative AI Enabled Solutions
    </h2>

    <p className="text-gray-300 leading-relaxed fade-in-up max-w-3xl">
      Empower your organization with cutting-edge generative AI that automates complex workflows,
      synthesizes insights in real-time, and drives innovation across your Industrial IoT landscape.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full">
      {[
        {
          title: "Strategic AI Integration",
          description: "Auto-generate reports and dashboards from industrial data pipelines using LLMs.",
        },
        {
          title: "Workflow Automation",
          description: "Enable predictive maintenance, anomaly detection, and root cause analysis.",
        },
        {
          title: "Custom Model Training",
          description: "Fine-tune LLMs and diffusion models on factory data for domain accuracy.",
        },
        {
          title: "Hybrid Deployment",
          description: "Deploy via AWS Bedrock, Azure OpenAI, or on-prem options for full control.",
        },
        {
          title: "Trust & Explainability",
          description: "Build human-in-the-loop workflows with audit trails and traceable outputs.",
        },
        {
          title: "High-Impact Use Cases",
          description: "From energy optimization to dynamic SOP generation across verticals.",
        },
      ].map((item, idx) => (
        <div key={idx} className="group perspective w-full h-48">
          <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
            {/* Front Side */}
            <div className="absolute w-full h-full bg-gradient-to-br from-[#241a3e] to-[#0e0a1b] text-white rounded-2xl flex items-center justify-center font-semibold text-md backface-hidden transform transition-transform duration-300 hover:scale-105">
              {item.title}
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full bg-[#0f0a1a] text-gray-200 rounded-2xl p-4 flex items-center justify-center text-sm text-center rotate-y-180 backface-hidden">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




{/* 🎥 Industrial IoT in Action Section */}
<section id="iot-action" className="w-full bg-gradient-to-b from-gray-900 to-gray-950 py-20">


  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
      Industrial IoT in Action
    </h2>
    <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
      Explore real-world demos of OPC UA Server & Monitoring<br />
      Watch how industrial protocols like OPC UA are used in real-time to simulate server behavior and monitor telemetry data across a connected ecosystem. These hands-on demonstrations reveal the power of unified data access and standards-based communication in smart factory environments.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Video Tile 1 */}
      <div className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
        <video
          className="w-full h-64 object-cover"
          controls
          poster="/images/opc-server-thumbnail.png"
        >
          <source src="/videos/opc-ua-ss-vid.mp4" type="video/mp4" />
        </video>
        <div className="p-6 bg-white">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">OPC UA Server Simulation</h3>
          <p className="text-sm text-gray-600">
            Demonstrates how to simulate industrial devices using OPC UA standards and publish telemetry in real-time.
          </p>
        </div>
      </div>

      {/* Video Tile 2 */}
      <div className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
        <video
          className="w-full h-64 object-cover"
          controls
          poster="/images/prosys-monitor-thumbnail.png"
        >
          <source src="/videos/opc-ua-monitor.mp4" type="video/mp4" />
        </video>
        <div className="p-6 bg-white">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">OPC UA Monitoring Tool</h3>
          <p className="text-sm text-gray-600">
            See how OPC UA clients subscribe to live telemetry streams for visualization and machine diagnostics.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 🌌 Footer */}
<footer className="w-full bg-transparent border-t border-gray-800 text-gray-400 py-8 px-6 sm:px-12">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 text-sm">

    {/* Left: Copyright & Links */}
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center">
      <p>© {new Date().getFullYear()} Data Destination. All rights reserved.</p>
      <a href="#" className="hover:text-white transition">Terms of Service</a>
      <a href="#" className="hover:text-white transition">Privacy Policy</a>
    </div>

    {/* Middle: Social Icons */}
    <div className="flex items-center gap-4 text-lg text-gray-500">
      <a href="#" className="hover:text-white transition"><i className="fab fa-x-twitter" /></a>
      <a href="#" className="hover:text-white transition"><i className="fab fa-linkedin-in" /></a>
      <a href="#" className="hover:text-white transition"><i className="fab fa-github" /></a>
      <a href="#" className="hover:text-white transition"><i className="fab fa-youtube" /></a>
      <a href="#" className="hover:text-white transition"><i className="fab fa-slack" /></a>
    </div>

    {/* Right: Pixel Heart + Text */}
    <div className="flex items-center gap-2 text-sm text-orange-400">
      <span className="w-5 h-5 animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-orange-500"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                   4.42 3 7.5 3c1.74 0 3.41 0.81 
                   4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                   19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                   6.86-8.55 11.54L12 21.35z" />
        </svg>
      </span>
      <span>Made with passion and Data Destination</span>
    </div>

  </div>
</footer>




</main>
</AnimatedBackground>

    </>
  );
}
