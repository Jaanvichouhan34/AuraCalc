import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold dark:text-white mb-4">Get in Touch</h2>
      <p className="text-gray-500 mb-8">Found a bug or want a new calculator? Let me know!</p>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-4 rounded-xl border dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
        <input type="email" placeholder="Email" className="w-full p-4 rounded-xl border dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
        <textarea placeholder="Message" className="w-full p-4 rounded-xl border h-32 dark:bg-gray-800 dark:border-gray-700 dark:text-white"></textarea>
        <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition-all">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;