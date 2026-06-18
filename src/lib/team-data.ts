import hatifPhoto from "@/assets/team/hatif.jpg";
import abdullahPhoto from "@/assets/team/abdullah.jpg";
import umairPhoto from "@/assets/team/umair.jpg";

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  // Optional headshot. Drop files in src/assets/team/ and import, or use a URL.
  // When omitted, the card renders an initials avatar placeholder.
  image?: string;
  initials: string;
};

// NOTE: bios, LinkedIn URLs, and photos below are PLACEHOLDERS.
// Replace the bio text, set each `linkedin` URL, and add `image` paths.
export const team: TeamMember[] = [
  {
    name: "Hatif Mujahid",
    role: "Co-founder & CEO",
    initials: "HM",
    image: hatifPhoto,
    linkedin: "https://www.linkedin.com/in/muhammad-hatif/",
    bio: "Hatif sets the technical vision at Citisoft, specializing in agentic AI systems and cloud-native architecture. A FAST National University graduate, he has architected scalable backend services and ETL pipelines on Azure and AWS — repeatedly cutting infrastructure costs while pushing reliability toward four-nines uptime.",
  },
  {
    name: "Abdullah Maqsood",
    role: "Co-founder & CTO",
    initials: "AM",
    image: abdullahPhoto,
    linkedin: "https://www.linkedin.com/in/abdullamaqsood/",
    bio: "Abdullah leads engineering at Citisoft, with a craftsman's focus on building intelligent, scalable systems. An IBA computer science graduate (and AI engineer specializing in Natural Language Processing), he turns complex requirements into clean, production-ready products across the full web and cloud stack.",
  },
  {
    name: "Umair Ahmed",
    role: "Co-founder & COO",
    initials: "UA",
    image: umairPhoto,
    linkedin: "https://www.linkedin.com/in/umair-ahmed-3675261b0/",
    bio: "Umair runs operations and delivery at Citisoft, making sure ideas actually ship. A full-stack, AI-first engineer and IBA graduate, he has built enterprise surety and SaaS platforms across React, Python, and Azure/AWS — and now keeps projects moving from cloud infrastructure through to AI-powered automation.",
  },
];
