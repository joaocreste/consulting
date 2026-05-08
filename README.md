# JC Consulting & Advisory

Self-contained static bundle for the JC Consulting & Advisory site. Drop the
whole folder into any web host (Vercel, Netlify, GitHub Pages, S3 + CloudFront,
plain Apache/Nginx) and serve the root.

## Files

```
index.html     Public marketing landing (the front door)
wealth.html    JC Wealth page
CNAME          Custom domain mapping (Cloudflare Pages)
```

`index.html` and `wealth.html` are fully self-contained — they inline their own
styles and assets and have no external dependencies in this repo.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

```bash
npx serve .
```
