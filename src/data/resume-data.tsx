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
  shortDescription: string | string[];
  longDescription: string[];
  technologies: string[];
}

export const RESUME_DATA = {
  name: "Juan Sepulveda",
  initials: "JS",
  about: "Senior Full Stack Engineer | Mobile & Web Products",
  summary: [
    `Senior Full Stack Engineer with 13+ years building products end to end across mobile, web, and backend.`,
    `I obsess over two things: the experience users get and the experience developers have building it. That means shipping features that deliver real value to customers, while investing in testing, automation, and tooling so the team can move fast and ship safely. Most recently in consumer fintech.`,
    `Specialized in TypeScript, React / React Native, Node.js, and GraphQL.`,
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
      company: "Arro Finance",
      link: "https://arrofinance.com",
      badges: ["Remote", "Full-time"],
      title: "Senior Full Stack Engineer",
      logo: null,
      start: "Nov 2024",
      end: "Mar 2026",
      shortDescription: [
        "I owned a lot of the mobile app (React Native/Expo) and worked across the NestJS backend too. My most recent project was Credit Builder, which hit $45K+ MRR in just two months.",
        "Led the migration from Apollo/GraphQL to REST with TanStack Query and Zustand, and introduced a service and viewmodel architecture to pull business logic out of components.",
        "I built a backend-driven UI system so we could control components, features, and copy from the server without pushing OTAs. On the backend I designed an event-driven architecture so modules could react to things like payments and onboarding without being coupled to each other.",
        "When I joined there were no tests; I added coverage for everything I shipped, including E2E for web onboarding. I also automated the app release pipeline (OTAs, App Store) so we could ship as many times as we wanted in the week.",
      ],
      longDescription: [],
      technologies: [
        "TypeScript",
        "React Native",
        "Expo",
        "NestJS",
        "GraphQL",
        "PostgreSQL",
        "Redis",
        "AWS CDK",
        "Docker",
        "Go",
        "Python",
        "Plaid",
        "Stripe",
        "Tailwind",
      ],
    },
    {
      company: "Easyapps",
      link: "",
      badges: ["Remote", "Full-time"],
      title: "Senior Software Engineer",
      logo: null,
      start: "Sep 2021",
      end: "Jan 2024",
      shortDescription:
        "I built custom enterprise apps on top of Airtable and monday.com, set up code standards for the team, and mentored junior devs weekly.",
      longDescription: [
        "My biggest project was a resource allocation app for Riot Games' marketing department. It helped them optimize how they assigned talent, cut down on vendor costs, and saved them hundreds of thousands of dollars a year. I also built connectors to export Airtable data into Tableau and Databricks so they could measure ROI per campaign.",
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
        "I built and maintained Shopify storefronts for big-name clients like BBC and Hasbro. The work was mostly frontend: building features, fixing bugs, improving performance and accessibility, and rebuilding components to make the stores better. Worked closely with designers, PMs, and other frontend devs to ship on time.",
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
    "React / React Native",
    "Expo",
    "Next.js",
    "NestJS",
    "Node.js",
    "GraphQL",
    "REST",
    "TanStack Query",
    "Zustand",
    "PostgreSQL",
    "Redis",
    "AWS",
    "Tailwind",
    "Stripe",
    "Plaid",
    "CI/CD",
    "TDD",
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
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Payroll",
      techStack: ["Side Project", "Next.js"],
      description:
        "Help businesses to handle in Dominican Republic to handle payroll",
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
  ],
} as const;
