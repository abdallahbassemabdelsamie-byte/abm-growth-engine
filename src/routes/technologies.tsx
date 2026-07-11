import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, GlassCard } from "@/components/site/primitives";
import { useT } from "@/i18n/context";

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

const stack: [string, string][] = [
  ["Next.js", "tech.nextjs"],
  ["React", "tech.react"],
  ["TypeScript", "tech.ts"],
  ["Tailwind CSS", "tech.tailwind"],
  ["Node.js", "tech.node"],
  ["Vercel", "tech.vercel"],
  ["Cloudflare", "tech.cloudflare"],
  ["Git", "tech.git"],
  ["HTML5 / CSS3", "tech.html"],
  ["JavaScript", "tech.js"],
];

function TechPage() {
  const t = useT();
  return (
    <>
      <Section className="pt-20 pb-8 md:pt-28 md:pb-12">
        <SectionHeading
          eyebrow={t("tech.eyebrow")}
          title={t("tech.title")}
          description={t("tech.desc")}
        />
      </Section>
      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stack.map(([name, descKey]) => (
            <GlassCard key={name}>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">{name}</div>
              <p className="mt-3 text-sm text-muted-foreground">{t(descKey)}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </>
  );
}