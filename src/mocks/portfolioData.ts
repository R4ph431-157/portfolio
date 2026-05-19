export const profile = {
  name: "Raphael",
  title: "Web Developer & Tech Enthusiast",
  location: "Nigeria",
  avatar: "https://i.ibb.co/bg5X8yPf/photo-2025-04-04-01-09-17.jpg",
  resumeUrl: "/assets/resume/idyuraphael_Resume.pdf",
  socials: {
    twitter: "https://x.com/r4ph431157",
    github: "https://github.com/R4ph431-157",
    linkedin: "https://www.linkedin.com/in/raphaelidyu/",
    email: "mailto:idyuraphael@gmail.com",
  },
};

export const about = {
  headline: "A Peek Into My Code-Driven Life.",
  paragraphs: [
    "I love discovering new things or just figuring out how stuff work. It excites me to think that there are still so many things out there waiting to be explored or discovered, and that curiosity pushes me to always want to improve and be part of something great. This is what led me to being a web developer.",
    "I'm hard driven by the idea of solving problems and creating real solutions through coding. It's amazing to me that I can build something and fix problems just by using a computer. When I'm not coding, I'm either playing games, exploring new tech and Web3 ideas, or just learning new things to grow both in tech and personally.",
    "I'm always looking for new challenges that push me to think deeply. I enjoy breaking down complex problems and tracing through them to understand how everything works. While it can sometimes be tricky to find that one missing piece, the satisfaction that comes with figuring it out and seeing everything come together is what makes the process so rewarding and exciting.",
    "I'm currently diving deeper into JavaScript and exploring web development, but I'm also excited about the endless possibilities that technology offers. My goal is to keep building impactful projects, collaborating with others, and growing as a developer and problem solver.",
  ],
};

export const skills = [
  {
    category: "Frontend Core",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
    ],
  },
  {
    category: "Currently Learning",
    items: [
      { name: "React", level: 65 },
      { name: "TypeScript", level: 50 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "JavaScript Documentation",
    description:
      "A simple, responsive technical documentation page that covers the basics of JavaScript. It includes a sticky sidebar for easy access to each section, and is fully mobile responsive.",
    image: "https://i.ibb.co/WvnFnM4n/Screenshot-2025-04-03-214823.png",
    link: "https://js-documentationpage.netlify.app",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Founders Pen — Demo Project",
    description:
      "A sleek demo site built for a friend who is a professional ghostwriter. Designed to highlight their services and voice with a clean, modern layout.",
    image: "https://i.ibb.co/5xt1BJwD/Screenshot-2026-05-19-013815.png",
    link: "https://faithfulghostwriting.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  },
  {
    id: 3,
    title: "Newsletter Subscription Form",
    description:
      "A simple and responsive newsletter subscription form designed to capture users' emails for updates. Built with HTML, CSS, and JavaScript, it includes form validation to ensure accurate user input and a seamless experience.",
    image: "https://i.ibb.co/Lds0Ftv8/Screenshot-2025-04-03-225330.png",
    link: "https://raphaelnewsletter.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "Frontend Mentor FAQ Accordion",
    description:
      "An interactive FAQ accordion built for those exploring Frontend Mentor challenges. It features smooth toggle animations and enhances user experience by keeping content clean and organized.",
    image: "https://i.ibb.co/3Y1rqqY6/Screenshot-2025-04-03-231110.png",
    link: "https://frontendmentorrfaq.netlify.app",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: [
      "Building responsive and interactive websites for clients using HTML, CSS, JavaScript, and React.",
      "Collaborating with designers and backend developers to deliver complete web solutions.",
      "Continuously learning new technologies and best practices to improve code quality.",
    ],
  },
  {
    id: 2,
    role: "Web Development Student",
    company: "Self-Taught & Online Platforms",
    period: "2022 - 2023",
    description: [
      "Completed Frontend Mentor challenges to sharpen HTML, CSS, and JavaScript skills.",
      "Built personal projects to practice responsive design and DOM manipulation.",
      "Studied modern JavaScript concepts including ES6+, async/await, and module patterns.",
    ],
  },
  {
    id: 3,
    role: "Tech Enthusiast",
    company: "Personal Growth",
    period: "2021 - 2022",
    description: [
      "Discovered passion for coding and started the journey into web development.",
      "Learned fundamentals of HTML and CSS through hands-on practice.",
      "Explored Web3 concepts and the future of decentralized applications.",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];