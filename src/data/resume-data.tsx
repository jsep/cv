import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EasyAppsLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
export interface WorkExperience {
  company: string;
  link: string;
  badges: string[];
  title: string;
  logo: null;
  start: string;
  end: string;
  forceNewPrintPage?: boolean;
  shortDescription: string;
  longDescription: string[];
  technologies: string[];
}

export const RESUME_DATA = {
  name: "Juan Sepulveda",
  initials: "JS",
  // location: "Dominican Republic",
  // locationLink: "",
  about: "Full Stack Engineer focused on always learning.",
  summary: [
    `I am a passionate Full Stack Engineer with over 12 years of experience, dedicated to continuous learning. 
    I have worked on various projects, supporting team members to perform their best. 
    My expertise includes TypeScript/JavaScript, React, Node.js, and Next.js.
    `,
  ],

  avatarUrl:
    "https://avatars.githubusercontent.com/u/4037939?s=400&u=53010a075d43818bd7ed82f85599dfce90f42579&v=4",
  personalWebsiteUrl: "https://juan.do",
  contact: {
    email: "me@juan.do",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jsep",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jsep",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/jsep_do",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Las Americas Institute of Technology",
      degree: "Technologist in Software Development",
      start: "2010",
      end: "2012",
    },
  ],
  work: [
    {
      company: "Easyapps",
      link: "",
      badges: ["Remote", "Full-time"],
      title: "Senior Software Engineer",
      logo: EasyAppsLogo,
      start: "Sep 2021",
      end: "Present",
      shortDescription:
        "As a Senior Software Engineer at Easyapps, I led the development of custom enterprise applications across platforms like Airtable and monday.com. This included establishing code standards, mentoring junior developers weekly, and creating versatile SaaS solutions for our needs.",
      longDescription: [
        "I led the development of a resource allocation app for Riot Games' marketing department, optimizing talent allocation, reducing vendor reliance, and improving team well-being, saving them hundreds of thousands of dollars annually. I also developed connectors for exporting Airtable data to Tableau and Databricks, enhancing data analysis and reporting to measure ROI per campaign.",
      ],
      technologies: [
        "Typescript/Javascript",
        "ReactJS",
        "NextJS",
        "Firebase",
        "Python 3",
        "Tableau",
        "Databricks",
      ],
    },
    {
      company: "We Make Websites",
      link: "",
      badges: ["Remote", "Full-time"],
      title: "Frontend Developer",
      logo: null,
      start: "Nov 2020",
      end: "Oct 2022",
      shortDescription:
        "Built, maintained, and improved websites for WMW clients, primarily on the Shopify platform. Collaborated with front-end developers, designers, project managers, and account managers to deliver projects on time. Developed features adhering to standards for accessibility, performance, reusability, and visual quality. Addressed technical issues, fixed bugs, responded to client requests, and rebuilt site components to enhance e-commerce stores.",
      technologies: ["Javascript", "Shopify", "Liquid", "VueJS", "ReactJS"],
    },
    {
      company: "DIGITAL ENHANCEMENTS, L.L.C.",
      link: "",
      badges: ["Remote", "Full-time"],
      title: "Software Engineer",
      logo: null,
      start: "Jul 2016",
      end: "Nov 2020",
      shortDescription:
        "Led design and architecture decisions. Designed testing strategies and implemented CI/CD workflows. Created GraphQL APIs, built APIs for mobile applications, and developed a marketplace with Stripe for payments and financial services. Implemented a highly personalized permissions system.",
      technologies: [
        "Typescript/Javascript",
        "Python 3",
        "Django",
        "GraphQL",
        "RESTAPI",
        "Angular 2+ to 10",
        "Stripe",
        "Keycloak",
        "Docker",
        "Kubernetes",
        "Postgres",
        "Rancher",
        "Google Cloud",
      ],
    },
    {
      company: "LaVaina Inc",
      link: "",
      badges: ["Full-time"],
      title: "Software Engineer",
      logo: null,
      forceNewPrintPage: true,
      start: "Nov 2013",
      end: "Jul 2016",
      shortDescription:
        "Worked in a dynamic startup environment with frequent pivots, aimed at disrupting the e-commerce industry in Latin America. Responsibilities included developing user interfaces, utilizing Test Driven Development, participating in Pair Programming, and providing customer support. Gained valuable experience in working under pressure, adapting to rapid changes, and prioritizing client needs to deliver effective solutions.",

      technologies: [
        "Javascript",
        "CoffeeScript",
        "Typescript",
        "HTML",
        "CSS",
        "LESS",
        "MeteorJS",
        "MongoDB",
        "Mocha",
        "Jasmine",
        "SinonJs",
        "Digital Ocean",
      ],
    },
    {
      company: "VIXICOM, LLC",
      link: "",
      badges: ["Full-time"],
      title: "Software Developer",
      logo: null,
      start: "Nov 2012",
      end: "Jul 2013",
      shortDescription:
        "Built the INTRANET of the company for managing internal processes such as the hiring process, payments, support tickets, and project management. Automated the process of creating scripts for handling inbound calls.",
      technologies: ["PHP", "Javascript", "HTML", "CSS", "Java", "Mysql"],
    },
  ],
  skills: [
    "TypeScript/JavaScript",
    "Python",
    "ReactJS",
    "Angular",
    "Next.js",
    "Node.js",
    "GraphQL",
    "REST",
    "Postgres",
    "Firebase",
    "TDD",
    "CI/CD",
  ],
  projects: [
    {
      title: "Mentorship",
      techStack: ["Personal"],
      description:
        "Mentor junior developers and help them grow in their careers for at least 30 minutes a week",
      link: {
        label: "cv.juan.do",
        href: "https://cv.juan.do",
      },
    },
    {
      title: "dgii",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description:
        "A platform to help businesses in the Dominican Republic to comply with the tax agency",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "budget",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Helps to handle personal finances and budgeting",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Payroll",
      techStack: ["Side Project", "Next.js"],
      description: "Help businesses to handle in Dominican Republic to handle payroll",
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
  ],
} as const;
