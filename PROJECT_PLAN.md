# Portfolio Website Project Plan

## Project Overview
Building a professional portfolio website to showcase:
- Web designs
- Mobile applications
- AI automation projects

## Technology Stack
- **Framework**: Next.js (chosen for professional appearance, SEO, performance, image optimization)
- **Style**: Professional and clean design
- **Content**: User has real project content ready

## Project Status
- [x] Playwright MCP server installed globally (v1.0.6)
- [x] Created `.mcp.json` in project directory
- [x] Restarted Claude Code - Playwright MCP server loaded
- [x] New session started and ready
- [x] Deep dive analysis of all 5 projects completed
- [x] Comprehensive documentation created (PROJECTS_DOCUMENTATION.md)
- [ ] Build Next.js portfolio structure
- [ ] Implement portfolio with real project data
- [ ] Use Playwright MCP to visually verify during build
- [ ] Polish and optimize

## Completed: Project Discovery Phase
1. **Project Analysis Completed**: ✅
   - **Project 1: SavetyAI** - AI-powered cybersecurity website (Astro, Preact, Tailwind)
   - **Project 2: SalesBreach** - Email marketing automation platform (Flask, Brevo API, deployed)
   - **Project 3: Sales Master** - Multi-tenant SaaS platform (Flask, client management system)
   - **Project 4: OldGold AI Automation** - RAG email system for Odoo integration (Mistral AI, DSPy)
   - **Project 5: Ikraa** - Arabic learning mobile app (Flutter, 6 chapters, audio-based)
   - All projects analyzed with real code review
   - Tech stacks documented
   - Key features extracted
   - Architecture understood
   - Complete documentation: `PROJECTS_DOCUMENTATION.md` (200+ lines)

2. **Build Phase**: Create Next.js portfolio
   - Homepage with hero section and project grid
   - Category filtering (Web/Mobile/AI)
   - Individual project detail pages
   - About section
   - Contact section
   - Responsive design
   - Performance optimization

3. **Verification Phase**: Use Playwright MCP
   - Visual testing as we build
   - Responsive design verification
   - Screenshot generation if needed
   - Interactive debugging

## Key Decisions Made
- Using Next.js over vanilla HTML/CSS/JS
- Professional design style over minimalist or bold/creative
- Will populate with real project data, not placeholders
- Playwright MCP for visual verification during development

## Projects Discovered

### 1. SavetyAI - AI Cybersecurity Website
**Tech**: Astro 5.13, Preact, Tailwind CSS, Framer Motion
**Highlights**:
- Geometric hero with 3D sphere animation
- Neural AI theme with gradient effects
- Animated testimonials carousel
- Real-time counter animations
- Performance-optimized (compression, code splitting)

### 2. SalesBreach - Email Marketing Platform
**Tech**: Flask 2.3.3, SQLite, Brevo API, APScheduler, Celery
**Highlights**:
- 15+ Flask blueprints
- Real-time webhook integration
- Campaign automation with sequences
- A/B testing for email variants
- Deployed on cPanel with PHP proxy → Gunicorn
- Production URL: marketing.savety.online

### 3. Sales Master - Multi-Tenant SaaS
**Tech**: Flask, SQLite, Brevo SDK, Redis, Celery
**Highlights**:
- Client management system (CRUD)
- Multi-tenant architecture
- Per-client email quotas and configurations
- Subscription tiers (basic/pro/enterprise)
- +2,132 insertions from SalesBreach evolution

### 4. OldGold AI Automation
**Tech**: Mistral AI, DSPy, pdfplumber, Odoo XML-RPC, pytesseract
**Highlights**:
- RAG email processing system
- Daemon service with auto-recovery
- Health monitoring (HTTP dashboard on :8080)
- Incremental Odoo sync (805 customers, 2075 products)
- Production-ready with 24/7 uptime
- Telegram & email notifications
- Feedback loop for model training

### 5. Ikraa - Arabic Learning Mobile App
**Tech**: Flutter 3.0+, Firebase, Provider, audioplayers
**Highlights**:
- 6 chapters teaching Arabic alphabet & Quran rules
- Custom SVG assets (28 Arabic letters)
- Canva design implementation (diamond grid, star shapes)
- Audio for every letter and word
- Uthmanic Quran fonts
- Chapter-based progressive learning

## Important Notes
- User is using Claude Code CLI (terminal), not Claude Desktop
- MCP servers are per-project (`.mcp.json` in project root)
- User has used Playwright MCP before with Claude
- Portfolio will be the central hub, potentially linking to GitHub, Behance, etc.
