import React from 'react';
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';

export const ProjectsSection: React.FC = () => {
  const { ref, isLoaded } = useScrollAnimation(400);

  return (
    <>
<section className="section" id="projects" ref={ref}>
<div className="elementor-spacer-inner-background">
<div className="elementor-spacer-inner space-box-1"></div>
</div>
<h1 className="title-section">projects</h1>
<div className={`box-project ${isLoaded ? "load" : ""}`}>
{/*  list projects  */}
{/*              
                <div className={`detail-box-project ${isLoaded ? "load" : ""}`}>
                    <a href="#" className={`image-box-project ${isLoaded ? "load" : ""}`} target="_blank">
                        <img src="https://demo.cocobasic.com/fabius-wp/demo-1/wp-content/uploads/2020/11/portfolio_item_1.jpg" alt="image" />
                    </a>
                    <div className={`content-box-project ${isLoaded ? "load" : ""}`}>
                        <h1 className={`title-content-box-project ${isLoaded ? "load" : ""}`}>
                            Coconut Web
                        </h1>   
                        <p className={`des-content-box-project ${isLoaded ? "load" : ""}`}>
                            Mauris volutpat estera phasellus varius nec orci, quam augue se loremes lines pellentesque non
                        </p>
                        <div>
                            <a href="#" className={`viewmore-content-box-project ani-hover ${isLoaded ? "load" : ""}`}>view more</a>
                        </div>
                    </div>
                </div> 
                 */}
</div>
</section>
    </>
  );
};
