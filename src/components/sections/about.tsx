import { Reveal, SectionHeading } from "../reveal";
import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-28">
      <SectionHeading
        eyebrow="01 — The Observer"
        title="A bit about me"
      />

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm <span className="text-foreground">{profile.name}</span>, a{" "}
              {profile.role}{profile.company ? ` at ${profile.company}` : ""}. I care about systems that are
              simple on the outside and rigorous underneath.
            </p>
            <p>
              Most of my time goes to backend engineering, sharpening algorithms,
              and folding AI into products in ways that actually help people. When
              I'm not shipping, I'm writing on Medium or grinding LeetCode.
            </p>
            <p className="text-foreground">
              The fastest way to know me? Talk to my AI twin — bottom-right, or
              hit <span className="font-mono text-teal">⌘K</span>.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glow-teal relative overflow-hidden rounded-2xl border border-border bg-card p-7">
            <div className="aurora pointer-events-none absolute -right-10 -top-10 h-40 w-40 opacity-60" />
            <dl className="relative space-y-5">
              {[
                ["Role", profile.role],
                ...(profile.company ? [["Company", profile.company]] : []),
                ["Based in", profile.location],
                ["Focus", "Backend · Algorithms · AI"],
                ["Status", "Open to opportunities"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4">
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {k}
                  </dt>
                  <dd className="text-right text-sm text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
