import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const tabs = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab} 
            onClick={() => setActiveTab(tab)}
            className={`relative capitalize px-2 py-1 text-md font-medium cursor-pointer transition-colors ${
              activeTab === tab
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.span
                layoutId="navUnderline"
                className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"
                transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
              />
            )}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 right-6 w-48 bg-white cursor-pointer dark:bg-gray-800 rounded-md shadow-lg z-50"
          >
            <div className="flex flex-col p-2 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-left rounded-md text-sm font-medium ${
                    activeTab === tab
                      ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;