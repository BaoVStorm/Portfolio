export type ProjectData = {
  img: string;
  title: string;
  des: string;
  href: string;
};

export const projectsData: ProjectData[] = [
  {
      img: "assets/projects/bigplant_logo.png",
      title: "BigPlants - Production App",
      des: "Team Project. App nơi người dùng có thể scan thực vật realtime từ đó có thể biết được thông tin chi tiết về loài cây, Tích hợp model ChatBox LLM để hỏi các thông tin cơ bản. Tôi tham gia toàn bộ quá trình làm app + AI, người còn lại train models detect hình ảnh",
      href: "https://big-plants-web-site.vercel.app/"
  },
  {
      img: "assets/projects/Astrolingo.png",
      title: "Astrolingo - Android App",
      des: "My personal project - A TOEIC preparation app offering practice tests, a rich vocabulary library, an AI chatbot, and fun mini games to help learners study English easily and effectively.",
      href: "https://github.com/BaoVStorm/Astrolingo"
  },
  {
      img: "https://raw.githubusercontent.com/BaoVStorm/King_The_Lost/refs/heads/VStorm/KingTheLost_logo_tran.png",
      title: "King The Lost - Game App",
      des: "My personal project - KING The Lost, is an action-adventure game developed with Unity, where a lost king battles enemies in a dangerous forest while awaiting rescue.",
      href: "https://github.com/BaoVStorm/King_The_Lost"
  },
  {
      img: "assets/projects/portfolio.png",
      title: "My Portfolio - Website",
      des: "This is my personal project - a website to introduce myself with ReactJS. Additionally, it serves as a platform to showcase my skills and continuously improve them through practice.",
      href: "https://github.com/BaoVStorm/Portfolio_React"
  },
  {
      img: "https://github.com/coconerd/iBeleaf/blob/main/public/images/favicon/plantEcommerce_padding.png?raw=true",
      title: "iBeleaf - Website",
      des: "This is a team project with my homies at <i>COCONERD</i> - an eCommerce website designed to manage and sell plants, featuring a streamlined process and a user-friendly interface for a smooth shopping experience.",
      href: "https://github.com/coconerd/plant-ecommerce"
  },
  {
      img:  "assets/projects/uit.png",
      title: "UITeco - Desktop App",
      des: "A team project with <i>COCONERD</i> - my best team in university. This project is about an app that serves not only as a forum but also as a bridge connecting teachers, alumni, and students.",
      href: "https://github.com/coconerd/uiteco-swing"
  },
  {
      img: "assets/projects/recommendationVideo.png",
      title: "Recommendation Video - BigData",
      des: "Team 2 people - Built a video recommendation engine using ImageNet data with IDNet and PixelNet models for content analysis and user preference prediction.",
      href: "https://github.com/BaoVStorm/WebDemo_RecommendationVideo"
  },
  {
      img: "assets/projects/datamining_bg.png",
      title: "LessIsMore - DataMining",
      des: "A team project with <i>COCONERD</i> - this project focused on data mining for tomato pest and disease recognition using the MobileNet model. This lightweight model delivers impressive performance.",
      href: "https://github.com/coconerd/LessIsMore_Tomato"
  },
  {
      img: "assets/projects/attack.png",
      title: "Inversion Attack - Security",
      des: "Inversion Attack is an attack technique in the field of security and machine learning, aimed at reconstructing the original data from the output or weights of an AI model.",
      href: "https://github.com/BaoVStorm/InversionAttack"
  }
];
