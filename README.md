# JC Consulting & Advisory · Education

Self-contained static bundle. Drop the whole folder into any web host (Vercel,
Netlify, GitHub Pages, S3 + CloudFront, plain Apache/Nginx) and serve the root.

## Architecture

```
index.html                    Public marketing landing (the front door)
                Education branch landing (course catalogue)
  │
  ├──►         — course homepage
  │     │
  │     ├──► 
  │     ├──► 
  │     ├──► 
  │     ├──► 
  │     ├──► 
  │     └──► 
  │
  ├──►           — single-page course
  │     │
  │     ├──► course/         (Absolut UK MMM deep-dive)
  │     └──► course/    (D-STAR store clustering report)
  │
  └──►       — single-page course
        │
        └──► course/          ( deep-dive)

                    Style system used by  + all modules
                     Reveal animations, quizzes, fmt helpers
```

`index.html` and `` are fully self-contained — they inline their own
styles and SVG marks and do not depend on `` / ``. The
 course system (`` and its six
modules) shares the common styles and scripts. The Marketing &amp; Business
Analytics and  courses are single self-contained pages
(each with one or more companion deep-dive artefacts under ``).

## Navigation map

| From                                    | Where the user goes                                              |
| --------------------------------------- | ---------------------------------------------------------------- |
| `index.html` · *Access*                 | ``                                      |
| `` · topic     | `…html` (the corresponding module)               |
| any module · *All modules* / brand mark | ``                                      |
| any module · *Up next*                  | next module in sequence (06 returns to ``) |

## Adding new courses later

When the next course (Corporate Finance, Strategy, …) ships:

1. Author it in the same pattern — either a multi-module structure
   (`` + `` lessons, sharing
   `` / ``), or a single self-contained page like
   `` if the course doesn't need separate lessons.
2. Place it under a sibling slug under ``.
3. Replace one of the "Coming soon" placeholders in `` with a
   real course card pointing to the new homepage, mirroring either the
   `` or `` card.

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
