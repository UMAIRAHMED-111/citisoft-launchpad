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
import gcpLogo from "@/assets/logos/googlecloud.svg";
import snowflakeLogo from "@/assets/logos/snowflake.svg";
import databricksLogo from "@/assets/logos/databricks.svg";
import tailwindLogo from "@/assets/logos/tailwindcss.svg";
import hubspotLogo from "@/assets/logos/hubspot.svg";
import metaLogo from "@/assets/logos/meta.svg";
import gaLogo from "@/assets/logos/googleanalytics.svg";
import notionLogo from "@/assets/logos/notion.svg";
import figmaLogo from "@/assets/logos/figma.svg";
import zapierLogo from "@/assets/logos/zapier.svg";
import mixpanelLogo from "@/assets/logos/mixpanel.svg";
import n8nLogo from "@/assets/logos/n8n.svg";
import makeLogo from "@/assets/logos/make.svg";
import airtableLogo from "@/assets/logos/airtable.svg";
import retoolLogo from "@/assets/logos/retool.svg";
import sheetsLogo from "@/assets/logos/googlesheets.svg";
import supabaseLogo from "@/assets/logos/supabase.svg";
import vercelLogo from "@/assets/logos/vercel.svg";
import gitLogo from "@/assets/logos/git.svg";
import redisLogo from "@/assets/logos/redis.svg";
import mongodbLogo from "@/assets/logos/mongodb.svg";
import stripeLogo from "@/assets/logos/stripe.svg";
import linearLogo from "@/assets/logos/linear.svg";
import jiraLogo from "@/assets/logos/jira.svg";
import asanaLogo from "@/assets/logos/asana.svg";
import viteLogo from "@/assets/logos/vite.svg";

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
  /** Extra classes for photo framing so headshots match */
  imageClassName?: string;
  initials: string;
  skills: Skill[];
};

/** Cloud stack shared across the whole team */
const cloudSkills: Skill[] = [
  { name: "AWS", logo: awsLogo },
  { name: "Azure", logo: azureLogo },
  { name: "GCP", logo: gcpLogo },
];

export const team: TeamMember[] = [
  {
    name: "Umair Ahmed",
    role: "Co-founder",
    initials: "UA",
    image: umairPhoto,
    imageClassName: "object-[center_15%]",
    linkedin: "https://www.linkedin.com/in/umair-ahmed-3675261b0/",
    bio: "Umair is an AI-native product engineer with skills across product development, data engineering, applied AI engineering, and cloud. He connects what should be built with how it runs in production — from pipelines and agents through to the interfaces operators use every day.",
    skills: [
      { name: "React", logo: reactLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Python", logo: pythonLogo },
      { name: "FastAPI", logo: fastapiLogo },
      { name: "PostgreSQL", logo: postgresLogo },
      { name: "Snowflake", logo: snowflakeLogo },
      { name: "Supabase", logo: supabaseLogo },
      { name: "Claude", logo: claudeLogo },
      { name: "n8n", logo: n8nLogo },
      { name: "Zapier", logo: zapierLogo },
      { name: "Make", logo: makeLogo },
      { name: "Retool", logo: retoolLogo },
      { name: "Airtable", logo: airtableLogo },
      { name: "Notion", logo: notionLogo },
      { name: "Sheets", logo: sheetsLogo },
      ...cloudSkills,
    ],
  },
  {
    name: "Hatif Mujahid",
    role: "Co-founder",
    initials: "HM",
    image: hatifPhoto,
    imageClassName: "object-[center_20%]",
    linkedin: "https://www.linkedin.com/in/muhammad-hatif/",
    bio: "Hatif is the technical specialist behind Citisoft's cloud and AI/ML stack — agentic systems, model pipelines, and infrastructure that stays reliable under load. He owns the hard architecture calls so delivery stays fast without trading away uptime.",
    skills: [
      { name: "Python", logo: pythonLogo },
      { name: "PyTorch", logo: pytorchLogo },
      { name: "TensorFlow", logo: tensorflowLogo },
      { name: "Docker", logo: dockerLogo },
      { name: "Kubernetes", logo: k8sLogo },
      { name: "PostgreSQL", logo: postgresLogo },
      { name: "Redis", logo: redisLogo },
      { name: "Databricks", logo: databricksLogo },
      { name: "Snowflake", logo: snowflakeLogo },
      { name: "Claude", logo: claudeLogo },
      { name: "n8n", logo: n8nLogo },
      ...cloudSkills,
    ],
  },
  {
    name: "Abdullah Maqsood",
    role: "Co-founder",
    initials: "AM",
    image: abdullahPhoto,
    imageClassName: "object-[center_20%]",
    linkedin: "https://www.linkedin.com/in/abdullamaqsood/",
    bio: "Abdullah is the full-stack product engineer with deep core development fundamentals — clean APIs, solid frontend craft, and systems that stay maintainable as they grow. He turns product requirements into production software teams can actually ship and iterate on.",
    skills: [
      { name: "React", logo: reactLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Node.js", logo: nodeLogo },
      { name: "Next.js", logo: nextLogo },
      { name: "Vite", logo: viteLogo },
      { name: "Python", logo: pythonLogo },
      { name: "PostgreSQL", logo: postgresLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Tailwind", logo: tailwindLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Git", logo: gitLogo },
      { name: "Stripe", logo: stripeLogo },
      ...cloudSkills,
    ],
  },
  {
    name: "Vania",
    role: "Growth & Marketing Lead",
    initials: "V",
    image: vaniaPhoto,
    imageClassName: "object-[center_18%]",
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
      { name: "Make", logo: makeLogo },
      { name: "Airtable", logo: airtableLogo },
      { name: "Sheets", logo: sheetsLogo },
      { name: "Linear", logo: linearLogo },
      { name: "Jira", logo: jiraLogo },
      { name: "Asana", logo: asanaLogo },
      ...cloudSkills,
    ],
  },
];
