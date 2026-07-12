import { Link } from "@tanstack/react-router";
import logo from "@/assets/abm-logo.png.asset.json";
import { useT } from "@/i18n/context";

export function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-white/5 bg-background/40 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <img src={logo.url} alt="" className="h-8 w-auto" />
            <span className="font-display text-base font-semibold">ABM Dynamic Programs</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {t("footer.tagline")}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            {t("footer.location")}
          </p>
        </div>
        <FooterCol title={t("footer.company")} links={[
          { to: "/about", label: t("nav.about") },
          { to: "/process", label: t("nav.process") },
          { to: "/industries", label: t("nav.industries") },
          { to: "/technologies", label: t("nav.technologies") },
        ]} />
        <FooterCol title={t("footer.services")} links={[
          { to: "/services", label: t("footer.svc.web") },
          { to: "/services", label: t("footer.svc.uiux") },
          { to: "/services", label: t("footer.svc.seo") },
          { to: "/services", label: t("footer.svc.fame") },
        ]} />
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t("footer.contact")}</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="mailto:info@abm-programs.com" className="text-muted-foreground hover:text-foreground">info@abm-programs.com</a></li>
            <li><a href="tel:+201099735066" className="text-muted-foreground hover:text-foreground">+20 109 973 5066</a></li>
            <li><a href="https://abm-programs.com" className="text-muted-foreground hover:text-foreground">abm-programs.com</a></li>
          </ul>
          <Link to="/contact" className="mt-4 inline-flex text-sm text-foreground underline underline-offset-4 decoration-primary/60 hover:decoration-primary">
            {t("footer.cta")}
          </Link>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ABM Dynamic Programs. {t("footer.rights")}
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-muted-foreground transition-colors hover:text-foreground">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}