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
      offset: 50,
      easing: 'ease-in-out',
      mirror: true,
      anchorPlacement: 'top-bottom',
      disable: false,
      startEvent: 'DOMContentLoaded',
    });

    // Refresh AOS to ensure it detects all elements
    AOS.refresh();
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div>
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
