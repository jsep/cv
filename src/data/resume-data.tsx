import type { ReactNode } from "react";
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
  shortDescription: string | Array<string | ReactNode>;
  longDescription: string[];
  technologies: string[];
}

export const RESUME_DATA = {
  name: "Juan Sepulveda",
  initials: "JS",
  about: "Senior Full Stack Engineer",
  summary: [
    `Senior Full Stack Engineer with 13+ years building products end to end across mobile, web, and backend. Lately a lot of that has been consumer fintech: fast shipping, real money involved, and not much room for sloppy releases.`,
    `I obsess over two things: the experience users get and the experience developers have building it. So I push for work that actually helps the business, not just demos, and I put time into tests, automation, and keeping the codebase something both the team and AI agents can still work with a year from now.`,
    `Used to startup chaos (vague specs, sharp turns, owning things end to end). I mentor when I can. Remote only. Bilingual in English and Spanish. Mostly TypeScript, React / React Native, Node.js, and GraphQL.`,
  ],

  avatarUrl:
    "https://avatars.githubusercontent.com/u/4037939?s=400&u=53010a075d43818bd7ed82f85599dfce90f42579&v=4",
  personalWebsiteUrl: "https://cv.juan.do",
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
        <>
          Owned the React Native (Expo) app and worked across our NestJS backend. Shipped <strong>Credit Builder</strong>; it reached{" "}
          <strong>$45K+ MRR</strong> in about two months.
        </>,
        <>
          Migrated Apollo/GraphQL to REST with TanStack Query and Zustand, and moved business logic into services and view models, which gave us{" "}
          <strong>improved code maintainability and reduced frontend complexity</strong>.
        </>,
        <>
          Built a <strong>backend-driven UI system</strong> enabling dynamic control of features, components, and copy without app redeploys,{" "}
          <strong>accelerating iteration speed and reducing reliance on OTA releases</strong>.
        </>,
        <>
          Designed and implemented an <strong>event-driven backend architecture</strong> that <strong>decoupled modules</strong> and allowed scalable reactions to
          payments and onboarding events.
        </>,
        <>
          Established testing practices from scratch, adding unit and end-to-end coverage (including web onboarding) to{" "}
          <strong>increase reliability and reduce production risk</strong>.
        </>,
        <>
          Automated <strong>mobile release pipelines</strong> (OTA updates and App Store deployments), enabling{" "}
          <strong>high-frequency releases and faster feature delivery cycles</strong>.
        </>,
      ],
      longDescription: [],
      technologies: [
        "TypeScript",
        "React Native",
        "Expo",
        "TanStack Query",
        "Zustand",
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
        "Tailwind CSS",
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
      shortDescription: [
        <>
          Built custom enterprise applications on <strong>Airtable</strong> and <strong>monday.com</strong>, enabling teams to streamline workflows and{" "}
          <strong>improve operational efficiency</strong>.
        </>,
        <>
          Established team-wide coding standards and mentored junior developers through weekly sessions,{" "}
          <strong>improving code quality and accelerating team growth</strong>.
        </>,
        <>
          Led development of a resource allocation platform for Riot Games&apos; marketing department, optimizing talent assignment and vendor usage to{" "}
          <strong>save hundreds of thousands of dollars annually</strong>.
        </>,
        <>
          Developed data integration pipelines exporting Airtable data into <strong>Tableau</strong> and <strong>Databricks</strong>, enabling{" "}
          <strong>campaign-level ROI tracking and more informed decision-making</strong>.
        </>,
      ],
      longDescription: [],
      technologies: [
        "TypeScript / JavaScript",
        "React",
        "Next.js",
        "Firebase",
        "Python",
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
      shortDescription: [
        <>
          Built and maintained <strong>Shopify</strong> storefronts for enterprise clients including <strong>BBC</strong> and <strong>Hasbro</strong>, delivering
          high-quality, production-ready e-commerce experiences.
        </>,
        <>
          Developed new frontend features and resolved bugs to <strong>improve site stability, usability, and overall customer experience</strong>.
        </>,
        <>
          Optimized performance and accessibility across storefronts, <strong>enhancing load times</strong> and ensuring compliance with modern web standards.
        </>,
        <>
          Refactored and rebuilt UI components to improve <strong>maintainability and scalability</strong> of Shopify themes.
        </>,
        <>
          Collaborated cross-functionally with designers, product managers, and engineers to <strong>deliver projects on time</strong> and align with client
          requirements.
        </>,
      ],
      technologies: ["JavaScript", "Shopify", "Liquid", "Vue.js", "React"],
    },
    {
      company: "DIGITAL ENHANCEMENTS, L.L.C.",
      link: "",
      badges: ["Remote", "Full-time"],
      title: "Software Engineer",
      logo: null,
      start: "Jul 2016",
      end: "Nov 2020",
      shortDescription: [
        <>
          Led system design and architectural decisions, establishing <strong>scalable foundations</strong> for web and mobile applications.
        </>,
        <>
          Designed testing strategies and implemented CI/CD pipelines, <strong>improving deployment reliability and accelerating release cycles</strong>.
        </>,
        <>
          Built <strong>GraphQL</strong> APIs to support mobile and web clients, enabling efficient data access and <strong>system interoperability</strong>.
        </>,
        <>
          Developed a marketplace platform with <strong>Stripe</strong> integrations for payments and financial services, facilitating secure transactions and revenue
          generation.
        </>,
        <>
          Implemented a highly customizable permissions system, enabling <strong>fine-grained access control</strong> and supporting complex user roles.
        </>,
      ],
      technologies: [
        "TypeScript / JavaScript",
        "Python",
        "Django",
        "GraphQL",
        "REST",
        "Angular",
        "Stripe",
        "Keycloak",
        "Docker",
        "Kubernetes",
        "PostgreSQL",
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
      shortDescription: [
        <>
          Developed user-facing interfaces in a fast-paced startup environment, delivering features that supported evolving product direction and customer needs.
        </>,
        <>
          Applied <strong>Test-Driven Development (TDD)</strong> and pair programming practices to <strong>improve code quality and reduce defects</strong>.
        </>,
        <>
          Adapted quickly to frequent product pivots, <strong>prioritizing high-impact work</strong> and maintaining delivery under tight timelines.
        </>,
        <>
          Collaborated closely with cross-functional teams to align engineering efforts with business goals and user requirements.
        </>,
        <>
          Provided direct customer support when needed, <strong>strengthening feedback loops and informing product improvements</strong>.
        </>,
      ],
      technologies: [
        "JavaScript",
        "CoffeeScript",
        "TypeScript",
        "HTML",
        "CSS",
        "LESS",
        "Meteor",
        "MongoDB",
        "Mocha",
        "Jasmine",
        "Sinon.js",
        "DigitalOcean",
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
      shortDescription: [
        <>
          Designed and developed the company intranet to manage hiring, payments, support tickets, and project workflows,{" "}
          <strong>centralizing operations and improving internal efficiency</strong>.
        </>,
        <>
          Automated the generation of scripts for handling inbound calls, <strong>reducing manual effort and increasing consistency</strong> in customer
          interactions.
        </>,
      ],
      technologies: ["PHP", "JavaScript", "HTML", "CSS", "Java", "MySQL"],
    },
  ],
  skills: [
    "TypeScript / JavaScript",
    "Python",
    "Go",
    "Node.js",
    "React / React Native",
    "Expo",
    "Next.js",
    "TanStack Query",
    "Zustand",
    "Tailwind CSS",
    "NestJS",
    "GraphQL",
    "REST",
    "PostgreSQL",
    "Redis",
    "MongoDB",
    "Docker",
    "AWS CDK",
    "Stripe",
    "Plaid",
    "Firebase",
    "Shopify",
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
      description: "Help businesses to handle in Dominican Republic to handle payroll",
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
  ],
} as const;
