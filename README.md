# Outcome University Landing Site (v4)

Static single-page site for **Outcome University** (school), **Outcome Engineering** (method / last job), taught by **Nova Nnaoji**.

**Brand hierarchy (locked):**

- **Nova / Nova Nnaoji** = person
- **Outcome University** = the SCHOOL (what people join; Skool / community / CTAs)
- **Outcome Engineering** = the METHOD and the LAST JOB in the AI age (what graduates become)

**Thesis:** Outcome Engineering is the last job that will ever exist in this AI age. Outcome University teaches people everything they need to become one.

- **Domain target:** [outcome.university](https://outcome.university)
- **Primary CTA:** Join Outcome University / Join the University (Skool)
- **Stack:** HTML + CSS + minimal JS (no build step)

## Files

| File | Purpose |
|------|---------|
| `index.html` | Full landing page (University school + Engineering method) |
| `styles.css` | Centered vertical scroll styles (black / gold / ivory) |
| `script.js` | JOIN_URL sync to all `.join-link` |
| `ladder-atmosphere.png` | Hero full-bleed background (preferred) |
| `ladder-missing-rung.png` | Fallback hero asset |
| `README.md` | This file |

## Page structure

Everything centered. Copy rail ~38-42rem (`--rail: 40rem`). Black + gold theme.

1. **Minimal sticky top bar** - Outcome University wordmark (sub: Nova) + Join the University
2. **Hero** - hook, last-job thesis, University teaches Engineering, primary join CTA, quote
3. **Thesis** - University = school; Engineering = last job / method
4. **Stakes** - three centered punch blocks stacked
5. **Pull quote** - “Hoping isn’t a strategy. Design is.”
6. **Doctrine** - Outcome Engineering loop (Intent → System → Feedback → Iteration → Result)
7. **Lineage** - Nova teaches at Outcome University; practices Outcome Engineering
8. **What you get** - University curriculum / practice to become an Outcome Engineer
9. **Mid CTA** - Become an Outcome Engineer / Join Outcome University
10. **Stay / Leave** - filter for students becoming engineers
11. **Testimonials** - placeholders only (no fake quotes)
12. **Final CTA band** - Join the University
13. **FAQ** - school vs method vs person clarified
14. **Footer** - University + Nova + Engineering line + join

## Replace JOIN_URL (one place)

Default:

```text
https://www.skool.com/outcome-engineering
```

**Preferred:** edit the `data-join-url` attribute on `<body>` in `index.html`:

```html
<body data-join-url="https://www.skool.com/outcome-engineering">
```

`script.js` reads that attribute and applies it to every `.join-link`. You can also change the `JOIN_URL` constant at the top of `script.js` as a fallback.

Fallback hrefs in HTML match the same URL so links still work with JS disabled.

Visible CTA labels say Join Outcome University / Join the University. The Skool URL may still use the engineering slug.

## Contact email

Footer:

```text
mailto:nova@novannaoji.online
```

Prefer `nova@` or `contact@` on the brand domain once DNS mail is ready.

## Local preview

```bash
cd outcome-engineering-landing
python3 -m http.server 8080
# open http://localhost:8080
```

Or open `index.html` directly in a browser.

## Deploy to outcome.university

Point the domain’s DNS to your static host, then publish this folder as the site root (`index.html`, `styles.css`, `script.js`, and hero PNG at deploy root).

### Netlify

1. Push this folder to a Git repo (or drag-and-drop in Netlify UI).
2. New site → import repo (or manual deploy).
3. **Publish directory:** `/` (or the folder containing `index.html`). No build command.
4. Domain: Site settings → Domain management → Add `outcome.university` (and `www` if desired).

### Vercel

1. Connect the Git repo at [vercel.com](https://vercel.com) or use Vercel CLI.
2. Import → root = this folder. Framework: **Other**. Build: none. Output: `.`
3. Deploy → Settings → Domains → add `outcome.university`.

### Cloudflare Pages

1. Workers & Pages → Create → Pages.
2. Connect Git, or Direct Upload.
3. Build command: empty. Output directory: `/` (or `.`).
4. Custom domains → add `outcome.university`.

### Any static host

Upload `index.html`, `styles.css`, `script.js`, and the ladder PNG(s) to the web root. Attach TLS and map `outcome.university` via DNS.

## Brand checklist (do not ship violations)

- **Nova / Nova Nnaoji** = person only
- **Outcome University** = school / what people join / CTAs
- **Outcome Engineering** = method and last job (what graduates become)
- No employer job titles. No fake testimonials. No em dashes.
- Do not blur University and Engineering into one name.

## Locked lines

- Hook: *Your job title is lying to you.*
- Thesis: *Outcome Engineering is the last job that will ever exist in this AI age. Outcome University teaches people everything they need to become one.*
- Quote: *Outcomes are Engineered - Nova Nnaoji*
- CTAs: *Join Outcome University* / *Join the University*
- Method: Intent → System → Feedback → Iteration → Result
- Lineage: Nova teaches at Outcome University; he practices Outcome Engineering

## Aesthetic

- Black + gold + ivory
- Cormorant Garamond + DM Sans
- No yellow buttons, arrows clipart, countdown timers, fake testimonials, checkmark spam, or “AS SEEN ON”
- Generous vertical rhythm; one idea per viewport-ish section
- High contrast, manifesto sales-letter energy
- Centered vertical conversion scroll preserved

## SEO

- Title / OG: `Outcome University · Become an Outcome Engineer`
- Description carries University (school) + Engineering (last job) thesis
- Canonical: `https://outcome.university/`
- OG image points at `ladder-atmosphere.png` on the live domain

## Accessibility & motion

Semantic landmarks, skip link, focus styles, FAQ via `<details>`. Animations / transitions respect `prefers-reduced-motion`.
