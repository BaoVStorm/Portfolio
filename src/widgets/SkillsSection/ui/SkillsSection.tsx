import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';
import { skillsData, HIGH_PERCENT_SKILL, type SkillDetail } from '@/entities/skill/config/skillsData';

const SkillBar: React.FC<{ skill: SkillDetail; isLoaded: boolean }> = ({ skill, isLoaded }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => setWidth(skill.percent), 200); // Trigger animation after parent load
    } else {
      setWidth(0);
    }
  }, [isLoaded, skill.percent]);

  const getBackgroundColor = (percent: number) => {
    if (percent >= HIGH_PERCENT_SKILL) {
      const percentColor = 50 + ((percent - HIGH_PERCENT_SKILL) * 50) / (100 - HIGH_PERCENT_SKILL);
      // In JS it got bgColor of the element, let's assume default is #fab410 (main color) 
      // but to use CSS variables we can just do color-mix in inline style.
      return `color-mix(in srgb, var(--main-color) ${100 - percentColor}%, rgb(255, 34, 34) ${percentColor}%)`;
    }
    return undefined; // use css default
  };

  return (
    <div className="detail-box-skill">
      <span className="percent-nonslider-skill light">{skill.percent}</span>
      <div className="content-box-skill">
        <span className="name-detail-box-skill text-main">{skill.name}</span>
        <div className="nonslider-skill">
          <div
            className={`nonslider-skill-detail light ${!isLoaded ? 'start-nonslider' : ''}`}
            style={{ width: `${width}%`, backgroundColor: getBackgroundColor(skill.percent) }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export const SkillsSection: React.FC = () => {
  const { ref, isLoaded } = useScrollAnimation(400);

  return (
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
          {skillsData[0].skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} isLoaded={isLoaded} />
          ))}
        </div>
      </div>

      <div className={`box-skill-1th skillbox2 ${isLoaded ? "load" : ""}`}>
        <div className="head-box-skill">
          <div>Framework &amp; Library</div>
        </div>
        <div className="body-box-skill body-box-skill-2col" id="framework">
          {skillsData[1].skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} isLoaded={isLoaded} />
          ))}
        </div>
      </div>

      <div className={`box-skill-1th skillbox3 ${isLoaded ? "load" : ""}`}>
        <div className="box-skill-2th">
          <div className="head-box-skill">
            <div>soft skill</div>
          </div>
          <div className="body-box-skill" id="soft-skill">
            {skillsData[2].skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} isLoaded={isLoaded} />
            ))}
          </div>
        </div>
        <div className="box-skill-2th">
          <div className="head-box-skill">
            <div>hard skill</div>
          </div>
          <div className="body-box-skill" id="hard-skill">
            {skillsData[3].skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} isLoaded={isLoaded} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
