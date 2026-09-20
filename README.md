# CCRTP Website

Community College Research Training Program — UCSF

## Files

```
ccrtp-website/
├── index.html       ← About / homepage
├── apply.html       ← Application page
├── posters.html     ← Cohort poster gallery
├── team.html        ← Team members
├── css/style.css    ← All styles (UCSF color system)
├── js/main.js       ← Drag-drop, nav, modal logic
└── assets/
    ├── posters/     ← Put poster PDFs and thumbnail images here
    └── images/      ← Logos, headshots, etc.
```

---

## Deploy to GitHub Pages (free hosting)

### First time

1. Go to github.com and create a new repository named `ccrtp-website`
2. Make it **Public** (required for free GitHub Pages)
3. In your terminal:

```bash
cd ccrtp-website
git init
git add .
git commit -m "Initial CCRTP site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ccrtp-website.git
git push -u origin main
```

4. On GitHub: go to **Settings > Pages**
5. Under "Source" select **Deploy from a branch**, choose **main**, folder **/ (root)**
6. Click Save. Your site will be live at:
   `https://YOUR-USERNAME.github.io/ccrtp-website/`

### Updating the site later

```bash
git add .
git commit -m "Add 2024 cohort posters"
git push
```

GitHub rebuilds the site automatically within ~1 minute.

---

## How to add posters (posters.html)

1. Put the poster image (JPG or PNG thumbnail) in `assets/posters/`
2. Put the PDF in `assets/posters/`
3. Open `posters.html` and find the correct cohort section (e.g. `id="cohort-2024"`)
4. Duplicate the `<!-- POSTER CARD TEMPLATE -->` block and fill in:

```html
<div class="poster-card"
     data-name="Pricilla Guillen"
     data-project="CD8+ T Cell Phenotypes in SIV Control"
     data-mentor="Gina Borgo · Rutishauser Lab"
     data-lab="Rutishauser Lab · UCSF"
     data-abstract="[2-4 sentences describing the project and findings]"
     data-pdf="assets/posters/guillen-2024.pdf">
  <div class="poster-thumb">
    <img src="assets/posters/guillen-2024-thumb.jpg" alt="Poster thumbnail">
  </div>
  <div class="poster-info">
    <h3>Pricilla Guillen</h3>
    <div class="mentor">Gina Borgo · Rutishauser Lab</div>
    <div class="topic">CD8+ T Cell Phenotypes in SIV Control</div>
    <a href="#" class="poster-link view-poster">View poster</a>
  </div>
</div>
```

---

## How to add team members (team.html)

Duplicate any `.team-card` block and fill in name, role, and bio.
Headshot photos: either drag-drop in the browser (preview only) or add an `<img>` tag inside `.team-photo` pointing to a file in `assets/images/`.

---

## Qualtrics application form (apply.html)

Replace the placeholder `<div class="qualtrics-placeholder">` block with:

```html
<iframe
  class="qualtrics-frame"
  src="https://ucsf.qualtrics.com/jfe/form/SV_YOURSURVEYID"
  allowfullscreen>
</iframe>
```

Get the embed code from Qualtrics: **Distributions > Anonymous Link > Embed**

---

## Colors (UCSF brand)

| Token | Hex | Use |
|-------|-----|-----|
| Navy | `#052049` | Primary backgrounds, headings, buttons |
| Blue Gray | `#506380` | Secondary accents |
| Cool Gray | `#B4B9BF` | Borders, secondary text |
| Gray J5 | `#E1E3E5` | Card borders, dividers |
| Gray I6 | `#F2F3F4` | Page background |
| White | `#FFFFFF` | Card backgrounds |
