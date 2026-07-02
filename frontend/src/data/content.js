import avatarImg from '../assets/images/avatar_3d_1776797311303.png';
import primeOfficeImg from '../assets/images/prime_office_mockup_1779359220803.png';
import glowCartMockup from '../assets/images/glow_cart_mockup_1779359263693.png';
import aiCulinaryMockup from '../assets/images/ai_culinary_mockup_1779359833506.png';
import aiHandGestureMockup from '../assets/images/ai_hand_gesture_mockup_1779359848156.png';
import travelBlogMockup from '../assets/images/travel_blog_mockup_1779359965871.png';
import portfolioMockup from '../assets/images/portfolio_mockup_1779360019787.png';

export const personalInfo = {
  name: "Amna Muzammil",
  title: "Software Engineering Student | MERN Stack Developer",
  tagline: "I build responsive, dynamic, and user-focused web applications",
  email: "amnamuzammil131@gmail.com",
  github: "https://github.com/AamnaMuzammil",
  linkedin: "https://www.linkedin.com/in/amna-muzammil/",
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
    title: "Prime Office Products",
    description: "A corporate business website with product listings for office desks, chairs, and stationary. Features a clean and modern UI.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: primeOfficeImg,
    github: "https://github.com/AamnaMuzammil/ECOMAMNA-PRIME-OFFICE-FRONTEND",
    demo: "https://ecomamna-prime-office-frontend.vercel.app/",
    clickUrl: "https://ecomamna-prime-office-frontend.vercel.app/"
  },
  {
    id: 2,
    title: "Glow Cart – All in One",
    description: "Beauty e-commerce website with personalized product suggestions based on skin/hair type.",
    technologies: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    image: glowCartMockup,
    github: "https://github.com/AamnaMuzammil/Glowcart",
    demo: "https://github.com/AamnaMuzammil/Glowcart",
    clickUrl: "https://github.com/AamnaMuzammil/Glowcart"
  },
  {
    id: 3,
    title: "AI Culinary",
    description: "AI-powered culinary application.",
    technologies: ["React", "AI"],
    image: aiCulinaryMockup,
    github: "https://github.com/AamnaMuzammil/AI-culinary",
    demo: "https://github.com/AamnaMuzammil/AI-culinary",
    clickUrl: "https://github.com/AamnaMuzammil/AI-culinary"
  },
  {
    id: 4,
    title: "AI Hand Gesture",
    description: "Real-time spatial drawing interface with hand-tracking.",
    technologies: ["Python", "OpenCV", "AI"],
    image: aiHandGestureMockup,
    github: "https://github.com/AamnaMuzammil/AI-hand-gesture",
    demo: "https://github.com/AamnaMuzammil/AI-hand-gesture",
    clickUrl: "https://github.com/AamnaMuzammil/AI-hand-gesture"
  },
  {
    id: 5,
    title: "Travel Blog Website",
    description: "A responsive travel blog.",
    technologies: ["HTML", "CSS", "JS"],
    image: travelBlogMockup,
    github: "https://github.com/AamnaMuzammil/Travel-blog-website",
    demo: "https://github.com/AamnaMuzammil/Travel-blog-website",
    clickUrl: "https://github.com/AamnaMuzammil/Travel-blog-website"
  },
  {
    id: 6,
    title: "My Portfolio",
    description: "Personal portfolio website.",
    technologies: ["React", "Framer Motion"],
    image: portfolioMockup,
    github: "https://github.com/AamnaMuzammil/My-por",
    demo: "https://github.com/AamnaMuzammil/My-por",
    clickUrl: "https://github.com/AamnaMuzammil/My-por"
  }
];
