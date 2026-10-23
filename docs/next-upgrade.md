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
