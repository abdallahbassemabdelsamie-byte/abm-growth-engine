import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — ABM Dynamic Programs" },
      { name: "description", content: "Our eight-step development process — from discovery and strategy to launch and long-term support." },
      { property: "og:title", content: "Process — ABM Dynamic Programs" },
      { property: "og:description", content: "How we take digital products from idea to enduring platform." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

const steps = [
  ["Discovery & Consultation", "We start with your business, your customers, and the outcomes that matter. No jargon, no guesswork."],
  ["Planning & Strategy", "Scope, sitemap, technical approach, and success metrics — agreed in writing before a single pixel moves."],
  ["UI / UX Design", "Interfaces designed around real user tasks, with a design system that scales beyond the launch."],
  ["Website Development", "Modern engineering on Next.js, React, and TypeScript — clean, typed, testable, and built to last."],
  ["SEO & Performance Optimization", "Technical SEO, structured data, image pipelines, and Core Web Vitals tuning baked in from day one."],
  ["Testing & Quality Assurance", "Cross-device, cross-browser, accessibility, and performance audits before anything ships."],
  ["Launch & Deployment", "Zero-downtime release to global edge infrastructure with monitoring and rollbacks configured."],
  ["Ongoing Maintenance & Support", "Proactive updates, security patches, and iterative improvements — your site keeps getting better."],
];

function ProcessPage() {
  return (
    <>
      <Section className="pt-20 pb-8 md:pt-28 md:pb-12">
        <SectionHeading
          eyebrow="Process"
          title="A predictable path from idea to production."
          description="We've refined this over 20+ years of shipping software. Every step exists because skipping it costs more later."
        />
      </Section>
      <Section className="pt-0">
        <ol className="relative border-l border-white/10 pl-8 md:pl-12">
          {steps.map(([title, copy], i) => (
            <li key={title} className="relative pb-14 last:pb-0">
              <span className="absolute -left-[41px] md:-left-[49px] top-0 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-background text-xs font-semibold text-primary shadow-[var(--shadow-glow)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h3>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">{copy}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}