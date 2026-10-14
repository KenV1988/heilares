# Heilares

Build me a complete, production-ready, multilingual STATIC marketing website for "Heilares OÜ" — a B2B solar panel installation company based in Estonia, operating across Europe. The site will be hosted on Lovable's hosting.



CRITICAL CONSTRAINTS:

- This is a PURELY STATIC SITE. Do NOT use Lovable Cloud. Do NOT use Supabase. Do NOT create a database. Do NOT create Edge Functions. Do NOT create an admin panel.

- All content is hardcoded in TypeScript data files (src/data/*.ts) for easy chat-based updates later.

- Contact form and Quote modal use `mailto:` links — when the user clicks submit, their default email client opens with a pre-filled email to info@heilares.ee. No backend, no API calls.



═══════════════════════════════════════════════════════

COMPANY CONTEXT

═══════════════════════════════════════════════════════

- Name: Heilares OÜ

- Tagline: "PÄIKESEENERGIA SPETSIALISTID"

- Service: Turnkey solar panel installation — three product types (Tracker park, Maapark, Katusepark). Plus workforce rental (Laevaehitus + Tehased).

- Target: B2B clients in Estonia and across Europe

- Email displayed on site: info@heilares.ee

- Phone: +372 5693 0296

- Location text: "Eesti & Euroopa"

- Working hours: Mon–Fri 09:00–18:00

- Social media: Facebook, Instagram, LinkedIn — use "#" placeholder hrefs (will be updated later via chat)



═══════════════════════════════════════════════════════

TECH STACK

═══════════════════════════════════════════════════════

- React + Vite + TypeScript

- Tailwind CSS + shadcn/ui

- react-i18next (3 languages)

- react-router-dom (BrowserRouter)

- framer-motion (subtle animations)

- react-hook-form + zod (form validation)

- lucide-react (icons)

- react-helmet-async (SEO meta tags)



No backend dependencies. No external services. Pure static React site.



═══════════════════════════════════════════════════════

DESIGN SYSTEM

═══════════════════════════════════════════════════════

Theme: Dark, modern, professional, energetic — premium B2B feel.



Colors (tailwind.config.ts + CSS variables):

- Background base: #0a0f0d

- Background elevated: #0f1614

- Background card: #131c19

- Border subtle: rgba(124, 255, 176, 0.12)

- Border focus: rgba(124, 255, 176, 0.4)

- Primary accent (green): #7CFFB0

- Primary accent hover: #6AECA0

- Text primary: #FFFFFF

- Text secondary: rgba(255,255,255,0.7)

- Text muted: #6B7872



Typography:

- Font: 'Inter', system-ui, sans-serif (Google Fonts)

- Hero H1: 64–80px desktop / 40px mobile, font-weight 700, tight tracking

- Section H2: 48px desktop / 32px mobile, font-weight 700

- Body: 16–18px, font-weight 400, line-height 1.6



Components:

- Buttons primary: green pill (rounded-full), bg #7CFFB0, dark text #0a0f0d, font-weight 600, px-7 py-3.5, arrow icon right

- Buttons secondary: transparent, white border, white text, rounded-full

- Badges: rounded-full, 1px green border at 30% opacity, bg green at 10%, green text, uppercase, tracking-wide, 12–13px, small sparkle icon

- Cards: bg #0f1614, border 1px rgba(124,255,176,0.12), rounded-2xl, padding 32px, hover brighter border

- Form inputs: bg #131c19, border 1px subtle green, rounded-xl, padding 14px 18px, focus brighter green



Layout: Max width 1280px, centered, px-6 md:px-10. Section spacing 96–128px desktop, 64px mobile. Fully responsive.



═══════════════════════════════════════════════════════

INTERNATIONALIZATION (i18n)

═══════════════════════════════════════════════════════

react-i18next with 3 languages:

- Estonian (et) — DEFAULT

- English (en)

- Finnish (fi)



Translation files at src/i18n/locales/et.json, en.json, fi.json with ALL UI text PROFESSIONALLY translated (nav, hero, sections, forms, footer, page titles, meta descriptions). Do NOT leave English text in non-English files.



Language switcher: top-right in navbar, pill button with globe icon showing current language code (EST / ENG / FIN). Dropdown on click. Save to localStorage. Detect browser language on first visit (default Estonian).



═══════════════════════════════════════════════════════

SITE STRUCTURE — 5 PAGES (no admin, no blog)

═══════════════════════════════════════════════════════

Top navigation (left to right):

1. Avaleht (Home) — "/"

2. Päikesepaneelid — "/paikesepaneelid"

3. Tööjõu rent — "/toojou-rent"

4. Tehtud tööd — "/tehtud-tood"

5. Kontakt — "/kontakt"



Plus dynamic route: /tehtud-tood/:slug



Translate nav per language. Active link: underlined green #7CFFB0.



Navbar:

- Sticky, transparent at top, becomes solid #0a0f0d with backdrop-blur after 80px scroll

- Logo on left: placeholder text "HEILARES" with green sun icon (will replace later)

- Nav links centered

- Language switcher on right

- Mobile: hamburger menu



═══════════════════════════════════════════════════════

DATA FILES (HARDCODED)

═══════════════════════════════════════════════════════



src/data/projects.ts:

```typescript

export type ProjectCategory = 'tracker_park' | 'maapark' | 'katusepark';



export interface Project {

  slug: string;

  category: ProjectCategory;

  location: string;

  capacityKw: number;       // ALWAYS in kW. Display: if >= 1000 show as MW, else as kW.

  yearCompleted: number;

  coverImage: string;

  gallery: string[];

  title: { et: string; en: string; fi: string };

  description: { et: string; en: string; fi: string };

  panelsUsed: string;

  inverter: string;

  mountingSystem: string;

  completionTime: string;

}



/**

 * KUIDAS LISADA UUS PROJEKT:

 * Lovable chat'is: "Add new project to projects.ts: name X, location Y, capacity Z kW, category katusepark/maapark/tracker_park, year 2026, description [tekst]"

 */



export const projects: Project[] = [

  // Seed 5 REAL projects with shared description scope (translate to en, fi):

  // ET: "Teostasime raami paigalduse, paneelide paigalduse ning DC-tööd koos inverteriga."

  //

  // 1. Risti, Eesti, 244000 kW (244 MW) → tracker_park (mark with TODO if needs verification)

  // 2. Stelpe, Läti, 72500 kW (72,5 MW) → tracker_park

  // 3. Kirikmäe, Eesti, 76000 kW (76 MW) → tracker_park

  // 4. Baltic Logistic Solutions, Eesti, 6 kW → katusepark

  // 5. Lielvarde, Läti, 10800 kW (10,8 MW) → maapark

  //

  // Use Unsplash solar farm/roof photos as cover placeholders (clearly marked TODO).

  // 2–3 gallery images each.

  // Year: 2023–2025 (mark TODO).

  // Technical placeholders: "Tier-1 paneelid", "SMA / Huawei inverter", mounting matches category, "2–4 kuud".

];

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://heilares.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8c6c6adb-526e-4402-8f67-5f7940764851).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
