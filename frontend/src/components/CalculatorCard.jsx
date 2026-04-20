import React from 'react';
import { motion } from 'framer-motion';
import { cardHover } from '../utils/animations';

const CalculatorCard = ({ calculator, onClick }) => {
  return (
    <motion.div
      variants={cardHover}
      initial="initial"
      whileHover="hover"
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 cursor-pointer group transition-colors duration-300 relative overflow-hidden"
      onClick={onClick}
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 blur-xl transform group-hover:scale-150 transition-transform duration-700">
        <span className="text-8xl">{calculator.icon}</span>
      </div>
      
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/40 rounded-xl flex items-center justify-center text-2xl shadow-inner border border-blue-100/50 dark:border-blue-800/50">
          {calculator.icon}
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {calculator.name}
          </h3>
          <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md capitalize">
            {calculator.category}
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 relative z-10">
        {calculator.description}
      </p>

      <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 relative z-10">
        Launch Calculator <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </motion.div>
  );
};

export default CalculatorCard;