import React from 'react';
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';
import { experienceData } from '@/entities/experience/config/experienceData';

export const ExperienceSection: React.FC = () => {
  const { ref, isLoaded } = useScrollAnimation(400);

  return (
    <section className="section" id="experience" ref={ref} >
      <div className="elementor-spacer-inner-background">
        <div className="elementor-spacer-inner space3"></div>
      </div>
      <h1 className="title-section">exp.</h1>
      <div className={`box-exp ${isLoaded ? "load" : ""}`}>
        {experienceData.map((exp, index) => (
          <div key={index} className="detail-box-exp text-main light">
            <div className="time-detail-box-exp">
              <div className="spe-box-exp">
                <div className="spe1-exp spe-exp"></div> 
                <h4 className="from-time-detail-box-exp">{exp.from}</h4> 
                <div className="spe2-exp spe-exp"></div>
              </div>
              <div className="spe-box-exp">
                <div className="spe2-exp spe-exp"></div> 
                <h4 className="to-time-detail-box-exp">{exp.to}</h4> 
                <div className="spe1-exp spe-exp"></div>
              </div>
            </div>

            <div className="content-box-exp">
              <div className="block-content-box-exp">
                <p className="name-company-box-exp">
                  {exp.name_company}
                  <span className="fullname-company-box-exp">{exp.full_name}</span>
                </p>
                <p className="location-company-box-exp">{exp.location}</p>
              </div>
              <div className="block-content-box-exp">
                <p className="job-box-exp">{exp.job}</p>
                <p className="description">{exp.des_job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
