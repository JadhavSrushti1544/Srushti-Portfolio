# ✦ AETHER — Srushti Jadhav's Portfolio

A cosmic-observatory portfolio with a **chat-with-my-AI-twin** dock, a living
constellation hero, and a **sun/moon** day/night theme toggle.

**Stack:** React 18 · Vite · TypeScript · Tailwind CSS · shadcn-style UI ·
Framer Motion · lucide-react.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the build
npm run typecheck  # TS check (no emit)
```

## What's here

| Feature | Where |
|---|---|
| Sun/Moon theme toggle | `src/components/theme-toggle.tsx` |
| Living constellation canvas | `src/components/constellation.tsx` |
| AI twin "Ask Aether" (`⌘K`) | `src/components/ai-twin.tsx` |
| AI brain / knowledge base | `src/lib/ai-brain.ts` |
| All your content & links | `src/lib/data.ts` |
| Sections | `src/components/sections/*` |
| Theme colors & fonts | `src/index.css`, `tailwind.config.js` |

## Next steps (we'll do these together)

1. **Add your real GitHub projects** — edit the `projects` array in
   `src/lib/data.ts` (name, blurb, tags, repo/live link, status). Optionally
   auto-fetch from the GitHub API.
2. **Sync Medium posts** — replace the `writing` array, or pull live from your
   Medium RSS feed.
3. **Make the AI twin a real LLM** — see the commented `askAetherViaAPI` block
   at the bottom of `src/lib/ai-brain.ts`. Add a serverless route that calls an
   LLM provider's API with a system prompt built from `data.ts`; the streaming
   UI stays identical.
4. **Deploy** — `npm run build` then drop `dist/` on Vercel / Netlify / GitHub
   Pages.

## Notes
- Theme preference is saved to `localStorage` and respects `prefers-color-scheme`.
- Honors `prefers-reduced-motion` (constellation renders a static frame).
- Fonts: Fraunces (display), Satoshi (body), JetBrains Mono — loaded via CDN.
