# JC Consulting & Advisory · Education

Self-contained static bundle. Drop the whole folder into any web host (Vercel,
Netlify, GitHub Pages, S3 + CloudFront, plain Apache/Nginx) and serve the root.

## Architecture

```
index.html                    Public marketing landing (the front door)
  │
  └──► course.html             — course homepage
        │
        ├──► 01-introduction.html
        ├──► 02-cost-cvp.html
        ├──► 03-framework.html
        ├──► 04-budgeting.html
        ├──► 05-variance.html
        └──► 06-esg.html

                    Style system used by course.html + all modules
                     Reveal animations, quizzes, fmt helpers
```

`index.html` is fully self-contained — it inlines its own styles and SVG marks
and does not depend on `` / ``. The course system
(`course.html` and the six modules) shares the styles and scripts.

## Navigation map

| From                     | Where the user goes                                  |
| ------------------------ | ---------------------------------------------------- |
| `index.html` · *Access*  | `course.html`                                        |
| `course.html` · topic    | `0X-…html` (the corresponding module)                |
| any module · *All modules* / brand mark | `course.html`                         |
| any module · *Up next*   | next module in sequence (06 returns to `course.html`)|

## Adding new courses later

When the next course (Corporate Finance, Strategy, …) ships:

1. Author it in the same module pattern (own homepage + module pages, sharing
   the same `` / ``).
2. Place it under a sibling slug — e.g. `corporate-finance.html` plus
   `cf-01-…html`, `cf-02-…html`.
3. Replace the "Coming soon" placeholders in `index.html` with real course cards
   pointing to the new homepage, mirroring the `` card.

## Local preview

Any of these will work from the bundle directory:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

```bash
npx serve .
```

— JC Consulting & Advisory · Education
