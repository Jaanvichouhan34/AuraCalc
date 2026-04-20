import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const HelpCenterPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I calculate my BMI?',
      answer: 'BMI is calculated as: Weight (kg) / Height (m)². Our calculator handles the conversion from different units automatically. Just visit the Health section and input your metrics.'
    },
    {
      id: 2,
      question: 'Are my calculations saved?',
      answer: 'Calculations are not stored on our servers. They exist only in your browser session for maximum privacy. Once you refresh, the data clears.'
    },
    {
      id: 3,
      question: 'Can I use AuraCalc offline?',
      answer: 'Currently, AuraCalc is a web application that requires an internet connection to load initially, but can perform most calculations on the client side.'
    },
    {
      id: 4,
      question: 'How accurate are the calculators?',
      answer: 'All calculators use standard, peer-reviewed mathematical formulas and are highly accurate. However, for medical or significant financial advice, always consult a certified professional.'
    },
    {
      id: 5,
      question: 'Is there a mobile app?',
      answer: 'AuraCalc v2.0 is fully responsive and designed to work identically to an app on mobile browsers. A native iOS/Android application is currently in development!'
    },
    {
      id: 6,
      question: 'How do I use Dark Mode?',
      answer: 'Click the Sun/Moon icon in the top right of the navigation bar to toggle between Light mode, Dark mode, or your System Preference. The app remembers your choice!'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider text-sm uppercase mb-2 block">Support</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">Help Center</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Find answers to common questions and learn more.</p>
        </motion.div>

        {/* FAQs */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-750 text-left"
              >
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white pr-8">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 mt-2 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional Help CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800/50 p-10 rounded-3xl"
        >
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
             <MessageSquare size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Still have questions?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
            If you couldn't find the answer to your question, feel free to reach out to us. We're always happy to help!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition shadow-md hover:shadow-lg font-semibold"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
