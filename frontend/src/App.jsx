import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

import HomePage from './pages/HomePage';
import CalculatorsPage from './pages/CalculatorsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import HelpCenterPage from './pages/HelpCenterPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

import { pageTransition } from './utils/animations';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit"><HomePage /></motion.div>} />
        <Route path="/calculators" element={<motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit"><CalculatorsPage /></motion.div>} />
        <Route path="/how-it-works" element={<motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit"><HowItWorksPage /></motion.div>} />
        <Route path="/help" element={<motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit"><HelpCenterPage /></motion.div>} />
        <Route path="/about" element={<motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit"><AboutPage /></motion.div>} />
        <Route path="/contact" element={<motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit"><ContactPage /></motion.div>} />
        <Route path="*" element={<motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit"><NotFoundPage /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-gray-900 dark:text-gray-100 transition-colors duration-300 antialiased selection:bg-blue-500/30">
      <Toaster position="top-center" toastOptions={{ className: 'dark:bg-gray-800 dark:text-white shadow-xl rounded-2xl' }} />
      <Navbar />
      <main className="flex-1 w-full">
        <AnimatedRoutes />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}