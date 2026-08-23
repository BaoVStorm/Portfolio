import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';
import { skillsData, type SkillDetail } from '@/entities/skill/config/skillsData';

const SkillBar: React.FC<{ skill: SkillDetail; isLoaded: boolean; index: number }> = ({ skill, isLoaded, index }) => {
  const [filledBlocks, setFilledBlocks] = useState(0);

  useEffect(() => {
    if (isLoaded) {
      // Stagger animation based on index
      const timer = setTimeout(() => {
        setFilledBlocks(skill.level);
      }, 100 + index * 50);
      return () => clearTimeout(timer);
    } else {
      setFilledBlocks(0);
    }
  }, [isLoaded, skill.level, index]);

  return (
    <div className="detail-box-skill">
      <span className="percent-nonslider-skill">{skill.level}</span>
      <div className="content-box-skill">
        <span className="name-detail-box-skill text-main">{skill.name}</span>
        <div className="nonslider-skill">
          {[1, 2, 3, 4, 5].map((level) => (
            <div
              key={level}
              className={`level-block ${level <= filledBlocks ? 'filled' : ''}`}
            ></div>
          ))}
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

      {skillsData.map((category, catIndex) => (
        <div
          key={category.id}
          className={`box-skill-1th skillbox${catIndex + 1} ${isLoaded ? "load" : ""}`}
        >
          <div className="head-box-skill">
            <div>{category.title}</div>
          </div>
          <div className="body-box-skill body-box-skill-2col" id={category.id}>
            {category.skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} isLoaded={isLoaded} index={index} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
