import React from 'react';
/* eslint-disable no-unused-vars */
// Added AnimatePresence to the import list
import { motion, AnimatePresence } from 'framer-motion'; 
import { ArrowLeft, Target, Zap, Shield, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto dark:text-white">
      {/* Navigation Link */}
      <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8 font-medium">
        <ArrowLeft size={20} />
        Back to Calculators
      </Link>

      {/* Header with Animation - Ensures 'motion' is used */}
<motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }} // Fixed: Removed the double extra braces
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-black mb-4">About AuraCalc</h1>
        <p className="text-gray-500 text-lg">Learn more about our mission and features</p>
      </motion.div>

      {/* MISSION BOX */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 mb-12 shadow-sm"
      >
        <div className="flex items-center gap-3 mb-4 text-blue-600">
          <Target size={24} />
          <h2 className="text-xl font-bold">Our Mission</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
          AuraCalc was created with a simple mission: to provide a comprehensive suite of calculators that are easy to use, accurate, and accessible to everyone. We believe tools should be straightforward and reliable, whether you're a student, professional, or just someone who needs to crunch numbers.
        </p>
      </motion.div>

      {/* FEATURES GRID */}
      <h2 className="text-2xl font-bold mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { icon: <Zap />, title: "Multiple Types", desc: "From basic arithmetic to financial planning and health metrics." },
          { icon: <Layout />, title: "Modern Design", desc: "Clean, responsive interface that works on all devices." },
          { icon: <Shield />, title: "Accurate Results", desc: "Trust in precise calculations for all your professional needs." },
          { icon: <Target />, title: "Dark/Light Mode", desc: "Work comfortably in any lighting condition with a single click." }
        ].map((item, i) => (
          // Using motion.div here for a staggered entrance effect
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 border border-gray-100 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-900/50 hover:border-blue-500 transition-colors shadow-sm"
          >
            <div className="text-blue-600 mb-3">{item.icon}</div>
            <h3 className="font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;