import { GithubLogo, TwitterLogo, LinkedinLogo, Heart, Globe, EnvelopeSimple, Phone } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800/50 overflow-hidden">
  {/* Modern Grid Background */}
	<div className="absolute inset-0 opacity-5 bg-grid-static" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-transparent" />
      
      {/* Floating Elements */}
  <div className="absolute top-8 right-20 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse" />
	<div className="absolute bottom-16 left-16 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full blur-xl animate-pulse anim-delay-2000" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-purple-900/20 via-gray-900/40 to-blue-900/20 rounded-2xl border border-gray-700/50 p-8 mb-12">
          <div className="text-center space-y-4">
            <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Stay Updated
            </h4>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get the latest updates on AI innovations, new features, and exclusive insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25 transition-all"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {siteConfig.name}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                {siteConfig.description}. Build, create, and innovate with our comprehensive AI platform 
                designed for youth and professionals.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <EnvelopeSimple size={18} className="text-purple-400" />
                <span>contact@{siteConfig.domain}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} className="text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Globe size={18} className="text-purple-400" />
                <span>www.{siteConfig.domain}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href={siteConfig.social.github} aria-label="GitHub" title="GitHub" className="p-3 bg-gray-800/50 hover:bg-purple-600/20 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
                <GithubLogo size={20} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
              <a href={siteConfig.social.twitter} aria-label="Twitter / X" title="Twitter / X" className="p-3 bg-gray-800/50 hover:bg-blue-600/20 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
                <TwitterLogo size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a href={siteConfig.social.linkedin} aria-label="LinkedIn" title="LinkedIn" className="p-3 bg-gray-800/50 hover:bg-blue-700/20 rounded-xl border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300 group">
                <LinkedinLogo size={20} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span>AI Features</span>
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span>Education Tools</span>
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span>Business Solutions</span>
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span>API Integration</span>
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span>Security & Privacy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span>Careers</span>
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span>Partners</span>
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span>News & Updates</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/documentation" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span>Documentation</span>
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span>Help Center</span>
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span>Community</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6 text-gray-400">
              <span className="text-sm">© 2024 {siteConfig.name}. All rights reserved.</span>
              <div className="hidden lg:flex items-center space-x-4 text-xs">
                <Link to="/privacy" className="hover:text-purple-400 transition-colors">Privacy</Link>
                <span>•</span>
                <Link to="/terms-conditions" className="hover:text-purple-400 transition-colors">Terms</Link>
                <span>•</span>
                <Link to="/support" className="hover:text-purple-400 transition-colors">Support</Link>
                <span>•</span>
                <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-consent'))} className="hover:text-purple-400 transition-colors">Manage Cookies</button>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Crafted with</span>
              <Heart size={16} className="text-red-500 animate-pulse" weight="fill" />
              <span>by our amazing team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}