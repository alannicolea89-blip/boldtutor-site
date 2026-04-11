---
name: boldtutor-migration
description: >
  Knows how to fetch content from boldtutor.com.au pages and convert them into
  properly structured markdown or MDX files for the boldTutor Astro project. Use when
  the user says "grab content from boldtutor", "migrate a boldtutor page",
  "create a markdown for boldtutor", or asks to import/convert any page from
  the boldtutor.com.au website.
---

# Boldtutor Migration Skill

## Project Context

- Workspace: `/Users/martinzapata/Documents/alan/boldTutor`
- Framework: Astro (static)
- MDX enabled: Yes (`@astrojs/mdx` installed)
- Grid component available: `SubjectsGrid.astro` for box/card layouts

## Step 1 — Fetch the page

Use `fetch_webpage` with this query:

> "Return the complete main article content in reading order as plain text with headings and bullet lists. Exclude all navigation, menu, footer, copyright, contact widgets, and repeated duplicate sections."

The tool returns duplicate fragments. De-duplicate by reading each section only once.

## Content Rules

### Verbatim first — always copy exact wording from source
- Do NOT paraphrase, summarise, or rewrite
- Do NOT change capitalisation (e.g. `year 12` stays `year 12`, not `Year 12`)
- Do NOT change `Firstly` → `First`, `Furthermore` → `Also` etc.
- Preserve all inline links with their original URLs

### Lists
- Source uses `•` bullet chars — convert to markdown `-` list items so they render as `<ul>`
- Source `### Subheadings` inside body → keep as `###` in markdown body
- ALL CAPS subheadings (e.g. `FIND OUT WHAT I CAN DO FOR YOU`) → keep verbatim as plain text line

### What to exclude
- Navigation / header / footer / menu
- Copyright lines
- "VIEW MORE" button text and surrounding blank links `[](url)`
- Repeated duplicate fragment blocks (the fetcher returns same content multiple times)
- Social media links

## Step 2 - Destination, file naming and format

Pick destination by intent and page type:

- If source is a main site page (e.g. About, Services, Reviews, Contact), migrate into matching top-level route under `src/pages/`.
- If user explicitly asks for a blog post, migrate into `src/content/blog/`.
- Do NOT duplicate same migrated content in both top-level page and blog unless user explicitly requests both.

Examples:

```
https://boldtutor.com.au/about-boldtutor-private-tutor-high-school-and-university-sydney/
→ top-level page: src/pages/about.astro
```

```
https://boldtutor.com.au/some-article/
→ blog entry (only when requested): src/content/blog/some-article.mdx
```

Use `.mdx` when content needs embedded components (like `SubjectsGrid`).

## Step 3 - Box/Card Grids with SubjectsGrid Component

When source has **grouped sections in boxes** (e.g., "English", "University", "Modern History", "Society and Culture"), convert to MDX and use the `SubjectsGrid` component.

### When to use SubjectsGrid:
- Multiple items in card/box format (2-4 items)
- Each box has a title and list of items/features
- Want visual icons to represent each category

### Implementation:

1. **Import component** at top of `.mdx` file:
   ```mdx
   import SubjectsGrid from '../../components/SubjectsGrid.astro';
   ```

2. **Replace markdown lists** with component, converting bullet list items to `·`-separated description string:
   ```mdx
   <SubjectsGrid subjects={[
     { title: 'English', description: 'Item 1 · Item 2 · Item 3 · More…', href: 'url', icon: 'book' },
     { title: 'University', description: 'Item 1 · Item 2 · Item 3', href: 'url', icon: 'graduation' },
   ]} />
   ```

### Available icons:
- `book` — open book (for literature/subjects)
- `graduation` — academic cap (for higher education)
- `history` — clock (for history/time-based topics)
- `society` — group of people (for culture/social topics)

## Step 4 - Homepage Migration Rules (`https://boldtutor.com.au/`)

When user asks to migrate homepage, update existing top-level home route instead of creating new content entries.

### Target files:
- `src/pages/index.astro` (main homepage section content)
- `src/config/brand.ts` (site identity/meta copy)
- `src/data/client.ts` (phone/email/domain/socials)
- `src/components/Header.astro` and `src/components/Footer.astro` (nav labels if needed, e.g. `Services` -> `Subjects`)

### Section mapping in `src/pages/index.astro`:
- `Hero` -> source hero/main CTA text
- `Services` -> source `Subjects` cards with dot-point lists
- `About` -> source `Why Boldtutor?` block
- `Gallery` -> source `Student Results` section
- `CTA` -> source final `Contact Us`/booking prompt

### Homepage subject cards (Services component)
- Build subject boxes as cards in `Services` props using:
  - `title`
  - `points` (array of bullet lines from source dot points)
  - `href`
  - `icon`
  - `backgroundImage` when original site uses subject tile imagery
- Supported semantic icons in `Services`:
  - `book` (English)
  - `graduation` (University)
  - `history` (Modern History)
  - `society` (Society & Culture)
- If user asks to omit a subject box (e.g. remove University), remove that card from `services` array and keep remaining cards unchanged.

### Subject card images
- Prefer original Boldtutor subject tile images from homepage HTML instead of invented artwork when available.
- Find them in source HTML under `.nectar-fancy-box .box-bg` background-image URLs.
- Copy those assets into local `public/` files so rendering does not depend on third-party hotlinks.
- Current known originals from homepage:
  - English -> `english-subject-tile.jpg`
  - Society & Culture -> `society-subject-tile.jpg`
  - Modern History -> `history-subject-tile.jpg`
- After switching to original local images, delete any superseded experimental decorative assets that are no longer referenced.

### Homepage migration constraints:
- Keep migrated wording verbatim where available.
- Preserve source dot points as actual list bullets in cards (do not collapse into one paragraph).
- Prefer local copies of original subject images over remote URLs.
- Preserve source external links for subject cards and booking CTA.
- Do not add homepage content to blog collection.

## Step 5 - Verify build

Run `npm run build` and verify the expected route:

- Top-level page migration: `/about/index.html` (or matching route)
- Homepage migration: `/index.html`
- Blog migration: `/blog/[slug]/index.html`

## Example

**User:** "Grab the about page from boldtutor and migrate subjects as cards"

1. Fetch `https://boldtutor.com.au/about-boldtutor-private-tutor-high-school-and-university-sydney/`
2. Strip nav/footer/duplicates
3. Migrate into `src/pages/about.astro` (top-level nav page)
4. Add `import SubjectsGrid from '../components/SubjectsGrid.astro';` in `about.astro`
5. Replace bulleted subject sections with:
  ```astro
   <SubjectsGrid subjects={[
     { title: 'English', description: 'Henry IV · The Tempest · The Crucible · And more…', href: 'http://boldtutor.com.au/english-services/', icon: 'book' },
     { title: 'University', description: 'Philosophy · Politics · Humanities · And more…', href: 'http://boldtutor.com.au/university-tuition/', icon: 'graduation' },
   ]} />
   ```
6. Run `npm run build` — confirm `/about/index.html` generated and no duplicate About post exists under `/blog/`
