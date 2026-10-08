import hatifPhoto from "@/assets/team/hatif.jpg";
import abdullahPhoto from "@/assets/team/abdullah.jpg";
import umairPhoto from "@/assets/team/umair.jpg";
import vaniaPhoto from "@/assets/team/vania.jpg";

import pythonLogo from "@/assets/logos/python.svg";
import reactLogo from "@/assets/logos/react.svg";
import typescriptLogo from "@/assets/logos/typescript.svg";
import javascriptLogo from "@/assets/logos/javascript.svg";
import nodeLogo from "@/assets/logos/nodedotjs.svg";
import nextLogo from "@/assets/logos/nextdotjs.svg";
import fastapiLogo from "@/assets/logos/fastapi.svg";
import postgresLogo from "@/assets/logos/postgresql.svg";
import dockerLogo from "@/assets/logos/docker.svg";
import k8sLogo from "@/assets/logos/kubernetes.svg";
import pytorchLogo from "@/assets/logos/pytorch.svg";
import tensorflowLogo from "@/assets/logos/tensorflow.svg";
import claudeLogo from "@/assets/logos/claude.svg";
import azureLogo from "@/assets/logos/azure.svg";
import awsLogo from "@/assets/logos/aws.svg";
import snowflakeLogo from "@/assets/logos/snowflake.svg";
import tailwindLogo from "@/assets/logos/tailwindcss.svg";
import hubspotLogo from "@/assets/logos/hubspot.svg";
import metaLogo from "@/assets/logos/meta.svg";
import gaLogo from "@/assets/logos/googleanalytics.svg";
import notionLogo from "@/assets/logos/notion.svg";
import figmaLogo from "@/assets/logos/figma.svg";
import zapierLogo from "@/assets/logos/zapier.svg";
import mixpanelLogo from "@/assets/logos/mixpanel.svg";

export type Skill = {
  name: string;
  logo: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  image?: string;
  initials: string;
  skills: Skill[];
};

export const team: TeamMember[] = [
  {
    name: "Umair Ahmed",
    role: "Co-founder",
    initials: "UA",
    image: umairPhoto,
    linkedin: "https://www.linkedin.com/in/umair-ahmed-3675261b0/",
    bio: "Umair is an AI-native product engineer with skills across product development, data engineering, applied AI engineering, and cloud. He connects what should be built with how it runs in production — from pipelines and agents through to the interfaces operators use every day.",
    skills: [
      { name: "React", logo: reactLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Python", logo: pythonLogo },
      { name: "FastAPI", logo: fastapiLogo },
      { name: "PostgreSQL", logo: postgresLogo },
      { name: "Snowflake", logo: snowflakeLogo },
      { name: "Azure", logo: azureLogo },
      { name: "Claude", logo: claudeLogo },
    ],
  },
  {
    name: "Hatif Mujahid",
    role: "Co-founder",
    initials: "HM",
    image: hatifPhoto,
    linkedin: "https://www.linkedin.com/in/muhammad-hatif/",
    bio: "Hatif is the technical specialist behind Citisoft's cloud and AI/ML stack — agentic systems, model pipelines, and infrastructure that stays reliable under load. He owns the hard architecture calls so delivery stays fast without trading away uptime.",
    skills: [
      { name: "Python", logo: pythonLogo },
      { name: "Azure", logo: azureLogo },
      { name: "AWS", logo: awsLogo },
      { name: "PyTorch", logo: pytorchLogo },
      { name: "TensorFlow", logo: tensorflowLogo },
      { name: "Docker", logo: dockerLogo },
      { name: "Kubernetes", logo: k8sLogo },
      { name: "Claude", logo: claudeLogo },
    ],
  },
  {
    name: "Abdullah Maqsood",
    role: "Co-founder",
    initials: "AM",
    image: abdullahPhoto,
    linkedin: "https://www.linkedin.com/in/abdullamaqsood/",
    bio: "Abdullah is the full-stack product engineer with deep core development fundamentals — clean APIs, solid frontend craft, and systems that stay maintainable as they grow. He turns product requirements into production software teams can actually ship and iterate on.",
    skills: [
      { name: "React", logo: reactLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Node.js", logo: nodeLogo },
      { name: "Next.js", logo: nextLogo },
      { name: "Python", logo: pythonLogo },
      { name: "PostgreSQL", logo: postgresLogo },
      { name: "Tailwind", logo: tailwindLogo },
    ],
  },
  {
    name: "Vania",
    role: "Growth & Marketing Lead",
    initials: "V",
    image: vaniaPhoto,
    linkedin: "#",
    bio: "Vania owns growth and marketing at Citisoft — from first touch through pipeline, close, and expansion. She's run the full sales and growth lifecycle end to end, and builds AI-native motions that turn positioning, content, and outreach into measurable demand for complex ops buyers.",
    skills: [
      { name: "HubSpot", logo: hubspotLogo },
      { name: "Meta", logo: metaLogo },
      { name: "Analytics", logo: gaLogo },
      { name: "Mixpanel", logo: mixpanelLogo },
      { name: "Notion", logo: notionLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Claude", logo: claudeLogo },
      { name: "Zapier", logo: zapierLogo },
    ],
  },
];
