export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type SkillDetail = {
  name: string;
  level: SkillLevel;
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: SkillDetail[];
};

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "React.js & Next.js", level: 5 },
      { name: "TypeScript / JavaScript", level: 5 },
      { name: "Tailwind CSS & SCSS", level: 5 },
      { name: "HTML5 & Web Standards", level: 4 }
    ]
  },
  {
    id: "backend",
    title: "Backend & Database",
    skills: [
      { name: "Node.js & Express", level: 4 },
      { name: "SQL (MySQL, PostgreSQL)", level: 4 },
      { name: "REST API Architecture", level: 4 },
      { name: "C / C++", level: 5 }
    ]
  },
  {
    id: "core-tools",
    title: "Core Engineering",
    skills: [
      { name: "Data Structures & Algorithms", level: 5 },
      { name: "Git & GitHub Workflow", level: 5 },
      { name: "Problem Solving", level: 5 }
    ]
  }
];
