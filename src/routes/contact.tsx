import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section, SectionHeading, GradientButton } from "@/components/site/primitives";
import { Mail, MapPin, Phone } from "lucide-react";
import { useT } from "@/i18n/context";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ABM Dynamic Programs" },
      { name: "description", content: "Start a project with ABM Dynamic Programs. Based in Hurghada, Egypt. Serving clients worldwide." },
      { property: "og:title", content: "Contact — ABM Dynamic Programs" },
      { property: "og:description", content: "Tell us about your project — we'll get back within one business day." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const t = useT();
  return (
    <>
      <Section className="pt-20 pb-8 md:pt-28 md:pb-12">
        <SectionHeading
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          description={t("contact.desc")}
        />
      </Section>
      <Section className="pt-0">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            <InfoRow icon={Mail} title={t("contact.email")} value="info@abm-programs.com" href="mailto:info@abm-programs.com" />
            <InfoRow icon={Phone} title={t("contact.phone")} value="+20 109 973 5066" href="tel:+201099735066" />
            <InfoRow icon={MapPin} title={t("contact.studio")} value={t("contact.studio.value")} />
          </div>
          <form
            className="md:col-span-3 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            {sent ? (
              <div className="py-12 text-center">
                <h3 className="text-2xl font-semibold">{t("contact.sent.t")}</h3>
                <p className="mt-3 text-muted-foreground">{t("contact.sent.d")}</p>
              </div>
            ) : (
              <div className="space-y-5">
                <Field label={t("contact.f.name")} name="name" required />
                <Field label={t("contact.f.email")} name="email" type="email" required />
                <Field label={t("contact.f.company")} name="company" />
                <Field label={t("contact.f.msg")} name="message" textarea required />
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] px-6 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02]"
                  >
                    {t("contact.submit")}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </Section>
    </>
  );
}

function InfoRow({ icon: Icon, title, value, href }: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string; value: string; href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.05]">
      <Icon className="mt-0.5 h-5 w-5 text-primary" strokeWidth={1.5} />
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="mt-1 text-base text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Field({ label, name, type = "text", textarea, required }: {
  label: string; name: string; type?: string; textarea?: boolean; required?: boolean;
}) {
  const cls = "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30";
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}