# in11min — Personal YouTube Channel Site

**Author:** Nitin (GitHub: `nitinscodehub`)
**YouTube:** [in11min](https://www.youtube.com/@in11min)

---

## Project overview

`in11min-site` is a simple, fast, static website for the **in11min** YouTube channel. It hosts notes, downloads, and quick links for viewers and students who want bite-sized study material and resources.

This repo contains HTML, CSS, JavaScript and a collection of study PDFs used as downloadable notes on the site.

---

## Screenshots

> Replace the placeholders below with actual screenshots you want to show in the README (upload images into the repo and update the paths):

* ![Site screenshot - home]<img width="1912" height="890" alt="Screenshot From 2025-11-13 17-57-17" src="https://github.com/user-attachments/assets/030be582-e3c1-413b-9c96-f34d012cb4c4" />

* ![YouTube screenshot]<img width="1912" height="890" alt="Screenshot From 2025-11-13 17-58-13" src="https://github.com/user-attachments/assets/89e1e0cc-8102-4728-9c96-0e984489a556" />


---

## Live demo

If you enable GitHub Pages for this repo (recommended), your site can be served from:

```
https://nitinscodehub.github.io/in11min-site/
```

*(or a custom domain if configured)*

---

## Features

* Lightweight static site (HTML / CSS / JS) — no backend required.
* Collection of subject-wise notes (PDFs) for quick download.
* Search and dark-mode support (client-side JS).
* Contact form (contact.php) — note: server required for form processing if used.

---

## Installation / Local preview

1. Clone the repo:

```bash
git clone https://github.com/nitinscodehub/in11min-site.git
cd in11min-site
```

2. Open `index.html` in your browser for a local preview. You can also serve it using a static server (recommended):

```bash
# With Python 3
python3 -m http.server 8000
# open http://localhost:8000
```

3. (Optional) If you use the contact form (`contact.php`) and want it to work, host the site on a PHP-capable server or use a simple PHP dev server:

```bash
php -S localhost:8000
```

---

## Notes about large files

Some PDF files in `notes/` are large (>50MB). GitHub displays a warning for big files and recommends using Git LFS for large binary assets.

If you plan to keep adding big PDFs, set up Git LFS:

```bash
# one-time setup
git lfs install
# track PDFs
git lfs track "*.pdf"
git add .gitattributes
git commit -m "Track PDFs with Git LFS"
```

---

## How to deploy on GitHub Pages

1. Go to the repo on GitHub → **Settings** → **Pages**.
2. Under **Source**, choose `main` branch and `/ (root)` folder, then **Save**.
3. Wait 1–2 minutes and your site will be live at `https://nitinscodehub.github.io/in11min-site/`.

---

## File structure (quick)

```
/ (repo root)
├─ index.html
├─ about.html
├─ contact.html
├─ assets/
│  ├─ css/
│  ├─ js/
│  └─ images/
└─ notes/  # PDFs by subject
```

---

## Customization ideas

* Add a `CNAME` file for a custom domain.
* Move large PDFs to an external file host (Google Drive / Dropbox) and link them instead of embedding.
* Add meta tags, Open Graph, and Twitter cards for better sharing.
* Add a simple CI check (GitHub Actions) to validate HTML/CSS or run a spell-check on content.

---

## Credits

Built and maintained by **Nitin** — GitHub: `nitinscodehub`.
YouTube: [https://www.youtube.com/@in11min](https://www.youtube.com/@in11min)

---

## License

Add a license file (`LICENSE`) if you want a specific license. Suggested: **MIT** for open web resources.

---

## Contact

* GitHub: [https://github.com/nitinscodehub](https://github.com/nitinscodehub)
* YouTube: [https://www.youtube.com/@in11min](https://www.youtube.com/@in11min)
* Email: (add your email here if you want viewers to contact you)

*README generated for the `in11min-site` project. Replace placeholder images and contact info before publishing.*
