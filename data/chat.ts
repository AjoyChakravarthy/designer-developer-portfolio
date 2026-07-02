// ============================================================
// ASK ALEX.AI — concierge chat content (UI shell)
//
// This is the scripted/canned layer. When you're ready to wire
// a real LLM, replace `getReply()` with a fetch to an API route
// (see the TODO at the bottom). The UI in AskAlexChat.tsx does
// not need to change — it just awaits getReply().
// ============================================================

export const chatConfig = {
  name: "Ask Ajoy.AI",
  status: "Online",
  greeting:
    "Hey 👋 I'm Ajoy's AI concierge. Ask me anything about the work, the process, or whether Ajoy is open to your project.",
};

export type Suggestion = { label: string; key: string };

export const suggestions: Suggestion[] = [
  { label: "What does Ajoy specialise in?", key: "specialise" },
  { label: "Show me Ajoy's best projects", key: "projects" },
  { label: "Is Ajoy available for hire?", key: "available" },
  { label: "What's Ajoy's design philosophy?", key: "philosophy" },
];

// Canned answers keyed to the suggestions + a few keyword matches.
const cannedByKey: Record<string, string> = {
  specialise:
    "Ajoy is a design engineer — frontend development (React / Next.js / TypeScript) plus product design, with a focus on motion, design systems, and performance.",
  projects:
    "Recent highlights: Verve Agency (editorial + GSAP), Ledger.fi (fintech dashboard & charts), and Object/03 (a WebGL / Three.js playground). Scroll up to the Work section to explore them.",
  available:
    "Yes — Ajoy is available for 2026, open to senior frontend, design-engineer roles, or selective freelance. The fastest route is the contact form below, or hello@ajoychakravarthy.design.",
  philosophy:
    "Typography-first, motion with restraint, and accessibility as a baseline rather than an afterthought. Prototype in the browser, treat the design system as a product.",
};

function keywordMatch(input: string): string | null {
  const q = input.toLowerCase();
  if (/(hire|available|freelance|work with|open)/.test(q)) return cannedByKey.available;
  if (/(project|portfolio|work|case study|build)/.test(q)) return cannedByKey.projects;
  if (/(philosoph|approach|style|principle)/.test(q)) return cannedByKey.philosophy;
  if (/(skill|specialis|specializ|do you|stack|tech)/.test(q)) return cannedByKey.specialise;
  if (/(hello|hi|hey|sup)/.test(q)) return "Hi! Ask me about Ajoy's work, skills, or availability.";
  if (/(contact|email|reach)/.test(q)) return "Easiest is the contact form just below, or email hello@ajoychakravarthy.design.";
  return null;
}

/**
 * Resolve a reply for the chat UI.
 * Currently returns scripted answers. The async signature + small
 * delay mimic a network round-trip so the typing indicator feels real.
 */
export async function getReply(input: string, suggestionKey?: string): Promise<string> {
  await new Promise((r) => setTimeout(r, 500 + Math.random() * 400));

  if (suggestionKey && cannedByKey[suggestionKey]) {
    return cannedByKey[suggestionKey];
  }
  return (
    keywordMatch(input) ??
    "Good question — I don't have a scripted answer for that yet. For anything specific, drop Ajoy a note via the contact form below."
  );

  // ----------------------------------------------------------
  // TODO (LLM hookup): replace everything above with:
  //
  // const res = await fetch("/api/chat", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ message: input }),
  // });
  // const data = await res.json();
  // return data.reply as string;
  //
  // Then add app/api/chat/route.ts that calls your model with a
  // system prompt describing Ajoy. The UI already handles loading
  // + async, so no component changes are needed.
  // ----------------------------------------------------------
}
