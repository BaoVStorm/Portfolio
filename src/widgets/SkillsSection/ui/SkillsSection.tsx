import React from 'react';
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';

export const SkillsSection: React.FC = () => {
  const { ref, isLoaded } = useScrollAnimation(400);

  return (
    <>
<section className="section" id="skills" ref={ref}>
<div className="elementor-spacer-inner-background">
<div className="elementor-spacer-inner space2"></div>
</div>
<h1 className="title-section">skills</h1>
<div className={`box-skill-1th skillbox1 ${isLoaded ? "load" : ""}`}>
<div className="head-box-skill">
<div>programming language</div>
</div>
<div className="body-box-skill body-box-skill-2col" id="programming-language">
{/*  
                    <div className="detail-box-skill">
                        <span className="percent-nonslider-skill">75</span>
                        <div className="content-box-skill">
                            <span className="name-detail-box-skill">c, c++</span>
                            <div className="nonslider-skill">
                                <div className="nonslider-skill-detail"></div>
                            </div>
                        </div>
                    </div> 
                     */}
</div>
</div>
<div className={`box-skill-1th skillbox2 ${isLoaded ? "load" : ""}`}>
<div className="head-box-skill">
<div>Framework &amp; Library</div>
</div>
<div className="body-box-skill body-box-skill-2col" id="framework">
{/*  
                    <div className="detail-box-skill">
                        <span className="percent-nonslider-skill">75</span>
                        <div className="content-box-skill">
                            <span className="name-detail-box-skill">c, c++</span>
                            <div className="nonslider-skill">
                                <div className="nonslider-skill-detail"></div>
                            </div>
                        </div>
                    </div> 
                     */}
</div>
</div>
<div className={`box-skill-1th skillbox3 ${isLoaded ? "load" : ""}`}>
<div className="box-skill-2th">
<div className="head-box-skill">
<div>soft skill</div>
</div>
<div className="body-box-skill" id="soft-skill">
{/*  
                        <div className="detail-box-skill">
                            <span className="percent-nonslider-skill">75</span>
                            <div className="content-box-skill">
                                <span className="name-detail-box-skill text-main">creativity</span>
                                <div className="nonslider-skill">
                                    <div className="nonslider-skill-detail start-nonslider light"></div>
                                </div>
                            </div>
                        </div> 
                         */}
</div>
</div>
<div className="box-skill-2th">
<div className="head-box-skill">
<div>hard skill</div>
</div>
<div className="body-box-skill" id="hard-skill">
{/*  
                        <div className="detail-box-skill">
                            <span className="percent-nonslider-skill">75</span>
                            <div className="content-box-skill">
                                <span className="name-detail-box-skill text-main">Programming & Scripting</span>
                                <div className="nonslider-skill">
                                    <div className="nonslider-skill-detail"></div>
                                </div>
                            </div>
                        </div> 
                         */}
</div>
</div>
</div>
</section>
    </>
  );
};
