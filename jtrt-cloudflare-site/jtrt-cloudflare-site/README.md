# JTRT Solutions Website

This is a Vite React static site prepared for Cloudflare Pages.

## Cloudflare Pages settings

- Framework preset: Vite
- Build command: npm run build
- Build output directory: dist
- Root directory: /
- Node.js version: latest LTS is fine

## GitHub upload

Upload the full contents of this folder to a GitHub repository. Then connect that repository to Cloudflare Pages.

## Local logo

The logo is stored at:

public/images/jtrt-logo.svg

Replace this file with the official logo asset if you want the exact original. If you use a PNG instead, update the logoUrl value in src/App.jsx.

## Contact form

The contact form currently opens the visitor's email client using mailto. This avoids needing server-side form handling for the first deployment. It can be upgraded later using Cloudflare Pages Functions, a Worker, or a third-party form service.
