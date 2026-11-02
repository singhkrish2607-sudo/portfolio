# Krish Singh — Portfolio Website

A personal developer portfolio for **Krish Singh**, SQL Developer & Data Analyst. Built with a modern neo-brutalist aesthetic, playful retro micro-interactions, smooth animations, and responsive layouts.

![Portfolio Banner](./og-image.jpg)

---

## ⚡ Tech Stack

- **Core & Frameworks**: Single-file HTML5 & Vanilla JavaScript + Modular React 18 / Vite architecture
- **Styling**: Tailwind CSS, CSS Custom Variables (`oklch`), Custom Neo-brutalist Shadows & Borders
- **Typography**: [Bricolage Grotesque](https://fonts.bunny.net/css?family=bricolage-grotesque:800,600) (display/headlines) & [Satoshi](https://fonts.bunny.net/css?family=satoshi:400,500,700) (body)
- **Icons**: [Lucide React](https://lucide.dev/) & Hand-crafted SVG micro-illustrations
- **Animations**: Magnetic button interactions, custom dual follower cursor, interactive modals, responsive drawers

---

## ✨ Features & Sections

- **Header / Navigation**: Fixed blurred navigation bar with animated scribble hover underlines and mobile menu drawer.
- **Hero Section**: 
  - Dynamic status badge: `✨ Hey, I'm`
  - High-impact display typography with neon scribble underline
  - Character illustration with realistic ambient drop shadows
  - Floating badges (`Let’s query something awesome!`) & starburst tags
  - Direct download for `Resume.pdf` and smooth scroll to projects
- **Projects Section ("Things I’ve built")**:
  - 3-column responsive card grid with playful tilt angles and masking tape accents
  - 6 featured projects with live GitHub links:
    1. **Bank Management System** (`Python · MySQL`)
    2. **Bus Booking Data Analysis** (`MySQL`)
    3. **RAG Chatbot** (`Python · RAG`)
    4. **DataVision AI** (`Python · AI`)
    5. **Self-Correcting Code Agent** (`Python · AI Agent`)
    6. **Zepto Sales Analysis** (`MySQL`)
  - Full modal dialogs for individual project inspection and an "All Projects" grid modal.
- **Experience Section ("Where I’ve worked")**:
  - **SQL Developer and Trainer** at *Cupule Technologies Pvt. Ltd.* (Sep 2024 – Present)
  - **Data Analyst Intern (6 months)** at *Cupule Technologies Pvt. Ltd.* (Mar 2024 – Sep 2024)
  - **Education Card**: B.Sc. in Mathematics, Bundelkhand University (2024)
- **Skills Section ("Tools I work with every day")**:
  - Interactive badges for MySQL, PostgreSQL, Joins/CTEs/Window Functions, Python, Matplotlib & Reporting, Data Quality & Cleaning, and RAG/LangChain/LangGraph.
- **About Me ("Hi, I’m Krish — I turn data into answers.")**:
  - Tilted photo card with masking tape and `That’s me!` badge
  - Key statistics: `2+` Years in SQL, `60-70` Learners mentored, `6` GitHub projects
  - Expandable drawer with detailed background and achievements
- **Contact & Footer ("Have data to untangle? Let’s talk.")**:
  - High-contrast CTA card with direct email action
  - Social profiles (LinkedIn, GitHub) and quick-access resume download button

---

## 📁 Repository Structure

```text
├── index.html              # Standalone, single-file deployable website (Zero build required)
├── Resume.pdf              # Resume document (linked throughout site)
├── favicon.svg             # KS Monogram SVG Favicon
├── og-image.jpg            # Open Graph social preview banner
├── manifest.webmanifest    # PWA web manifest
├── img/                    # Project thumbnails and character art
│   ├── krish-character.png
│   ├── krish.jpg
│   └── project-1.png ... project-6.png
├── public/                 # Static asset mirror for Vite
├── src/                    # Modular React Architecture
│   ├── App.jsx             # Main application assembler
│   ├── index.css           # Global theme variables & Tailwind setup
│   ├── main.jsx            # React root mounting
│   ├── components/         # Modular section components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Cursor.jsx
│   │   └── Decorations.jsx
│   └── data/
│       └── portfolioData.js
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Option 1: Standalone HTML (Zero Dependencies)
Simply open `index.html` in any modern web browser or serve it directly via GitHub Pages, Vercel, or Netlify.

### Option 2: Modular React (Vite)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

---

## 📬 Contact & Connect

- **Email**: [singh.krish2003@gmail.com](mailto:singh.krish2003@gmail.com)
- **GitHub**: [@singhkrish2607-sudo](https://github.com/singhkrish2607-sudo)
- **LinkedIn**: [Krish Singh](https://www.linkedin.com/in/krish-singh-688884320/)

---

© 2026 Krish Singh. All rights reserved.
