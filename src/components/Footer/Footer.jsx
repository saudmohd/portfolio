import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      url: "https://github.com/saudmohd",
      label: "GitHub"
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/saud-muhammad-8bbb98368",
      label: "LinkedIn"
    },
    {
      icon: <FiTwitter className="w-5 h-5" />,
      url: "https://twitter.com/saud2997",
      label: "Twitter"
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      url: "mailto:saudmuhammad.zbi786@gmail.com",
      label: "Email"
    }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="border-t border-gray-200 dark:border-gray-800 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <motion.div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
                className="text-primary hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center md:text-right text-sm text-primary dark:text-gray-400"
          >
            <p>© {currentYear} Saud Muhammad. All rights reserved.</p>
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-8"
        >
          <motion.a
            href="#"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;