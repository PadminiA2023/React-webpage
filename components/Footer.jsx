// components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-[#0a0a0a] text-gray-400 text-sm py-6 px-4 sm:px-12 lg:px-24 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Left: Copyright & Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span>© {new Date().getFullYear()} Data Destination. All rights reserved.</span>
            <span className="hidden sm:inline-block">|</span>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </div>
  
          {/* Center: Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="#"><i className="fab fa-x-twitter text-gray-400 hover:text-white" /></a>
            <a href="#"><i className="fab fa-linkedin text-gray-400 hover:text-white" /></a>
            <a href="#"><i className="fab fa-github text-gray-400 hover:text-white" /></a>
            <a href="#"><i className="fab fa-youtube text-gray-400 hover:text-white" /></a>
            <a href="#"><i className="fab fa-slack text-gray-400 hover:text-white" /></a>
          </div>
  
          {/* Right: Heart Icon + Tagline */}
          <div className="flex items-center gap-2">
            <span className="text-orange-500 text-xl animate-pulse">❤️</span>
            <span className="text-sm">Made with passion by Data Destination</span>
          </div>
        </div>
      </footer>
    );
  }
  