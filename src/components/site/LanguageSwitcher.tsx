import { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { LANGS } from "@/i18n/translations";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 text-sm font-medium text-foreground transition hover:bg-white/10"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="h-3.5 w-3.5" strokeWidth={1.75} />
        {compact ? current.short : current.short}
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl border border-white/10 bg-background/95 py-1 shadow-lg backdrop-blur-xl"
        >
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                onClick={() => { setLang(l.code); setOpen(false); }}
                className="flex w-full items-center justify-between px-3 py-2 text-left text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                <span>{l.label}</span>
                {l.code === lang && <Check className="h-3.5 w-3.5 text-primary" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}