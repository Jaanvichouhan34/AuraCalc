import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Instagram, Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                ✓
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">AuraCalc</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm leading-relaxed">
              Your premium calculation companion. Empowering you to make data-driven decisions seamlessly.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/calculators" className="hover:text-blue-600 dark:hover:text-blue-400 transition">All Calculators</Link></li>
              <li><Link to="/how-it-works" className="hover:text-blue-600 dark:hover:text-blue-400 transition">How It Works</Link></li>
              <li><Link to="/help" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Help Center</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</Link></li>
              <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/Jaanvichouhan34" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all transform hover:-translate-y-1">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/jaanvi-chouhan" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all transform hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com/jaanvi_chouhan18" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 dark:hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="mailto:jaanvichouhan18805@gmail.com" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-green-600 hover:text-white dark:hover:bg-green-600 dark:hover:text-white transition-all transform hover:-translate-y-1">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 inline fill-red-500" /> by 
            <span className="font-semibold ml-1">Jaanvi Chouhan</span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} AuraCalc. All rights reserved.
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex bg-gray-200 dark:bg-gray-800 p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition shadow-sm"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
