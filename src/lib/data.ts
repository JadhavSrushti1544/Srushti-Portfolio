import {
  Github,
  Linkedin,
  Mail,
  Phone,
  PenLine,
  Code2,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Malhar Jadhav",
  initials: "MJ",
  role: "Software Engineer",
  company: "247software",
  location: "India",
  tagline: "I build intelligent systems.",
  blurb:
    "Software engineer who likes turning messy problems into clean, scalable systems — from backend services to applied AI. I write about the craft, grind algorithms for fun, and ship things that feel inevitable.",
  email: "malharjadhav8999@gmail.com",
  phone: "+91 9767446751",
};

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
};

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    handle: "247software-Malhar-Jadhav",
    href: "https://github.com/247software-Malhar-Jadhav",
    icon: Github,
  },
  {
    label: "LinkedIn",
    handle: "malhar-jadhav",
    href: "https://www.linkedin.com/in/malhar-jadhav-137b2a215",
    icon: Linkedin,
  },
  {
    label: "Medium",
    handle: "@malharjadhav8999",
    href: "https://medium.com/@malharjadhav8999",
    icon: PenLine,
  },
  {
    label: "LeetCode",
    handle: "malharjadhav8999",
    href: "https://leetcode.com/u/malharjadhav8999/",
    icon: Code2,
  },
  {
    label: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    handle: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
];

export const stats = [
  { value: "200+", label: "LeetCode solved" },
  { value: "Open", label: "to opportunities" },
  { value: "Active", label: "Medium writer" },
];

// Skill constellation — grouped, used for the orbit section
export const skillGroups: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"] },
  { title: "Frontend", items: ["React", "Tailwind CSS", "HTML / CSS"] },
  { title: "Backend", items: ["Node.js", "REST APIs", "System Design"] },
  { title: "Data & AI", items: ["Applied ML", "Data Structures", "Algorithms"] },
  { title: "Tooling", items: ["Git", "Linux", "Docker"] },
];

// Placeholder projects — swap these for your real GitHub repos next.
export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  href: string;
  status: "live" | "wip" | "repo";
};

const GH = "https://github.com/247software-Malhar-Jadhav";

export const projects: Project[] = [
  {
    name: "AI IPO Assistant",
    blurb:
      "An AI assistant that helps research and make sense of IPOs — surfacing data and answering questions in plain language.",
    tags: ["TypeScript", "AI", "LLM"],
    href: `${GH}/ai-ipo-assistant`,
    status: "wip",
  },
  {
    name: "PDF Chatbot",
    blurb:
      "Chat with any PDF — built on Next.js, LangChain and free models (Groq LLM + local embeddings).",
    tags: ["Next.js", "LangChain", "Groq"],
    href: `${GH}/pdf-chatbot`,
    status: "live",
  },
  {
    name: "Product Listing App",
    blurb:
      "A clean storefront with product listing, filtering and cart — built in TypeScript and React.",
    tags: ["TypeScript", "React"],
    href: `${GH}/product-listing-app`,
    status: "repo",
  },
  {
    name: "Netflix Clone",
    blurb:
      "A Netflix-style UI in React — hero banner, content rows and a responsive, polished layout.",
    tags: ["React", "JavaScript"],
    href: `${GH}/Netflix-React`,
    status: "repo",
  },
  {
    name: "Moonlight Parallax",
    blurb:
      "A smooth parallax-scrolling landing page crafted with vanilla JavaScript, HTML and CSS.",
    tags: ["JavaScript", "HTML / CSS"],
    href: `${GH}/Moonlight-Parallax-Scrolli-Website`,
    status: "repo",
  },
  {
    name: "Chrome Extension POC",
    blurb:
      "A Chrome extension proof-of-concept — a popup with a button that opens my LinkedIn profile.",
    tags: ["JavaScript", "Chrome API"],
    href: `${GH}/Chrome-Extentions-POC`,
    status: "repo",
  },
];

// Placeholder writing — swap for real Medium posts later.
export const writing = [
  {
    title: "Coming soon — your latest Medium post",
    excerpt:
      "We’ll wire this to your Medium RSS so new posts appear automatically.",
    href: "https://medium.com/@malharjadhav8999",
    date: "—",
  },
  {
    title: "Another piece from the archive",
    excerpt: "Notes on engineering, problem-solving, and the things you learn shipping software.",
    href: "https://medium.com/@malharjadhav8999",
    date: "—",
  },
];
