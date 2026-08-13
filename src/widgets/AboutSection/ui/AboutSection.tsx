import React from 'react';
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';

const list_achie = [
  { name: "awards", value: "19" },
  { name: "xp years", value: "0+" },
  { name: "projects", value: "12" },
  { name: "gpa", value: "3.5x" }
];

const title_about = {
  title: "Passionate Developer & Innovator",
  content: "I am always looking for ways to optimize and develop software to deliver the best user experience. With over a year of hands-on experience in personal projects and coding competitions, I constantly strive to learn and improve my skills."
};

const url_cv = "https://drive.google.com/file/d/1r6y_HA7CEfGvXZrtEGg5j2vPDdVZyWIo/view?usp=sharing";

export const AboutSection: React.FC = () => {
  const { ref, isLoaded } = useScrollAnimation(450);

  return (
    <section className="section" id="about" ref={ref} >
      <div className="elementor-spacer-inner-background">
        <div className="elementor-spacer-inner space1"></div>
      </div>
      <h1 className="title-section">about</h1>
      
      <div className={`about-info text-main ${isLoaded ? "load" : ""}`}>
        <h3 className="info-title">name</h3>
        <ul className="info-content"><li>Tran Vu Bao</li></ul>
        <h3 className="info-title">birthday</h3>
        <ul className="info-content"><li>27. 11. 2004.</li></ul>
        <h3 className="info-title">email</h3>
        <ul className="info-content"><li>tranvubao2004@gmail.com</li></ul>
        <h3 className="info-title">phone</h3>
        <ul className="info-content none-decoration"><li>(+84)915014470</li></ul>
        <h3 className="info-title">location</h3>
        <ul className="info-content"><li>Viet Nam, Quang Ngai</li></ul>
        <h3 className="info-title">interests</h3>
        <ul className="info-content"><li>Games, Code, Music</li></ul>
        <h3 className="info-title">educate</h3>
        <ul className="info-content">
          <li>Good Student Certificates (Grade 1-12), </li>
          <li>GPA: <span id="gpa">{list_achie.find(a => a.name === "gpa")?.value}</span></li>
        </ul>
      </div>

      <div className="about-achie text-main">
        <div className={`about-achie-head ${isLoaded ? "load" : ""}`}>
          {list_achie.map((achie, index) => (
            <div key={index} className="about-achie-box">
              <h3 className="about-achie-box-title">{achie.name}</h3>
              <h1 className="about-achie-box-content light">{achie.value}</h1>
            </div>
          ))}
        </div>
        <div className="about-achie-body">
          <div className={`about-chie-des-title ${isLoaded ? "load" : ""}`}>
            <h1 id="about-des-title">{title_about.title}</h1>
          </div>
          <div className={`about-chie-des-content ${isLoaded ? "load" : ""}`}>
            <p id="about-des-content">{title_about.content}</p>
          </div>
          <div className={`box-download ${isLoaded ? "load" : ""}`}>
            <a className="background-main" href={url_cv} id="button-downloadcv" target="_blank" rel="noreferrer">
              Download My CV
              <i className="fa-solid fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
