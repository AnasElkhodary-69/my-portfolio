"use client";

import { motion } from "framer-motion";
import Resume from "@/components/Resume";

// Text-based PDF generated from this page by `npm run resume:pdf` (scripts/generate-resume-pdf.mjs).
// It must stay text-based so job platforms and ATS parsers can read it.
const RESUME_PDF = "/Anas_Elkhodary_Resume.pdf";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950 py-20 print:p-0 print:bg-white">
      <div className="container mx-auto px-6 print:px-0 print:max-w-none">
        {/* Header with Download Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 print:hidden"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Resume</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Download or print my professional resume
          </p>

          <div className="flex justify-center gap-4">
            <motion.a
              href={RESUME_PDF}
              download="Anas_Elkhodary_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </motion.a>

            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </motion.a>
          </div>
        </motion.div>

        {/* Resume Component */}
        <div className="max-w-4xl mx-auto print:max-w-none">
          <Resume />
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12 text-gray-600 dark:text-gray-400 print:hidden"
        >
          <p className="text-sm">
            The PDF download is text-based, so it can be imported into job platforms and applicant tracking systems.
          </p>
          <p className="text-xs mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
