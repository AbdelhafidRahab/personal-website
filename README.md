<div align="center">
  <h1 align="center">🚀 Abdelhafid Rahab - Personal Website</h1>
  <p align="center">Personal portfolio built with Next.js</p>
  
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
  <img src="https://img.shields.io/badge/Security-A%2B-success?style=for-the-badge" alt="Security" />
  <img src="https://img.shields.io/badge/A11y-WCAG_2.1_AA-green?style=for-the-badge" alt="Accessibility" />
</div>

<br />

## 📖 Overview

Welcome to the source code for my personal website. Rather than being a simple static page, this repository acts as a blueprint for **enterprise frontend architecture**. It was strategically modernized to meet the rigorous engineering standards (Performance, Accessibility, Testing, and Security) mandated by top-tier tech companies.

```
src/
├── app/               # Next.js App Router & API routes
├── features/          # Feature-Sliced Domains
│   ├── projects/
│   │   ├── components/# View Layer
│   │   └── services/  # Data/Model Layer
├── components/        # Shared, dumb UI components (Navbar, Footer, etc.)
└── lib/               # Utilities, Schemas, i18n
```

### 1. Code Quality & Formatting

- **Prettier** & **ESLint** configured flawlessly to maintain stylistic consistency.
- **Husky & lint-staged** prevent any unformatted or buggy code from ever being committed to the codebase.
- Enforced strict mode in **TypeScript (v5)**.

### 2. Testing Infrastructure

- **Jest** and **React Testing Library** are integrated to ensure components mount, logic behaves accurately, and UI behaves exactly as expected.
- _Run tests:_ `npm run test`

### 3. CI/CD Ecosystem

- A robust **GitHub Actions** pipeline automatically triggers on all Pull Requests and merges.
- Pipeline simultaneously evaluates TypeScript types, lints formatting, and verifies the Next.js production build output.

### 4. Security

- HTTP Security Headers explicitly configured in `next.config.ts` enforcing **Strict-Transport-Security (HSTS), XSS-Protection, and Frame-Options (clickjacking mitigation)**.
- Form inputs validated backend-side utilizing **Zod schemas** shielding against prototype pollution.

### 5. Performance & SEO Edge

- Perfect accessibility audits mapped to WCAG 2.1 AA conventions.
- Next-Intl (i18n) utilized for scalable internationalization.
- Image lazy loading & proper `<meta />` mapping optimized for exceptional Core Web Vitals.

## 🚀 Local Development Setup

Clone the repository and spin up the development environment locally:

```bash
# 1. Install dependencies (Node 20+ required)
npm install

# 2. Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📮 Contact & Contributions

This open-source repository serves as both my portfolio and an reference material.

**Owner:** Abdelhafid Rahab
