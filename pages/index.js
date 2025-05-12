import Head from 'next/head';
import NeonButton from '../components/NeonButton';
import CountUp from 'react-countup';
import AnimatedBackground from '../components/AnimatedBackground';
import CustomerShowcase from '../components/CustomerShowcase';
import IndustrialTiles from '../components/IndustrialTiles';
import MetricsSection from '../components/MetricsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import CoreSolutions from '../components/CoreSolutions';
import Advantages from "../components/Advantages";


import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import { useEffect, useState } from 'react';

import {
  Factory,
  Package,
  TestTube,
  BatteryCharging,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};


import {
  LayoutGrid,
  Cloud,
  ShieldCheck,
  Settings2
} from "lucide-react";


import {
  BrainCircuit,
  Bot,
  CloudCog,
  FileSearch2,
} from "lucide-react";





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
<section id = "data-fabric" className="relative w-full min-h-screen bg-gradient-to-b from-black to-[#001f3f] flex flex-col justify-center items-center text-center text-white">
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
  <button
    onClick={() => {
      document.getElementById("why-choose-us")?.scrollIntoView({ behavior: "smooth" });
    }}
    className="holographic-button"
  >
    Why Choose Us?
  </button>
  <a href="#iot-action" className="holographic-button">
    Explore More
  </a>
</div>



<MetricsSection />

<WhyChooseUs />

<CustomerShowcase />

<CoreSolutions />

  

{/* 📝 Multi-domain IoT Solutions – Enhanced Layout */}

<section className="w-full px-6 py-20 sm:px-12 lg:px-24 bg-[#0a0a1a] text-white">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    variants={fadeInUp}
  >
    <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
      
      {/* LEFT - Text */}
      <div className="lg:w-5/12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Multi-domain IoT Solutions
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Elevate your operations with AWS IoT enabled solutions. We help businesses drive automation,
          reduce costs, and unlock real-time insights through a seamless sensor-to-dashboard pipeline.
        </p>
      </div>

      {/* RIGHT - Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-7/12">
        {[
          { icon: Factory, title: 'Manufacturing', desc: 'Factory automation, robotics integration, and predictive analytics for industrial floors.' },
          { icon: Package, title: 'CPG', desc: 'Optimize consumer goods production with inventory analytics and real-time batch monitoring.' },
          { icon: TestTube, title: 'Life Sciences', desc: 'Track compliance, cold chain data, and automate clinical device alerts.' },
          { icon: BatteryCharging, title: 'Energy', desc: 'Enable smart metering, remote diagnostics, and grid performance monitoring.' },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            className="group bg-[#1c1c2a] p-8 rounded-2xl transition-all duration-500 ease-in-out
            hover:shadow-[0_0_25px_5px_#3b82f6] hover:scale-[1.03] cursor-pointer
            flex flex-col items-center text-center min-h-[100px] hover:min-h-[180px]"
          >
            <div className="flex items-center gap-2 justify-center mb-2">
              <item.icon className="w-7 h-9 text-blue-400" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h3>
            </div>
            <div className="w-8 h-[3px] bg-blue-500 rounded-full mb-2"></div>
            <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
</section>


{/* 🐳 Container Platform Modernization – Centered Layout */}
<section className="w-full px-6 py-20 sm:px-12 lg:px-24 bg-[#0a0a1a] text-white">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    variants={fadeInUp}
  >
    <div className="flex flex-col lg:flex-row items-start justify-between gap-12">

      {/* LEFT - Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-7/12">
        {[
          { icon: LayoutGrid, title: 'Microservices Ready', desc: 'Deploy, scale, and manage microservices architectures with container orchestration.' },
          { icon: Cloud, title: 'Hybrid Deployment', desc: 'Run workloads across cloud and on-premise with unified control and monitoring.' },
          { icon: ShieldCheck, title: 'Security First', desc: 'Ensure workload isolation, access control, and vulnerability scanning.' },
          { icon: Settings2, title: 'DevOps Enabled', desc: 'Integrate CI/CD pipelines, observability tools, and GitOps workflows seamlessly.' },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            className="group bg-[#1c1c2a] p-8 rounded-2xl transition-all duration-500 ease-in-out
            hover:shadow-[0_0_25px_5px_#3b82f6] hover:scale-[1.03] cursor-pointer
            flex flex-col items-center text-center min-h-[100px] hover:min-h-[180px]"
          >
            <div className="flex items-center gap-2 justify-center mb-2">
              <item.icon className="w-7 h-9 text-blue-400" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h3>
            </div>
            <div className="w-8 h-[3px] bg-blue-500 rounded-full mb-2"></div>
            <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* RIGHT - Text */}
      <div className="lg:w-5/12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Container Platform Modernization
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Modernize your application infrastructure with a secure, scalable, and automated container platform.
          Accelerate innovation by leveraging containerized microservices, CI/CD workflows, and hybrid cloud deployments.
        </p>
      </div>
    </div>
  </motion.div>
</section>


{/* 🤖 Advanced Generative AI Enabled Solutions – Centered Layout */}
<section className="w-full px-6 py-20 sm:px-12 lg:px-24 bg-[#0a0a1a] text-white">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    variants={fadeInUp}
  >
    <div className="flex flex-col lg:flex-row items-start justify-between gap-12">

      {/* LEFT - Text */}
      <div className="lg:w-5/12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Advanced Generative AI Solutions
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Empower your organization with cutting-edge generative AI capabilities that enhance decision-making,
          automate complex workflows, and unlock new avenues of innovation across your IoT ecosystem.
        </p>
      </div>

      {/* RIGHT - Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-7/12">
        {[
          { icon: BrainCircuit, title: 'Custom Model Training', desc: 'Fine-tune generative models on proprietary data for domain-specific accuracy.' },
          { icon: Bot, title: 'AI-Powered Workflows', desc: 'Deploy LLMs to automate reporting, diagnostics, and documentation tasks.' },
          { icon: CloudCog, title: 'Hybrid Deployment Options', desc: 'Use managed (SaaS) or self-hosted generative solutions for compliance.' },
          { icon: FileSearch2, title: 'Trust & Explainability', desc: 'Maintain audit trails and integrate human-in-the-loop validation pipelines.' },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            className="group bg-[#1c1c2a] p-8 rounded-2xl transition-all duration-500 ease-in-out
            hover:shadow-[0_0_25px_5px_#3b82f6] hover:scale-[1.03] cursor-pointer
            flex flex-col items-center text-center min-h-[100px] hover:min-h-[190px]"
          >
            <div className="flex items-center gap-2 justify-center mb-2">
              <item.icon className="w-7 h-9 text-blue-400" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h3>
            </div>
            <div className="w-8 h-[3px] bg-blue-500 rounded-full mb-2"></div>
            <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
</section>


{/* 🎥 Industrial IoT in Action Section */}
<section id="iot-action" className="w-full bg-transparent py-20">


  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-extrabold text-white text-center mb-4">

      Industrial IoT in Action
    </h2>
    <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">

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


{/*Advantages Section*/}
{/*<section className="w-full px-6 py-24 sm:px-12 lg:px-24 bg-black text-white text-center">
  <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
    Still exploring options?
  </h2>
  <p className="text-xl sm:text-2xl font-semibold text-gray-300 mb-12">
    We connect what others miss.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <div className="text-xl font-semibold text-gray-400 hover:text-blue-400 transition">
      Instant Root Cause Detection
    </div>
    <div className="text-xl font-semibold text-gray-400 hover:text-blue-400 transition">
      Actionable Intelligence, Always
    </div>
    <div className="text-xl font-semibold text-gray-400 hover:text-blue-400 transition">
      Predictive Insights, Not Just Reports
    </div>
    <div className="text-xl font-semibold text-gray-400 hover:text-blue-400 transition">
      Seamless Sensor-to-Dashboard Flow
    </div>
    <div className="text-xl font-semibold text-gray-400 hover:text-blue-400 transition">
      Unified Visibility Across Devices
    </div>
    <div className="text-xl font-semibold text-gray-400 hover:text-blue-400 transition">
      Built for Speed, Scale & Security
    </div>
  </div>
</section>  */}


 <Advantages />


<section className="w-full bg-black text-white py-24 px-6 sm:px-12 lg:px-24">
  <h2 className="text-5xl font-bold mb-16">Contact Us</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 text-base">
    
    {/* Products */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Products</h3>
      <ul className="space-y-3">
        {['AI', 'Enterprise', 'Fluid Compute', 'Next.js', 'Observability', 'Previews', 'Rendering', 'Security', 'Turbo', 'v0 ↗'].map((item, i) => (
          <li
            key={i}
            className="hover:text-blue-400 hover:drop-shadow-[0_0_5px_rgba(0,153,255,0.8)] transition duration-300 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Resources</h3>
      <ul className="space-y-3">
        {['Community ↗', 'Docs', 'Guides', 'Help', 'Integrations', 'Pricing', 'Resources', 'Solution Partners', 'Startups', 'Templates'].map((item, i) => (
          <li
            key={i}
            className="hover:text-blue-400 hover:drop-shadow-[0_0_5px_rgba(0,153,255,0.8)] transition duration-300 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Company */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Company</h3>
      <ul className="space-y-3">
        {['About', 'Blog', 'Careers', 'Changelog', 'Contact Us', 'Customers', 'Partners', 'Privacy Policy', 'Legal ▾'].map((item, i) => (
          <li
            key={i}
            className="hover:text-blue-400 hover:drop-shadow-[0_0_5px_rgba(0,153,255,0.8)] transition duration-300 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Social */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Social</h3>
      <ul className="space-y-3">
        {['GitHub', 'LinkedIn', 'Twitter', 'YouTube'].map((item, i) => (
          <li
            key={i}
            className="hover:text-blue-400 hover:drop-shadow-[0_0_5px_rgba(0,153,255,0.8)] transition duration-300 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>

  </div>
</section>




{/* Footer section */}
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
