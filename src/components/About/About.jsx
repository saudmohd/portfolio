import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";
import profileImage from "../../assets/profile.jpeg";

const cvPdf = "/saud_cv.pdf";
const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
            Building robust data pipelines and machine learning solutions to
            transform raw data into actionable insights. Passionate about
            creating efficient systems that handle data at scale while
            maintaining clarity and reliability.
          </motion.p>

          <motion.div
            variants={variants}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={cvPdf}
              download="Saud_Muhammad_CV.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              <FiDownload className="w-5 h-5" />
              Download Resume
            </a>
            <a
              href="mailto:saudmuhammad.zbi786@gmail.com"
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <FiMail className="w-5 h-5" />
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <motion.div
          variants={variants}
          transition={{ delay: 0.5 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-lg ring-4 ring-white dark:ring-gray-800 bg-white dark:bg-gray-900">
            <img
              src={profileImage}
              alt="Saud Muhammad"
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Decorative Circles */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-blue-100 dark:bg-blue-900/50 -z-10"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-purple-100 dark:bg-purple-900/50 -z-10"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
