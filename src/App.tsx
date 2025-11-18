import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="bg-white dark:bg-black transition-colors duration-300">
          <Navigation />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
