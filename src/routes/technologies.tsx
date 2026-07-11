import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, GlassCard } from "@/components/site/primitives";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — ABM Dynamic Programs" },
      { name: "description", content: "The modern stack we build on — Next.js, React, TypeScript, Tailwind CSS, Node.js, Vercel, Cloudflare, and Git." },
      { property: "og:title", content: "Technologies — ABM Dynamic Programs" },
      { property: "og:description", content: "Modern, proven technologies chosen for performance, longevity, and developer velocity." },
      { property: "og:url", content: "/technologies" },
    ],
    links: [{ rel: "canonical", href: "/technologies" }],
  }),
  component: TechPage,
});

const stack = [
  ["Next.js", "React framework for production-grade SSR and static sites."],
  ["React", "Component model for interactive, maintainable interfaces."],
  ["TypeScript", "Type-safe code that catches bugs before your users do."],
  ["Tailwind CSS", "Design system in code — consistent, scalable styling."],
  ["Node.js", "Server-side runtime for APIs and integrations."],
  ["Vercel", "Zero-config global edge deployments and previews."],
  ["Cloudflare", "Edge compute, CDN, and DNS with built-in security."],
  ["Git", "Version control with reviewable, auditable change history."],
  ["HTML5 / CSS3", "Semantic, accessible, standards-based foundation."],
  ["JavaScript", "The language of the web — used with discipline."],
];

function TechPage() {
  return (
    <>
      <Section className="pt-20 pb-8 md:pt-28 md:pb-12">
        <SectionHeading
          eyebrow="Technologies"
          title="A modern stack, chosen for the long run."
          description="We pick technologies for what they'll deliver over five years — performance, hiring pool, ecosystem, and stability — not for what's trending this quarter."
        />
      </Section>
      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stack.map(([name, desc]) => (
            <GlassCard key={name}>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">{name}</div>
              <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </>
  );
}