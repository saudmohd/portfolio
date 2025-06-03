import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaRegDotCircle } from 'react-icons/fa';
import "./ProjectCard.css"
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
    >
      {/* Project Image */}
      <div className="project-title h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl">
        {project.title}
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white text-center sm:text-center md:text-center lg:text-left xl:text-left">
                      {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        {/* Features List */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Key Features:</h4>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <FaRegDotCircle className="flex-shrink-0 mt-1 mr-2 text-blue-500 text-xs" />
                <span className="text-gray-600 dark:text-gray-400">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Technologies */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Links */}
        <div className="flex space-x-3">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              <FiGithub className="mr-2" />
              Code
            </motion.a>
          )}
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg transition-colors"
            >
              <FiExternalLink className="mr-2" />
              Project
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;