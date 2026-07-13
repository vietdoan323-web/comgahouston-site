# Publishing a Blog Post (for humans and agents)

Every `.md` file in this folder automatically becomes a page at
`https://www.comgahouston.com/blog/<filename-without-extension>`.
The blog index at `/blog`, the sitemap, and the Article SEO schema are all
generated from these files. **To publish a post, add ONE markdown file here.
Do not edit any other file in the repository.**

## File format

Filename = URL slug. Use lowercase kebab-case, e.g. `best-pho-toppings.md`
publishes at `/blog/best-pho-toppings`.

```markdown
---
title: "Post Title Shown as the H1 and in Search Results"
description: "The SEO meta description, 150-160 characters, written to earn the click."
excerpt: "One or two sentences shown on the blog index card. Optional; falls back to description."
date: "2026-07-15"
category: "Guides"
image: "/images/pho-bo.jpg"
imageAlt: "Plain-language description of the image for screen readers"
ctaTitle: "Ready for a bowl?"
---

Opening paragraph. This appears directly under the hero image.

## Section headings use H2 (##)

Body text. **Bold** for dish names and prices. Links like
[our pho page](/pho-kansas-city) for internal pages or full URLs for external.

## Another section

More paragraphs. Lists are fine:

- Point one
- Point two
```

## Frontmatter rules

- `title`, `description`, `date`, `image` are REQUIRED. The rest are optional.
- `date` format: `"YYYY-MM-DD"`, quoted. Posts sort newest-first on the index.
- `category`: one short label, e.g. `"Guides"`, `"Food Culture"`, `"Drinks"`, `"News"`.
- `image`: path under `/images/`. Reuse an existing photo from `public/images/`
  or add a new one to `public/images/blog/` (JPEG, max ~1600px wide, under 400KB).
  Only use photos the restaurant owns.
- `ctaTitle`: heading of the order call-to-action box at the end of the post.

## Content rules

- NO em dashes (the — character). Use commas, colons, or periods instead.
  This is a standing client requirement across the whole site.
- Vietnamese diacritics are correct and encouraged: Cơm Gà, Phở, Bánh Mì.
- 600-1200 words. Write for Kansas City diners searching for Vietnamese food.
- Include 1-3 internal links per post: `/menu`, `/pho-kansas-city`,
  `/banh-mi-kansas-city`, `/com-ga-kansas-city`, `/catering`.
- Prices and hours must match the menu: check `app/menu/page.js` before citing.
- Only claim facts about the restaurant that are documented in this repo.

## Publishing workflow

1. Create a branch: `git checkout -b hermes/post-slug`
2. Add the `.md` file (and any new image under `public/images/blog/`)
3. Commit and push the branch
4. Vercel builds a preview URL automatically for review
5. A human merges to `main`; production deploys in about 30 seconds

Do not push directly to `main` unless explicitly authorized.
