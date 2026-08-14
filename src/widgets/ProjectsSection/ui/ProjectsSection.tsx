import React from 'react';
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';
import { projectsData } from '@/entities/project/config/projectsData';

export const ProjectsSection: React.FC = () => {
  const { ref, isLoaded } = useScrollAnimation(400);

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="elementor-spacer-inner-background">
        <div className="elementor-spacer-inner space-box-1"></div>
      </div>
      <h1 className="title-section">projects</h1>
      
      <div className={`box-project ${isLoaded ? "load" : ""}`}>
        {projectsData.map((project, index) => (
          <div key={index} className="detail-box-project light">
            <a href={project.href} className="image-box-project" target="_blank" rel="noreferrer">
              <img src={project.img.startsWith('http') ? project.img : `${import.meta.env.BASE_URL}${project.img}`} alt={project.title} />
            </a>
            <div className="content-box-project text-main light">
              <h1 className="title-content-box-project">{project.title}</h1>
              <p className="des-content-box-project" dangerouslySetInnerHTML={{ __html: project.des }}></p>
              <div>
                <a href={project.href} className="viewmore-content-box-project ani-hover text-main light" target="_blank" rel="noreferrer">
                  view more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
