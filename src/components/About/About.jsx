import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      variants={variants}
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <motion.h2 
            variants={variants}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Data Engineer & Scientist
            </span>
          </motion.h2>
          
          <motion.p 
            variants={variants}
            transition={{ delay: 0.3 }}
            className="text-lg text-primary dark:text-gray-300"
          >
            Building robust data pipelines and machine learning solutions to transform raw data into actionable insights.
            Passionate about creating efficient systems that handle data at scale while maintaining clarity and reliability.
          </motion.p>
          
          <motion.div 
            variants={variants}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              <FiDownload className="w-5 h-5" />
              Download Resume
            </a>
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <FiMail className="w-5 h-5" />
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Column - Image/Illustration */}
        <motion.div
          variants={variants}
          transition={{ delay: 0.5 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
            {/* Replace with your image */}
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl">
              Your Photo
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-blue-100 dark:bg-blue-900/50 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-purple-100 dark:bg-purple-900/50 -z-10"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;