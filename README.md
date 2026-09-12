# Irfan Alkan — Personal Cybersecurity Portfolio

A high-performance, enterprise-grade personal cybersecurity portfolio website built for **Irfan Alkan** (SOC Team Lead & Senior SOC Analyst). 

Designed specifically for recruiters, hiring managers, and technical interviewers reviewing Security Operations Center (SOC), Incident Response (IR), and Detection roles.

- **Live Production URL**: [https://irfanalkan23.github.io](https://irfanalkan23.github.io)
- **Repository Name**: `irfanalkan23.github.io`
- **Target Work Model**: Fully Remote (Candidates based in Türkiye)

---

## Technology Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / Zero-JS static HTML by default)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strictly typed content layer)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Sophisticated enterprise dark palette, subtle cyan/blue accents, zero hacker cliches)
- **Deployment**: [GitHub Pages User Site](https://pages.github.com/) via automated [GitHub Actions](https://github.com/features/actions)
- **SEO & Metadata**: Open Graph, Twitter Cards, Schema.org `Person` JSON-LD, `robots.txt`, and auto-generated `sitemap-index.xml`

---

## Key Features

1. **Enterprise Aesthetic**: Sophisticated slate/navy theme with subtle cybersecurity telemetry motifs without gimmicks (no green Matrix rain, no skulls, no fake terminal cliches).
2. **Career Progression Timeline**: Detailed vertical career milestones at CYDEO across 4 progressive roles (Intern → L1 → L2 → Team Lead / Instructor).
3. **SOC Experience Metrics**: Clear, conservative metrics capturing ~300 alerts investigated, ~200 QRadar offenses, ~100 Splunk searches, and ~200 analysts mentored.
4. **Categorized Skills**: Clean categorized cards for SIEM, EDR/Endpoint, Incident Response, Network Security, Systems, Detection Analysis, and Framework Familiarity.
5. **Practical Project Showcase**:
   - **SOC Home Lab**: Complete virtual detection lab architecture flow (Kali → pfSense → Windows Server/AD → Sysmon → Splunk → Detection).
   - **Security+ Test Engine**: Independent multi-platform Flutter app deployed on Firebase Hosting with ~1,107 questions and CompTIA trademark disclaimer.
6. **Technical Leadership & Mentoring**: Highlighted instructional coverage across ~20 cohorts and escalation guidance.
7. **Transparent Certifications**: Accurate status labeling (RangeForce Active, CompTIA Security+ Historical Expired June 2025, CompTIA CySA+ In Progress).
8. **Privacy-Conscious Education**: Clean institutional degrees without age-signaling graduation dates or fabricated metrics.
9. **Accessibility & Performance**: WCAG AA contrast, keyboard navigation, visible focus rings, `prefers-reduced-motion` compliance, and skip-to-content link.

---

## Local Development

### Prerequisites
- Node.js `22.x` or `24.x`
- npm `10.x` or higher

### Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Type check & build static production output
npm run build

# 4. Preview production build locally
npm run preview
```

The dev server will launch at `http://localhost:4321/`.

---

## GitHub Pages Deployment

This website is designed and configured as a **GitHub Pages User Site**.

### Crucial Requirement: Repository Name
To serve the site at the root domain `https://irfanalkan23.github.io/` without any subfolder prefix, the GitHub repository MUST be named exactly:
```
irfanalkan23.github.io
```

### Automatic Deployment via GitHub Actions
An automated GitHub Pages workflow is configured at `.github/workflows/deploy.yml`.

Whenever changes are pushed to the `main` branch, the workflow:
1. Checks out the repository.
2. Sets up Node.js with caching.
3. Installs clean dependencies via `npm ci`.
4. Executes `npm run build` to generate static files in `/dist`.
5. Deploys the static assets directly to GitHub Pages.

### Enabling GitHub Pages in Repository Settings
1. Navigate to your repository on GitHub: `https://github.com/irfanalkan23/irfanalkan23.github.io`
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push your code to the `main` branch:
   ```bash
   git add .
   git commit -m "Initial production release of cybersecurity portfolio"
   git branch -M main
   git remote add origin https://github.com/irfanalkan23/irfanalkan23.github.io.git
   git push -u origin main
   ```
5. Your portfolio will be live at `https://irfanalkan23.github.io/` within 2 minutes.

---

## Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg               # Vector shield cybersecurity favicon
│   ├── robots.txt                # Crawler directives & sitemap pointer
│   ├── images/
│   │   ├── profile.jpg           # Place your real professional headshot here
│   │   └── og-preview.svg        # Social sharing Open Graph banner
│   └── resume/
│       └── Irfan_Alkan_Cybersecurity_Resume.pdf  # Downloadable resume PDF
├── src/
│   ├── components/               # Modular UI components
│   │   ├── About.astro
│   │   ├── BackToTop.astro
│   │   ├── Certifications.astro
│   │   ├── Contact.astro
│   │   ├── Education.astro
│   │   ├── ExperienceTimeline.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Leadership.astro
│   │   ├── Metrics.astro
│   │   ├── Navbar.astro
│   │   ├── ProfilePhoto.astro
│   │   ├── Projects.astro
│   │   ├── SectionHeading.astro
│   │   ├── SEO.astro
│   │   └── Skills.astro
│   ├── data/                     # Content layer (edit without touching HTML)
│   │   ├── config.ts             # Central configuration & placeholders
│   │   ├── profile.ts            # Bio, headline, remote preferences
│   │   ├── metrics.ts            # SOC operational metrics
│   │   ├── experience.ts         # Career progression at CYDEO
│   │   ├── skills.ts             # Grouped technical competencies
│   │   ├── projects.ts           # Featured projects data & architecture
│   │   ├── leadership.ts         # Mentorship & instruction pillars
│   │   ├── certifications.ts     # Credentials & verification status
│   │   └── education.ts          # Academic degrees
│   ├── layouts/
│   │   └── Layout.astro          # Root layout with SEO and global shell
│   ├── pages/
│   │   └── index.astro           # Assembled single-page application
│   └── styles/
│       └── global.css            # Tailwind directives, theme variables, cyber styling
├── astro.config.mjs              # Astro configuration (site URL, sitemap)
├── package.json
└── tsconfig.json
```

---

## Customization Guide

All personal and technical content is isolated in the `src/data/` directory so you never have to edit component markup to update your information.

### 1. Central Configuration (`src/data/config.ts`)
Update your email, social links, and repository links:
```typescript
export const siteConfig = {
  social: {
    linkedin: "https://www.linkedin.com/in/irfan-alkan/",
    github: "https://github.com/irfanalkan23",
    himalayas: "https://himalayas.app/@irfanalkan",
    email: "your.real.email@example.com", // <-- Update this
  },
  projects: {
    socHomeLabRepoUrl: "https://github.com/irfanalkan23/soc-home-lab", // <-- Update when ready
    securityPlusTestEngineRepoUrl: "https://github.com/irfanalkan23/secplus-test-engine", // <-- Update when ready
    securityPlusTestEngineLiveUrl: "https://secplus-test-engine.web.app/",
  }
};
```

### 2. Replacing Profile Photo
- Save your square professional photo as `profile.jpg`.
- Place it at: `/public/images/profile.jpg`.
- The site will automatically display it. If the image is not found, the website gracefully falls back to an elegant neutral vector shield monogram.

### 3. Replacing Resume PDF
- Export your final cybersecurity resume as a PDF named `Irfan_Alkan_Cybersecurity_Resume.pdf`.
- Place it at: `/public/resume/Irfan_Alkan_Cybersecurity_Resume.pdf`.
- All "Download Resume" buttons across the Navbar, Hero, Contact, and Mobile Menu link to this file.

### 4. Adding a New Project
Open `src/data/projects.ts` and append a new object to the `projectsData` array:
```typescript
{
  id: "qradar-detection-usecases",
  title: "QRadar Detection Engineering Rules",
  badge: "SIEM Detection",
  summary: "A curated repository of custom QRadar AQL rules and correlation logic for detecting authentication attacks.",
  description: "Detailed description of the detection rules, log source mappings, and false-positive reduction strategies...",
  technologies: ["IBM QRadar", "AQL", "Windows Event Logs", "MITRE ATT&CK"],
  keyActivities: [
    "Authored custom Ariel queries for detecting credential dumping",
    "Tuned baseline thresholds to eliminate false positives"
  ],
  githubUrl: "https://github.com/irfanalkan23/qradar-detections",
  liveUrl: "https://...", // optional
}
```

---

## Future Custom Domain Setup

If you later choose to use a custom domain such as `irfanalkan.com` or `irfanalkan.dev`:

1. **Purchase Domain**: Register your domain with any registrar (Cloudflare, Namecheap, Google Domains/Squarespace, etc.).
2. **Configure DNS Records** at your domain registrar:
   - For an apex domain (`irfanalkan.com`):
     - Add 4 `A` records pointing to GitHub Pages IP addresses:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
   - For `www` or subdomain (`www.irfanalkan.com` or `irfanalkan.dev`):
     - Add a `CNAME` record pointing to `irfanalkan23.github.io.`.
3. **Configure Domain in GitHub**:
   - In your repository, go to **Settings** > **Pages**.
   - In **Custom domain**, enter your domain name (e.g. `irfanalkan.com`) and click **Save**.
   - Check the box for **Enforce HTTPS** (certificate generates automatically within a few minutes).
4. **Update Astro Configuration**:
   - In `astro.config.mjs`, update `site`:
     ```javascript
     export default defineConfig({
       site: 'https://irfanalkan.com', // your new domain
       // ...
     });
     ```
   - In `src/data/config.ts`, update `siteUrl` and `canonicalUrl` to `https://irfanalkan.com`.
5. Commit and push changes to `main`.

---

## Before Publishing Checklist

Before deploying your portfolio publicly, review and replace these configuration values:

- [ ] **Email Address**: Replace `"YOUR_EMAIL_HERE"` with your real contact email in `src/data/config.ts`.
- [ ] **Profile Photo**: Place your headshot at `/public/images/profile.jpg`.
- [ ] **Resume PDF**: Replace the placeholder at `/public/resume/Irfan_Alkan_Cybersecurity_Resume.pdf` with your actual resume PDF.
- [ ] **SOC Home Lab Repo**: In `src/data/config.ts`, replace `"TODO_SOC_HOME_LAB_REPOSITORY_URL"` with the public GitHub URL once published.
- [ ] **Security+ Test Engine Repo**: In `src/data/config.ts`, replace `"TODO_SECURITY_PLUS_TEST_ENGINE_REPOSITORY_URL"` with the public GitHub repository URL if public.
- [ ] **GitHub Pages Setting**: Ensure GitHub Pages source is set to **GitHub Actions** in repository settings.

---

## Recommended GitHub Repository Topics

Add these topics in the GitHub repository "About" settings to maximize recruiter discoverability:
```
cybersecurity
portfolio
soc
security-operations
incident-response
astro
typescript
tailwindcss
```
