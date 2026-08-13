import React from 'react';
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';

export const AboutSection: React.FC = () => {
  const { ref, isLoaded } = useScrollAnimation(450);

  
  return (
    <>
<section className="section" id="about" ref={ref} >
<div className="elementor-spacer-inner-background">
<div className="elementor-spacer-inner space1"></div>
</div>
<h1 className="title-section">about</h1>
<div className={`about-info text-main ${isLoaded ? "load" : ""}`}>
<h3 className="info-title">name</h3>
<ul className="info-content">
<li>Tran Vu Bao</li>
</ul>
<h3 className="info-title">birthday</h3>
<ul className="info-content">
<li>27. 11. 2004.</li>
</ul>
<h3 className="info-title">email</h3>
<ul className="info-content">
<li>tranvubao2004@gmail.com</li>
</ul>
<h3 className="info-title">phone</h3>
<ul className="info-content none-decoration">
<li>(+84)915014470</li>
</ul>
<h3 className="info-title">location</h3>
<ul className="info-content">
<li>Viet Nam, Quang Ngai</li>
</ul>
<h3 className="info-title">interests</h3>
<ul className="info-content">
<li>Games, Code, Music</li>
</ul>
<h3 className="info-title">educate</h3>
<ul className="info-content">
<li>Good Student Certificates (Grade 1-12), </li>
<li>GPA: <span id="gpa">3.x</span></li>
</ul>
</div>
<div className="about-achie text-main">
<div className={`about-achie-head ${isLoaded ? "load" : ""}`}>
{/*  
                    <div className="about-achie-box">
                        <h3 className="about-achie-box-title">N/a</h3>
                        <h1 className="about-achie-box-content light">N/a</h1>
                    </div> 
                     */}
</div>
<div className="about-achie-body">
<div className={`about-chie-des-title ${isLoaded ? "load" : ""}`}>
<h1 id="about-des-title">description title</h1>
</div>
<div className={`about-chie-des-content ${isLoaded ? "load" : ""}`}>
<p id="about-des-content">description content</p>
</div>
<div className="box-download">
<a className="background-main" href="#" id="button-downloadcv" target="_blank">
                            Download My CV
                            <i className="fa-solid fa-download"></i>
</a>
</div>
</div>
</div>
</section>
    </>
  );
};
