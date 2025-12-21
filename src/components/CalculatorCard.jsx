import React from 'react';
import * as Icons from 'lucide-react';

const CalculatorCard = ({ calc, onOpen }) => {
  // This dynamically picks the icon based on the string name in our calculations.js
  const IconComponent = Icons[calc.icon] || Icons.Calculator;

  return (
    <div 
      onClick={() => onOpen(calc)}
      className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer text-left"
    >
      <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
        <IconComponent size={24} />
      </div>
      <span className="text-xs font-bold text-primary uppercase tracking-wider">{calc.category}</span>
      <h3 className="text-xl font-bold dark:text-white mt-1">{calc.title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 leading-relaxed">
        {calc.description}
      </p>
    </div>
  );
};

export default CalculatorCard;