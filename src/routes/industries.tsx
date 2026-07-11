import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, GlassCard } from "@/components/site/primitives";
import {
  Plane, Hotel, Compass, HeartPulse, Building2, ShoppingBag,
  Coffee, GraduationCap, Briefcase, Store, Rocket, Building,
} from "lucide-react";
import { useT } from "@/i18n/context";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — ABM Dynamic Programs" },
      { name: "description", content: "We build for tourism, hospitality, healthcare, real estate, retail, education, professional services, startups, and corporate clients." },
      { property: "og:title", content: "Industries — ABM Dynamic Programs" },
      { property: "og:description", content: "Industries we serve — from tourism and hospitality to healthcare, real estate, and corporate." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const items: [React.ComponentType<{ className?: string; strokeWidth?: number }>, string][] = [
  [Plane, "industries.tourism"],
  [Hotel, "industries.hotels"],
  [Compass, "industries.travel"],
  [HeartPulse, "industries.healthcare"],
  [Building2, "industries.realestate"],
  [ShoppingBag, "industries.retail"],
  [Coffee, "industries.restaurants"],
  [GraduationCap, "industries.education"],
  [Briefcase, "industries.professional"],
  [Store, "industries.small"],
  [Rocket, "industries.startups"],
  [Building, "industries.corporate"],
];

function IndustriesPage() {
  const t = useT();
  return (
    <>
      <Section className="pt-20 pb-8 md:pt-28 md:pb-12">
        <SectionHeading
          eyebrow={t("industries.eyebrow")}
          title={t("industries.title")}
          description={t("industries.desc")}
        />
      </Section>
      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([Icon, key]) => (
            <GlassCard key={key}>
              <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 text-lg font-semibold">{t(key)}</h3>
            </GlassCard>
          ))}
        </div>
      </Section>
    </>
  );
}