import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading, GlassCard } from "@/components/site/primitives";
import { useT } from "@/i18n/context";

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

function AboutPage() {
  const t = useT();
  const values = Array.from({ length: 9 }, (_, i) => i + 1);
  return (
    <>
      <Section className="pt-20 pb-8 md:pt-28 md:pb-12">
        <SectionHeading
          eyebrow={t("about.eyebrow")}
          title={t("about.title")}
          description={t("about.desc")}
        />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {t("about.long")}
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <GlassCard>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t("about.mission.t")}</div>
            <p className="mt-4 text-lg leading-relaxed">
              {t("about.mission.d")}
            </p>
          </GlassCard>
          <GlassCard>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t("about.vision.t")}</div>
            <p className="mt-4 text-lg leading-relaxed">
              {t("about.vision.d")}
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow={t("about.values.eyebrow")} title={t("about.values.title")} />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map((n) => (
            <GlassCard key={n}>
              <h3 className="text-base font-semibold">{t(`about.v${n}.t`)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(`about.v${n}.d`)}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </>
  );
}