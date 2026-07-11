import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/primitives";
import { useT } from "@/i18n/context";

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

function ProcessPage() {
  const t = useT();
  const steps = Array.from({ length: 8 }, (_, i) => i + 1);
  return (
    <>
      <Section className="pt-20 pb-8 md:pt-28 md:pb-12">
        <SectionHeading
          eyebrow={t("process.eyebrow")}
          title={t("process.title")}
          description={t("process.desc")}
        />
      </Section>
      <Section className="pt-0">
        <ol className="relative border-l border-white/10 pl-8 md:pl-12">
          {steps.map((n, i) => (
            <li key={n} className="relative pb-14 last:pb-0">
              <span className="absolute -left-[41px] md:-left-[49px] top-0 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-background text-xs font-semibold text-primary shadow-[var(--shadow-glow)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{t(`process.s${n}.t`)}</h3>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">{t(`process.s${n}.d`)}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}