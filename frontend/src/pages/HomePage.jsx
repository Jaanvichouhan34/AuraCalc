import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, BarChart3, Activity, Calculator, LayoutGrid } from 'lucide-react';
import { ThemeContext } from '../contexts/ThemeContext';
import clsx from 'clsx';
import AuraCalcHeroLight from '../components/AuraCalcHeroLight';
import AuraCalcHeroDark from '../components/AuraCalcHeroDark';

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark' || 
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const features = [
    {
      icon: <Zap size={32} className="text-blue-500" />,
      title: 'Lightning Fast',
      description: 'Get instant accurate calculations with our highly optimized rendering engine.'
    },
    {
      icon: <Shield size={32} className="text-indigo-500" />,
      title: 'Secure & Private',
      description: 'Your data stays with you. No tracking, no storage, pure computation.'
    },
    {
      icon: <BarChart3 size={32} className="text-purple-500" />,
      title: '20+ Tools',
      description: 'From intricate financial equations to daily health metrics, we\'ve got you covered.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        {/* Background glow effects */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-500/20 dark:bg-blue-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-500/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6 shadow-sm">
              ✨ Introducing AuraCalc v2.0
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-gray-900 dark:text-white">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Smarter Way</span> <br className="hidden md:block"/> to Calculate
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              AuraCalc brings together 20+ premium calculators with a beautiful interface, intelligent AI assistance, and blazing-fast results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/calculators"
                className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                Explore Calculators 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/how-it-works"
                className="w-full sm:w-auto border-2 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition transform hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-16 w-full max-w-4xl mx-auto hover:scale-[1.02] transition-transform duration-700">
               {isDark ? <AuraCalcHeroDark /> : <AuraCalcHeroLight />}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 relative bg-gray-50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Built for Every Need</h2>
            <p className="text-gray-600 dark:text-gray-400">Discover our carefully crafted calculation suites</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/calculators?category=health" className="group">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 transform group-hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-green-50 dark:bg-green-900/20 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
                <Activity size={40} className="text-green-500 mb-6 relative z-10" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white relative z-10">Health & Fitness</h3>
                <p className="text-gray-600 dark:text-gray-400 relative z-10">Track BMI, TDEE, macros, and maintain your peak physical condition.</p>
              </div>
            </Link>

            <Link to="/calculators?category=finance" className="group">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform group-hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
                <Calculator size={40} className="text-blue-500 mb-6 relative z-10" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white relative z-10">Finance & Business</h3>
                <p className="text-gray-600 dark:text-gray-400 relative z-10">Calculate EMIs, compound interest, ROI, and plan your financial future.</p>
              </div>
            </Link>

            <Link to="/calculators?category=utility" className="group">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 transform group-hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-purple-50 dark:bg-purple-900/20 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
                <LayoutGrid size={40} className="text-purple-500 mb-6 relative z-10" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white relative z-10">Utility & Math</h3>
                <p className="text-gray-600 dark:text-gray-400 relative z-10">Convert units, calculate percentages, exact age, and everyday math.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Why Choose AuraCalc?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                We've rethinking calculations from the ground up, providing a seamless and aesthetically pleasing experience that doesn't compromise on speed or accuracy.
              </p>
              <div className="space-y-6">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="mt-1 flex-shrink-0 w-12 h-12 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 rounded-xl flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20 dark:opacity-30"></div>
              <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-3xl shadow-xl overflow-hidden min-h-[400px] flex flex-col justify-center items-center">
                  <div className="w-full flex items-center gap-4 mb-8">
                     <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 flex flex-shrink-0 items-center justify-center text-3xl">🤖</div>
                     <div className="bg-gray-100 dark:bg-gray-700 w-full p-4 rounded-2xl rounded-tl-sm text-sm dark:text-gray-200">
                        "Hi there! I'm AuraBot. I can help recommend the right calculator. Try asking me about EMI, ROI, or BMI."
                     </div>
                  </div>
                  <div className="w-full flex justify-end gap-4">
                     <div className="bg-blue-600 text-white w-2/3 p-4 rounded-2xl rounded-tr-sm text-sm">
                        "What is my Body Mass Index if I'm 75kg and 180cm?"
                     </div>
                  </div>
                  <div className="mt-8 text-center text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-widest text-xs">AI Chatbot Integrated</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-900/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center px-4 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Ready to Calculate Smart?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of users who trust AuraCalc for their daily calculations.
          </p>
          <Link
            to="/calculators"
            className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all transform duration-300"
          >
            Start Calculating Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
