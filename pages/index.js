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
                src="/images/solution-details.png"
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
    <div className="relative bg-black bg-opacity-50 border border-purple-600 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/50 transition">
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
    <div className="bg-black bg-opacity-50 border border-blue-500 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/50 transition">
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
    <div className="bg-black bg-opacity-50 border border-pink-500 rounded-2xl p-6 shadow-lg hover:shadow-pink-500/50 transition">
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

  <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
    {/* Left: Diagram */}
    <div className="w-full lg:w-1/2 fade-in-up" style={{ animationDelay: "0.2s" }}>
      <img
        src="/images/iot.gif"
        alt="Sensors → Cloud → Dashboard"
        className="w-full rounded-2xl shadow-2xl"
      />
    </div>

    {/* Right: Text Content */}
    <div className="w-full lg:w-1/2 space-y-8">
      <h2
        className="text-3xl sm:text-4xl font-extrabold text-white fade-in-up"
        style={{ animationDelay: "0.4s" }}
      >
        Multi-domain IoT Solutions
      </h2>

      <p
        className="text-gray-300 leading-relaxed fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        Elevate your operations with AWS IoT enabled solutions. We help businesses drive automation,
        reduce costs, and unlock real-time insights through a seamless sensor-to-dashboard pipeline.
      </p>

      {/* Replace the <ul>...</ul> with: */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full">
  {[
    {
      title: "Manufacturing",
      description: "Predictive maintenance to minimize downtime & optimize supply chains.",
      color: "from-orange-500 to-yellow-400",
    },
    {
      title: "CPG",
      description: "Demand forecasting & personalized engagement via connected devices.",
      color: "from-green-400 to-teal-500",
    },
    {
      title: "Life Sciences",
      description: "Lab & bioreactor monitoring for yield improvement.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Energy",
      description: "Smart grid management & real-time monitoring of renewables.",
      color: "from-blue-500 to-cyan-400",
    },
  ].map((item, idx) => (
    <div key={idx} className="group perspective w-full h-48">
      <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div
          className={`absolute w-full h-full bg-gradient-to-br ${item.color} text-white rounded-2xl flex items-center justify-center font-bold text-lg backface-hidden`}
        >
          {item.title}
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-white text-gray-800 rounded-2xl p-4 flex items-center justify-center text-sm text-center rotate-y-180 backface-hidden">
          {item.description}
        </div>
      </div>
    </div>
  ))}
</div>


      <div className="fade-in-up" style={{ animationDelay: "1.6s" }}>
        <a
          href="#"
          className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500
                     text-white font-medium rounded-full shadow-xl hover:opacity-90 transition"
        >
          Explore More →
        </a>
      </div>
    </div>
  </div>
</section>

{/* 🐳 Container Platform Modernization – Enhanced Layout */}
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

  <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
    {/* Left: Illustration or GIF */}
    <div className="w-full lg:w-1/2 fade-in-up" style={{ animationDelay: "0.2s" }}>
      <img
        src="/images/container.gif"
        alt="Container Modernization Workflow"
        className="w-full rounded-2xl shadow-2xl"
      />
    </div>

    {/* Right: Text Content */}
    <div className="w-full lg:w-1/2 space-y-8">
      <h2
        className="text-3xl sm:text-4xl font-extrabold text-white fade-in-up"
        style={{ animationDelay: "0.4s" }}
      >
        Container Platform Modernization
      </h2>

      <p
        className="text-gray-300 leading-relaxed fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        Modern container platforms deliver faster deployments, better resource efficiency, and
        enterprise-grade resilience. We help you assess, plan, and execute a seamless migration
        from monolithic servers to orchestrated, cloud‐native containers.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full">
  {[
    {
      title: "Lightweight Containerization",
      description: "Package applications and their dependencies into portable, self-contained images that run consistently across environments.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Ecosystem & Orchestrators",
      description: "Leverage Docker, Amazon ECS/EKS, Google GKE, Azure AKS, Nomad or OpenShift for automated deployment, scaling, and management.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Operational Efficiency",
      description: "Reduce infrastructure overhead and accelerate CI/CD pipelines with containers that spin up in seconds and scale on-demand.",
      color: "from-green-400 to-teal-500",
    },
    {
      title: "Cost & Performance Insights",
      description: "Measure ROI via deployment velocity, resource usage, and failure-rate metrics—align modernization with business KPIs.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Roadmap to Production",
      description: "Start with discovery, build a pilot, validate orchestration PoC, and roll out with governance and monitoring.",
      color: "from-pink-500 to-purple-400",
    },
  ].map((item, idx) => (
    <div key={idx} className="group perspective w-full h-48">
      <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
        {/* Front */}
        <div
          className={`absolute w-full h-full bg-gradient-to-br ${item.color} text-white rounded-2xl flex items-center justify-center font-semibold text-md backface-hidden`}
        >
          {item.title}
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-white text-gray-800 rounded-2xl p-4 flex items-center justify-center text-sm text-center rotate-y-180 backface-hidden">
          {item.description}
        </div>
      </div>
    </div>
  ))}
</div>


      <div className="fade-in-up" style={{ animationDelay: "1.8s" }}>
        <a
          href="#"
          className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500
                     text-white font-medium rounded-full shadow-xl hover:opacity-90 transition"
        >
          Explore More →
        </a>
      </div>
    </div>
  </div>
</section>

{/* 🤖 Advanced Generative AI Enabled Solutions */}
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

  <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">
    {/* Left: Optional Illustration/GIF */}
    <div className="w-full lg:w-1/2 fade-in-up" style={{ animationDelay: "0.2s" }}>
      <img
        src="/images/gen.gif"
        alt="Generative AI Workflow"
        className="w-full rounded-2xl shadow-2xl"
      />
    </div>

    {/* Right: Text Content */}
    <div className="w-full lg:w-1/2 space-y-8">
      <h2
        className="text-3xl sm:text-4xl font-extrabold text-white fade-in-up"
        style={{ animationDelay: "0.4s" }}
      >
        Advanced Generative AI Enabled Solutions
      </h2>

      <p
        className="text-gray-300 leading-relaxed fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        Empower your organization with cutting-edge generative AI that automates complex workflows,
        synthesizes insights in real-time, and drives innovation across your Industrial IoT landscape.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full">
  {[
    {
      title: "Strategic AI Integration",
      description: "Embed generative models into your data pipelines to auto-draft technical reports and generate adaptive dashboards.",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Workflow Automation",
      description: "Leverage AI agents for anomaly detection, predictive maintenance alerts, and contextual root-cause analysis.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Custom Model Training",
      description: "Fine-tune domain-specific LLMs or diffusion models on your operational data for higher accuracy and relevance.",
      color: "from-green-400 to-teal-500",
    },
    {
      title: "Hybrid Deployment",
      description: "Choose between managed SaaS (Amazon Bedrock, Azure OpenAI) or self-hosted solutions for compliance and data control.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Trust & Explainability",
      description: "Implement provenance tracking, human-in-the-loop validation, and transparent audit logs to ensure reliability.",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "High-Impact Use Cases",
      description: "From auto-generating equipment manuals to AI-powered energy optimization and intelligent supply-chain forecasts.",
      color: "from-pink-500 to-red-400",
    },
    
  ].map((item, idx) => (
    <div key={idx} className="group perspective w-full h-48">
      <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
        {/* Front */}
        <div
          className={`absolute w-full h-full bg-gradient-to-br ${item.color} text-white rounded-2xl flex items-center justify-center font-semibold text-md backface-hidden`}
        >
          {item.title}
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-white text-gray-800 rounded-2xl p-4 flex items-center justify-center text-sm text-center rotate-y-180 backface-hidden">
          {item.description}
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  </div>
</section>



        </main>
      </AnimatedBackground>
    </>
  );
}
