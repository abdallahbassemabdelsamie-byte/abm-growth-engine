// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// The Lovable sandbox forces the `cloudflare-module` nitro preset so previews
// keep working. Outside the sandbox (e.g. GitHub Actions, SiteGround build
// step) we switch to nitro's `static` preset + TanStack Start prerender so the
// build output is plain HTML/CSS/JS that any static host can serve.
const IS_LOVABLE_SANDBOX =
  !!process.env.LOVABLE_DEV_SERVER || !!process.env.LOVABLE_SANDBOX;

export default defineConfig({
  ...(IS_LOVABLE_SANDBOX
    ? {}
    : {
        nitro: { preset: "static" },
        tanstackStart: {
          pages: [
            { path: "/", prerender: { enabled: true, crawlLinks: true } },
          ],
        },
      }),
});
