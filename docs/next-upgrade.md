# Next.js 13.5.11 to 16.4.2

The upgrade runs directly to the final target; no intermediate major version is
installed. Commits group surviving changes by the major that introduced them.
The source checkout and its existing dependency edits are preserved.

## Next.js 14 review

- [x] Runtime requirements are satisfied by Node.js 22.19.0 used for verification.
  Final React dependencies and types follow the later App Router requirements.
- [x] No `next export` or static export configuration is used.
- [x] No `ImageResponse` imports require migration to `next/og`.
- [x] Fonts already use `next/font`; there is no `@next/font` dependency.
- [x] There is no reliance on the removed SWC WASM target.
- [x] Supported checks and affected runtime behavior pass on the final target.

No source migration is required specifically for major 14.

## Next.js 15 review

- [x] React and React DOM use 19.3.1, with matching React 19 types.
- [x] The three dynamic routes await promise-based `params` before fetching data.
  There are no `cookies`, `headers`, `draftMode`, or `searchParams` consumers,
  unsafe unwrap casts, or unresolved codemod review markers.
- [x] Fonts already use `next/font`. No deprecated bundling configuration,
  `NextRequest.geo`/`ip`, automatic Speed Insights, or `experimental-edge` runtime
  is used.
- [x] Existing 300-second post/project revalidation and dynamic gallery behavior
  are preserved. The only fetch is a reCAPTCHA POST; no cached GET handler or
  default fetch caching requires migration. Client navigation was verified.
- [x] Headless UI, reCAPTCHA, Markdown, Font Awesome, and the typing animation
  dependencies are compatible with React 19 and the final TypeScript resolver.
- [x] The React 18-only comments wrapper is replaced by the native Utterances
  embed, retaining its repository, pathname matching, and theme. The embed cleans
  up on route changes and unmounts.
- [x] Supported checks and affected runtime behavior pass on the final target.

The automatic React recipe could not create its per-user configuration directory
inside the sandbox. Manual review of the React 19 upgrade guide found no legacy
render/hydrate APIs, string refs, legacy context, function defaults/prop types, or
form-state APIs to migrate. The React type codemod completed without changes.

## Next.js 16 review

- [x] Next.js is pinned to exactly 16.4.2. Node.js meets the framework's 20.9+
  requirement; TypeScript 5.1.6 satisfies its 5.1+ requirement. Use Node.js
  22.19.0 or another version satisfying the lint dependencies' engine range
  (`^20.19.0 || ^22.13.0 || >=24`); npm warns with Node.js 20.11.1.
- [x] Development and production use Turbopack. No custom webpack configuration,
  bundler plugins, loaders, fallback aliases, or Sass tilde imports need migration.
- [x] There is no middleware/proxy or Edge runtime to migrate.
- [x] Rendered images use native `img` elements, so optimizer quality, size,
  query-string, local-IP, and redirect changes do not alter these consumers.
  Local images load. Some existing Imgur resources return upstream HTTP 403;
  these external resources remain unavailable and are not routed through Next's
  image optimizer. The unrelated image domain configuration is preserved.
- [x] No changed cache APIs, removed runtime configuration, AMP, experimental
  PPR, dynamic IO, useCache, or root-parameter APIs are consumed. React Compiler
  and Cache Components are not enabled.
- [x] `npm run lint` invokes ESLint with the Next.js core-web-vitals flat config.
  The obsolete `.eslintrc.json` is removed. There is no CI invoking `next lint`.
- [x] Async route parameters are migrated. There are no dynamic metadata image
  or sitemap functions to migrate.
- [x] The existing modal slot default returns null. Intercepted navigation,
  dismissal, direct navigation, reloads, and missing-photo responses pass.
- [x] `experimental.agentUpgrade` is set to `latest`, supported by 16.4.2.
- [x] Next.js-generated `AGENTS.md` points to installed, version-matched docs.

## Verification and delivery

- [x] No equivalent local work, branches, remote branches/commits, or open PRs
  were found. `gh` was unavailable; the connected GitHub API supplied the remote
  checks, including the open-PR lookup.
- [x] Used npm from the app root. No package-manager version, workspace, or
  dependency policy was replaced.
- [x] The prescribed `@next/codemod@16.5.0-canary.24 upgrade 16.4.2 --yes
  --skip-adoption` completed Next migrations once. Its initial invocation exited
  before migrating because the fresh worktree had no installed Next package;
  installing the source lockfile restored 13.5.11 before retrying.
- [x] `npm install` and a final clean `npm ci --no-audit --no-fund` succeed.
- [x] `npm exec -- next --version` reports `Next.js v16.4.2`.
- [x] `npm run lint` passes: zero errors, nine existing image/unused-directive
  warnings. `npm exec -- tsc --noEmit` passes.
- [x] `npm run build` passes after the clean install, including database-backed
  prerendering. Existing 300-second post/project revalidation is retained.
- [x] The Turbopack development server returns HTTP 200 for `/`. macOS FSEvents
  required running development verification outside the filesystem sandbox.
- [x] Production browser tests pass for the home typing animation, icons, local
  image, project dialog open/close, post rendering, Markdown, actual Utterances
  iframe creation, gallery navigation/dismissal/reload/404, and contact client
  validation. An empty email API payload returns HTTP 400. No message was sent.
  No uncaught browser errors occurred.
- [x] `git diff --check` passes. Existing source-checkout edits are untouched.

Prisma's per-user engine cache was read-only in the sandbox. Verification used
the existing cached engine binaries under a writable temporary path and explicit
`PRISMA_QUERY_ENGINE_LIBRARY` / `PRISMA_SCHEMA_ENGINE_BINARY` variables while
installing and generating the client. These paths are not project configuration;
normal environments can use `npm ci` and `npx prisma generate` directly. Local
environment values were used only through ignored `.env` and are not committed.

Publishing a draft PR requires permission. Recheck open PRs before publishing and
use the marker `<!-- next-upgrade: different-major; path="." -->` in its body.
