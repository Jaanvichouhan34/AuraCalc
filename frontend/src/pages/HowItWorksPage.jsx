import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Target, BookOpen, Calculator } from 'lucide-react';

const HowItWorksPage = () => {
   const steps = [
      {
         icon: <Target className="text-white" size={24} />,
         title: "Select your Calculator",
         desc: "Navigate to the Calculators page and browse or search for the specific metrics you want to calculate. They are organized neatly into Health, Finance, and Utility categories."
      },
      {
         icon: <Calculator className="text-white" size={24} />,
         title: "Input your Data",
         desc: "Every calculator comes with clearly labeled, required inputs. Our optimized error-checking ensures you put the right data types before processing."
      },
      {
         icon: <Rocket className="text-white" size={24} />,
         title: "Get Instant Results",
         desc: "Click Calculate and watch your result load instantly without any network delays. Our algorithms are optimized to work entirely on the frontend!"
      },
      {
         icon: <BookOpen className="text-white" size={24} />,
         title: "Read Insights & Tips",
         desc: "Beyond just the numbers, AuraCalc gives you actionable tips, interpretations, and real-world advice contextually generated for your specific calculations."
      }
   ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider text-sm uppercase mb-2 block">Tutorial</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">How It Works</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Using AuraCalc is intuitively simple. Follow these steps to get precise calculations and actionable insights.</p>
        </motion.div>

        <div className="space-y-12 mb-20 relative">
           <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
           
           {steps.map((step, idx) => (
              <motion.div 
                 key={idx}
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.15 }}
                 className="flex flex-col md:flex-row gap-6 relative"
              >
                 <div className="shrink-0 relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 z-10 relative">
                       {step.icon}
                    </div>
                 </div>
                 <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 w-full">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Step {idx + 1}: {step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{step.desc}</p>
                 </div>
              </motion.div>
           ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ready to try it out?</h3>
          <Link
            to="/calculators"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all transform duration-300"
          >
            Launch Calculators
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
