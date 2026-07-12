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
import { useT } from "@/i18n/context";

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

const highlightIcons = [Code2, Gauge, Search, Palette, ShieldCheck, Sparkles];
const industryKeys = [
  "industries.tourism","industries.hotels","industries.travel","industries.healthcare",
  "industries.realestate","industries.retail","industries.restaurants","industries.education",
  "industries.professional","industries.startups","industries.small","industries.corporate",
];

function Index() {
  const t = useT();
  const highlights = highlightIcons.map((Icon, i) => ({
    Icon,
    title: t(`home.h${i + 1}.title`),
    copy: t(`home.h${i + 1}.copy`),
  }));
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-40 md:pb-48">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>{t("home.eyebrow")}</Eyebrow>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
              {t("home.hero.p1")}{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                {t("home.hero.p2")}
              </span>{" "}
              {t("home.hero.p3")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {t("home.hero.sub")}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <GradientButton to="/contact">
                {t("home.hero.cta1")} <ArrowRight className="ml-2 h-4 w-4" />
              </GradientButton>
              <GradientButton to="/services" variant="ghost">
                {t("home.hero.cta2")}
              </GradientButton>
            </div>
            <div className="mt-16 flex flex-col items-center justify-center gap-3 text-center text-xs uppercase tracking-widest text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-10">
              <span>{t("home.hero.tag1")}</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:inline-block" />
              <span>{t("home.hero.tag2")}</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:inline-block" />
              <span>{t("home.hero.tag3")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <Section>
        <SectionHeading
          eyebrow={t("home.why.eyebrow")}
          title={t("home.why.title")}
          description={t("home.why.desc")}
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <GlassCard key={h.title}>
              <h.Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
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
            eyebrow={t("home.svc.eyebrow")}
            title={t("home.svc.title")}
            description={t("home.svc.desc")}
          />
          <div className="md:text-right">
            <GradientButton to="/services" variant="ghost">{t("home.svc.all")}</GradientButton>
          </div>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            ["home.svc.web.t", "home.svc.web.d"],
            ["home.svc.ecom.t", "home.svc.ecom.d"],
            ["home.svc.uiux.t", "home.svc.uiux.d"],
            ["home.svc.seo.t", "home.svc.seo.d"],
            ["home.svc.cloud.t", "home.svc.cloud.d"],
            ["home.svc.fame.t", "home.svc.fame.d"],
          ].map(([tk, dk]) => (
            <GlassCard key={tk}>
              <h3 className="text-base font-semibold">{t(tk)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(dk)}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Industries strip */}
      <Section className="py-20 md:py-24">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("home.ind.title")}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {industryKeys.map((k) => (
              <span
                key={k}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground"
              >
                {t(k)}
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
            {t("home.cta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {t("home.cta.desc")}
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <GradientButton to="/contact">{t("home.cta.b1")}</GradientButton>
            <GradientButton to="/process" variant="ghost">{t("home.cta.b2")}</GradientButton>
          </div>
        </div>
      </Section>
    </>
  );
}
