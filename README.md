# Bhargav & Abhizna — Engagement Invitation

A premium, hand-crafted digital engagement invitation website for Bhargav Makina and Abhizna Lankoji, combining traditional South Indian artistry with elegant, modern web design.

## Overview

This is a fully responsive, animated engagement invitation built with:

- **React** + **TypeScript** for maintainability
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for elegant, accessible styling
- **Motion** for smooth, respectful animations
- **Original SVG illustrations** for decorative elements
- **Bilingual content** (Telugu & English)

### Features

- **Animated envelope opening** — An elegant interactive introduction
- **Bilingual invitations** — Telugu headings with English details
- **Countdown timer** — Days, hours, minutes, and seconds until the event
- **Event details** — Date, time, venue with Google Maps directions
- **Engagement & dinner** — Presented as a unified celebration
- **WhatsApp sharing** — Easy sharing of the invitation URL
- **Calendar integration** — Add to calendar functionality
- **Music control** — Optional background music (play/pause)
- **Photo gallery** — Lightbox viewer for moments
- **Mobile-first design** — Beautiful on all screen sizes
- **Accessibility** — Keyboard navigation, reduced-motion support, semantic HTML

## Setup

### Requirements

- Node.js 20+ and npm

### Installation

```bash
npm install
```

### Development

Run the local development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Production Build

Verify everything builds correctly:

```bash
npm run build
npm run preview
```

The production build is optimized and ready for deployment.

## Editing the Invitation

All invitation details are centralized in a single configuration file. To update engagement details, family names, messages, or theme colors:

### Edit `src/data/engagement.ts`

This file contains:

- **Couple names** — English and Telugu versions
- **Event details** — Date, time, title, time zone
- **Venue information** — Name, address, and Google Maps URL
- **Messages** — English and Telugu copy for all sections
- **Family details** — Optional family names and greetings
- **Theme colors** — Ivory, gold, maroon, and green palette
- **Gallery images** — Photo file references
- **Background music** — Audio file path (optional)
- **SEO metadata** — Page title and description

All text is driven by this configuration. Changes here automatically update the entire website.

## Adding Background Music

The invitation supports optional traditional instrumental background music.

### Add Music

1. Place your music file in `src/assets/` (e.g., `src/assets/engagement-music.mp3`)
2. Update the `music` field in `src/data/engagement.ts`:
   ```typescript
   music: '/engagement-music.mp3'
   ```
3. The music control will appear on the website with play/pause controls

### Music Requirements

- Format: MP3, WAV, OGG, or WEBP (browser-supported audio)
- The audio will not autoplay
- A visible play/pause button appears when music is configured
- The audio loops continuously while playing

## Adding Photos to the Gallery

To include engagement photos:

1. Place image files in `src/assets/gallery/` (JPEG, PNG, WEBP, or AVIF)
2. Add entries to the `gallery` array in `src/data/engagement.ts`:
   ```typescript
   gallery: [
     { file: 'photo-1.jpg', alt: 'Description of photo' },
     { file: 'photo-2.jpg', alt: 'Another photo' },
   ]
   ```
3. Images will appear in a responsive grid with a lightbox viewer

## Deployment

This is a static site with no backend. It's ready to deploy to any static hosting service.

### Cloudflare Pages (Recommended)

Cloudflare Pages offers fast, free hosting with automatic deployments from GitHub.

#### Step 1: Create a GitHub Repository

```bash
git init
git add .
git commit -m "Initial engagement invitation"
git branch -M main
git remote add origin https://github.com/yourusername/engagement-invitation.git
git push -u origin main
```

#### Step 2: Deploy to Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Sign in or create a free account
3. Click **Create a project** → **Connect to Git**
4. Select your GitHub repository
5. Configure build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click **Save and Deploy**

Your invitation will be live at a Cloudflare-generated URL (e.g., `https://engagement-invitation.pages.dev`).

#### Step 3: Custom Domain (Optional)

To use a custom domain (e.g., `bhargav-abhizna.com`):

1. In Cloudflare Pages project settings, go to **Custom domains**
2. Click **Add custom domain**
3. Follow the DNS setup instructions
4. Your invitation will be available at your custom domain

### Other Static Hosting Services

The site builds to the `dist/` folder and works with:

- **Vercel** — `vercel deploy`
- **Netlify** — Drag-and-drop `dist/` folder or connect GitHub
- **GitHub Pages** — Push to `gh-pages` branch
- **AWS S3 + CloudFront** — Upload `dist/` contents
- **Your own server** — Copy `dist/` to your web root

## Sharing the Invitation

Once deployed, share the public URL:

- **Copy & paste** — Share the URL directly in messages
- **WhatsApp** — Click the WhatsApp button on the site
- **Email** — Send the URL in an email
- **Social media** — Post the link on your profiles
- **QR code** — Generate a QR code pointing to your URL (free QR code generators available online)

## Design Details

### Color Palette

- **Ivory** (#FFF9F0) — Background and primary text
- **Warm Paper** (#F5EBDD) — Section backgrounds
- **Antique Gold** (#B08D57) — Decorative elements
- **Soft Gold** (#D8BD83) — Secondary accents
- **Deep Maroon** (#641E2B) — Headings and text
- **Muted Green** (#4E624B) — Subtle accents

### Typography

- **Display font** — Cormorant Garamond (English display)
- **Body font** — Jost (English body text)
- **Telugu font** — Noto Serif Telugu (Telugu text)

All fonts are loaded from Google Fonts with fallbacks for offline use.

### Decorative Elements

Original SVG illustrations include:

- Temple arch (gopuram-inspired)
- Mango-leaf toranam
- Jasmine flowers
- Lotus motifs
- Kolam patterns
- Brass lamps
- Ornamental dividers
- Wax seal elements

All illustrations are scalable, lightweight, and responsive.

## Browser Support

Tested and working on:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Accessibility

The invitation is built with accessibility in mind:

- ✓ Semantic HTML structure
- ✓ Keyboard-navigable (Tab, Enter, Arrow keys)
- ✓ Visible focus states
- ✓ Appropriate alt text for illustrations
- ✓ Support for `prefers-reduced-motion`
- ✓ ARIA labels and roles
- ✓ High contrast text
- ✓ Touch-friendly interactive areas

## Performance

- Optimized build: ~392 KB JavaScript, ~24.66 KB CSS (gzipped)
- Fast initial load and smooth interactions
- Lazy-loaded images
- Minimal external dependencies

## License

MIT. See [LICENSE](LICENSE) for details.

## Support & Contributing

This is a bespoke invitation created for Bhargav & Abhizna. If you'd like to customize it further or report issues, please review the source code or contact the maintainer.

---

**Made with ❤️ for a beautiful beginning.**
