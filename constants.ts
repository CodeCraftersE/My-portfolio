
import { Project, SkillCategory, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Sayantan Das",
  role: "Aspiring Java Engineer | Backend Developer | Java EE",
  email: "dsanu9630@gmail.com",
  phone: "+91-9433807320",
  location: "India",
  linkedin: "https://linkedin.com/in/sayantan-das07",
  github: "https://github.com/sayantan-das07",
  summary: "Aspiring Java Engineer with strong proficiency in Core Java, JDBC, Hibernate, and Java EE. Experienced in building scalable web applications, REST-based systems, and production-ready projects with clean architecture."
};

export const PROJECTS: Project[] = [
  {
    title: "Fully Functional E-Commerce Website",
    description: "Designed and developed an online store from scratch using WordPress and Elementor. Ensured full responsiveness, cross-browser compatibility and product inventory management. Used Hostinger for cloud hosting.",
    tech: ["WordPress", "Elementor", "Hostinger", "E-commerce"],
    liveLink: "https://creativeindiastore.in/",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Bahurupi Bangla",
    description: "A travel tour guiding website showcasing destinations across West Bengal. Focuses on immersive UI and informative content for travelers.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://codecrafterse.github.io/CodeCrafters_5/",
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Placement Information System",
    description: "A static web application developed to provide centralized placement information and resources for university students.",
    tech: ["HTML", "CSS", "JavaScript", "Static Site"],
    liveLink: "https://innovtiveproject.github.io/placementinformation/",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java (High proficiency)", level: 95 },
      { name: "JSP Servlet (JAVA EE)", level: 90 },
      { name: "JDBC & Hibernate", level: 85 },
      { name: "Python", level: 75 },
      { name: "C", level: 80 },
      { name: "HTML/CSS/JS", level: 90 }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "VS Code & Eclipse", level: 90 },
      { name: "Git & Github", level: 85 },
      { name: "WordPress & Elementor", level: 95 },
      { name: "Autocad", level: 60 }
    ]
  },
  {
    title: "Engineering",
    skills: [
      { name: "DSA", level: 85 },
      { name: "DBMS", level: 85 },
      { name: "OS", level: 80 },
      { name: "OOP", level: 90 }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "CreativeIndiaStore",
    role: "Freelance Web Developer",
    period: "06/2025 – Present",
    description: [
      "Developed and deployed a full-featured e-commerce website using WordPress and Elementor.",
      "Implemented user-friendly UI/UX components which were optimized for mobile use.",
      "Ensured cloud deployment reliability and cross-browser compatibility."
    ]
  }
];
