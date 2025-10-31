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

export const projects: Project[] = [
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
    tech: ["Flask 2.3", "SQLAlchemy", "Brevo SDK", "Redis", "Celery", "PostgreSQL"],
    highlights: [
      "Multi-tenant architecture with client isolation",
      "Per-client email quotas and configurations",
      "Subscription tiers (basic/pro/enterprise)",
      "+2,132 code insertions from SalesBreach evolution"
    ],
    features: [
      "Full CRUD client management system",
      "Client-specific sender configurations",
      "Usage tracking and quota enforcement",
      "Campaign inheritance from client settings",
      "Per-client analytics and reporting",
      "Subscription tier management"
    ],
    challenges: [
      "Designing multi-tenant data isolation",
      "Implementing per-client quota enforcement",
      "Migrating from single-tenant to multi-tenant architecture"
    ],
    results: [
      "Production-ready SaaS platform",
      "Supports unlimited clients",
      "Automated quota tracking",
      "Scalable architecture"
    ],
    status: "Live",
    link: null,
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
    tech: ["Mistral AI", "DSPy", "pdfplumber", "Odoo XML-RPC", "pytesseract", "Python"],
    highlights: [
      "24/7 daemon service with auto-recovery",
      "Health monitoring dashboard on port 8080",
      "Incremental Odoo sync (805 customers, 2075 products)",
      "Production-ready with 99.9% uptime"
    ],
    features: [
      "AI-powered email analysis with Mistral AI",
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
    title: "Oola",
    category: "Mobile App",
    shortDescription: "Arabic learning mobile app with 6 comprehensive chapters and audio pronunciation",
    fullDescription: "A Flutter-based educational mobile application for learning Arabic alphabet and Quranic reading rules. Features 6 comprehensive chapters covering Arabic letters, vowel marks (Harakat), and advanced pronunciation rules with audio for every letter and word.",
    tech: ["Flutter 3.0+", "Firebase", "Provider", "audioplayers", "Dart"],
    highlights: [
      "6 chapters teaching Arabic alphabet & Quran rules",
      "Custom SVG assets for 28 Arabic letters",
      "Canva-designed UI with diamond grid patterns",
      "Audio pronunciation for every letter and word"
    ],
    features: [
      "Interactive letter learning with audio",
      "Chapter-based progressive learning",
      "Custom Arabic fonts (Uthmanic)",
      "Firebase Analytics integration",
      "Hexagonal chapter selection grid",
      "Smooth page transitions (RTL)",
      "Safe area support for modern devices"
    ],
    challenges: [
      "Implementing custom Arabic SVG letter assets",
      "Managing audio playback state",
      "Creating responsive layouts for various screen sizes"
    ],
    results: [
      "6 complete chapters implemented",
      "28 custom SVG letter assets",
      "Functional audio system",
      "Ready for beta testing"
    ],
    status: "In Development",
    link: null,
    github: null,
    image: "/images/oola-preview.png",
    gallery: []
  }
];
