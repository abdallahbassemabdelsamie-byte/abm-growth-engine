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
import { useT } from "@/i18n/context";

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

const serviceIcons = [Code2, LayoutTemplate, ShoppingBag, Palette, Search, Gauge, Wrench, Cloud, Sparkles, Megaphone];
const fameFeatures = ["SEO", "Google Ads", "Meta Advertising", "Social Media", "Content Marketing", "Branding", "Marketing Strategy", "Lead Generation"];

function ServicesPage() {
  const t = useT();
  return (
    <>
      <Section className="pt-20 pb-8 md:pt-28 md:pb-12">
        <SectionHeading
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          description={t("services.desc")}
        />
      </Section>
      <Section className="pt-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceIcons.map((Icon, i) => {
            const n = i + 1;
            return (
              <GlassCard key={n}>
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 text-lg font-semibold">{t(`services.s${n}.t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`services.s${n}.d`)}</p>
              </GlassCard>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:p-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
                {t("services.fame.eyebrow")}
              </div>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Fame Makers
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {t("services.fame.desc")}
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {fameFeatures.map((f) => (
                <li key={f} className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-muted-foreground">{f}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <GradientButton to="/contact">{t("services.fame.cta")}</GradientButton>
        </div>
      </Section>
    </>
  );
}