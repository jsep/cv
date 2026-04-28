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
  about: "Senior Full Stack Engineer | Mobile, Web & Backend",
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
        url: "https://x.com/jsep_do",
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
          Owned the <strong>React Native</strong> (<strong>Expo</strong>) app and worked across our{" "}
          <strong>NestJS</strong> backend. Shipped <strong>Credit Builder</strong>; it reached{" "}
          <strong>$45K+ MRR</strong> in about two months.
        </>,
        <>
          Migrated <strong>Apollo</strong>/<strong>GraphQL</strong> to <strong>REST</strong> with{" "}
          <strong>TanStack Query</strong> and <strong>Zustand</strong>, and moved business logic
          into services and view models, which gave us{" "}
          <strong>improved code maintainability and reduced frontend complexity</strong>.
        </>,
        <>
          Built a <strong>backend-driven UI system</strong> enabling dynamic control of features,
          components, and copy without app redeploys,{" "}
          <strong>accelerating iteration speed and reducing reliance on OTA releases</strong>.
        </>,
        <>
          Designed and implemented an <strong>event-driven backend architecture</strong> that{" "}
          <strong>decoupled modules</strong> and allowed scalable reactions to payments and
          onboarding events.
        </>,
        <>
          Established testing practices from scratch, adding unit and end-to-end coverage (including
          web onboarding) to <strong>increase reliability and reduce production risk</strong>.
        </>,
        <>
          Automated <strong>mobile release pipelines</strong> (OTA updates and App Store
          deployments), enabling{" "}
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
          Shipped bespoke enterprise apps on <strong>Airtable</strong> and{" "}
          <strong>monday.com</strong>, giving teams clearer workflows and less manual overhead.
        </>,
        <>
          Set shared engineering conventions and ran weekly mentoring,{" "}
          <strong>raising bar for reviews</strong> and{" "}
          <strong>speeding up ramp for newer devs</strong>.
        </>,
        <>
          Owned delivery of a marketing resource-planning tool for <strong>Riot Games</strong>,
          tightening staffing and vendor use to <strong>cut annual spend by six figures</strong>.
        </>,
        <>
          Built ETL-style flows from <strong>Airtable</strong> into <strong>Tableau</strong> and{" "}
          <strong>Databricks</strong>, unlocking <strong>ROI at the campaign level</strong> and
          sharper exec reporting.
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
          Drove architecture for web and mobile, <strong>keeping systems evolvable</strong> as scope
          grew.
        </>,
        <>
          Defined test strategy and wired <strong>CI/CD</strong>, <strong>fewer bad deploys</strong>{" "}
          and <strong>shorter time to prod</strong>.
        </>,
        <>
          Delivered <strong>GraphQL</strong> backends so clients could{" "}
          <strong>fetch only what they need</strong> with <strong>clear contracts</strong>.
        </>,
        <>
          Built a marketplace with <strong>Stripe</strong> for money movement and payouts,{" "}
          <strong>supporting trust and monetization</strong>.
        </>,
        <>
          Shipped a <strong>configurable RBAC</strong> layer, <strong>granular permissions</strong>{" "}
          without one-off hacks.
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
          Used <strong>TDD</strong> and <strong>pairing</strong> to{" "}
          <strong>catch regressions earlier</strong> and <strong>keep changes safe</strong>.
        </>,
        <>
          Re-prioritized constantly as the roadmap moved, <strong>protecting throughput</strong>{" "}
          under <strong>aggressive deadlines</strong>.
        </>,
        <>
          Worked tightly with product and ops so builds <strong>tracked business goals</strong> and{" "}
          <strong>real user pain</strong>.
        </>,
        <>
          Jumped on <strong>support escalations</strong> when needed,{" "}
          <strong>closing the loop</strong> from tickets to product tweaks.
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
          End-to-end <strong>intranet</strong>: hiring, payroll-adjacent flows, tickets, and project
          ops—
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
      description: "Help businesses in the Dominican Republic to handle payroll",
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
  ],
} as const;
