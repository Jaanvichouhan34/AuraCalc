import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import CalculatorCard from '../components/CalculatorCard';
import CalculatorModal from '../components/CalculatorModal';
import { allCalculators } from '../calculators/allCalculators';
import { staggerContainer } from '../utils/animations';

const CalculatorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCalculator, setSelectedCalculator] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Read URL params to set category filter initially
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    const validCats = [
       'health', 'finance', 'utility', 'mathematics',
       'engineering', 'construction', 'education',
       'travel', 'technology', 'misc'
    ];
    if (cat && validCats.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [location.search]);

  const updateCategory = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      navigate('/calculators');
    } else {
      navigate(`/calculators?category=${cat}`);
    }
  };

  const categories = [
     'all', 'mathematics', 'finance', 'health', 
     'engineering', 'construction', 'education', 
     'utility', 'travel', 'technology', 'misc'
  ];

  const filteredCalculators = useMemo(() => {
    return allCalculators.filter((calc) => {
      const matchesSearch = calc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        calc.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || calc.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider text-sm uppercase mb-2 block">Suite</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white tracking-tight">All Calculators</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Find the perfect calculation tool for your needs</p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 relative max-w-2xl mx-auto"
        >
          <div className="relative flex items-center group">
            <Search className="absolute left-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={22} />
            <input
              type="text"
              placeholder="Search by name or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 shadow-sm transition-all focus:shadow-md text-lg"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-4 justify-start md:justify-center no-scrollbar">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => updateCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all capitalize whitespace-nowrap shadow-sm border ${selectedCategory === cat
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent'
                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Calculators Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCalculators.length > 0 ? (
            filteredCalculators.map((calc, idx) => (
              <motion.div
                key={calc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <CalculatorCard
                  calculator={calc}
                  onClick={() => setSelectedCalculator(calc)}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-20 bg-gray-50 dark:bg-gray-800/50 rounded-3xl border border-gray-200 dark:border-gray-700 border-dashed"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No calculators found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search terms or category filter</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('all') }}
                className="mt-6 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCalculator && (
          <CalculatorModal
            key="modal"
            calculator={selectedCalculator}
            onClose={() => setSelectedCalculator(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CalculatorsPage;
