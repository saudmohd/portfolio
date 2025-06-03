import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    // Initial theme check
    const savedMode = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedMode) {
      setDarkMode(savedMode === 'dark')
    } else {
      setDarkMode(systemPrefersDark)
    }
  }, [setDarkMode])

  const toggleTheme = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 cursor-pointer"
      whileTap={{ scale: 0.9 }}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
    </motion.button>
  )
}

export default ThemeToggle