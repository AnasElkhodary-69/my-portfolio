"use client";

import { motion } from "framer-motion";
import { projectStats } from "@/data/projects";

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-2xl">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 print:p-8"
      >
        <h1 className="text-5xl font-bold mb-2 print:text-4xl">Anas Elkhodary</h1>
        <h2 className="text-2xl font-light mb-6 print:text-xl">Senior WordPress Developer</h2>
        <div className="flex flex-wrap gap-4 text-sm print:text-xs">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a href="mailto:anaselkhodary69@gmail.com" className="hover:underline">
              anaselkhodary69@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <a href="https://github.com/AnasElkhodary-69" target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/AnasElkhodary-69
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <a href="https://www.linkedin.com/in/anas-elkhodary" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/anas-elkhodary
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
            </svg>
            <a href="https://anaselkhodary.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">
              anaselkhodary.vercel.app
            </a>
          </div>
        </div>
      </motion.div>

      {/* Professional Summary */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="p-12 print:p-8 border-b-2 border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="text-blue-600 dark:text-blue-400">▸</span>
          Professional Summary
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Senior WordPress Developer with deep expertise building custom themes, plugins, and WooCommerce stores for production at scale.
          Specialized in PHP development, the WordPress REST API, Gutenberg block development, and headless WordPress architectures.
          Proven track record of delivering {projectStats.totalProjects}+ production websites and platforms, including 24/7 systems with 99.9% uptime.
          Strong full-stack foundation across PHP, JavaScript, and modern frontend frameworks, with particular strength in performance optimization,
          SEO, third-party API integrations, and custom plugin engineering.
        </p>
      </motion.section>

      {/* Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-12 print:p-8 border-b-2 border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="text-blue-600 dark:text-blue-400">▸</span>
          Professional Experience
        </h3>

        <div className="space-y-8">
          {/* SalesBreach PRO */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Senior WordPress Developer</h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">SalesBreach PRO - Enterprise Email Marketing Platform</p>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">Production - 24/7</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
              <li>Built and maintained a custom WordPress marketing platform with bespoke plugins and a modular theme architecture</li>
              <li>Developed a custom plugin integrating the Brevo API via the WordPress REST API for real-time campaign tracking and analytics</li>
              <li>Engineered automated email-sequence workflows using WP-Cron and background job processing</li>
              <li>Maintained a 24/7 production WordPress deployment serving enterprise clients at marketing.savety.online</li>
              <li><strong>Tech Stack:</strong> WordPress, PHP, MySQL, WP REST API, Brevo API, WP-Cron</li>
            </ul>
          </div>

          {/* Sales Master */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">WordPress Developer (WooCommerce)</h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">Sales Master - Multi-Tenant Membership Platform</p>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">Production - 24/7</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
              <li>Built a WordPress Multisite membership platform with tiered subscriptions and WooCommerce checkout</li>
              <li>Implemented per-client usage quotas and role-based access control with custom post types and capabilities</li>
              <li>Integrated Redis object caching and page caching to optimize performance under concurrent load</li>
              <li>Designed a scalable Multisite architecture supporting multiple tenants with isolated data</li>
              <li><strong>Tech Stack:</strong> WordPress Multisite, WooCommerce, PHP, MySQL, Redis Object Cache</li>
            </ul>
          </div>

          {/* SDS Automation */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">WordPress Plugin Developer</h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">SDS Automation - AI-Powered Email Plugin</p>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">Production - 99.9% Uptime</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
              <li>Developed a custom WordPress plugin adding AI-powered email automation with a settings admin dashboard</li>
              <li>Integrated external CRM/ERP data via the WordPress REST API and custom endpoints for real-time sync</li>
              <li>Built a 24/7 WP-Cron processing pipeline with auto-recovery and a health-monitoring admin screen</li>
              <li>Achieved 99.9% uptime through robust error handling and incremental sync mechanisms</li>
              <li><strong>Tech Stack:</strong> WordPress, PHP, WP REST API, WP-Cron, MySQL, Custom Admin UI</li>
            </ul>
          </div>

          {/* TNG Odoo Migration */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">WordPress Developer & Systems Integrator</h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">TNG Finishing Contractors - Business Systems & Web Integration</p>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">Production - Jan 2026</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
              <li>Led a full data migration of 329 CRM leads, 514 contacts, and $333K+ in invoices into a unified business platform</li>
              <li>Built custom integration modules connecting the company website with VoIP, SMS, and CRM back-end systems</li>
              <li>Integrated DIDWW VoIP (SIP/WebSocket) with call recording and Twilio bidirectional SMS via custom webhooks</li>
              <li>Developed and deployed PHP/Gravity Forms lead-capture flows wired into the CRM through REST integrations</li>
              <li>Authored 150+ scripts for ETL pipelines, automations, verification, and maintenance</li>
              <li><strong>Tech Stack:</strong> WordPress, PHP, Gravity Forms, REST APIs, Twilio, DIDWW, MySQL</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="p-12 print:p-8 border-b-2 border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="text-blue-600 dark:text-blue-400">▸</span>
          Featured Projects
        </h3>

        <div className="space-y-6">
          {/* SavetyAI */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">SavetyAI Website</h4>
              <a href="https://savety.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                savety.ai ↗
              </a>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              AI-powered cybersecurity platform website with modern design and performance optimizations
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Tech:</strong> Astro, Preact, Tailwind CSS, Framer Motion |
              <strong> Features:</strong> 3D animations, neural AI theme, optimized performance
            </p>
          </div>

          {/* IKRAA + OOLA */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">IKRAA + OOLA - Arabic Learning Platform</h4>
              <a href="https://app.oo-la.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                app.oo-la.com ↗
              </a>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Unified Arabic learning platform with 2 production apps (Quranic + Modern Arabic), full backend, Stripe payments, and admin dashboard
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Tech:</strong> Flutter, NestJS, PostgreSQL, Stripe, Next.js, Google/Apple OAuth |
              <strong> Features:</strong> 6-language support, payment processing, admin dashboard, PM2 deployment
            </p>
          </div>

          {/* AI2GO Education Analytics */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">AI2GO Education Analytics</h4>
              <a href="https://edu.ai2go.vip" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                edu.ai2go.vip ↗
              </a>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Government-scale education data unification platform with AI-powered analytics for ministries of education
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Tech:</strong> React 19, Chakra UI, ApexCharts, Framer Motion, @tsparticles |
              <strong> Features:</strong> 100+ districts, AI Widget Generator, 7 dashboard pages, ROI Calculator
            </p>
          </div>
        </div>
      </motion.section>

      {/* Technical Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="p-12 print:p-8 border-b-2 border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="text-blue-600 dark:text-blue-400">▸</span>
          Technical Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">WordPress Development</h4>
            <p className="text-gray-700 dark:text-gray-300">Custom Themes, Plugin Development, Gutenberg Blocks, WP REST API, WP-Cron, Hooks & Filters, Custom Post Types, ACF, Multisite</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">WooCommerce & eCommerce</h4>
            <p className="text-gray-700 dark:text-gray-300">WooCommerce, Custom Checkout, Payment Gateways, Membership/Subscriptions, Product Customization</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Languages & Frontend</h4>
            <p className="text-gray-700 dark:text-gray-300">PHP, JavaScript, TypeScript, HTML5, CSS3/SCSS, Tailwind CSS, React, Next.js (Headless WP)</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Database & Performance</h4>
            <p className="text-gray-700 dark:text-gray-300">MySQL/MariaDB, Redis Object Cache, Query Optimization, Caching, Core Web Vitals, SEO</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">DevOps & Tools</h4>
            <p className="text-gray-700 dark:text-gray-300">Git, WP-CLI, Composer, CI/CD, cPanel/SSH, Docker, VS Code, Postman</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Integrations & APIs</h4>
            <p className="text-gray-700 dark:text-gray-300">REST APIs, Webhooks, Gravity Forms, Brevo, Twilio, Stripe, Third-Party SaaS Integrations</p>
          </div>
        </div>
      </motion.section>

      {/* Education & Achievements */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="p-12 print:p-8"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="text-blue-600 dark:text-blue-400">▸</span>
          Education & Key Achievements
        </h3>

        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Software Engineering</h4>
            <p className="text-gray-700 dark:text-gray-300">Focus on WordPress Development, PHP Engineering, and Web Architecture</p>
          </div>

          <div className="mt-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">Key Metrics</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{projectStats.totalProjects}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{projectStats.liveProjects}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Live Deployments</div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{projectStats.totalTechnologies}+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
