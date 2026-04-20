import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider text-sm uppercase mb-2 block">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">About AuraCalc</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Building the ultimate calculation suite for your daily digital needs.</p>
        </motion.div>

        <div className="space-y-12 text-gray-700 dark:text-gray-300">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-6">
              AuraCalc was born out of a simple need: people require accurate, fast, and secure tools to compute various aspects of their lives—ranging from critical health indices to financial investments—all without compromising their data privacy.
            </p>
            <p className="text-lg leading-relaxed">
              We decided to pack over 20+ specialized calculators into a unified, visually stunning, and highly responsive platform, ensuring that no matter the device, you always have the power of data computation at your fingertips.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-tr from-blue-600 to-indigo-600 p-8 md:p-12 rounded-3xl text-white shadow-xl shadow-blue-500/20"
          >
            <h2 className="text-2xl font-bold mb-6 border-b border-blue-400/30 pb-4">The Developer</h2>
            <p className="text-lg leading-relaxed text-blue-50">
              AuraCalc v2.0 was designed and developed by <strong>Jaanvi Chouhan</strong>, a passionate software developer focused on crafting beautiful frontend experiences and solving real-world problems through code. 
            </p>
            <p className="mt-4 text-blue-100 italic">
              "My goal is to blend deep functionality with brilliant aesthetics, proving that utility tools do not have to be boring."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;