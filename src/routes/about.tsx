import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, GlassCard } from "@/components/site/primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ABM Dynamic Programs" },
      { name: "description", content: "A professional software and web development studio based in Hurghada, Egypt, with over 20 years of experience serving clients worldwide." },
      { property: "og:title", content: "About — ABM Dynamic Programs" },
      { property: "og:description", content: "Two decades of engineering discipline meets modern design craft." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  ["Innovation", "New ideas are only useful when they ship."],
  ["Quality", "Craft is a decision we make at every layer."],
  ["Integrity", "Do the right thing when no one is watching."],
  ["Transparency", "Honest timelines, honest trade-offs, honest invoices."],
  ["Customer Success", "Your outcomes are the measure of our work."],
  ["Creativity", "Rigorous thinking with room for the unexpected."],
  ["Reliability", "We do what we said, when we said we would."],
  ["Continuous Improvement", "Every project raises our baseline."],
  ["Long-Term Partnerships", "Great work compounds over years, not weeks."],
];

function AboutPage() {
  return (
    <>
      <Section className="pt-20 pb-8 md:pt-28 md:pb-12">
        <SectionHeading
          eyebrow="About"
          title="Two decades of engineering, design, and disciplined delivery."
          description="ABM Dynamic Programs is a software and web development studio based in Hurghada, Egypt. For more than twenty years we've partnered with founders, marketers, and executive teams to build the digital products their businesses depend on."
        />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          We specialize in modern, high-performance websites that establish a credible online presence and generate measurable growth. Alongside development, we deliver UI/UX design, technical SEO, ongoing maintenance, cloud hosting, brand identity, and full-service digital marketing through our sister division, <span className="text-foreground">Fame Makers</span>.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <GlassCard>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Mission</div>
            <p className="mt-4 text-lg leading-relaxed">
              To help ambitious businesses succeed through innovative web solutions, modern design, and effective digital strategies that deliver measurable results.
            </p>
          </GlassCard>
          <GlassCard>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Vision</div>
            <p className="mt-4 text-lg leading-relaxed">
              To become one of the leading web development and digital marketing studios in the Middle East — while delivering world-class digital experiences for clients around the globe.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Core Values" title="What we hold ourselves to." />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map(([t, d]) => (
            <GlassCard key={t}>
              <h3 className="text-base font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </>
  );
}