import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Code2,
  Sparkles,
  Gauge,
  Search,
  Palette,
  ShieldCheck,
} from "lucide-react";
import {
  Section,
  SectionHeading,
  Eyebrow,
  GlassCard,
  GradientButton,
} from "@/components/site/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABM Dynamic Programs — Engineering Digital Solutions" },
      { name: "description", content: "A premium web development and digital marketing studio building fast, modern, SEO-ready websites for businesses worldwide." },
      { property: "og:title", content: "ABM Dynamic Programs" },
      { property: "og:description", content: "Engineering digital solutions that drive business growth." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const highlights = [
  { icon: Code2, title: "Custom engineering", copy: "Bespoke websites built on modern stacks — no templates, no compromises." },
  { icon: Gauge, title: "Performance-first", copy: "Sub-second loads, perfect Core Web Vitals, engineered for scale." },
  { icon: Search, title: "SEO by default", copy: "Semantic structure, technical SEO, and content that ranks." },
  { icon: Palette, title: "Premium UI/UX", copy: "Design systems and interfaces that feel effortless to use." },
  { icon: ShieldCheck, title: "Reliable delivery", copy: "Transparent process, honest timelines, long-term partnerships." },
  { icon: Sparkles, title: "20+ years of craft", copy: "Two decades of shipping software for demanding clients." },
];

const industries = [
  "Tourism", "Hotels & Hospitality", "Travel Agencies", "Healthcare",
  "Real Estate", "Retail", "Restaurants & Cafés", "Education",
  "Professional Services", "Startups", "Small Businesses", "Corporate",
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-40 md:pb-48">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>Based in Hurghada · Serving worldwide</Eyebrow>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
              Engineering digital{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                solutions
              </span>{" "}
              that drive growth.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              We design and build modern, high-performance websites and digital products for businesses that measure success in outcomes — not pageviews.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <GradientButton to="/contact">
                Start a project <ArrowRight className="ml-2 h-4 w-4" />
              </GradientButton>
              <GradientButton to="/services" variant="ghost">
                Explore services
              </GradientButton>
            </div>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
              <span>20+ years experience</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Next.js · React · TypeScript</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Fame Makers · Marketing division</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <Section>
        <SectionHeading
          eyebrow="Why ABM"
          title="A studio built for outcomes."
          description="We combine engineering discipline with design taste to ship digital products that perform in the real world."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <GlassCard key={h.title}>
              <h.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 text-lg font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Services teaser */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Every layer of your digital presence."
            description="From strategy and interface design to engineering, launch, and long-term maintenance — one accountable team, end to end."
          />
          <div className="md:text-right">
            <GradientButton to="/services" variant="ghost">See all services →</GradientButton>
          </div>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            ["Custom Websites", "Marketing sites and business platforms engineered for scale."],
            ["E-commerce", "Storefronts that convert — fast, accessible, and easy to manage."],
            ["UI / UX Design", "Design systems and interfaces that respect your users' time."],
            ["SEO & Performance", "Technical SEO, Core Web Vitals, and content that ranks."],
            ["Cloud Hosting", "Global edge deployment with zero-downtime releases."],
            ["Fame Makers", "Our marketing division for Google Ads, Meta, and growth."],
          ].map(([t, d]) => (
            <GlassCard key={t}>
              <h3 className="text-base font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Industries strip */}
      <Section className="py-20 md:py-24">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted across industries
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {industries.map((i) => (
              <span
                key={i}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-24 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-xl md:p-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-60"
            style={{ background: "radial-gradient(ellipse at center, oklch(0.62 0.22 275 / 0.3), transparent 70%)" }}
          />
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Let's build something enduring.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell us about your product, your customers, and where you want to be a year from now.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <GradientButton to="/contact">Start a project</GradientButton>
            <GradientButton to="/process" variant="ghost">See our process</GradientButton>
          </div>
        </div>
      </Section>
    </>
  );
}
