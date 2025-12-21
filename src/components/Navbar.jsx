import React from 'react';
import { Sun, Moon, Monitor, Calculator } from 'lucide-react';

const Navbar = ({ theme, setTheme }) => {
  // Cycling logic: system -> light -> dark -> system
  const toggleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  const getIcon = () => {
    if (theme === 'light') return <Sun size={20} />;
    if (theme === 'dark') return <Moon size={20} />;
    return <Monitor size={20} />;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-600 rounded-lg text-white">
            <Calculator size={24} />
          </div>
          <span className="text-xl font-black dark:text-white tracking-tighter">
            AuraCalc<span className="text-blue-600">.</span>
          </span>
        </div>

        <button
          onClick={toggleTheme}
          className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-all flex items-center gap-2"
        >
          {getIcon()}
          <span className="text-xs font-bold uppercase hidden sm:block">{theme}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;