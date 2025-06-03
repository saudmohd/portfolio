import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
const Header = ({ darkMode, setDarkMode, activeTab, setActiveTab }) => {
  return (
    <ErrorBoundary>
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <span className="text-2xl font-bold hover:opacity-80 transition-opacity bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:text-transparent">
              Saud Muhammad
            </span>
          </motion.div>

          <div className="flex items-center space-x-4">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </div>
    </motion.header>
    </ErrorBoundary>
  );
};

export default Header;