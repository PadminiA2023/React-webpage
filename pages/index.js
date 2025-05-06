import Head from 'next/head';
import NeonButton from '../components/NeonButton';
import CountUp from 'react-countup';
import AnimatedBackground from '../components/AnimatedBackground';
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

  return (
    <>
      <Head>
        <title>Data Destination</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <main className="relative z-10 flex flex-col items-center justify-start px-6 sm:px-12 lg:px-24 text-left">

          {/* HERO */}
          <div className="pt-40 text-left max-w-2xl fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Your Journey to Intelligent Operations Starts Here
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Bridge the gap between data and decision-making with our customized IoT solutions.
            </p>
            <NeonButton onClick={() => router.push('/signup')}>Get Started →</NeonButton>
          </div>

          {/* IMAGE SECTION */}
          <section className="w-full flex justify-center py-20 fade-in-up">
            <div className="gradient-glow-border">
              <img
                src="/images/hero-image.png"
                alt="AWS Solution Screenshot"
                className="max-w-4xl w-full rounded-2xl shadow-xl"
              />
            </div>
          </section>

      {/* 🔥 Key Solutions Section */}
<section
  className="w-full py-20 px-6 sm:px-12 lg:px-24 fade-in-up"
  id="core-solutions"
>
  <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
    Our Core Solutions
  </h2>



  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="relative bg-black bg-opacity-50 border border-purple-600 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/50 transition transform duration-300 hover:scale-105">

      <h3 className="text-xl font-semibold text-orange-400 mb-4">
        Multi-domain IoT Solutions
      </h3>
      <p className="text-gray-300 text-sm mb-6">
        Tailored IoT services for manufacturing, CPG, life sciences, and energy…
      </p>
      {/* ← Here’s the Know More button */}
      <a
        href="#multi-domain"
        className="inline-block text-orange-400 font-medium hover:underline"
      >
        Know More →
      </a>
    </div>

    {/* Card 2 */}
    <div className="bg-black bg-opacity-50 border border-blue-500 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/50 transition transform duration-300 hover:scale-105">
      <h3 className="text-xl font-semibold text-blue-400 mb-4">
        Container Platform Modernization
      </h3>
      <p className="text-gray-300 text-sm mb-6">
        Modernize your application stack with secure, scalable containers…
      </p>
      <a
        href="#container-modernization"
        className="inline-block text-blue-400 font-medium hover:underline"
      >
        Know More →
      </a>
    </div>

    {/* Card 3 */}
    <div className="bg-black bg-opacity-50 border border-pink-500 rounded-2xl p-6 shadow-lg hover:shadow-pink-500/50 transition transform duration-300 hover:scale-105">
      <h3 className="text-xl font-semibold text-pink-400 mb-4">
        Advanced Generative AI Solutions
      </h3>
      <p className="text-gray-300 text-sm mb-6">
        Enable next-gen automation and insights through custom-built AI workflows…
      </p>
      <a
        href="#gen-ai"
        className="inline-block text-pink-400 font-medium hover:underline"
      >
        Know More →
      </a>
    </div>
  </div>
</section>



          {/* TILE SECTION WITH METRICS */}
          <section className="w-full bg-white py-20">
            <div className="px-6 sm:px-12 lg:px-24">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
                Industrial Data Fabric
              </h2>
              <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
                A modern consulting solution to unify industrial IoT data, improve operational efficiency, and unlock critical business insights.
              </p>

              {/* TILES */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Data Integration",
                    details: "Seamless ingestion from OPC-UA, Modbus TCP, MQTT, SQL, and REST APIs—across edge and cloud.",
                  },
                  {
                    title: "Insight Enablement",
                    details: "Enable real-time insights like OEE, MTTR, MTBF, Shift Performance, and Root Cause Analysis.",
                  },
                  {
                    title: "Custom Interfaces",
                    details: "Deliver tailored dashboards and UI components built atop standardized industrial hierarchies.",
                  },
                  {
                    title: "Operational Excellence",
                    details: "Improve uptime, reduce costs, and enable predictive monitoring with scalable IoT data fabric.",
                  },
                ].map((tile, index) => (
                  <Tile key={index} title={tile.title} details={tile.details} />
                ))}
              </div>

              {/* METRICS */}
              <div className="mt-20 bg-gray-100 rounded-2xl py-12 px-4 sm:px-8 lg:px-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">
                      <CountUp end={12} duration={2} />+ TB
                    </p>
                    <p className="text-sm text-gray-600">Industrial data processed daily</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">
                      <CountUp end={150} duration={2.5} />+
                    </p>
                    <p className="text-sm text-gray-600">Connected factory sites</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">
                      <CountUp end={99.98} duration={2.5} decimals={2} />%
                    </p>
                    <p className="text-sm text-gray-600">Uptime across IoT edge nodes</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">
                      <CountUp end={40} duration={2} />%
                    </p>
                    <p className="text-sm text-gray-600">Average reduction in downtime</p>
                  </div>
                </div>
              </div>
            </div>
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
<section className="w-full bg-white py-20 px-6 sm:px-12 lg:px-24">
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
<footer className="bg-black border-t border-gray-800 text-gray-400 py-8 px-6 sm:px-12 lg:px-24 mt-24">
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

    {/* Right: Pixel Heart */}
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
