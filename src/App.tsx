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

  const toggleTheme = () => setIsDark(!isDark);
  const toggleHeader = () => setIsHeaderClosed(!isHeaderClosed);

  return (
    <div className="window-device">
      <Header isHeaderClosed={isHeaderClosed} />
      
      <div id="box-bar">
          <div id="menu-bar" onClick={toggleHeader}>
              <i className="fa-solid fa-bars"></i>
          </div>
  
          <div id="dark-light-bar" className={isDark ? "switch-dark" : "switch-light"} onClick={toggleTheme}>
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
      
      {/* 
      <div className="elementor-spacer-inner-background">
          <div className="elementor-spacer-inner space2"></div>
      </div> 
      */}
    </div>
  );
}

export default App;
