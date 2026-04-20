import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactPage = () => {
   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
   const [isSubmitted, setIsSubmitted] = useState(false);

   const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // Simulate API call
      setTimeout(() => {
         setIsSubmitted(true);
         toast.success('Message sent successfully!');
         setFormData({ name: '', email: '', message: '' });
         
         setTimeout(() => setIsSubmitted(false), 3000);
      }, 800);
   };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider text-sm uppercase mb-2 block">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Have a question or feedback? We'd love to hear from you.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
           {/* Contact Information */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
           >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Our Coordinates</h2>
              <div className="space-y-8">
                 <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                       <MapPin />
                    </div>
                    <div>
                       <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">Office Location</h3>
                       <p className="text-gray-600 dark:text-gray-400">Indore, Madhya Pradesh<br/>India</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                       <Mail />
                    </div>
                    <div>
                       <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">Email Address</h3>
                       <p className="text-gray-600 dark:text-gray-400">jaanvichouhan18805@gmail.com</p>
                    </div>
                 </div>

                 <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                       <Phone />
                    </div>
                    <div>
                       <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">Phone</h3>
                       <p className="text-gray-600 dark:text-gray-400">+91 (Not Publicly Displayed)</p>
                    </div>
                 </div>
              </div>
           </motion.div>

           {/* Contact Form */}
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.4 }}
             className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700"
           >
              <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Display Name</label>
                    <input 
                       type="text" 
                       name="name"
                       required
                       value={formData.name}
                       onChange={handleChange}
                       className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all dark:text-white"
                       placeholder="e.g. John Doe"
                    />
                 </div>
                 <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                    <input 
                       type="email" 
                       name="email"
                       required
                       value={formData.email}
                       onChange={handleChange}
                       className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all dark:text-white"
                       placeholder="e.g. john@example.com"
                    />
                 </div>
                 <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                    <textarea 
                       name="message"
                       required
                       rows={4}
                       value={formData.message}
                       onChange={handleChange}
                       className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none dark:text-white"
                       placeholder="How can we help you?"
                    ></textarea>
                 </div>

                 <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitted}
                    className={`w-full py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 transition-all shadow-lg ${isSubmitted ? 'bg-green-500 text-white shadow-green-500/30' : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/30 hover:from-blue-700 hover:to-indigo-700'}`}
                 >
                    {isSubmitted ? <><CheckCircle2 /> Sent</> : <><Send size={20} /> Send Message</>}
                 </motion.button>
              </form>
           </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
