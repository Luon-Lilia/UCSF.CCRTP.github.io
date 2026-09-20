# CCRTP Website

Community College Research Training Program — UCSF

## Files

```
ccrtp-website/
├── index.html       ← About / homepage
├── apply.html       ← Application page (Summer 2027 recruitment)
├── posters.html     ← 2026 Cohort poster gallery
├── team.html        ← Team members
├── css/style.css    ← All styles (UCSF color system)
├── js/main.js       ← Drag-drop, nav, modal logic
└── assets/
    ├── posters/     ← Put poster PDFs and thumbnail images here
    └── images/      ← Logos, headshots, etc.
```

---

## Deploy to GitHub Pages

### Settings > Pages (do this once)

1. In your repo go to **Settings > Pages**
2. Under Source choose **Deploy from a branch**
3. Branch: **main** — Folder: **/ (root)**
4. Click Save
5. Your site goes live at:
   `https://Luon-Lilia.github.io/UCSF.CCRTP.github.io/`

---

## How to upload or update files (no terminal needed)

Go to your repo on GitHub, click **+** next to the green Code button, then **Upload files**.
Drag your file in. For files inside folders (css/, js/) type the path in the filename box:
- `css/style.css`
- `js/main.js`

Click **Commit changes**. The site rebuilds in about 1 minute.

---

## How to add a 2026 cohort poster

1. Put the thumbnail image (JPG or PNG) in `assets/posters/`
2. Put the PDF in `assets/posters/`
3. Open `posters.html` and find `id="cohort-2026"`
4. Duplicate the poster card block and fill in the brackets:

```html
<div class="poster-card"
     data-name="First Last"
     data-project="Your Project Title Here"
     data-mentor="Mentor Name · Lab Name"
     data-lab="Lab Name · UCSF"
     data-abstract="2 to 4 sentences describing the question, methods, and findings."
     data-pdf="assets/posters/lastname-2026.pdf">
  <div class="poster-thumb">
    <img src="assets/posters/lastname-2026-thumb.jpg" alt="Poster thumbnail">
  </div>
  <div class="poster-info">
    <h3>First Last</h3>
    <div class="mentor">Mentor Name · Lab Name</div>
    <div class="topic">Your Project Title Here</div>
    <a href="#" class="poster-link view-poster">View poster</a>
  </div>
</div>
```

---

## How to add a team member

Open `team.html`. Duplicate any `.team-card` block and fill in name, role, and bio.

For a headshot, add an img tag inside `.team-photo`:
```html
<img src="assets/images/firstname-lastname.jpg" alt="Name">
```

---

## How to add the Qualtrics application form

Open `apply.html`. Find this block:
```html
<div class="qualtrics-placeholder">
```
Replace the entire div with:
```html
<iframe
  class="qualtrics-frame"
  src="YOUR QUALTRICS LINK HERE"
  allowfullscreen>
</iframe>
```

To get the link: In Qualtrics go to **Distributions > Anonymous Link**.
To get the embed code: **Distributions > Anonymous Link > Embed**.

---

## UCSF brand colors

| Name       | Hex       | Used for                          |
|------------|-----------|-----------------------------------|
| Navy       | `#052049` | Backgrounds, headings, buttons    |
| Blue Gray  | `#506380` | Secondary text, accents           |
| Cool Gray  | `#B4B9BF` | Borders, muted text               |
| Gray J5    | `#E1E3E5` | Card borders, dividers            |
| Gray I6    | `#F2F3F4` | Page background                   |
| White      | `#FFFFFF` | Card backgrounds                  |
