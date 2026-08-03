# Benedict Tanghal — React Portfolio

A responsive, accessible single-page portfolio built with React, Vite, Tailwind CSS, and restrained Framer Motion animations. It includes persistent light/dark themes, an empty-state-driven projects area, a browser-only profile photo uploader, and a validated contact form.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. Create a production build with `npm run build` and preview it with `npm run preview`.

## Personalize links and contact details

GitHub and email values use the repository's existing local Git configuration. Update them in `src/components/Hero.jsx` and `src/components/Contact.jsx` if needed. Replace the generic LinkedIn URL in both files with your public profile URL before publishing.

## Profile photo

To set the permanent public portrait, add a photo at `public/profile.jpg`. The app tries that path by default and automatically shows the `BT` initials placeholder if the file is absent.

Visitors can also use **Upload Profile Photo** to preview a JPG, PNG, or WebP image up to 5 MB. This copy is saved in that visitor's browser using IndexedDB; it persists on refresh in the same browser but does **not** update the deployed website or change the photo for other visitors. Use `public/profile.jpg` for the public photo.

## Add projects

Edit `src/data/projects.js` and add objects to the exported `projects` array. The file contains the complete supported shape: title, description, technologies, image, GitHub link, and live demo link. Until an item is added, the polished “Projects coming soon” state is shown. Place project images in `public/projects/` and reference them as `/projects/filename.webp`.

## Configure the contact form

With no configuration, a valid submission opens the visitor's email app using a `mailto:` fallback. For direct delivery, create a Formspree form and add a `.env.local` file:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

For Vercel, add the same `VITE_FORMSPREE_ENDPOINT` environment variable in the project settings, then redeploy. The configuration point and fallback email are at the top of `src/components/Contact.jsx`.

## Push to GitHub

Create an empty repository named `react-portfolio`, then run:

```bash
git add .
git commit -m "Build personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/react-portfolio.git
git push -u origin main
```

If `origin` already exists, update it with `git remote set-url origin <URL>` instead.

## Deploy to Vercel

1. Import the GitHub repository at [vercel.com/new](https://vercel.com/new).
2. Vercel detects Vite automatically. Confirm build command `npm run build` and output directory `dist`.
3. Add `VITE_FORMSPREE_ENDPOINT` under Environment Variables if using Formspree.
4. Select **Deploy**.

No backend, database, redirects, or server functions are required.

## Project structure

```text
public/
  favicon.svg
  profile.jpg              # optional permanent public portrait
src/
  components/
    About.jsx
    Contact.jsx
    EmptyProjectsState.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    ProfileImageUploader.jsx
    ProjectCard.jsx
    Projects.jsx
    SectionTitle.jsx
    ThemeToggle.jsx
  data/projects.js
  hooks/
    useLocalStorage.js
    useProfileImage.js
    useTheme.js
  App.jsx
  index.css
  main.jsx
.gitignore
index.html
package.json
postcss.config.js
tailwind.config.js
vite.config.js
```
