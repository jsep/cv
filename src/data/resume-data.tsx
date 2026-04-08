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
  shortDescription: string | ReactNode[];
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
        "TanStack Query",
        "Zustand",
        "NestJS",
        "GraphQL",
        "PostgreSQL",
        "Redis",
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
      shortDescription: [
        <>
          Shipped bespoke enterprise apps on <strong>Airtable</strong> and <strong>monday.com</strong>,
          giving teams clearer workflows and less manual overhead.
        </>,
        <>
          Set shared engineering conventions and ran weekly mentoring,{" "}
          <strong>raising bar for reviews</strong> and <strong>speeding up ramp for newer devs</strong>.
        </>,
        <>
          Owned delivery of a marketing resource-planning tool for <strong>Riot Games</strong>, tightening
          staffing and vendor use to <strong>cut annual spend by six figures</strong>.
        </>,
        <>
          Built ETL-style flows from <strong>Airtable</strong> into <strong>Tableau</strong> and{" "}
          <strong>Databricks</strong>, unlocking <strong>ROI at the campaign level</strong> and sharper exec
          reporting.
        </>,
      ],
      longDescription: [],
      technologies: [
        "TypeScript/JavaScript",
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
          Owned <strong>Shopify</strong> builds for large brands (e.g. <strong>BBC</strong>,{" "}
          <strong>Hasbro</strong>) from polish through launch.
        </>,
        <>
          Shipped UI work and hardening fixes that <strong>reduced incidents</strong> and{" "}
          <strong>smoothed checkout and browsing</strong>.
        </>,
        <>
          Tuned perf and a11y so pages <strong>loaded faster</strong> and{" "}
          <strong>met current accessibility expectations</strong>.
        </>,
        <>
          Reworked theme components for <strong>cleaner extension</strong> and{" "}
          <strong>less theme-specific debt</strong>.
        </>,
        <>
          Partnered with design, PM, and client stakeholders to <strong>hit dates</strong> and{" "}
          <strong>match scope and brand</strong>.
        </>,
      ],
      longDescription: [],
      technologies: ["JavaScript", "Shopify", "Liquid", "Vue.js", "React"],
    },
    {
      company: "Digital Enhancements, LLC",
      link: "",
      badges: ["Remote", "Full-time"],
      title: "Software Engineer",
      logo: null,
      start: "Jul 2016",
      end: "Nov 2020",
      shortDescription: [
        <>
          Drove architecture for web and mobile, <strong>keeping systems evolvable</strong> as scope grew.
        </>,
        <>
          Defined test strategy and wired <strong>CI/CD</strong>, <strong>fewer bad deploys</strong> and{" "}
          <strong>shorter time to prod</strong>.
        </>,
        <>
          Delivered <strong>GraphQL</strong> backends so clients could <strong>fetch only what they need</strong>{" "}
          with <strong>clear contracts</strong>.
        </>,
        <>
          Built a marketplace with <strong>Stripe</strong> for money movement and payouts,{" "}
          <strong>supporting trust and monetization</strong>.
        </>,
        <>
          Shipped a <strong>configurable RBAC</strong> layer, <strong>granular permissions</strong> without
          one-off hacks.
        </>,
      ],
      longDescription: [],
      technologies: [
        "TypeScript/JavaScript",
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
          Built customer-facing UI in a <strong>high-churn product</strong> environment,{" "}
          <strong>shipping to shifting priorities</strong>.
        </>,
        <>
          Used <strong>TDD</strong> and <strong>pairing</strong> to <strong>catch regressions earlier</strong> and{" "}
          <strong>keep changes safe</strong>.
        </>,
        <>
          Re-prioritized constantly as the roadmap moved, <strong>protecting throughput</strong> under{" "}
          <strong>aggressive deadlines</strong>.
        </>,
        <>
          Worked tightly with product and ops so builds <strong>tracked business goals</strong> and{" "}
          <strong>real user pain</strong>.
        </>,
        <>
          Jumped on <strong>support escalations</strong> when needed, <strong>closing the loop</strong> from
          tickets to product tweaks.
        </>,
      ],
      longDescription: [],
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
      company: "Vixicom, LLC",
      link: "",
      badges: ["Full-time"],
      title: "Software Developer",
      logo: null,
      start: "Nov 2012",
      end: "Jul 2013",
      shortDescription: [
        <>
          End-to-end <strong>intranet</strong>: hiring, payroll-adjacent flows, tickets, and project ops—
          <strong>one place for internal work</strong>.
        </>,
        <>
          Scripted inbound-call handling, <strong>cutting prep time</strong> and{" "}
          <strong>standardizing how reps open conversations</strong>.
        </>,
      ],
      longDescription: [],
      technologies: ["PHP", "JavaScript", "HTML", "CSS", "Java", "MySQL"],
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
        "Help businesses in the Dominican Republic to handle payroll",
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
  ],
} as const;
