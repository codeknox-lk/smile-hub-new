# Smile Hub Website

Custom Next.js marketing site for Smile Hub Premium Dental Care.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run typecheck`

Production builds use webpack because Turbopack can fail in restricted sandbox environments when PostCSS spins up worker processes.

## Environment

Copy `.env.example` to `.env.local` and provide:

- `GOOGLE_PLACES_API_KEY`
- `GOOGLE_PLACE_ID`
- `NEXT_PUBLIC_GA_ID` for Google Analytics tracking

## Content structure

All current content is centralized in [data/site.ts](/Users/ruwantha/Documents/Work/Code Knox/Projects/Smile Hub New/data/site.ts) so it can be replaced with CMS-fed data later without changing the page components.
