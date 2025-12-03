# Anas Elkhodary - Portfolio Website

A modern, professional portfolio website showcasing my expertise in Product Building, AI Engineering, and SaaS applications.

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-ff69b4?style=flat-square)

## 🚀 Live Demo

**Production**: [https://anaselkhodary.vercel.app](https://anaselkhodary.vercel.app)

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations and micro-interactions
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **🌓 Dark Mode**: Toggle between light and dark themes with smooth transitions
- **⚡ Performance Optimized**: Built with Next.js 15 for optimal performance and SEO
- **🎭 Smooth Animations**: Powered by Framer Motion for delightful user experience
- **📊 Project Showcase**: 6 production-ready projects with detailed information
- **📈 Dynamic Stats**: Project statistics automatically calculated from data source
- **📄 Interactive Resume**: Professional resume page with PDF download functionality
- **✉️ Contact Form**: Functional email contact form with Web3Forms integration
- **🔍 SEO Optimized**: Complete metadata, OpenGraph, and JSON-LD structured data
- **📈 Analytics**: Google Analytics integration for visitor tracking

## 📋 Projects Featured

1. **SavetyAI Website** - AI-powered cybersecurity platform with modern design ([savety.ai](https://savety.ai))
2. **SalesBreach PRO** - Enterprise email marketing automation (24/7 Production)
3. **Sales Master** - Multi-tenant SaaS platform with advanced client management
4. **SDS Automation** - Production RAG email system with 99.9% uptime
5. **IKRAA + OOLA** - Unified Arabic learning platform with 2 apps, full backend, Stripe payments ([app.oo-la.com](https://app.oo-la.com))
6. **AI2GO Education Analytics** - Government-scale education data unification platform ([edu.ai2go.vip](https://edu.ai2go.vip))

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 15.5.6 with App Router
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 11.x
- **UI Components**: Custom components with glassmorphism effects

### Features & Integrations
- **Email**: Web3Forms API
- **Analytics**: Google Analytics (gtag.js)
- **Theme**: Custom dark mode with localStorage persistence
- **Icons**: Heroicons and custom SVG icons

### Development Tools
- **Linting**: ESLint with Next.js config
- **Package Manager**: npm
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/AnasElkhodary-69/Portfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Web3Forms Configuration
WEB3FORMS_KEY=your_web3forms_access_key_here

# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Getting API Keys

- **Web3Forms**: Get your free access key at [https://web3forms.com](https://web3forms.com)
- **Google Analytics**: Create a GA4 property at [https://analytics.google.com](https://analytics.google.com)

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server on http://localhost:3000

# Production
npm run build        # Build optimized production bundle
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint for code quality checks
```

## 🎨 Key Sections

### Hero Section
- Eye-catching introduction with animated gradient background
- Call-to-action buttons
- Dynamic statistics showcase
- Smooth scroll indicator

### Featured Projects
- Filterable project grid by category
- Project cards with hover effects
- Live status badges
- Tech stack tags
- Direct links to live projects

### How I Work
- 3-step process visualization
- Animated progress indicators
- Interactive cards with hover effects
- Clear workflow explanation

### About Me
- Professional background
- Skills & technologies categorized
- Experience highlights
- Achievement statistics

### Resume (`/resume`)
- **Professional Layout**: Clean, organized resume with all work experience, projects, and skills
- **Direct PDF Download**: One-click download generates optimized PDF file
- **Smart PDF Generation**:
  - Uses html2canvas and jsPDF for client-side PDF generation
  - Automatically expands content to full A4 width (210mm) during capture
  - JPEG compression (95% quality) for optimal file size (~500KB-1MB)
  - Custom page height to fit all content without cutting or page breaks
  - Zero margins for full-width professional appearance
  - Scale 2x for high-quality text rendering
- **Comprehensive Content**:
  - Professional summary
  - Work experience (SalesBreach PRO, Sales Master, SDS Automation)
  - Featured projects (SavetyAI, IKRAA + OOLA, AI2GO Education Analytics)
  - Technical skills organized by category
  - Education and key achievements
  - Dynamic statistics from project data
- **Responsive Design**: Looks great on all devices
- **Dark Mode Support**: Seamlessly integrates with portfolio theme

### Contact
- Functional email form
- Social media links
- Professional contact information
- Form validation

## 🌓 Dark Mode

The portfolio features a fully functional dark/light theme toggle with:
- Manual theme switching via toggle button
- System preference detection on first visit
- LocalStorage persistence across sessions
- Smooth transitions between themes
- Consistent styling across all sections

## 📱 Responsive Design

Optimized breakpoints for all devices:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components adapt seamlessly across screen sizes with mobile-first approach.

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AnasElkhodary-69/Portfolio)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables (`WEB3FORMS_KEY`, `NEXT_PUBLIC_GA_ID`)
4. Deploy automatically!

### Manual Deployment

```bash
# Build production bundle
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
Portfolio/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── projects/            # Dynamic project pages
├── components/              # React components
│   ├── Hero.tsx            # Hero section
│   ├── Projects.tsx        # Projects showcase
│   ├── HowIWork.tsx        # Process section
│   ├── About.tsx           # About section
│   ├── Contact.tsx         # Contact form
│   ├── Navigation.tsx      # Navbar with scroll effects
│   ├── ThemeProvider.tsx   # Dark mode context
│   └── ThemeToggle.tsx     # Theme toggle button
├── public/                  # Static assets
│   └── images/             # Project screenshots
├── data/                    # Data files
│   └── projects.ts          # Projects data & dynamic stats utility
├── .env.local              # Environment variables (create this)
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies
```

## 🔑 Key Features Explained

### Dynamic Project Statistics
The portfolio uses a single source of truth (`data/projects.ts`) for all project data. Statistics like total projects, live deployments, and technologies are automatically calculated:
- Hero section stats update automatically when projects change
- About section metrics stay in sync
- Resume key metrics reflect actual project count
- No manual updating needed across multiple files

### Performance Optimizations
- Image optimization with Next.js Image component
- Lazy loading for components
- Optimized fonts with next/font
- Minimized CSS and JavaScript bundles

### SEO Features
- Complete metadata configuration
- OpenGraph tags for social sharing
- Twitter Card integration
- JSON-LD structured data
- Canonical URLs
- Sitemap generation

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- Proper heading hierarchy

## 📧 Contact

- **Email**: anaselkhodary69@gmail.com
- **GitHub**: [@AnasElkhodary-69](https://github.com/AnasElkhodary-69)
- **LinkedIn**: [Anas Elkhodary](https://www.linkedin.com/in/anas-elkhodary)
- **Facebook**: [Anas Radwan](https://www.facebook.com/anas.radwan.930838/)
- **Website**: [https://anaselkhodary.vercel.app](https://anaselkhodary.vercel.app)

## 📄 License

© 2025 Anas Elkhodary. All rights reserved.

This project is created for portfolio purposes. Feel free to fork and use as inspiration, but please give credit.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For seamless deployment platform
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For beautiful animations
- **Web3Forms** - For simple email service
- **Heroicons** - For beautiful icon set

---

Built with ❤️ by Anas Elkhodary
