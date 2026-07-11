import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  SectionHeading,
  GlassCard,
  GradientButton,
} from "@/components/site/primitives";
import {
  Code2, LayoutTemplate, ShoppingBag, Palette, Search,
  Gauge, Wrench, Cloud, Megaphone, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ABM Dynamic Programs" },
      { name: "description", content: "Custom websites, e-commerce, UI/UX, SEO, cloud hosting, maintenance, and digital marketing through Fame Makers." },
      { property: "og:title", content: "Services — ABM Dynamic Programs" },
      { property: "og:description", content: "Every layer of your digital presence — design, engineering, growth." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Code2, title: "Custom Business Websites", copy: "Bespoke marketing sites and business platforms engineered for scale, accessibility, and long-term maintainability." },
  { icon: LayoutTemplate, title: "Landing Page Design", copy: "High-converting landing pages built around a single, measurable goal — from first click to signed contract." },
  { icon: ShoppingBag, title: "E-commerce Development", copy: "Modern storefronts with clean checkout, fast product pages, and back-office tools your team will actually use." },
  { icon: Palette, title: "UI / UX Design", copy: "Design systems and product interfaces that feel effortless — grounded in research, refined through iteration." },
  { icon: Search, title: "Search Engine Optimization", copy: "Technical SEO, on-page structure, and content strategy that earns durable, compounding organic traffic." },
  { icon: Gauge, title: "Speed & Performance", copy: "Core Web Vitals engineering — image pipelines, code splitting, edge caching, and sub-second first paint." },
  { icon: Wrench, title: "Maintenance & Support", copy: "Proactive monitoring, security patches, and rapid response — so your site stays fast, safe, and current." },
  { icon: Cloud, title: "Cloud Hosting & Deployment", copy: "Global edge deployment on Vercel and Cloudflare, with zero-downtime releases and observability built in." },
  { icon: Sparkles, title: "Branding & Visual Identity", copy: "Logos, type systems, and brand guidelines that translate cleanly from print to product." },
  { icon: Megaphone, title: "Digital Marketing — Fame Makers", copy: "Paid media, SEO, social, and lead generation delivered by our in-house marketing division." },
];

function ServicesPage() {
  return (
    <>
      <Section className="pt-20 pb-8 md:pt-28 md:pb-12">
        <SectionHeading
          eyebrow="Services"
          title="Design, engineering, and growth — under one roof."
          description="A single accountable team covering every layer of your digital presence, from first sketch to ongoing optimization."
        />
      </Section>
      <Section className="pt-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <GlassCard key={s.title}>
              <s.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:p-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
                Marketing Division
              </div>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Fame Makers
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our dedicated growth studio. We plan, run, and optimize acquisition across search, social, and content — so the traffic your new site earns actually turns into revenue.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {["SEO", "Google Ads", "Meta Advertising", "Social Media", "Content Marketing", "Branding", "Marketing Strategy", "Lead Generation"].map((f) => (
                <li key={f} className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-muted-foreground">{f}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <GradientButton to="/contact">Discuss your project →</GradientButton>
        </div>
      </Section>
    </>
  );
}