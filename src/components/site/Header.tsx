import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/abm-logo.png.asset.json";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/industries", label: "Industries" },
  { to: "/technologies", label: "Technologies" },
  { to: "/about", label: "About" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight">
          <img src={logo.url} alt="" className="h-8 w-auto md:h-9" />
          ABM Dynamic Programs
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex h-9 items-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium text-foreground transition hover:bg-white/10"
          >
            Start a project →
          </Link>
        </div>
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-background/90 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[image:var(--gradient-primary)] px-4 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Start a project →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}