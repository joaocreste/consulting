# JC Consulting & Advisory · Education

Self-contained static bundle. Drop the whole folder into any web host (Vercel,
Netlify, GitHub Pages, S3 + CloudFront, plain Apache/Nginx) and serve the root.

## Architecture

```
index.html                    Public marketing landing (the front door)
education.html                Education branch landing (course catalogue)
  │
  ├──► managerialaccounting.html       Management Accounting — course homepage
  │     │
  │     ├──► managerialacc01-introduction.html
  │     ├──► managerialacc02-cost-cvp.html
  │     ├──► managerialacc03-framework.html
  │     ├──► managerialacc04-budgeting.html
  │     ├──► managerialacc05-variance.html
  │     └──► managerialacc06-esg.html
  │
  └──► marketinganalytics.html         Marketing & Business Analytics — single-page course
        │
        ├──► course/marketinganalytics-absolut-mmm.html         (Absolut UK MMM deep-dive)
        └──► course/marketinganalytics-dstar-clustering.html    (D-STAR store clustering report)

shared.css                    Style system used by managerialaccounting.html + all modules
shared.js                     Reveal animations, quizzes, fmt helpers
```

`index.html` and `education.html` are fully self-contained — they inline their own
styles and SVG marks and do not depend on `shared.css` / `shared.js`. The
Management Accounting course system (`managerialaccounting.html` and its six
modules) shares the common styles and scripts. The Marketing &amp; Business
Analytics course is a single self-contained page (with two companion deep-dive
artefacts under `education/course/`).

## Navigation map

| From                                    | Where the user goes                                              |
| --------------------------------------- | ---------------------------------------------------------------- |
| `index.html` · *Access*                 | `managerialaccounting.html`                                      |
| `managerialaccounting.html` · topic     | `managerialacc0X-…html` (the corresponding module)               |
| any module · *All modules* / brand mark | `managerialaccounting.html`                                      |
| any module · *Up next*                  | next module in sequence (06 returns to `managerialaccounting.html`) |

## Adding new courses later

When the next course (Corporate Finance, Strategy, …) ships:

1. Author it in the same pattern — either a multi-module structure
   (`coursename.html` + `course/coursename-NN-slug.html` lessons, sharing
   `shared.css` / `shared.js`), or a single self-contained page like
   `marketinganalytics.html` if the course doesn't need separate lessons.
2. Place it under a sibling slug under `education/`.
3. Replace one of the "Coming soon" placeholders in `education.html` with a
   real course card pointing to the new homepage, mirroring either the
   `Management Accounting` or `Marketing & Business Analytics` card.

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
