# Emmanuel Mwatabu — Vexa digital profile

A standalone, mobile-friendly NFC digital business card for Emmanuel Masaka Mwatabu.

## Run locally

1. Install Node.js (version 20.19+ or 22.12+).
2. From this folder, run `npm install`.
3. Run `npm run dev` and open the local URL printed in the terminal.
4. Create a production build with `npm run build`; preview it with `npm run preview`.

## Profile content

Edit `src/data/profile.js` to update the profile, contact links, project descriptions, and project links. The profile photo and project thumbnails are in `public/`.

The QR code, profile sharing, and vCard contact use the current site URL automatically. If you use a custom public URL, set `VITE_PUBLIC_PROFILE_URL` to that URL before building. Once deployed, place the site’s root URL on the NFC card.

This is a frontend-only static site. No database or backend is required.
