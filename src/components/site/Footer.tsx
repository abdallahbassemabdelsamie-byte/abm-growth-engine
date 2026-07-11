import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/40 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display text-base font-semibold">ABM Dynamic Programs</div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Engineering digital solutions that drive measurable business growth.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Hurghada, Red Sea Governorate, Egypt
          </p>
        </div>
        <FooterCol title="Company" links={[
          { to: "/about", label: "About" },
          { to: "/process", label: "Process" },
          { to: "/industries", label: "Industries" },
          { to: "/technologies", label: "Technologies" },
        ]} />
        <FooterCol title="Services" links={[
          { to: "/services", label: "Web Development" },
          { to: "/services", label: "UI / UX Design" },
          { to: "/services", label: "SEO & Performance" },
          { to: "/services", label: "Fame Makers — Marketing" },
        ]} />
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contact</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="mailto:hello@abm-programs.com" className="text-muted-foreground hover:text-foreground">hello@abm-programs.com</a></li>
            <li><a href="https://abm-programs.com" className="text-muted-foreground hover:text-foreground">abm-programs.com</a></li>
          </ul>
          <Link to="/contact" className="mt-4 inline-flex text-sm text-foreground underline underline-offset-4 decoration-primary/60 hover:decoration-primary">
            Start a project →
          </Link>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ABM Dynamic Programs. All rights reserved.
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