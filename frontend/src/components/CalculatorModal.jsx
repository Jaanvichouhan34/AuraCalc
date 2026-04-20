import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { slideInFromLeft } from '../utils/animations';

const CalculatorModal = ({ calculator, onClose }) => {
  const [inputs, setInputs] = useState({});
  const [resultData, setResultData] = useState(null);

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const res = calculator.calculate(inputs);
    setResultData(res);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-3xl bg-white/20 p-2 rounded-xl backdrop-blur-md shadow-inner">{calculator.icon}</span>
            <div>
              <h2 className="text-2xl font-bold">{calculator.name}</h2>
              <p className="text-blue-100 text-sm opacity-90">{calculator.description}</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors"
          >
            <X size={20} />
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto no-scrollbar scroll-smooth">
          <form onSubmit={handleCalculate} className="space-y-5">
            {calculator.fields.map((field, idx) => (
              <motion.div 
                key={field.name}
                variants={slideInFromLeft}
                initial="initial"
                animate="animate"
                transition={{ delay: idx * 0.1 }}
              >
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                {field.type === 'select' ? (
                  <select
                    name={field.name}
                    required={field.required}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all dark:text-white"
                  >
                    <option value="">Select an option</option>
                    {field.options.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    min={field.min}
                    max={field.max}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-800 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all dark:text-white"
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30 transition-all flex justify-center items-center gap-2"
            >
              Calculate <Check size={20} />
            </motion.button>
          </form>

          {/* Result Area */}
          {resultData && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700"
            >
              <div className="text-center mb-6">
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Result</span>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2">
                  {resultData.result}
                </div>
                <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium bg-blue-50 dark:bg-blue-900/20 py-2 px-4 rounded-lg inline-block border border-blue-100 dark:border-blue-800/50">
                  {resultData.interpretation}
                </p>
              </div>

              {resultData.tips && (
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="text-yellow-500">💡</span> Tips
                  </h4>
                  <ul className="space-y-2">
                    {resultData.tips.map((tip, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CalculatorModal;