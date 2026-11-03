# Soodering migration notice

A responsive, static migration notice for Soodering. It has no framework,
dependencies, or build step.

## Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the repository in Vercel.
3. Keep **Framework Preset** set to `Other`.
4. Leave **Build Command** and **Output Directory** empty.
5. Deploy, then add your domain under **Project Settings → Domains**.

You can also deploy from this folder with the Vercel CLI:

```powershell
npx vercel
```

The site can be edited directly in `index.html`, `styles.css`, and `script.js`.
