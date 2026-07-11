import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, GlassCard } from "@/components/site/primitives";
import {
  Plane, Hotel, Compass, HeartPulse, Building2, ShoppingBag,
  Coffee, GraduationCap, Briefcase, Store, Rocket, Building,
} from "lucide-react";

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

const items = [
  [Plane, "Tourism"],
  [Hotel, "Hotels & Hospitality"],
  [Compass, "Travel Agencies"],
  [HeartPulse, "Healthcare"],
  [Building2, "Real Estate"],
  [ShoppingBag, "Retail"],
  [Coffee, "Restaurants & Cafés"],
  [GraduationCap, "Education"],
  [Briefcase, "Professional Services"],
  [Store, "Small Businesses"],
  [Rocket, "Startups"],
  [Building, "Corporate Companies"],
] as const;

function IndustriesPage() {
  return (
    <>
      <Section className="pt-20 pb-8 md:pt-28 md:pb-12">
        <SectionHeading
          eyebrow="Industries"
          title="Deep experience across sectors."
          description="From boutique tourism operators to multi-brand corporates, we adapt our approach to the realities of your industry — regulation, seasonality, audience, and everything in between."
        />
      </Section>
      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([Icon, name]) => (
            <GlassCard key={name}>
              <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 text-lg font-semibold">{name}</h3>
            </GlassCard>
          ))}
        </div>
      </Section>
    </>
  );
}