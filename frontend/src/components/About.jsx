import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900/50 rounded-3xl my-10 px-10 text-left">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About AuraCalc</h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
        AuraCalc was built with a simple mission: to provide a fast, accessible, and beautiful suite of tools for students and professionals. 
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <h4 className="font-bold text-primary mb-2">High Performance</h4>
          <p className="text-sm dark:text-gray-400">Built with React & Vite for near-instant calculation speeds.</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <h4 className="font-bold text-primary mb-2">Accessibility</h4>
          <p className="text-sm dark:text-gray-400">Designed with high contrast and screen-reader support in mind.</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <h4 className="font-bold text-primary mb-2">15+ Tools</h4>
          <p className="text-sm dark:text-gray-400">From Health to Finance, everything you need in one single tab.</p>
        </div>
      </div>
    </section>
  );
};

export default About;