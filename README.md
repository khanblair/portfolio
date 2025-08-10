# Akandwanaho Blair — Portfolio

A clean, single-page portfolio showcasing my skills, projects, certifications, and contact info. Built with vanilla HTML, CSS, and JavaScript, featuring theme color switching, dark mode, project filtering, and an accessible image lightbox.

Live site: https://khanblair.github.io/portfolio/

## Features

- Responsive single-page layout: Home, About, Services, Projects, Certifications, Contact
- Typing effect for roles (Typed.js)
- Theme color switcher (5 preset skins in `css/skins/`)
- Light/Dark mode toggle
- Project filtering by technology tags
- Image lightbox for project and certification previews
- Contact form powered by Web3Forms

## Tech stack

- HTML5, CSS3, JavaScript (no framework)
- Font Awesome (icons)
- Typed.js (typing animation)

## Project structure

```
index.html
css/
	style.css
	style_switcher.css
	skins/
		color1.css ... color5.css
js/
	script.js           # Navigation, filters, lightbox, interactions
	style_switcher.js   # Theme color + dark/light toggle
images/               # Screenshots, profile, icons
CV/resume.pdf         # Downloadable CV
```

## Getting started

- Clone/download the repo and open `index.html` in a browser, or serve the folder with any static server (e.g., VS Code Live Server).
- No build step or dependencies are required.

## Customize

1) Profile and links
- Edit name, roles, and social links in `index.html` (Home and About sections).
- Update contact details in the Contact section.

2) Projects grid
- Each project card lives in `index.html` under the `#projects` section.
- Add a new project by duplicating a `.project-item` block. Set a relevant `data-tech` attribute (e.g., `data-tech="flutter supabase dart"`) so filtering works.
- Provide a screenshot in `images/` and update the `<img>` path and alt text.

3) Theme colors
- Five skins are included in `css/skins/` and loaded as `<link class="alternate-style" ... title="colorX" disabled>` in `index.html`.
- The switcher calls `setActiveStyle('colorX')` to enable a skin. To add a new theme, create a new `colorX.css` file and add a corresponding `<link>` tag in `index.html`.

4) Dark mode
- Toggled by the cog/moon button (see `js/style_switcher.js`).
- To start in dark mode by default, add `class="dark"` to `<body>` or set it on page load.

5) Contact form (Web3Forms)
- The form posts to Web3Forms in `index.html` with an `access_key`.
- Replace the placeholder key with your own from https://web3forms.com/ and keep it private. If this repo is public, rotate your key if it was exposed.

## Deployment

- Designed to work on GitHub Pages. Publish the repository in Settings → Pages and point to the `main` branch.
- Any static host (Vercel, Netlify, Surge, etc.) will also work—no server-side code needed.

## Accessibility and UX notes

- Landmarks, alt text, ARIA labels, and keyboard-close for modals are included.
- Images open in a modal with caption; Escape and backdrop click close it.

## Credits

- Typed.js — https://github.com/mattboldt/typed.js
- Font Awesome — https://fontawesome.com/

## License

© 2025 Akandwanaho Blair. All rights reserved. If you intend to reuse or adapt this template, please add attribution or include a suitable license file.