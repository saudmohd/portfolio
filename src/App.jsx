import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet'; // ✅ Import Helmet
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
        
        {/* SEO Helmet meta tags */}
        <Helmet>
          <title>Saud Muhammad – Data Engineer & Scientist</title>
          <meta name="description" content="Portfolio of Saud Muhammad – building robust data pipelines and machine learning solutions." />
          <meta name="keywords" content="data engineer, data scientist, ETL, machine learning, Python, Saudi, Pakistan, portfolio" />
          <meta name="author" content="Saud Muhammad" />

          {/* Open Graph / Facebook */}
          <meta property="og:title" content="Saud Muhammad – Data Engineer & Scientist" />
          <meta property="og:description" content="Explore my projects in data engineering, pipelines, ML, and more." />
          <meta property="og:url" content="https://saud-dev.vercel.app/" />
          <meta property="og:image" content="https://saud-dev.vercel.app/fav_sa.jpg" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Saud Muhammad – Data Engineer & Scientist" />
          <meta name="twitter:description" content="Explore projects in data engineering, ML, and cloud solutions." />
          <meta name="twitter:image" content="https://saud-dev.vercel.app/fav_sa.jpg" />
        </Helmet>

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
