import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('About');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ErrorBoundary>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
        <Header 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        
        <main className="container mx-auto px-6 pb-12">
          {activeTab === 'About' && <About darkMode={darkMode} />}
          {activeTab === 'Skills' && <Skills />}
          {activeTab === 'Projects' && <Projects />}
          {activeTab === 'Contact' && <Contact />}
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;