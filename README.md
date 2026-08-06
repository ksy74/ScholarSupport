# ScholarSupport Health Literacy

Static site for ScholarSupport's health literacy campaign — plain HTML/CSS/JS,
no build step, no framework. Every page's content is fully present in the
served HTML; the small amount of JavaScript (`nav.js`, `resources.js`,
`forms.js`) only adds progressive enhancement (mobile menu, resource
filtering, form submission) on top of content that's already there.

## Editing content

Everything is hand-authored HTML. To change text, open the relevant `.html`
file and edit it directly — there's no CMS or content pipeline.

| Page | File |
|---|---|
| Home | `index.html` |
| About | `about.html` |
| Resources | `resources.html` |
| Get Involved | `get-involved.html` |
| Contact | `contact.html` |
| Our Impact / Stats | `stats.html` |
| 404 | `404.html` |

Shared styles live in `styles.css`. Shared nav/menu behavior is in `nav.js`.

### Adding a new resource

Copy an existing `<article class="resource-card" data-topic="..." data-lang="...">`
block in `resources.html` and edit it. `data-topic` and `data-lang` must match
one of the filter button values in the `#topicFilters` / `#langFilters` groups
above it (add a new filter button there too if you're introducing a new topic
or language).

### Placeholders to fill in before launch

Search the project for these markers and replace them with real values:

- The six lesson PDFs in `assets/lessons/` are placeholder-content starter
  lessons (plain-language hygiene, nutrition, water safety, illness
  recognition, and maternal/child health guidance, one translated into
  Hindi) so the download flow works end-to-end. Swap in your own
  reviewed materials whenever you're ready — same filenames, same folder.
- `[EMAIL: replace with your real address]` — in `get-involved.html` and
  `contact.html`. Currently set to `hello@scholarsupport.org` as a placeholder.
- `[STAT: fill in]` — four stat tiles in `stats.html`. The two verified
  numbers (1,200+ meals, 1,000+ people reached) are already filled in; do not
  publish a number here you can't stand behind.
- `YOUR_FORM_ID` in the form `action` in `get-involved.html` — see below.

### Connecting the Get Involved form (Formspree)

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form and copy its endpoint (looks like
   `https://formspree.io/f/abcdwxyz`).
3. Paste it into the `action` attribute of the `<form>` in `get-involved.html`,
   replacing `https://formspree.io/f/YOUR_FORM_ID`.
4. The form submits via `fetch` in `forms.js`; if it's ever unreachable (or
   still pointing at the placeholder), the page shows the phone number and
   `mailto:` fallback instead, so there's never a dead end.

## Local preview

No build step, no dependencies. Just serve the folder with any static file
server, for example:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Deploying to GitHub Pages

This repo deploys straight from the `main` branch — no build step, no GitHub
Actions workflow needed, since the site is already static HTML.

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose **main** and **/ (root)**, then **Save**.
5. The site will be live at `https://<your-username>.github.io/<repo-name>/`
   within a minute or two.

If you later attach a custom domain, add a `CNAME` file with the domain name
and update the `canonical`/`og:url` URLs across the HTML files and in
`sitemap.xml` and `robots.txt` to match.

## What's real vs. placeholder

Per the project's content policy, nothing on this site invents statistics,
program names, partner organizations, or testimonials. Where a real number
wasn't provided, it's marked with a clearly visible placeholder
(`[STAT: fill in]`, `[EMAIL: ...]`) instead of a fabricated value. The lesson
PDFs are starter content, not verified statistics, so they're real files
rather than placeholders — see the note above. The two published stats
(1,200+ meals donated, 1,000+ people reached) and the phone number
(732-986-3508) are the real figures
provided for this build.
