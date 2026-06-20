import { profile, skillGroups, projects } from "./data";

/**
 * AETHER — Srushti's AI twin (local brain).
 *
 * Right now this answers from a hand-written knowledge base so the site works
 * with zero backend. To make it a *real* LLM, replace `askAether` with a call
 * to your API route (see `askAetherViaAPI` below) — the UI already streams
 * token-by-token, so nothing else needs to change.
 */

const knowledge: { match: RegExp; answer: string }[] = [
  {
    match: /\b(hi|hello|hey|yo|sup|greetings)\b/i,
    answer:
      "Hey! I'm Aether — Srushti's AI twin. Ask me about his skills, projects, experience, or how to get in touch.",
  },
  {
    match: /(who are you|what are you|aether)/i,
    answer:
      "I'm Aether, an AI version of Srushti Jadhav. Think of me as his portfolio you can actually talk to. Ask away.",
  },
  {
    match: /(who is|about|tell me about|bio|background|yourself)/i,
    answer: `${profile.name} is a ${profile.role}${
      profile.company ? ` at ${profile.company}` : ""
    }. ${profile.blurb}`,
  },
  {
    match: /(skill|stack|tech|language|tools|know|good at|expertise)/i,
    answer:
      "His toolkit spans the stack:\n" +
      skillGroups
        .map((g) => `• ${g.title}: ${g.items.join(", ")}`)
        .join("\n") +
      "\nStrongest areas: backend systems, data structures/algorithms, and applied AI.",
  },
  {
    match: /(strong|best|strength|specialty|specialise|specialize)/i,
    answer:
      "His strongest areas are backend architecture, problem-solving (200+ LeetCode solved), and applied AI/ML. He's the kind of engineer who enjoys the hard, systemy problems.",
  },
  {
    match: /(project|work|built|build|portfolio|repo|github)/i,
    answer:
      "A few things he's worked on:\n" +
      projects.map((p) => `• ${p.name} — ${p.blurb}`).join("\n") +
      `\nMore on GitHub: github.com/247software-Srushti-Jadhav`,
  },
  {
    match: /(leetcode|dsa|algorithm|competitive|problem)/i,
    answer:
      "Srushti has solved 200+ problems on LeetCode and treats DSA as a craft. Profile: leetcode.com/u/Srushtijadhav8999",
  },
  {
    match: /(blog|medium|write|article|writing)/i,
    answer:
      "He writes on Medium about engineering and problem-solving: medium.com/@Srushtijadhav8999",
  },
  {
    match: /(contact|reach|email|hire|available|opportunit|job|connect|touch)/i,
    answer: `Easiest ways to reach him:\n• Email: ${profile.email}\n• Phone: ${profile.phone}\n• LinkedIn: linkedin.com/in/Srushti-jadhav-137b2a215\nHe's open to interesting opportunities.`,
  },
  {
    match: /(experience|company|247|job|role|work at)/i,
    answer: profile.company
      ? `He currently works as a ${profile.role} at ${profile.company}, building and scaling software in production.`
      : `He currently works as a ${profile.role}, building and scaling software in production.`,
  },
  {
    match: /(ai|ml|machine learning|llm|model)/i,
    answer:
      "Srushti works with applied ML and is genuinely into AI — this very portfolio ships an AI twin (me!). He's comfortable wiring LLMs into real products.",
  },
  {
    match: /(thank|thanks|cool|nice|awesome|great)/i,
    answer:
      "Anytime! If you're a recruiter or collaborator, the fastest path is his email: " +
      profile.email,
  },
];

const fallbacks = [
  `I don't have a canned answer for that yet — but here's the gist: ${profile.name} is a ${profile.role} into backend, algorithms, and AI. Try asking about his skills, projects, or how to reach him.`,
  `Good question — I'd point you to his work directly. Reach Srushti at ${profile.email}, or ask me about his stack or projects.`,
];

export const suggestedQuestions = [
  "What is Srushti's strongest skill?",
  "Show me his projects",
  "What's his tech stack?",
  "How do I get in touch?",
];

/** Local, offline brain. Returns the full answer text. */
export function askAether(question: string): string {
  const q = question.trim();
  if (!q) return "Ask me anything about Srushti — skills, projects, or contact.";
  for (const entry of knowledge) {
    if (entry.match.test(q)) return entry.answer;
  }
  // deterministic-ish fallback so SSR/tests stay stable
  return fallbacks[q.length % fallbacks.length];
}

/**
 * ⬇️  REAL LLM UPGRADE (optional, later)
 * Create an API route (e.g. /api/aether) that calls your LLM provider's API
 * with a system prompt built from `profile`, `skillGroups`, and `projects`, then:
 *
 *   export async function askAetherViaAPI(question: string) {
 *     const res = await fetch("/api/aether", {
 *       method: "POST",
 *       headers: { "Content-Type": "application/json" },
 *       body: JSON.stringify({ question }),
 *     });
 *     const { answer } = await res.json();
 *     return answer as string;
 *   }
 *
 * Then swap `askAether` for `askAetherViaAPI` in ai-twin.tsx. The typewriter
 * streaming UI stays exactly the same.
 */
