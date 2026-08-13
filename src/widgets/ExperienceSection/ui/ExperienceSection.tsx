import React from 'react';
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';

export const ExperienceSection: React.FC = () => {
  const { ref, isLoaded } = useScrollAnimation(400);

  
  return (
    <>
<section className="section" id="experience" ref={ref} >
<div className="elementor-spacer-inner-background">
<div className="elementor-spacer-inner space3"></div>
</div>
<h1 className="title-section">exp.</h1>
<div className={`box-exp ${isLoaded ? "load" : ""}`}>
{/*  <div className={`detail-box-exp ${isLoaded ? "load" : ""}`}>
                    <div className={`time-detail-box-exp ${isLoaded ? "load" : ""}`}>
                        <div className={`spe-box-exp ${isLoaded ? "load" : ""}`}>
                            <div className="spe1-exp spe-exp"></div> <h1 className={`from-time-detail-box-exp ${isLoaded ? "load" : ""}`}>
                                october 1, 2030
                            </h1> <div className="spe2-exp spe-exp"></div>
                        </div>
                        <div className={`spe-box-exp ${isLoaded ? "load" : ""}`}>
                            <div className="spe2-exp spe-exp"></div> <h1 className={`to-time-detail-box-exp ${isLoaded ? "load" : ""}`}>
                                March 1, 2035
                            </h1> <div className="spe1-exp spe-exp"></div>
                        </div>
                    </div>
    
                    <div className={`content-box-exp ${isLoaded ? "load" : ""}`}>
                        <div className={`block-content-box-exp ${isLoaded ? "load" : ""}`}>
                            <p className={`name-company-box-exp ${isLoaded ? "load" : ""}`}>VNG Corporation 
                                <span className={`fullname-company-box-exp ${isLoaded ? "load" : ""}`}>VinaGame</span>
                            </p>
                            <p className={`location-company-box-exp ${isLoaded ? "load" : ""}`}>HCM - VietNam</p>
                        </div>
                        <div className={`block-content-box-exp ${isLoaded ? "load" : ""}`}>
                            <p className={`job-box-exp ${isLoaded ? "load" : ""}`}>Game Developer</p>
                            <p className="description">
                                <strong>Just My Dream...</strong>
                            </p>
                        </div>
                    </div>
                </div>  */}
</div>
</section>
    </>
  );
};
