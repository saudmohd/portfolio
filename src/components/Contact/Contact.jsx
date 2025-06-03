import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import ContactForm from './ContactForm';

const Contact = () => {
  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6 text-primary dark:text-blue-400" />,
      title: "Email",
      value: "saudmuhammad.zbi786@gmail.com",
      href: "mailto:saudmuhammad.zbi786@gmail.com"
    },
    {
      icon: <FiMapPin className="w-6 h-6 text-primary dark:text-blue-400" />,
      title: "Location",
      value: "Islamabad, Pakistan"
    },
    {
      icon: <FiPhone className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Phone",
      value: "+92 03351693149"
    }
  ];

  const socialLinks = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      href: "https://github.com/saudmohd",
      label: "GitHub"
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/saud-muhammad-8bbb98368",
      label: "LinkedIn"
    },
    {
      icon: <FiTwitter className="w-5 h-5" />,
      href: "https://twitter.com/saud2997",
      label: "Twitter"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-primary dark:text-gray-300 max-w-2xl mx-auto"
        >
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary dark:text-white">Contact Information</h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 mt-1">{method.icon}</div>
                  <div>
                    <h4 className="font-medium text-primary dark:text-gray-300">{method.title}</h4>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-emerald-950 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">{method.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary dark:text-white">Social Media</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;