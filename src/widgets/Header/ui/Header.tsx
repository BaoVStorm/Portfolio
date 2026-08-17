import React, { useEffect, useState } from 'react';

type HeaderProps = {
  isHeaderClosed?: boolean;
  isDark?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ isHeaderClosed = false, isDark = false }) => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const windowPos = window.scrollY;
      const sections = ['home', 'about', 'certificate', 'skills', 'projects', 'experience', 'contact'];
      
      let currentSection = activeSection;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const sectionPosTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          const sectionPosBottom = sectionPosTop + sectionHeight;
          
          if (sectionPosBottom - sectionHeight / 2 > windowPos && windowPos >= sectionPosTop) {
            currentSection = sectionId;
          }
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop + 10,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header id="header" className={`${isHeaderClosed ? 'close-header' : ''} ${isDark ? 'dark' : 'light'}`}>
      <div className="header-content" id="logo">
        <div className="subnemu">
          <div id="logo-header" onClick={(e) => scrollToSection(e as any, 'home')} style={{ cursor: 'pointer' }}>
            <img alt="logo" src={`${import.meta.env.BASE_URL}assets/logo/VS_logo.png`} />
          </div>
        </div>
      </div>
      <ul className="header-content" id="menu">
        {['home', 'about', 'certificate', 'skills', 'projects', 'experience', 'contact'].map((section) => (
          <li key={section} className={`subnemu ${activeSection === section ? 'highlight-submenu' : ''}`}>
            <a href={`#${section}`} onClick={(e) => scrollToSection(e, section)}>
              <span className="long-show-header">{section}</span>
              <span className="short-show-header">
                {section === 'home' ? 'hm' : 
                 section === 'about' ? 'abt' : 
                 section === 'certificate' ? 'cer' : 
                 section === 'skills' ? 'sk' : 
                 section === 'projects' ? 'prj' : 
                 section === 'experience' ? 'exp' : 'cnt'}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
