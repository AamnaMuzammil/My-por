import avatarImg from '../assets/images/avatar_3d_1776797311303.png';
import glowCartImg from '../assets/images/project_glowcart_1776797328831.png';
import abcSchoolImg from '../assets/images/project_abcschool_1776797343342.png';
import primeOfficeImg from '../assets/images/project_primeoffice_1776797476785.png';

export const personalInfo = {
  name: "Amna Muzammil",
  title: "Software Engineering Student | MERN Stack Developer",
  tagline: "I build responsive, dynamic, and user-focused web applications",
  email: "amnamuzammil131@gmail.com",
  github: "https://github.com/AamnaMuzammil",
  linkedin: "https://linkedin.com/in/amnamuzammmil",
  avatar: avatarImg
};

export const aboutMe = [
  "Undergraduate Software Engineering student at Sir Syed University (2023–2027) with a 4.0 GPA.",
  "Completed a professional diploma from Aptech (a globally recognized IT training institute), where I gained hands-on experience in building real-world web applications using HTML, CSS, JavaScript, PHP, and databases. This training strengthened my practical development skills and understanding of industry-level workflows.",
  "I have a strong passion for both frontend and backend development, focusing on creating seamless user experiences and robust architectures.",
  "My goal is to work in a professional software house and contribute effectively to innovative projects while continuously growing as a developer."
];

export const skills = {
  Frontend: [
    "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap"
  ],
  Backend: [
    "PHP", "Node.js (MERN Stack)", "ASP.NET"
  ],
  Database: [
    "MySQL", "SQL Server", "MongoDB"
  ],
  Tools: [
    "Git", "GitHub", "VS Code"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Glow Cart – All in One",
    description: "Beauty e-commerce website with personalized product suggestions based on skin/hair type. Includes a comprehensive cart system and an admin panel for management.",
    technologies: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    image: glowCartImg,
    github: "https://github.com/AamnaMuzammil/Glowcart",
    demo: "#"
  },
  {
    id: 2,
    title: "ABC School Website",
    description: "A responsive and animated multi-page site designed for an educational institution. Includes sections for About, Achievements, and Contact.",
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
    image: abcSchoolImg,
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Prime Office Products Website",
    description: "A corporate business website with product listings for office desks, chairs, and stationary. Features a clean and modern UI.",
    technologies: ["HTML", "CSS", "JS"],
    image: primeOfficeImg,
    github: "#",
    demo: "#"
  }
];
