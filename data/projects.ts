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
    title: "IKRAA + OOLA",
    category: "Mobile App",
    shortDescription: "Unified Arabic learning platform with 2 apps (Quranic + Modern Arabic), full backend, payments, and admin dashboard",
    fullDescription: "A production-ready unified Arabic learning platform featuring two distinct apps: IKRAA (Quranic Arabic) and OOLA (Modern Standard Arabic). Complete with NestJS backend, PostgreSQL database, Stripe payments, Google/Apple OAuth, admin dashboard, and 6-language support. Each app runs on its own domain with separate branding.",
    tech: ["Flutter 3.5+", "NestJS", "PostgreSQL", "TypeORM", "Stripe", "Next.js 15", "Google OAuth", "Apple Sign-In", "PM2", "Apache"],
    highlights: [
      "2 complete apps with separate backends and dashboards",
      "Full authentication system (Email + Google + Apple OAuth)",
      "Stripe payment integration with webhook processing",
      "Admin dashboard with user management & refund processing",
      "6-language support (English, Arabic, Turkish, French, German, Spanish)",
      "Production deployment with PM2 + Apache + SSL on separate domains"
    ],
    features: [
      "Interactive letter recognition exercises (31 exercises in OOLA Ch1)",
      "Audio pronunciation for all letters and words",
      "Email verification system with 4-digit codes",
      "Password reset flow with secure tokens",
      "Real-time payment processing with webhooks",
      "Multi-language email templates",
      "Guest mode for trial access",
      "Deep linking support (ikraa:// and oola://)",
      "Progress tracking and backend persistence",
      "Rate limiting for security (100 req/min global)"
    ],
    challenges: [
      "Building complete backend infrastructure from scratch",
      "Implementing secure payment system with Stripe webhooks",
      "Creating multi-tenant architecture supporting two apps",
      "Cloning and rebranding entire backend/dashboard for OOLA",
      "Managing 1,248 translations across 6 languages"
    ],
    results: [
      "IKRAA live at https://ikraa.ai2go.vip",
      "OOLA live at https://app.oo-la.com",
      "Both apps 100% complete with separate admin dashboards",
      "Admin dashboard processing refunds & user management",
      "24/7 production uptime with PM2 auto-recovery",
      "Ready for App Store submission"
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
  }
];

// Pre-computed stats for easy import
export const projectStats = getProjectStats(projects);
