import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; 
import * as Icons from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import CalculatorCard from './components/CalculatorCard';
import CalculatorModal from './components/CalculatorModal';
import Testimonials from './components/Testimonials';
import AboutPage from './pages/AboutPage';

// Data
import { calculators } from './calculations';

function AppContent() {
  // 1. Updated state to support the 3-way toggle (system, light, dark)
  const [theme, setTheme] = useState('system'); 
  const [selectedCalc, setSelectedCalc] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // 2. Effect to handle actual CSS class changes on the <html> element
useEffect(() => {
  const root = window.document.documentElement;
  
  // 1. Logic to determine if we are dark or light
  const isDark = theme === 'dark' || 
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  // 2. Clear previous classes and apply the new one
  root.classList.remove('light', 'dark');
  root.classList.add(isDark ? 'dark' : 'light');

  // 3. This is what fixes the scrollbar/slider
  root.style.colorScheme = isDark ? 'dark' : 'light';
}, [theme]);

  // 3. Force linter to see motion/AnimatePresence are used
  if (typeof motion === 'undefined' || typeof AnimatePresence === 'undefined') {
    console.log("Animations Ready");
  }

  const filteredCalcs = calculators.filter(calc => 
    calc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    calc.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Outer container matches current theme
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 text-gray-900 dark:text-gray-100">
      
      {/* 4. Passing the new theme props to the Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />
      
      <Routes>
        <Route path="/" element={
          <main className="pt-32 px-6 max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-4">
                AuraCalc<span className="text-blue-600">.</span>
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-xl">
                The smarter way to compute 15+ metrics.
              </p>
            </motion.div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-16">
              <input 
                type="text" 
                placeholder="Search calculators..." 
                className="w-full p-4 rounded-2xl border-2 border-gray-100 dark:border-gray-800 dark:bg-gray-900 outline-none focus:border-blue-500 transition-all shadow-sm text-black dark:text-white"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Calculator Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {filteredCalcs.map(calc => (
                <CalculatorCard key={calc.id} calc={calc} onOpen={setSelectedCalc} />
              ))}
            </div>

            <Testimonials />
            <About />
            <Contact />
          </main>
        } />
        <Route path="/about-more" element={<AboutPage />} />
      </Routes>

      {/* Modal Handling */}
      <AnimatePresence mode="wait">
        {selectedCalc && (
          <CalculatorModal 
            key="modal" 
            calc={selectedCalc} 
            onClose={() => setSelectedCalc(null)} 
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-20 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-black text-blue-600 mb-4">AuraCalc.</h3>
            <p className="text-gray-500">Your one-stop solution for all calculation needs.</p>
          </div>
          <div>
            <h4 className="font-bold dark:text-white mb-4">Links</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold dark:text-white mb-4">Connect</h4>
            <div className="flex justify-center md:justify-start gap-6">
              <a href="https://github.com/Jaanvichouhan34" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <Icons.Github size={24} />
              </a>
              <a href="https://linkedin.com/in/jaanvi-chouhan" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Icons.Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/jaanvi_chouhan18" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
                <Icons.Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-20 text-center text-gray-400 text-sm">© 2025 AuraCalc. Designed & Developed by Jaanvi Chouhan</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}