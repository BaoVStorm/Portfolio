import { useEffect, useState } from 'react';
import './app/styles/global.scss';

import { Header } from './widgets/Header/ui/Header';
import { HomeSection } from './widgets/HomeSection/ui/HomeSection';
import { AboutSection } from './widgets/AboutSection/ui/AboutSection';
import { SkillsSection } from './widgets/SkillsSection/ui/SkillsSection';
import { ProjectsSection } from './widgets/ProjectsSection/ui/ProjectsSection';
import { ExperienceSection } from './widgets/ExperienceSection/ui/ExperienceSection';
import { ContactSection } from './widgets/ContactSection/ui/ContactSection';
import { CertificateSection } from './widgets/CertificateSection/ui/CertificateSection';
import { Footer } from './widgets/Footer/ui/Footer';
import { setupInitialThemeClasses, applyTheme } from './features/theme-toggle/ThemeManager';

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isHeaderClosed, setIsHeaderClosed] = useState(false);

  // Scroll to home on page load (F5)
  useEffect(() => {
    // Reset scroll position immediately on reload so we start from the top
    // without triggering animations in the middle of the page first.
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Effect to apply theme DOM updates whenever it changes
  useEffect(() => {
    // Wait for a small tick to ensure DOM nodes (especially sections) are fully mounted 
    // before applying classes if it's the initial load.
    setTimeout(() => {
      setupInitialThemeClasses();
      applyTheme(isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }, 50);
  }, [isDark]);

  // Global event listener to track engagement (moved from jQuery to React to fix caching and synthetic event issues)
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Do not count engagement for clicks on the header navigation
      if (target.closest('#header')) {
        return;
      }

      if (target.closest('a')) {
        if (typeof window.GET === 'function') {
          window.GET('ENGAGEMENT', '#total-engagement', 1);
        }
      }
    };
    
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleHeader = () => setIsHeaderClosed(!isHeaderClosed);

  return (
    <div className="window-device">
      <Header isHeaderClosed={isHeaderClosed} />
      
      <div id="box-bar">
          <div id="menu-bar" onClick={toggleHeader} aria-label="Toggle Mobile Navigation Menu">
              <i className="fa-solid fa-bars"></i>
          </div>
  
          <div id="dark-light-bar" className={isDark ? "switch-dark" : "switch-light"} onClick={toggleTheme} aria-label="Toggle Dark/Light Theme">
              <div id="switch-padding">
                  <div id="switch-bar" className={isDark ? "switch-dark" : "switch-light"}>
                      <div id="switch-bar-dark"></div>
                  </div>
              </div>
              <div id="switch-border"></div>
          </div>
      </div>

      <HomeSection />
      <AboutSection />
      <CertificateSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
