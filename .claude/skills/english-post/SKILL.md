---
name: english-post
description: >
  Write a publish-ready Boldtutor blog post about an English / HSC English topic
  in Alan's analytical essay voice. Use when asked to draft, write, or create an
  English blog post, study guide, or article for the site (e.g. "/english-post",
  "write a blog post on Module B", "draft an English post about Frankenstein").
  Produces a markdown file in src/content/blog/ with correct frontmatter and
  house formatting, saved as a draft for review.
tools: Read, Write, Edit, Bash, Glob, Grep
---

# English Post — write a blog post in Alan's voice

Use this skill to draft an English / HSC English blog post for the Boldtutor site
that reads as if Alan wrote it. The goal is a **publish-ready markdown file** in
`src/content/blog/`, matching the existing posts' frontmatter and formatting, left
as a **draft** for Alan to review before publishing.

This skill is for **English-related** posts (HSC English Advanced/Standard/
Extension, Modules, prescribed texts, essay technique, high-school English,
Society & Culture / Modern History writing). For unrelated topics, ask first.

---

## Voice & style profile

This profile is distilled from Alan's own academic essay writing. Apply it to a
study-guide blog post: keep the analytical clarity and reflective, measured tone,
but pitch it to help students and parents understand.

**Overall character**
- Thesis-driven and analytical. Confident but never overstated — intellectually
  generous, calm, precise. No hype, no clickbait, no emoji, no exclamation marks.
- The writer guides the reader explicitly through the reasoning with signposting.

**Whole-piece structure**
- **Open** by framing the topic or a common position/assumption, then state a
  clear thesis or position and signpost what the post will cover
  ("This post will…", "Examining X, Y and Z will help make clear why…").
- **Body**: each section makes one claim, explains it plainly, gives a concrete
  illustrative example, unpacks the example, then links back to the central point.
- **Close** by acknowledging the alternative view fairly and respectfully, then
  restating the position — often ending on an apt quotation or a memorable line.

**Paragraph pattern — claim → explain → example → analyse → link**
1. Topic sentence names the idea / technique / thinker and the claim.
2. One or two sentences explaining it in plain terms.
3. A concrete, relatable example, usually introduced with "For example," or "such as".
4. Analysis of what the example shows.
5. A linking sentence that ties the point back to the argument.

**Sentence craft**
- Vary sentence length; mostly medium-length complex sentences with subordinate
  clauses, clear rather than dense.
- Use a spaced en dash ( – ) for elaboration or emphasis mid-sentence.
- **Integrate short quotations inside your own sentences** with single quotes,
  grammatically woven in — e.g. *the act of crying shows how a 'non-physical
  thought in the mind' can produce tears*. Avoid dropping standalone one-line
  block quotes for short evidence.
- Use reflective, measured **first person** where it adds a considered stance
  ("I believe", "I would argue", "I prefer") — deliberately and sparingly, not
  casually.
- Hedge claims honestly: "tends to", "often", "this suggests", "struggles to".
  Avoid absolute overclaiming.

**Signature moves (use, but vary so they don't repeat every paragraph)**
- Analytical linking verbs: *helps establish / sheds light on / reveals /
  renders clear / makes clear*. Characteristic of the voice — but rotate the
  phrasing; do not begin multiple consecutive sentences with "This helps…".
- Transitions: "However", "Indeed" (to reinforce a point just made), "Instead",
  "For example", "While …,", "But after …".
- Occasional metacommentary that points at what a detail reveals — used
  sparingly and never in a fixed formula (see "Sound human" below).

**Avoid**
- Marketing / listicle tone and hype words ("game-changer", "unlock",
  "supercharge", "dive in"), rhetorical questions used as filler, emoji.
- Repeating "helps/help" in back-to-back sentences.
- Standalone block quotes for short evidence. Integrate them instead.
- Inventing quotations, statistics, or sources. If a fact or quotation is
  uncertain, leave it out or phrase it generally rather than fabricate.

### Match Alan's register, and avoid AI tells (read this before writing)

Alan's writing is formal, measured and academic. It is NOT casual or breezy.
Earlier drafts failed because they drifted into a chatty blog voice and overused
dashes, which both broke his style and read as machine generated. Follow these
rules:

- **Minimise dashes.** Alan rarely uses em or en dashes, and they are a common
  AI tell. Do not use them as punctuation. Use commas, full stops, parentheses,
  or words such as 'namely', 'because', 'since' and 'which' instead. When quoting
  a dash-heavy source such as Dickinson, quote short fragments that avoid the
  dashes rather than reproducing them.
- **Keep the formal register.** Write complete sentences. Do not use
  contractions (write 'it is', not 'it''s'), sentence fragments, or casual
  openers such as 'And', 'But' or 'So'. Possessive apostrophes are fine.
- **Use Alan's connectives.** For example 'However', 'Indeed', 'Instead', 'For
  example', 'Such a', 'While', 'whereas', 'by contrast'.
- **Use Alan's analytical linking.** Phrases such as 'this helps establish',
  'this helps shed light on', 'this helps reveal', 'this is an example of how',
  and 'showcases'. Vary them so the same phrase does not open every sentence.
- **Use reflective first person sparingly,** as Alan does ('I believe', 'I
  argue', 'I prefer'), not as a casual aside.
- **Vary sentence length moderately** within the formal register, using full
  sentences rather than fragments. Avoid a perfectly uniform, even rhythm.
- **Avoid generic AI tells.** No 'It is worth noting', no 'In the end',
  'Ultimately' or 'At its core', no heavy 'not X but Y' antithesis, and no
  padding that only restates the previous sentence.

Note: AI detectors are unreliable and often flag genuine human writing too. The
aim is to mirror Alan's actual essay voice as closely as possible, using the
reference excerpt below as the model, not to game a detector score.

### Reference excerpt (style anchor — do NOT reuse this content)

A body paragraph from Alan's writing, kept here only to pattern-match the rhythm
(claim → explanation → integrated quote → example → analysis → link):

> One of the weaknesses which affect the Dualist argument surrounds the theory
> that the mind and the body should not interact with one another despite the
> fact that 'they clearly do in real life'. According to Falzon, this contradicts
> Dualism's belief that the mind and body are separate entities. For example, in
> some instances, there are people who will cry every time they think of
> something sad (such as the passing of a friend). The act of crying showcases
> how a 'non-physical thought in the mind' can bring about 'the physical
> phenomenon of' shedding tears. This example helps shed light on the role our
> minds play in making our physical bodies a moving and feeling being. This helps
> establish the idea that the mind and body are not separate from one another
> because they clearly interact in ways that help dictate how human beings may
> act in society.

---

## Output format

Create `src/content/blog/<kebab-case-slug>.md`. First check that no file with
that slug already exists (Glob `src/content/blog/<slug>.md`); if it does, pick a
new slug or confirm overwriting with the user.

**Frontmatter** (schema lives in `src/content.config.ts`):

```yaml
---
title: "Clear, specific, SEO-friendly title"
description: "~150–160 char summary with the key terms a student would search."
author: "Boldtutor"
date: YYYY-MM-DD   # today's date unless told otherwise
tags: ["hsc", "english advanced", "module a", "the tempest", "essay writing", "english hsc tutor", "english hsc resources"]
draft: true   # ALWAYS start as a draft for review
---
```

- `tags`: lowercase, 8–14 entries. Mirror existing posts — include the course
  (e.g. "english advanced"/"english standard"), module, prescribed text names,
  the skill ("essay writing"), and SEO tutor tags such as "english hsc tutor",
  "english hsc resources", "english hsc study guide".
- `date`: use today's actual date from the environment context.

**Body (markdown)**
- Start with an **intro paragraph (no heading)** that frames the topic, states
  the thesis/position, and signposts what the post covers.
- Use `##` for section headings and `###` for subheadings.
- Italicise text titles: `*The Tempest*`, `*Hag-Seed*`.
- Length: match existing posts — substantial, roughly 800–1500 words across
  several sections.
- For a key takeaway or important note, use the house **call-out box** (primary
  navy `#1B3A6B`, or accent orange `#F97316` for emphasis):

```html
<div style="background: color-mix(in srgb, #1B3A6B 8%, white); border-left: 4px solid #1B3A6B; border-radius: 0.5rem; padding: 1rem 1.25rem; margin: 1.5rem 0;">

- Markdown (including lists) works inside the box.

</div>
```

- A `---` horizontal rule may separate the intro from the first section, as in
  existing posts. Use sparingly.

---

## Workflow

1. **Clarify the brief** (ask only if not provided, then proceed):
   - Topic / angle of the post.
   - Course & text/module if relevant (e.g. English Advanced, Module B,
     *1984*), and the intended audience (which year level).
   - Any specific essay question or sub-points to cover.
2. **Plan** a clear title and kebab-case slug; confirm the slug is free.
3. **Write** the post in the style profile above (claim → example → analyse →
   link; integrated quotations; measured first person; respectful of nuance).
4. **Frontmatter**: fill in title, ~155-char description, today's date, tags,
   `author: "Boldtutor"`, `draft: true`.
5. **Save** to `src/content/blog/<slug>.md`.
6. **Validate**: run `npm run build` and confirm it completes without errors
   (the content schema will reject malformed frontmatter).
7. **Hand off**: tell Alan the post is a draft, give the file path, and summarise
   the title/angle. Do **not** set `draft: false`, commit, or push unless Alan
   asks — he reviews customer-facing copy before it goes live.

## Quality checklist before handing off

- [ ] Opens with a thesis + signpost; closes by acknowledging nuance.
- [ ] Each section follows claim → example → analysis → link.
- [ ] Short quotations are integrated, not dropped as block quotes.
- [ ] "helps/reveals/establishes" linking phrasing is varied, not repetitive.
- [ ] No hype words, emoji, or fabricated facts/quotes.
- [ ] Frontmatter valid; `draft: true`; tags mirror existing posts; build passes.
