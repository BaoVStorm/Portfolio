export const HIGH_PERCENT_SKILL = 88;

export type SkillDetail = {
  name: string;
  percent: number;
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: SkillDetail[];
};

export const skillsData: SkillCategory[] = [
  {
    id: "programming-language",
    title: "programming language",
    skills: [
      { name: "c, c++", percent: 92 },
      { name: "html, css", percent: 88 },
      { name: "javaScript, TypeScript", percent: 83 },
      { name: "sql", percent: 86 },
      { name: "python", percent: 82 },
      { name: "java", percent: 75 },
      { name: "php", percent: 76 },
      { name: "C# With Unity - Game Dev", percent: 85 }
    ]
  },
  {
    id: "framework",
    title: "Framework & Library",
    skills: [
      { name: "Node.JS", percent: 83 },
      { name: "React.JS", percent: 80 },
      { name: "Redux", percent: 75 },
      { name: "Tailwind CSS", percent: 76 },
      { name: "JQuery", percent: 87 },
      { name: "Laravel", percent: 75 }
    ]
  },
  {
    id: "soft-skill",
    title: "soft skill",
    skills: [
      { name: "creativity", percent: 87 },
      { name: "flexibility", percent: 87 },
      { name: "communication", percent: 69 }
    ]
  },
  {
    id: "hard-skill",
    title: "hard skill",
    skills: [
      { name: "Data Structures & Algorithms", percent: 92 },
      { name: "Math & Physics", percent: 97 },
      { name: "Design & UI/UX", percent: 90 }
    ]
  }
];
