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
