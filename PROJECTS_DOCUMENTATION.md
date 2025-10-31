# Portfolio Projects - Complete Documentation

**Developer**: Moaz/Anas
**Last Updated**: October 2025
**Total Projects**: 5

---

## Project 1: Savety AI - AI-Powered Cybersecurity Platform

### Overview
A modern, AI-driven cybersecurity platform website built with Astro framework. Features a professional, high-performance landing page showcasing cybersecurity services including External Attack Surface Management (EASM), Dark Web Monitoring, and Penetration Testing.

### Category
**Web Design & Development** - Marketing Website

### Tech Stack
- **Framework**: Astro 5.13.3 (Static Site Generation)
- **UI Library**: Preact (React compatibility mode)
- **Styling**: Tailwind CSS 3.4
- **Interactive Components**: Custom React/Preact components
- **Animations**: Framer Motion 12.23
- **Icons**: Tabler Icons, Lucide React
- **Performance**: Astro Compress plugin, optimized assets
- **Analytics**: Microsoft Clarity, Firebase Analytics
- **Build Tool**: Vite with Terser minification

### Key Features

#### 1. **Geometric Hero Section**
- Custom animated hero with 3D dark sphere background
- Gradient text effects with "neural" theme
- Animated badge with pulsing dot indicator
- Smooth fade-in animations on load
- CTA button with shimmer effects

#### 2. **AI-First Design System**
- Neural gradient color scheme (Purple #6366F1 → Blue #3B82F6)
- Custom "neural-text" gradient text component
- Glassmorphism UI cards
- Hover effects and micro-interactions
- Responsive design (mobile, tablet, desktop)

#### 3. **Trust & Social Proof**
- Industry trust indicators (FinTech, Healthcare, SaaS, E-commerce)
- Animated testimonials carousel
- Real testimonials from CISOs (Gustaf Soldan - Voi, Philippe Michiels - Cegeka)
- Smooth auto-play with manual controls

#### 4. **How It Works Section**
- 3-step process visualization
- Animated cards with hover effects
- Clear value proposition for each step
- Progressive disclosure of information

#### 5. **Platform Overview**
- Three core services highlighted:
  - Identity & Data Protection (Dark Web Monitoring)
  - External Attack Surface Management
  - Offensive Security Validation
- Icon-based service cards with descriptions

#### 6. **Enhanced CTA Section**
- Multi-step progress indicator (Start Chat → Share Email → Get Report)
- Interactive button with gradient animation
- Trust indicators (Security, Speed, Personalization)
- Feature checklist (Dark web scan, Asset discovery, Risk assessment)

#### 7. **Performance Optimizations**
- Code splitting and lazy loading
- Image optimization
- CSS/JS/HTML compression
- Target: ES2020 for modern browsers
- Sitemap generation for SEO

### Pages & Structure
```
src/
├── pages/
│   ├── index.astro (Homepage)
│   ├── about.astro
│   ├── contact.astro
│   ├── platform/ (Platform features)
│   ├── solutions/ (Solutions pages)
│   └── resources/ (Resource center)
├── components/
│   ├── ui/ (Reusable UI components)
│   │   ├── shape-landing-hero.tsx
│   │   ├── animated-testimonials.tsx
│   │   └── dark-grey-sphere.tsx
│   ├── sections/ (Page sections)
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── Header.astro
└── layouts/
    └── Layout.astro (Base layout)
```

### Design Highlights
- **Color Scheme**: Neural AI theme with purple-blue gradients
- **Typography**: Clean, modern sans-serif
- **Animations**: Smooth transitions, fade-ins, hover effects
- **Icons**: SVG-based, optimized for performance
- **Responsive**: Mobile-first design approach

### Performance Metrics
- Static site generation for fast loading
- Optimized assets with compression
- Lazy-loaded components
- Target Lighthouse score: 90+

### Project Status
✅ **Completed** - Production-ready website

### Screenshots/Demo
- Modern AI-themed landing page
- Professional cybersecurity branding
- High-performance static site

---

## Project 2: SalesBreach - Email Marketing Automation Platform

### Overview
A comprehensive Flask-based email marketing platform designed for cybersecurity breach data analysis and automated outreach campaigns. Features real-time email tracking, campaign management, and breach analysis integration.

### Category
**Web Application** - Full Stack SaaS Platform

### Tech Stack
- **Backend**: Python Flask 2.3.3 with Blueprint architecture
- **Database**: SQLite with SQLAlchemy ORM
- **Frontend**: Bootstrap 5, HTML5, JavaScript
- **Email Service**: Brevo API (formerly SendinBlue)
- **Task Scheduling**: APScheduler 3.10.4, Celery 5.3.4
- **Background Jobs**: Redis 5.0.1
- **Server**: Gunicorn WSGI server
- **Deployment**: cPanel shared hosting with PHP proxy

### Architecture

#### Deployment Architecture
```
Internet → Cloudflare CDN → Apache → PHP Proxy → Gunicorn (Flask App)
                                                        ↓
                                              Background Services:
                                              - Email Scheduler
                                              - Webhook Processors
                                              - Auto-enrollment
                                              - Analytics Sync
```

#### Application Structure
```
SalesBreach/
├── app.py (Application factory)
├── routes/ (15+ blueprints)
│   ├── auth.py (Authentication)
│   ├── dashboard.py (Main dashboard)
│   ├── campaigns.py (Campaign management)
│   ├── contacts.py (Contact management)
│   ├── templates.py (Email templates)
│   ├── sequences.py (Email sequences)
│   ├── webhooks.py (Brevo webhooks)
│   ├── analytics.py (Performance analytics)
│   └── breach_checker.py (Breach analysis)
├── services/ (Business logic)
│   ├── email_service.py
│   ├── scheduler.py
│   ├── email_processor.py
│   └── campaign_analytics.py
├── models/ (Database models)
└── templates/ (Jinja2 templates)
```

### Key Features

#### 1. **Dynamic Dashboard**
- Real-time metrics (contacts, campaigns, emails, responses)
- Email performance tracking (sent, delivered, opened, bounced)
- Response analytics with sentiment analysis
- Hot lead detection and prioritization
- Campaign status monitoring

#### 2. **Campaign Management**
- Create and manage email outreach campaigns
- Template-based email sequences
- A/B testing for email variants
- Campaign scheduling and automation
- Queue status monitoring
- Flexible delay configuration

#### 3. **Contact Management**
- Full CRUD operations for prospects
- Industry-based classification
- Risk scoring based on breach data
- Email validation and verification
- Engagement tracking (opens, clicks, responses)
- Subscription management
- Bulk import/export

#### 4. **Email Template System**
- Customizable email templates
- Template variants for A/B testing
- Dynamic variable substitution
- Rich text editor
- Template preview functionality
- Template categories by risk level

#### 5. **Automated Email Sequences**
- Follow-up sequence builder
- Time-based triggers
- Conditional logic
- Engagement-based progression
- Auto-enrollment based on criteria
- Sequence performance analytics

#### 6. **Webhook Integration**
- Real-time email event tracking via Brevo webhooks
- Events: delivered, opened, clicked, bounced, spam reports
- Automatic contact status updates
- Bounce handling (hard/soft)
- Unsubscribe management

#### 7. **Breach Analysis Integration**
- FlawTrack API v2.0 integration
- Breach data scanning
- Credential leak detection
- Risk assessment scoring
- Breach-based targeting

#### 8. **Advanced Analytics**
- Email performance metrics
- Campaign ROI tracking
- Response rate analysis
- Engagement heatmaps
- Industry breakdown analytics
- Sequence flow visualization

### Database Models
- **Contact**: Prospect information with engagement tracking
- **Campaign**: Marketing campaigns with templates
- **Email**: Individual email tracking
- **Response**: Email response storage
- **EmailTemplate**: Reusable email templates
- **TemplateVariant**: A/B test variants
- **FollowUpSequence**: Automated sequences
- **EmailSequence**: Scheduled email queue
- **WebhookEvent**: Webhook event log
- **Settings**: Application configuration

### Deployment Details

#### PHP Proxy System
```php
// Custom PHP proxy forwards requests to Flask
// Handles: headers, POST data, response streaming
// Critical feature: CURLOPT_FOLLOWLOCATION = false
```

#### Production Server
- **Host**: marketing.savety.online
- **Server**: Apache with mod_rewrite
- **App Server**: Gunicorn (port 5001, localhost)
- **Workers**: 1 worker (shared hosting limitation)
- **Process Manager**: NSSM (Windows) or Supervisor (Linux)

### Security Features
- Session-based authentication
- SQL injection protection via SQLAlchemy ORM
- XSS protection through template escaping
- CSRF protection on forms
- Input validation and sanitization
- Secure password handling
- File upload restrictions
- API key encryption

### Performance
- Connection pooling for database
- Efficient SQL queries with proper indexing
- Background task processing with Celery
- Real-time webhook processing
- Query optimization with eager loading

### Project Status
✅ **Completed & Deployed** - Live at marketing.savety.online

---

## Project 3: Sales Master - Multi-Tenant SaaS Email Marketing Platform

### Overview
An evolved version of SalesBreach transformed into a complete multi-tenant SaaS platform. Allows managing multiple clients with separate sender configurations, email quotas, and campaign tracking. Production-ready with full client management system.

### Category
**Web Application** - Enterprise SaaS Platform

### Tech Stack
- **Backend**: Python Flask 2.3.3 with Blueprint architecture
- **Database**: SQLite with SQLAlchemy ORM 2.0.21
- **Frontend**: Bootstrap 5, HTML5, JavaScript
- **Email Service**: Brevo API (SendinBlue/Brevo Python SDK 7.6.0)
- **Task Scheduling**: APScheduler, Schedule 1.2.0
- **Background Jobs**: Celery 5.3.4, Redis 5.0.1
- **Data Processing**: Pandas 2.1.1
- **Security**: Cryptography 41.0.4
- **Server**: Gunicorn 21.2.0

### Architecture Evolution
SalesBreach (Single Tenant) → Sales Master (Multi-Tenant SaaS)

### Key Architectural Changes

#### 1. **Multi-Tenant Client System**
```python
class Client(db.Model):
    # Company Information
    company_name: str (UNIQUE)
    domain: str
    industry: str

    # Sender Configuration (per client)
    sender_email: str (UNIQUE)
    sender_name: str
    reply_to_email: str

    # Email Provider Settings
    brevo_api_key: str
    brevo_sender_id: str

    # Usage Tracking
    monthly_email_limit: int
    emails_sent_this_month: int

    # Subscription Management
    subscription_tier: str  # basic/pro/enterprise
    is_active: bool

    # Relationships
    campaigns: List[Campaign]
```

#### 2. **Campaign-Client Relationship**
- Campaigns linked to clients via `client_id` foreign key
- Campaigns inherit sender configuration from client
- Client detail page shows all associated campaigns
- Per-client analytics and reporting

### Key Features

#### 1. **Client Management System**
- **Full CRUD Operations**: Create, Read, Update, Delete clients
- **Client List Page**: Dashboard with stats cards
  - Total clients count
  - Active clients count
  - Total campaigns across all clients
  - Email usage metrics
- **Client Detail Page**: Individual client overview
  - Company information
  - Sender configuration
  - Email usage (sent vs. limit)
  - Associated campaigns with analytics
  - Quick actions (edit, toggle status, delete)
- **Toggle Active/Inactive Status**: Soft enable/disable
- **Modern UI**: Bootstrap modals (no JavaScript alerts)

#### 2. **Client Properties**
- **Company Information**:
  - Company name, domain, industry
  - Contact name, website, phone
- **Sender Configuration**:
  - Sender email, sender name
  - Reply-to email
- **Email Provider Settings**:
  - Brevo API key (per client)
  - Brevo sender ID
- **Usage Tracking**:
  - Monthly email limit
  - Emails sent this month
  - Usage progress bars
- **Subscription Management**:
  - Subscription tier (basic/pro/enterprise)
  - Active/inactive status
- **Notes**: Internal documentation field

#### 3. **Enhanced Campaign System**
- Campaigns can be linked to specific clients
- Auto-populate sender info from selected client
- Per-client campaign analytics
- Client-specific email templates
- Quota enforcement per client

#### 4. **All SalesBreach Features**
- Everything from SalesBreach (Project 2)
- Plus multi-tenancy support
- Plus client management
- Plus per-client configurations

### File Structure
```
Sales Master/
├── routes/
│   ├── clients.py (NEW - Client management)
│   ├── [all SalesBreach routes]
│   └── ...
├── templates/
│   ├── clients/ (NEW)
│   │   ├── list.html
│   │   ├── create.html
│   │   ├── edit.html
│   │   └── view.html
│   └── [all SalesBreach templates]
├── models/
│   └── database.py (ENHANCED with Client model)
└── [all SalesBreach files]
```

### Client Management API Endpoints
```
GET  /clients/                - List all clients
GET  /clients/create          - Create client form
POST /clients/create          - Save new client
GET  /clients/edit/<id>       - Edit client form
POST /clients/edit/<id>       - Update client
GET  /clients/view/<id>       - View client details
POST /clients/delete/<id>     - Delete client
POST /clients/toggle/<id>     - Toggle active status
GET  /clients/api/list        - JSON API for client list
GET  /clients/api/<id>        - JSON API for single client
GET  /clients/api/stats       - JSON API for client statistics
```

### Migration & Database
- Migration script: `migrate_existing_db.py`
- Adds `clients` table
- Adds `client_id` column to `campaigns` table
- Idempotent (safe to run multiple times)

### Validation & Security
- Company name uniqueness validation
- Sender email uniqueness validation
- Email format validation
- Required field validation
- Monthly email limit validation (positive integer)
- Soft delete (preserves historical data)

### UI/UX Improvements
- **No JavaScript Alerts**: Bootstrap modals for confirmations
- **Success/Error Notifications**: Bootstrap alert boxes
- **Responsive Design**: Mobile, tablet, desktop
- **Color-Coded Actions**:
  - Toggle Status → Yellow/Warning button
  - Delete → Red/Danger button
  - View → Blue/Info button
  - Edit → Blue/Primary button

### Project Status
✅ **Completed** - Production-ready with 2,132 insertions, 1,096 deletions
- Git Repository: https://github.com/AnasElkhodary-69/sales_master.git
- Commit: 694b929
- Commit Message: "Add Client Management System for multi-tenant SaaS functionality"

### Implementation Summary
- **New Files**: 7 (routes, templates)
- **Modified Files**: 24
- **Total Changes**: +2,132 insertions, -1,096 deletions
- **Date Implemented**: October 2025

---

## Project 4: OldGold AI Automation - Intelligent Email Processing System

### Overview
A production-ready RAG (Retrieval-Augmented Generation) email automation system for SDS company. Automatically receives emails, analyzes them using AI, extracts order details, matches customers in Odoo database, and creates orders automatically. Deployed as a 24/7 daemon service with health monitoring and auto-recovery.

### Category
**AI Automation** - Enterprise Workflow Automation

### Tech Stack

#### Core AI/ML
- **AI Framework**: DSPy (Stanford NLP framework) 2.4.0
- **LLM Provider**: Mistral AI API (mistral-large-latest)
- **Model Strategy**: Hybrid (small/medium/large models)
- **Unified LLM API**: LiteLLM 1.0.0

#### Document Processing
- **PDF Extraction**: pdfplumber 0.10.0
- **Image Processing**: Pillow 10.0.0
- **PDF to Image**: pdf2image 1.16.3
- **OCR**: pytesseract 0.3.10

#### Data & Integration
- **ERP Integration**: Odoo XML-RPC API
- **Vector Storage**: Optional FAISS (not currently used)
- **Fuzzy Matching**: python-Levenshtein 0.21.0, fuzzywuzzy 0.18.0
- **Data Processing**: Pandas (for data manipulation)

#### Email & Messaging
- **Email**: Python built-in (imaplib, smtplib, email)
- **Telegram Bot**: Custom implementation with requests
- **Notifications**: Email & Telegram alerts

#### System & Deployment
- **Environment**: python-dotenv 1.0.0
- **Web Server**: HTTP health check server (port 8080)
- **Process Management**: NSSM (Windows) or Supervisor (Linux)
- **Background Processing**: Daemon with auto-recovery

### System Architecture

```
Email (IMAP) → Email Reader → RAG Processor → Mistral AI Agent
                                    ↓
                          Context Retriever
                          (Odoo + Vector Store)
                                    ↓
                          Order Creator → Odoo (XML-RPC)
                                    ↓
                          Response Email (SMTP)
                                    ↓
                          Telegram Notification
```

### Key Components

#### 1. **RAG Email System (main.py)**
- Orchestrates entire email processing workflow
- Reads incoming emails
- Processes through Mistral AI agent
- Retrieves relevant information from Odoo
- Generates and sends responses
- Handles errors and logging

#### 2. **Email Module**
- **email_reader.py**: Fetches unread emails via IMAP
- **email_sender.py**: Sends response emails via SMTP
- Attachment processing (PDFs, images)
- HTML email parsing

#### 3. **Orchestrator Module**
- **mistral_agent.py**: Mistral AI integration
  - Intent classification
  - Entity extraction
  - Response generation
  - Context understanding
  - Hybrid model strategy (small/medium/large)
  - Token usage tracking
- **processor.py**: Main email processing logic
- **dspy_entity_extractor.py**: DSPy-based entity extraction
- **dspy_customer_matcher.py**: Smart customer matching
- **order_creator.py**: Odoo order creation logic
- **context_retriever.py**: RAG context retrieval

#### 4. **Retriever Module**
- **odoo_connector.py**: Odoo XML-RPC integration
  - Fetch customers (805 records)
  - Fetch products (2075 records)
  - Create orders
  - Update records
- **vector_store.py**: Vector database (optional)

#### 5. **Production Deployment System**

##### Daemon Runner (`daemon_runner.py`)
- ✅ Auto-recovery: Restarts after crashes
- ✅ Error handling: Graceful recovery with exponential backoff
- ✅ Health monitoring: Tracks uptime, emails processed, success rate
- ✅ Email alerting: Notifications for critical errors
- ✅ Heartbeat logging: Status updates every 5 minutes
- ✅ Graceful shutdown: Clean shutdown on Ctrl+C

**Key Features**:
- Processes emails every 60 seconds (configurable)
- Auto-reinitializes after 3 consecutive failures
- Exponential backoff for retries (30s → 60s → 120s → 300s max)
- Sends email alerts for startup, shutdown, critical errors

##### Health Check System (`health_check.py`)
- ✅ HTTP endpoint: JSON API at http://localhost:8080/health
- ✅ Web dashboard: Visual dashboard at http://localhost:8080/
- ✅ Real-time metrics: Auto-refreshing health status
- ✅ File-based status: `logs/health_status.txt`

**Metrics Tracked**:
- System uptime
- Emails processed/failed
- Success rate percentage
- Consecutive failures
- Last successful process time
- Last error message

##### Service Configuration
- ✅ Windows Service: NSSM configuration
- ✅ Linux Supervisor: Supervisor config
- ✅ Linux Systemd: Systemd service unit

All configured with:
- Auto-start on boot
- Auto-restart on failure
- Log rotation
- Resource limits

##### Odoo Incremental Sync (`incremental_sync_odoo.py`)
- ✅ Smart syncing: Only fetches changed records
- ✅ Timestamp tracking: Tracks last sync time
- ✅ Intelligent merging: Updates existing, adds new
- ✅ Fast performance: 2-5 seconds for incremental sync
- ✅ Production ready: Can be scheduled every 5-15 minutes

**Performance**:
- First run (full sync): ~30 seconds (805 + 2075 records)
- Incremental run: ~2-5 seconds
- Odoo 19 compatible

### Reliability Architecture

#### Layer 1: Process Supervision
- NSSM (Windows) or Supervisor (Linux)
- Auto-restarts if process crashes
- Configurable retry delays
- Resource limits (memory, CPU)

#### Layer 2: Application Recovery
- `daemon_runner.py` catches all exceptions
- Auto-reinitializes system after failures
- Exponential backoff for retries
- Continues processing even if individual emails fail

#### Layer 3: Health Monitoring
- Real-time health status file
- HTTP endpoint for external monitoring
- Heartbeat logging every 5 minutes
- Tracks success rate and error patterns

#### Layer 4: Alerting
- Email notifications for critical errors
- Startup/shutdown notifications
- Error rate monitoring
- Cooldown period to prevent spam

#### Layer 5: Data Integrity
- Incremental Odoo sync preserves all data
- Failed emails logged for manual review
- Transaction-safe JSON updates
- Automatic backup via log files

### Performance Characteristics

#### Email Processing
- **Check Interval**: 60 seconds (configurable)
- **Processing Time**: ~10-30 seconds per email
- **Throughput**: Up to 60 emails/hour (single instance)
- **Memory Usage**: ~200-500 MB
- **CPU Usage**: Low (~5-10% average)

#### Odoo Sync
- **Full Sync**: ~30 seconds (805 customers + 2075 products)
- **Incremental**: ~2-5 seconds (only changed records)
- **Recommended Schedule**: Every 15 minutes
- **Data Transfer**: Minimal (only deltas)

### Intelligent Features

#### 1. **DSPy-Based Entity Extraction**
- Uses Stanford's DSPy framework
- Extracts: customer info, products, quantities, prices
- Confidence scoring
- Training from feedback

#### 2. **Smart Customer Matching**
- Fuzzy matching with Levenshtein distance
- Multiple matching strategies:
  - Exact email match
  - Domain-based matching
  - Company name matching
  - Phone number matching
- Confidence scoring

#### 3. **Product Recognition**
- Intelligent product matching from order details
- Handles variations in product names
- Quantity and price extraction
- Unit of measure detection

#### 4. **Telegram Integration**
- Real-time notifications
- Order approval/rejection
- Status updates
- Error alerts
- Interactive feedback collection

#### 5. **Feedback Loop**
- Stores user corrections
- Retrains models from feedback
- Improves accuracy over time
- Training data generation

### Workflow

1. **Email Reception**
   - Monitor IMAP inbox
   - Fetch unread emails
   - Extract attachments (PDF, images)

2. **Content Extraction**
   - Parse email body
   - Extract text from PDFs (pdfplumber)
   - OCR on images (pytesseract)
   - Clean and normalize text

3. **AI Processing**
   - Classify intent (order, query, complaint)
   - Extract entities (customer, products, amounts)
   - Calculate confidence scores

4. **Context Retrieval**
   - Match customer in Odoo database
   - Find matching products
   - Retrieve pricing information
   - Get customer history

5. **Order Creation**
   - Validate extracted data
   - Create order in Odoo via XML-RPC
   - Handle errors and retries
   - Log order details

6. **Response Generation**
   - Generate confirmation email
   - Include order summary
   - Send via SMTP
   - Send Telegram notification

7. **Monitoring & Health**
   - Update health metrics
   - Log processing details
   - Track success/failure rates
   - Alert on errors

### Production Deployment

#### Environment Variables
```bash
# Email Settings
EMAIL_ADDRESS=your-email@example.com
EMAIL_PASSWORD=your-app-password
IMAP_SERVER=imap.gmail.com
SMTP_SERVER=smtp.gmail.com

# Odoo Connection
ODOO_URL=https://whlvm14063.wawihost.de
ODOO_DB=db_name
ODOO_USERNAME=username
ODOO_PASSWORD=password

# Mistral AI
MISTRAL_API_KEY=your-api-key
MISTRAL_MODEL=mistral-large-latest

# System Configuration
EMAIL_CHECK_INTERVAL=60
ADMIN_EMAIL=admin@example.com
DEBUG_MODE=false
```

#### Deployment Commands

**Windows**:
```batch
cd D:\Projects\RAG-SDS\before-bert
deployment\install_windows_service.bat
nssm start RAGEmailSystem
nssm status RAGEmailSystem
```

**Linux**:
```bash
cd /path/to/before-bert
sudo apt-get install supervisor
sudo cp deployment/supervisor.conf /etc/supervisor/conf.d/rag_email.conf
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start rag_email_system
```

### Monitoring & Maintenance

#### Health Dashboard
- Web interface: http://localhost:8080/
- JSON API: http://localhost:8080/health
- Real-time metrics auto-refresh

#### Log Files
- **daemon.log**: Daemon status, health, alerts
- **rag_email_system.log**: Email processing details
- **service.log**: Service wrapper output
- **health_status.txt**: Current health metrics

#### Monitoring Commands
```bash
# Check service status
nssm status RAGEmailSystem  # Windows
sudo supervisorctl status rag_email_system  # Linux

# View real-time logs
tail -f logs/daemon.log

# Check health
cat logs/health_status.txt
```

### Documentation
- ✅ **24_7_DEPLOYMENT_PLAN.md**: Comprehensive deployment strategy
- ✅ **START_PRODUCTION.md**: 5-minute quick start guide
- ✅ **SYNC_README.md**: Odoo sync documentation
- ✅ **PRODUCTION_READY_SUMMARY.md**: Complete production summary

### Project Status
✅ **Production Ready** - 24/7 deployment complete
- **Status**: PRODUCTION READY
- **Deployment Time**: ~5 minutes
- **Uptime Target**: 99.9%
- **Date**: October 2025

### Unique Selling Points
1. **Fully Automated**: Zero manual intervention
2. **Intelligent**: AI-powered with learning capability
3. **Reliable**: Auto-recovery and health monitoring
4. **Production-Grade**: 24/7 daemon with monitoring
5. **Odoo Integration**: Seamless ERP integration
6. **Multi-Channel**: Email + Telegram notifications
7. **Self-Improving**: Feedback loop for accuracy

---

## Project 5: Ikraa - Arabic Learning Mobile App

### Overview
A Flutter-based mobile application for learning Arabic alphabet and Quranic reading rules. Features 6 comprehensive chapters covering Arabic letters, vowel marks (Harakat), and advanced pronunciation rules. Includes audio pronunciation for every letter and word, custom Arabic fonts, and engaging visual design.

### Category
**Mobile Application** - Educational App (Under Development)

### Platform
- **Android**: Tested on Android 16 (API 36)
- **iOS**: Compatible (not tested in current development)

### Tech Stack
- **Framework**: Flutter 3.0+ (Dart SDK >=3.0.0 <4.0.0)
- **State Management**: Provider 6.1.2
- **Audio**: audioplayers 6.1.0
- **UI Components**:
  - page_transition 2.1.0 (Smooth page transitions)
  - rflutter_alert 2.0.7 (Alert dialogs)
  - fluttertoast 8.2.8 (Toast notifications)
  - flutter_svg 2.0.10 (SVG support)
- **Analytics**: Firebase Analytics 11.3.3, Firebase Core 3.6.0
- **External Links**: url_launcher 6.3.1
- **Custom Fonts**: Uthmanic Quran fonts

### App Structure

#### Navigation Flow
```
Home Screen (Animated splash)
    ↓
Login Screen ("Start" button)
    ↓
Chapter Selection (Hexagonal grid)
    ↓
Chapter Lessons (Interactive learning)
```

#### Chapters (6 "Bab")

**Chapter 1: Arabic Alphabet (حروف الهجاء)**
- 28 Arabic letters (ا to ي)
- Custom SVG implementation with Canva design
- Diamond grid pattern header/footer
- 8-point star shapes for letter display
- Letter pronunciation audio for each
- Helvetica font for letters
- Interactive letter selection (changes color when selected)

**Chapter 2: Vowel Marks (Harakat)**
- Fatha (ـَ) - Short "a" sound
- Kasra (ـِ) - Short "i" sound
- Damma (ـُ) - Short "u" sound
- Audio for letters with vowel marks
- Audio for words with vowels
- Custom image sizing (fatha.png at 200×200, icons at 60×60)

**Chapter 3: Tanween (Double Vowels)**
- Tanween Fath (ـً)
- Tanween Kasr (ـٍ)
- Tanween Dumm (ـٌ)
- Audio examples for each type

**Chapter 4: Long Vowels (Madd)**
- Alef Madd (ا)
- Waw Madd (و)
- Ya Madd (ي)
- Al-alef al-Mukhtafirah (الألف المختفرة)
- Audio for long vowel pronunciation

**Chapter 5: Sukoon and Shaddah**
- Sukoon (ـْ) - No vowel
- Shaddah (ـّ) - Doubled consonant
- Audio examples

**Chapter 6: Advanced Rules**
- Hamzat Wasl (همزة الوصل)
- Waqf signs (علامات الوقف)
- Lam Shamsiyyah & Lam Qamariyyah (اللام الشمسية والقمرية)
- Quranic text rendering (Rasm al-Mushaf)
- Practice verses with audio

### Technical Implementation

#### Data Model
```dart
// JSON-based lesson structure
{
  "page": 1,
  "title": "الدرس 1",
  "subTitle": "الفتحة",
  "filler": [
    {
      "alpha": "أ",
      "word": "أَبٌ",
      "media": "sounds/bab2/ALFATHA/1.mp3"
    }
  ]
}
```

#### Audio System
- Provider-based state management for audio playback
- audioplayers 6.1.0 for cross-platform audio
- Audio files organized by chapter (bab1/ - bab6/)
- Separate folders for different lesson types
- Pronunciation for every letter and word

#### Custom SVG Assets (Chapter 1)
```
assets/letters/
├── alef.svg (ا)
├── ba.svg (ب)
├── ta.svg (ت)
... (28 total Arabic letters)
```

**SVG Features**:
- ViewBox: "0 0 50 50"
- Font: Helvetica World
- Font size: 36
- Color: #9E2932 (red)
- Text anchor: middle
- Bold weight

#### Canva Design Implementation
- **Header/Footer**: Diamond grid pattern (#C19A6B)
- **Star Shapes**: 8-point stars extracted from Canva design
- **Color Scheme**: Cream (#FFFAF0) and gold (#C19A6B)
- **ColorFiltered**: Dynamic color changes (green when selected)

#### Custom Fonts
- **OthmanyFonts**: Uthmanic Hafs script for Quran
- **Uthmanic**: General Quranic text
- **PageQ2**: Page-specific Quran font
- **LiuJianMaoCao**: Decorative font

### Project Structure
```
ikraa/
├── lib/
│   ├── main.dart (App entry point)
│   ├── ui/
│   │   ├── home/ (Home & login screens)
│   │   ├── select_chapters/ (Chapter selection grid)
│   │   ├── chapter1/ - chapter6/ (6 chapter implementations)
│   │   └── base_layout/ (Shared layout)
│   ├── model/
│   │   └── chapter/ (Data models)
│   ├── providers/
│   │   └── player_state_provider.dart (Audio state)
│   └── utils/
│       └── ui_utils.dart (UI helpers)
├── assets/
│   ├── images/ (UI images)
│   ├── sounds/ (Organized by chapter)
│   │   ├── bab1/ - bab6/
│   │   └── [lesson-specific folders]
│   ├── json/ (Lesson data)
│   │   └── chapter1.json - chapter6.json
│   ├── canva/svg/ (Canva design assets)
│   └── letters/ (28 Arabic letter SVGs)
├── android/ (Android platform files)
├── ios/ (iOS platform files)
└── fonts/ (Custom Arabic fonts)
```

### Firebase Configuration
- **Package**: ca.ikraa.ikraabook
- **Firebase Project**: ikraabook
- **Analytics**: User engagement tracking
- **Config**: android/app/google-services.json

### UI/UX Features
- **Hexagonal Chapter Grid**: Unique 6-sided buttons for chapter selection
- **Smooth Page Transitions**: Right-to-left animations (RTL for Arabic)
- **Interactive Audio**: Tap to hear pronunciation
- **Visual Feedback**: Color changes on selection
- **Responsive Design**: Adapts to different screen sizes
- **Custom Layouts**: Chapter-specific designs
- **SafeArea**: Proper system UI handling
- **ScrollConfiguration**: Custom scroll behavior

### Recent Development Work
1. **Chapter 2 Image Sizing Fix**:
   - Increased fatha.png to 200×200 pixels
   - Kept icon_3_up.png at original 60×60 pixels
   - Fixed layout overflow issues
   - Dynamic height for scrollable content

2. **Chapter 1 Canva Design**:
   - Implemented diamond grid pattern (header/footer)
   - Created 8-point star shapes
   - Generated 28 SVG letter assets
   - Removed BaseLayout wrapper
   - Added SafeArea support
   - Implemented ColorFiltered for selection states

### Running the App
```bash
# Navigate to project
cd "C:\Anas's PC\Moaz\Oola\ikraa"

# Get dependencies
"C:\flutter\bin\flutter.bat" pub get

# Check available devices
"C:\flutter\bin\flutter.bat" devices

# Run on Android emulator
"C:\flutter\bin\flutter.bat" run -d emulator-5554
```

### Development Environment
- **Flutter SDK**: C:\flutter
- **IDE**: Android Studio (with Flutter & Dart plugins)
- **Emulator**: sdk gphone64 x86 64 (Android 16, API 36)
- **Emulator ID**: emulator-5554

### Project Status
🟡 **Under Development**
- ✅ Core structure complete
- ✅ 6 chapters implemented
- ✅ Audio system functional
- ✅ Chapter 1 Canva design complete
- ✅ Chapter 2 layout fixes complete
- 🔲 Final testing required
- 🔲 iOS testing pending
- 🔲 Play Store / App Store submission pending

### Educational Content
- **Target Audience**: Arabic learners, Quran students
- **Age Range**: All ages
- **Learning Path**: Progressive difficulty (Chapter 1 → 6)
- **Content Type**: Interactive lessons with audio
- **Language**: Arabic interface with audio

### Unique Features
1. **Comprehensive Coverage**: Complete Arabic alphabet and rules
2. **Audio-First**: Every letter and word has pronunciation
3. **Quranic Focus**: Specialized for Quran reading
4. **Custom Fonts**: Authentic Uthmanic script
5. **Beautiful Design**: Canva-designed UI elements
6. **Interactive Learning**: Tap-to-learn interface
7. **Chapter-Based**: Structured learning path

### Screenshots
Available in: `C:\Anas's PC\Moaz\Oola\ikraa\screenshots\`
- 1.png: Login screen with Oola branding
- 6.png: Chapter design reference

### Session Notes
Detailed development notes available in: `CLAUDE_SESSION_NOTES.md`
- Implementation details
- Design decisions
- Bug fixes applied
- User feedback iterations

---

## Summary Statistics

### Portfolio Overview
- **Total Projects**: 5
- **Web Projects**: 3 (1 website, 2 web applications)
- **Mobile Apps**: 1
- **AI/Automation**: 1
- **Lines of Code**: ~50,000+ (estimated across all projects)
- **Tech Stack Diversity**:
  - Languages: Python, JavaScript/TypeScript, Dart, PHP
  - Frameworks: Flask, Astro, Flutter
  - Databases: SQLite, Odoo ERP
  - AI/ML: Mistral AI, DSPy
  - Cloud: Firebase, Cloudflare

### Skills Demonstrated

#### Frontend Development
- Astro, React/Preact, Tailwind CSS
- Flutter/Dart mobile development
- Responsive design
- Animations and micro-interactions
- SVG manipulation
- Custom UI components

#### Backend Development
- Flask (Python) - Multi-blueprint architecture
- RESTful API design
- Database modeling (SQLAlchemy ORM)
- Authentication & authorization
- Webhook integration
- Background job processing

#### AI/ML Integration
- Mistral AI API integration
- DSPy framework (Stanford NLP)
- RAG (Retrieval-Augmented Generation)
- Entity extraction and NER
- Intelligent matching algorithms
- Model training from feedback

#### DevOps & Deployment
- Production deployment (cPanel, Gunicorn)
- Daemon services (NSSM, Supervisor)
- Health monitoring systems
- Auto-recovery mechanisms
- Log management
- Performance optimization

#### Database & Integration
- SQLAlchemy ORM
- Database migrations
- Odoo ERP integration (XML-RPC)
- Email services (IMAP, SMTP, Brevo API)
- Webhook processing
- Data synchronization

#### Project Management
- Multi-tenant SaaS architecture
- Client management systems
- Campaign automation
- Analytics and reporting
- Documentation

---

**Portfolio Created**: October 2025
**Last Updated**: October 27, 2025
**Status**: Ready for showcase
