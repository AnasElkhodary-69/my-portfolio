export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  highlights: string[];
  features: string[];
  challenges: string[];
  results: string[];
  status: string;
  link: string | null;
  github: string | null;
  image: string;
  gallery: string[];
}

// Dynamic project statistics - automatically calculated from projects array
export const getProjectStats = (projectsList: Project[]) => {
  const totalProjects = projectsList.length;
  const liveProjects = projectsList.filter(p => p.status === "Live" || p.status === "Production").length;
  const saasProjects = projectsList.filter(p =>
    p.category === "Web Application" ||
    p.shortDescription.toLowerCase().includes("saas") ||
    p.fullDescription.toLowerCase().includes("saas")
  ).length;
  const mobileApps = projectsList.filter(p => p.category === "Mobile App").length;
  const aiProjects = projectsList.filter(p =>
    p.category === "AI Automation" ||
    p.tech.some(t => t.toLowerCase().includes("ai") || t.toLowerCase().includes("mistral"))
  ).length;

  // Get unique technologies across all projects
  const allTech = new Set(projectsList.flatMap(p => p.tech));
  const totalTechnologies = allTech.size;

  return {
    totalProjects,
    liveProjects,
    saasProjects,
    mobileApps,
    aiProjects,
    totalTechnologies
  };
};

export const projects: Project[] = [
  {
    id: "mecano",
    title: "Mecano AI",
    category: "Web Application",
    shortDescription: "AI operating system for auto-repair shops: multi-tenant Shop-OS SaaS, a Claude-powered assistant, and 3 Flutter apps",
    fullDescription: "A full product suite for the auto-repair industry in Ontario and the US, built as a single monorepo. Shop-OS is a multi-tenant SaaS that runs a repair shop end to end — estimates, repair orders, invoices, booking, two-way SMS/email, text approvals and payments — with an AI assistant built on Claude. Around it sit three Flutter apps (a car-owner community app, a voice assistant for technicians, and a parts-delivery driver app), an Astro marketing site, and a data pipeline that has mapped 8,000+ shops and real repair prices.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "PostGIS", "pgvector", "Redis", "Stripe", "Claude AI", "Vercel AI SDK", "LangGraph", "Flutter", "Riverpod", "Astro", "Docker", "Nginx", "Playwright"],
    highlights: [
      "Multi-tenant Shop-OS with Postgres row-level security (tested tenant isolation)",
      "\"Ask MECANO\" assistant built on Claude with the Vercel AI SDK and LangGraph",
      "3 Flutter apps: Community, Voice and Driver",
      "8,126 shops in the directory, 1,890 real prices scraped from 285 shops",
      "Revenue-recovery dashboard showing dollars won back per shop",
      "Canadian tax handling (HST/GST/PST) and USD/CAD billing"
    ],
    features: [
      "Estimates, repair orders, invoices and scheduling with online booking",
      "Two-way SMS/email with customer text approvals",
      "Automated collection of overdue invoices and Stripe payments",
      "Live customer job-tracking page with photos and status timeline",
      "Community app: shop directory, reviews, garage, VIN/plate scan, voice notes, pricing guides",
      "Voice app: on-device speech-to-text with secure pairing-code device linking",
      "Driver app: live GPS, MapLibre maps, scanning, run queues and Firebase push",
      "107 published repair pricing guides backed by 1,307 market price references"
    ],
    challenges: [
      "Guaranteeing one shop can never read another shop's data in a shared database",
      "Grounding an AI assistant in each shop's live operational data",
      "Building and maintaining 3 native apps and a SaaS from one monorepo",
      "Collecting and normalizing real-world repair pricing at scale"
    ],
    results: [
      "Marketing site live at https://mecano.best",
      "Shop-OS and Community app running on staging",
      "8,126 shops mapped with geospatial search (PostGIS)",
      "~15k-line Flutter driver app shipped in 10 days"
    ],
    status: "In Development",
    link: "https://mecano.best",
    github: null,
    image: "/images/mecano-preview.png",
    gallery: []
  },
  {
    id: "muslimoon",
    title: "Muslimoon Platform",
    category: "Web Application",
    shortDescription: "Multi-tenant SaaS for mosques and Islamic communities: mobile app, admin dashboard, donations, and Android TV displays",
    fullDescription: "A complete multi-platform product for mosques and Muslim communities. Organizations manage their mosque from a React admin dashboard, while members use a Flutter mobile app for prayer times, Azan notifications, Quran, Hadith, events, donations and jobs. Donations and event payments run through Stripe Connect, each organization gets its own landing page, and an Android TV app turns any screen in the mosque into a remotely managed display.",
    tech: ["NestJS", "TypeORM", "PostgreSQL 16", "Redis 7", "Socket.IO", "React", "Vite", "Flutter", "Astro", "Kotlin", "Android TV", "Firebase Auth", "Stripe Connect", "Docker", "Nginx", "Cloudflare", "GitHub Actions"],
    highlights: [
      "5 connected apps: backend, admin dashboard, mobile app, TV app, landing pages",
      "~50 backend modules on NestJS",
      "Stripe Connect donations and event payments per organization",
      "RBAC with 5 organization roles + platform admin, and 2FA",
      "Android TV mosque screens with PIN pairing and remote commands",
      "Staging, pre-production and production environments with CI"
    ],
    features: [
      "Prayer times with Azan notifications",
      "Quran, Hadith, duas and Islamic radio",
      "Events, campaigns and donations",
      "Masjid directory with follow and a jobs board",
      "TV displays: playlists, kiosk mode, offline cache, remote control",
      "Per-organization Astro landing pages (SSR)",
      "Live Khutbah translation prototype (Arabic → English)",
      "Error monitoring with GlitchTip and coverage tracking with Codecov"
    ],
    challenges: [
      "Designing multi-tenancy and permissions for many independent organizations",
      "Routing payments to each organization with Stripe Connect",
      "Keeping TV displays reliable offline and controllable remotely",
      "Shipping one product across web, iOS, Android and Android TV"
    ],
    results: [
      "Live at https://muslimoon.online",
      "Admin platform and public API in production",
      "Mobile app at v1.0.9 with iOS production builds",
      "690+ commits over 10 months of active development"
    ],
    status: "Live",
    link: "https://muslimoon.online",
    github: null,
    image: "/images/muslimoon-preview.png",
    gallery: []
  },
  {
    id: "ege-foundation",
    title: "EGE Foundation Website",
    category: "Web Design",
    shortDescription: "Hack recovery and full custom rebuild of the website for EGE Foundation, a Sacramento environmental-leadership nonprofit",
    fullDescription: "EGE Foundation (Eternal Generations Emerging) is a Black-led Sacramento nonprofit building a generational pipeline of environmental leadership through outdoor education, paid workforce training and global exchange for BIPOC youth and families. Its WordPress site had been compromised with hundreds of injected spam posts, a rogue admin account, a backdoor and an unofficial page-builder plugin. I investigated the breach over SSH, rebuilt the site clean on staging with only the content migrated, and delivered a 26-page custom theme with a student learning portal, events with ticketing, forms and donations — then recovered its search presence.",
    tech: ["WordPress", "PHP 8.4", "WP-CLI", "Elementor", "ACF", "Tutor LMS", "The Events Calendar", "Fluent Forms", "Wordfence", "LiteSpeed Cache", "Rank Math", "Cloudflare", "GA4"],
    highlights: [
      "Breach investigated and documented; backdoor and rogue admin removed",
      "486 injected spam posts removed and returned as 410 Gone",
      "26-page custom theme (~17k lines of PHP, CSS and JS)",
      "Accessible (WCAG AA contrast) 15-colour design system",
      "No Google manual action after recovery"
    ],
    features: [
      "Student learning portal with logins (Tutor LMS)",
      "Event calendar with ticketing",
      "7 forms and integrated Zeffy online donations",
      "Security hardening via a must-use plugin, Wordfence and automated backups",
      "Redirect map from old URLs, sitemap, GA4 and Search Console",
      "Task-based admin guide written for the client team"
    ],
    challenges: [
      "Rebuilding clean without carrying any malware from the old install",
      "Recovering SEO after hundreds of spam URLs had been indexed",
      "Handing a non-technical team a site they can run themselves"
    ],
    results: [
      "Live at https://egefocused.org",
      "Clean site launched in about 6 weeks",
      "127 of 134 distinct broken-URL errors resolved as 410",
      "Learning portal launched with its first courses",
      "Ongoing maintenance plan offered after launch"
    ],
    status: "Live",
    link: "https://egefocused.org",
    github: null,
    image: "/images/ege-foundation-preview.png",
    gallery: []
  },
  {
    id: "encarexport",
    title: "EncarExport",
    category: "Web Application",
    shortDescription: "AI-translated marketplace for exporting Korean used cars, in 5 languages on web and mobile",
    fullDescription: "A marketplace that turns Korea's largest used-car listings into an export storefront for international buyers. A Python scraper pulls listings, photos and sold-status from Encar on a schedule, Claude Haiku translates them into English, Arabic, Albanian and Spanish, and a Next.js site and an Expo mobile app present them with currency switching and WhatsApp as the sales channel.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Drizzle ORM", "PostgreSQL", "Tailwind 4", "next-intl", "shadcn/ui", "Python", "Scrapling", "Claude AI", "Expo", "React Native", "Nginx", "PM2", "systemd"],
    highlights: [
      "Automated scraping with sold-car detection and backfill",
      "Listings translated by Claude Haiku into 4 languages",
      "5-language site with right-to-left Arabic",
      "Server-side pricing markup and live currency switching",
      "Watchdog push alerts if data goes stale for 26 hours"
    ],
    features: [
      "Search by make, model and year with advanced filters",
      "Every listing keeps its official Korean inspection report",
      "WhatsApp contact on every car, plus Crisp live chat",
      "Expo mobile app reading the same API, with push notifications",
      "Scheduled scraper jobs via systemd timers",
      "AI-assisted social media marketing workspace"
    ],
    challenges: [
      "Translating technical Korean listings accurately and cheaply at scale",
      "Keeping listings fresh and removing sold cars quickly",
      "Serving the same data consistently to web and mobile"
    ],
    results: [
      "Live at https://encarexport.com",
      "~17k lines across web, mobile and scraper",
      "Self-hosted production with Nginx, PM2 and SSL",
      "Android app built and ready for Play Store"
    ],
    status: "Live",
    link: "https://encarexport.com",
    github: null,
    image: "/images/encarexport-preview.png",
    gallery: []
  },
  {
    id: "negoki",
    title: "NegoKi",
    category: "Web Application",
    shortDescription: "Multi-tenant SaaS for small food businesses: orders, inventory, recipe costing, and reports in 3 languages",
    fullDescription: "A SaaS platform that lets small food businesses run orders, products, stock, recipes, customers and reporting in one place. Each business's data is isolated at the database level, teams get role-based access, and subscriptions are billed through Stripe or Mercado Pago. Built for Brazil, the US and Egypt with English, Portuguese and Arabic, and region detection for language and currency.",
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind 4", "Supabase", "PostgreSQL", "next-intl", "Stripe", "Mercado Pago", "Resend", "React-PDF", "ExcelJS", "Recharts", "Zod", "Vercel"],
    highlights: [
      "Tenant isolation with ~50 Postgres row-level security policies",
      "4 team roles with 25+ granular permissions",
      "Stripe + Mercado Pago subscriptions with verified webhooks",
      "English, Portuguese and Arabic (RTL) with region detection",
      "~25k lines built in one week"
    ],
    features: [
      "Order management with payment and preparation status",
      "Recipe costing with unit conversion and profit per product",
      "Inventory with a full audit trail of stock movements",
      "Customer management and team email invites",
      "PDF and Excel report exports",
      "7-day trial with Starter / Growth / Professional plans",
      "Super-admin panel and installable PWA"
    ],
    challenges: [
      "Enforcing tenant isolation in the database, not just the app",
      "Supporting two payment providers across different markets",
      "Accurate recipe costing across mixed units of measure"
    ],
    results: [
      "Live at https://negoki.vercel.app",
      "13-table schema with row-level security",
      "5 transactional email templates",
      "Evolved from a single-business tool into a multi-tenant SaaS"
    ],
    status: "Live",
    link: "https://negoki.vercel.app",
    github: null,
    image: "/images/negoki-preview.png",
    gallery: []
  },
  {
    id: "crm-outreach-automation",
    title: "CRM & Outreach Automation",
    category: "CRM Automation",
    shortDescription: "GoHighLevel CRM build for a Riyadh-based B2B company: 7 pipelines, ~1,600 leads, and automated email + WhatsApp follow-ups",
    fullDescription: "A full CRM and outreach system for a Riyadh-based B2B company and its sister brand, built on GoHighLevel. I designed 7 sales pipelines with a shared 10-stage process, imported and cleaned ~1,600 leads across Saudi Arabia and the UAE, automated stage-based email and WhatsApp follow-ups, automated contract generation, and set up and protected a dedicated sending domain.",
    tech: ["GoHighLevel", "GHL API v2", "Node.js", "WhatsApp", "Slack API", "cron-job.org", "Playwright", "DNS / Email Auth"],
    highlights: [
      "7 pipelines × 10 stages with ~1,623 contacts",
      "6 published workflows sending 18 automated emails plus WhatsApp",
      "Lead imports with de-duplication via custom Node.js scripts",
      "Email triage: 936 verified, 399 review, 37 risky, 419 no-email",
      "Recovered a sending block by enabling built-in email validation"
    ],
    features: [
      "Stage-based Day 1 / Day 3 email and WhatsApp follow-ups with STOP opt-out",
      "Contract-number generation and auto-filled inbound/outbound contracts",
      "Consolidated 11 workflows into 6 triggered from all pipelines",
      "Dedicated sending domain with DNS setup and warm-up",
      "Booking links for each sales user",
      "Slack attendance bot on a cron schedule"
    ],
    challenges: [
      "Keeping bounce rates safe while emailing cold B2B leads",
      "Designing one workflow set that serves 7 different pipelines",
      "Cleaning inconsistent lead exports before import"
    ],
    results: [
      "Ran in production for ~5 months",
      "Sales team working from one structured CRM instead of spreadsheets",
      "Sending reputation restored after a 9.49% bounce spike",
      "Fully documented with a detailed work log"
    ],
    status: "Production",
    link: null,
    github: null,
    image: "",
    gallery: []
  },
  {
    id: "savety-ai",
    title: "SavetyAI Website",
    category: "Web Design",
    shortDescription: "AI-powered cybersecurity platform website with modern design and performance optimizations",
    fullDescription: "A professional, high-performance landing page for an AI-driven cybersecurity platform. Built with Astro for optimal performance, featuring custom animations, interactive components, and a modern design system.",
    tech: ["Astro 5.13", "Preact", "Tailwind CSS", "Framer Motion", "TypeScript"],
    highlights: [
      "Geometric hero with 3D dark sphere animation",
      "Neural AI theme with gradient effects",
      "Animated testimonials carousel with auto-play",
      "Performance-optimized with code splitting and compression"
    ],
    features: [
      "Custom React/Preact interactive components",
      "Smooth animations using Framer Motion",
      "Responsive design for all devices",
      "SEO optimized with sitemap generation",
      "Dark theme with glassmorphism UI",
      "Real-time trust indicators and social proof"
    ],
    challenges: [
      "Implementing complex 3D sphere animations while maintaining performance",
      "Creating a cohesive neural/AI design system",
      "Optimizing assets and code for fast loading times"
    ],
    results: [
      "90+ Lighthouse performance score",
      "Professional corporate cybersecurity branding",
      "Fully responsive across all devices",
      "Fast loading with static site generation"
    ],
    status: "Live",
    link: "https://savety.ai",
    github: null,
    image: "/images/savety-ai-preview.png",
    gallery: [
      "/images/savety-ai-hero.png",
      "/images/savety-ai-features.png",
      "/images/savety-ai-testimonials.png"
    ]
  },
  {
    id: "salesbreach-pro",
    title: "SalesBreach PRO",
    category: "Web Application",
    shortDescription: "Enterprise email marketing automation platform with real-time tracking and campaign management",
    fullDescription: "A comprehensive Flask-based email marketing platform designed for automated outreach campaigns. Features real-time email tracking, campaign management, webhook integration, and sophisticated email sequencing.",
    tech: ["Flask 2.3", "SQLite", "Brevo API", "APScheduler", "Celery", "Redis", "Bootstrap 5"],
    highlights: [
      "15+ Flask blueprints for modular architecture",
      "Real-time webhook integration with Brevo",
      "Campaign automation with email sequences",
      "Deployed on cPanel with PHP proxy → Gunicorn"
    ],
    features: [
      "Dynamic dashboard with real-time metrics",
      "Campaign management with A/B testing",
      "Automated email sequences with time-based triggers",
      "Contact management with engagement tracking",
      "Webhook integration for email events",
      "Advanced analytics and reporting"
    ],
    challenges: [
      "Implementing reliable webhook processing for real-time events",
      "Creating a scalable email queue system",
      "Deploying Flask app on shared cPanel hosting"
    ],
    results: [
      "Successfully deployed at marketing.savety.online",
      "Processing email campaigns 24/7",
      "Real-time tracking of opens, clicks, bounces",
      "Automated follow-up sequences"
    ],
    status: "Live",
    link: "https://marketing.savety.online",
    github: null,
    image: "/images/salesbreach-preview.png",
    gallery: []
  },
  {
    id: "sales-master",
    title: "Sales Master",
    category: "Web Application",
    shortDescription: "Multi-tenant SaaS platform evolved from SalesBreach with advanced client management",
    fullDescription: "An enterprise-grade multi-tenant SaaS platform for email marketing. Allows managing multiple clients with separate sender configurations, email quotas, subscription tiers, and campaign tracking.",
    tech: ["Flask 2.3", "SQLAlchemy", "Brevo SDK", "Redis", "Celery", "SQLite", "Argon2"],
    highlights: [
      "Multi-tenant architecture with client isolation",
      "Per-client email quotas and configurations",
      "Subscription tiers (basic/pro/enterprise)",
      "12 critical/high security vulnerabilities fixed (Argon2, CSRF, rate limiting, lockout)"
    ],
    features: [
      "Full CRUD client management system",
      "Client-specific sender configurations",
      "Usage tracking and quota enforcement",
      "Campaign inheritance from client settings",
      "Per-campaign unsubscribe system with duplicate-email protection",
      "Campaign data processor mapping 70+ Google Maps sub-categories to industries",
      "Per-client analytics and reporting",
      "Subscription tier management"
    ],
    challenges: [
      "Designing multi-tenant data isolation",
      "Implementing per-client quota enforcement",
      "Migrating from single-tenant to multi-tenant architecture",
      "Hardening auth and forms against CSRF, brute-force and account takeover"
    ],
    results: [
      "Live at https://marketing.ai2go.vip",
      "14 modular route blueprints",
      "Supports unlimited clients with automated quota tracking",
      "Security-hardened with Argon2 hashing, CSRF and security headers"
    ],
    status: "Live",
    link: "https://marketing.ai2go.vip",
    github: null,
    image: "/images/sales-master-preview.png",
    gallery: []
  },
  {
    id: "sds-automation",
    title: "SDS Automation",
    category: "AI Automation",
    shortDescription: "Production RAG email system for Odoo integration running 24/7 with auto-recovery",
    fullDescription: "An intelligent email processing system for SDS company. Automatically receives emails, analyzes them using AI, extracts order details, matches customers in Odoo database, and creates orders automatically. Deployed as a 24/7 daemon service with health monitoring.",
    tech: ["Mistral AI", "Claude AI", "DSPy", "BERT embeddings", "pdfplumber", "Odoo XML-RPC", "pytesseract", "Python"],
    highlights: [
      "24/7 daemon service with auto-recovery",
      "Health monitoring dashboard on port 8080",
      "Incremental Odoo sync (805 customers, 2075 products)",
      "Claude agent orchestrator added for AI order decisions (2026)",
      "Production-ready with 99.9% uptime"
    ],
    features: [
      "AI-powered email analysis with Mistral AI",
      "Claude-based agent for order decisions and customer matching",
      "Hybrid product matching: fine-tuned BERT + token/dimension matching",
      "DSPy-based entity extraction",
      "Smart customer matching with fuzzy logic",
      "Automated order creation in Odoo",
      "PDF and image OCR processing",
      "Telegram notifications",
      "Real-time health monitoring",
      "Feedback loop for continuous improvement"
    ],
    challenges: [
      "Ensuring 24/7 reliability with auto-recovery",
      "Accurate entity extraction from unstructured emails",
      "Handling various email formats and attachments"
    ],
    results: [
      "Processing emails automatically 24/7",
      "Zero downtime with auto-recovery",
      "Real-time Odoo order creation",
      "Health dashboard for monitoring"
    ],
    status: "Production",
    link: null,
    github: null,
    image: "/images/sds-automation-preview.png",
    gallery: []
  },
  {
    id: "oola",
    title: "IKRAA + OOLA",
    category: "Mobile App",
    shortDescription: "Unified Arabic learning platform with 2 apps (Quranic + Modern Arabic), full backend, payments, and admin dashboard",
    fullDescription: "A production-ready unified Arabic learning platform featuring two distinct apps: IKRAA (Quranic Arabic) and OOLA (Modern Standard Arabic). Complete with NestJS backend, PostgreSQL database, native in-app purchases on mobile (Google Play Billing + Apple IAP), Stripe + PayPal checkout on web, Google/Apple OAuth, admin dashboard, and 6-language support. Each app runs on its own domain with separate branding.",
    tech: ["Flutter 3.5+", "NestJS", "PostgreSQL", "TypeORM", "Google Play Billing", "Apple IAP", "Stripe", "PayPal", "Next.js 15", "Google OAuth", "Apple Sign-In", "PM2", "Nginx", "Hetzner"],
    highlights: [
      "2 complete apps with separate backends and dashboards",
      "Full authentication system (Email + Google + Apple OAuth)",
      "Native store purchases: one lifetime product in 170+ countries",
      "Web checkout with Stripe Payment Element, PayPal and Apple Pay",
      "Admin dashboard with user management, refunds and web pricing control",
      "6-language support (English, Arabic, Turkish, French, German, Spanish)",
      "Production on Hetzner with PM2 + Nginx + SSL on separate domains"
    ],
    features: [
      "Interactive letter recognition exercises (31 exercises in OOLA Ch1)",
      "Audio pronunciation for all letters and words",
      "Email verification system with 4-digit codes",
      "Password reset flow with secure tokens",
      "Server-verified in-app purchases with a dedicated IAP backend module",
      "Guest purchases without registration, linked to an account on later sign-in",
      "In-app account deletion (Apple guideline 5.1.1(v))",
      "Multi-language email templates",
      "Guest mode for trial access",
      "Deep linking support (ikraa:// and oola://)",
      "Progress tracking and backend persistence",
      "Rate limiting for security (100 req/min global)"
    ],
    challenges: [
      "Building complete backend infrastructure from scratch",
      "Meeting App Store rules: store billing on mobile while keeping Stripe/PayPal on web",
      "Running separate mobile (store) and web (dashboard) pricing without drift",
      "Creating multi-tenant architecture supporting two apps",
      "Cloning and rebranding entire backend/dashboard for OOLA",
      "Managing 1,248 translations across 6 languages"
    ],
    results: [
      "OOLA live at https://app.oo-la.com",
      "Submitted to Google Play production; App Store review in progress",
      "Both apps complete with separate admin dashboards",
      "Admin dashboard processing refunds & user management",
      "24/7 production uptime with PM2 auto-recovery"
    ],
    status: "Live",
    link: "https://app.oo-la.com",
    github: null,
    image: "/images/oola-preview.png",
    gallery: []
  },
  {
    id: "ai2go-education",
    title: "AI2GO Education Analytics",
    category: "Web Application",
    shortDescription: "Government-scale education data unification platform with AI-powered analytics for ministries of education",
    fullDescription: "A comprehensive education data unification platform designed for government ministries of education. Connects 100+ school districts, 5,000+ schools, and 2M+ students into one intelligent analytics system with AI-powered early warning, budget optimization, and predictive interventions.",
    tech: ["React 19", "Chakra UI", "ApexCharts", "Framer Motion", "Tailwind CSS", "@tsparticles", "@dnd-kit", "Apache"],
    highlights: [
      "Scale: 100+ districts, 5,000+ schools, 2M+ students",
      "AI Widget Generator with natural language input",
      "Real-time ROI Calculator for budget planning",
      "GPU-accelerated particle starfield (60fps)",
      "7 comprehensive dashboard pages",
      "Dark/Light mode with space theme"
    ],
    features: [
      "Multi-District Analytics Dashboard with KPIs",
      "AI-Powered Early Warning System for at-risk students",
      "Regional Breakdown with 4-region comparison",
      "School Profiles database (109 schools searchable)",
      "Program ROI Analysis ($12.4M budget tracking)",
      "Student Journey Tracker with risk scores",
      "Budget Planner with scenario planning",
      "School Comparison with grade analysis",
      "Drag-and-drop AI Widget Generator with 8 templates",
      "Interactive Before/After comparison slider"
    ],
    challenges: [
      "Handling large-scale education data visualization",
      "Creating intuitive AI widget generation system",
      "Implementing GPU-accelerated particle animations",
      "Building responsive dashboard for government officials"
    ],
    results: [
      "Live at https://edu.ai2go.vip",
      "Production-ready platform (v7.2.0)",
      "13 priority alerts with AI recommendations",
      "76% of schools meeting provincial standards",
      "<2s load time with 443kB bundle size",
      "99.9% uptime in production"
    ],
    status: "Live",
    link: "https://edu.ai2go.vip",
    github: null,
    image: "/images/ai2go-education-preview.png",
    gallery: []
  },
  {
    id: "tng-odoo-migration",
    title: "TNG Odoo ERP Migration",
    category: "ERP Migration",
    shortDescription: "Full-scale Monday.com → Odoo 19.0 Enterprise migration with telephony, 5 custom modules, and 300+ automation scripts",
    fullDescription: "A comprehensive enterprise migration and ongoing ERP engagement for TNG Finishing Contractors (US construction company). Migrated the entire business from Monday.com to Odoo 19.0 Enterprise — including 329 CRM leads, 514 contacts, $333K+ in invoices, 10 projects, and 71 products. Built 5 custom Odoo modules, re-platformed the company's telephony twice (first DIDWW VoIP + Twilio SMS via a Flask proxy, then a full move to Google Voice with click-to-call and SMS logging inside Odoo), and delivered 300+ Python scripts covering the ETL pipeline, verification, invoicing fixes and ongoing maintenance.",
    tech: ["Python", "Odoo 19.0", "XML-RPC", "Flask", "Google Voice", "DIDWW VoIP", "Twilio", "Monday.com GraphQL", "Gunicorn", "PostgreSQL"],
    highlights: [
      "329 CRM leads + 514 contacts + $333K invoices migrated",
      "5 custom Odoo modules built from scratch",
      "Company phone line ported and migrated to Google Voice with Odoo click-to-call",
      "300+ Python automation scripts for ETL, fixes & maintenance",
      "Invoice numbering, payment-state and PDF layout overhauled",
      "8+ months of continuous enhancements after go-live"
    ],
    features: [
      "Complete Monday.com → Odoo ETL pipeline with 9 sequential import scripts",
      "Google Voice module: click-to-call and SMS logged to record chatter, per-user toggle",
      "Earlier DIDWW VoIP + Twilio/DIDWW bidirectional SMS via a Flask proxy on a VPS",
      "Multi-option quotation system (estimate variations with auto-numbering)",
      "Invoice-to-task status sync automation (paid/posted → task state)",
      "CRM stage automations with per-stage user assignment",
      "Recurring 14-day CRM follow-up email automations",
      "Automatic invoice/bill sequencing and direct-to-Paid payment flow",
      "Custom task states module for construction workflow",
      "Production-readiness review of a third-party CRM (38+ findings) and open-source Odoo hosting proposal"
    ],
    challenges: [
      "Bridging Odoo SaaS (no static IP) to DIDWW's IP-whitelisted SMS API via a VPS proxy",
      "Navigating US A2P 10DLC SMS registration, then re-platforming telephony to Google Voice",
      "Designing a 9-script ETL pipeline with dependency ordering and duplicate prevention",
      "Repairing broken invoice sequences on live accounting data without losing history",
      "Creating multi-option quotations without a separate Odoo model (self-referential Many2one)"
    ],
    results: [
      "Migration completed Jan 2026 — ongoing enhancements through Sep 2026",
      "329 CRM leads, 101 vendor bills ($168K), 13 invoices ($165K) imported",
      "Main business number ported to Google Voice with ring group (Apr 2026)",
      "10-stage CRM pipeline with automated assignments and follow-ups",
      "Proposed open-source Odoo hosting saving the client ~$3,370/year",
      "Comprehensive training documentation delivered to client team"
    ],
    status: "Production",
    link: null,
    github: null,
    image: "",
    gallery: []
  }
];

// Pre-computed stats for easy import
export const projectStats = getProjectStats(projects);
