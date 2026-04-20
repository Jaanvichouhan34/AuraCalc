import React from 'react';
// This comment tells ESLint to ignore the unused variable warning for this specific line
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'; 
import { Star, Linkedin } from 'lucide-react';

const reviews = [
  {
    name: "Jaanvi Chouhan",
    role: "Full Stack Developer",
    image: "https://unavatar.io/linkedin/jaanvi-chouhan?fallback=https://github.com/Jaanvichouhan34.png",
    linkedin: "https://www.linkedin.com/in/jaanvi-chouhan",
    stars: 5,
    text: "AuraCalc is really impressive! I found it very useful, and I love the clean and simple design."
  },
  {
    name: "Mohit Kumar Chouhan",
    role: "Unit Head, Trent Ltd (Westside)",
    image: "https://unavatar.io/linkedin/mohit-chouhan-7294ba189", 
    linkedin: "https://www.linkedin.com/in/mohit-chouhan-7294ba189",
    stars: 5,
    text: "The best all-in-one calculator platform. The UI is incredibly smooth and responsive."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50 rounded-3xl mb-20">
      <h2 className="text-4xl font-black text-center mb-12 dark:text-white">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {reviews.map((rev, i) => (
          <motion.a 
            href={rev.linkedin}
            target="_blank"
            rel="noreferrer"
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 block relative group"
          >
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={rev.image} 
                className="w-14 h-14 rounded-full border-2 border-blue-600 object-cover bg-gray-200" 
                alt={rev.name}
                onError={(e) => { 
                  e.target.onerror = null; 
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(rev.name)}&background=0D8ABC&color=fff`; 
                }} 
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold dark:text-white text-lg group-hover:text-blue-600 transition-colors">
                    {rev.name}
                  </h4>
                  <Linkedin size={18} className="text-blue-600 opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-gray-500">{rev.role}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-4">
              {[...Array(rev.stars)].map((_, starIndex) => (
                <Star key={starIndex} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
              "{rev.text}"
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}