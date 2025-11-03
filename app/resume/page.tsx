"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Resume from "@/components/Resume";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ResumePage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;

    setIsGenerating(true);

    try {
      // Get the resume element
      const resumeElement = resumeRef.current.querySelector('div') as HTMLElement;
      if (!resumeElement) throw new Error('Resume element not found');

      // Clone the element for off-screen manipulation
      const clonedElement = resumeElement.cloneNode(true) as HTMLElement;

      // Style the clone to be off-screen and full width
      clonedElement.className = clonedElement.className.replace(/max-w-\w+/g, '').replace(/mx-auto/g, '');
      clonedElement.style.position = 'fixed';
      clonedElement.style.left = '-9999px';
      clonedElement.style.top = '0';
      clonedElement.style.width = '794px';
      clonedElement.style.maxWidth = 'none';
      clonedElement.style.margin = '0';

      // Append to body temporarily
      document.body.appendChild(clonedElement);

      // Wait for layout to settle
      await new Promise(resolve => setTimeout(resolve, 100));

      // Capture the cloned element as canvas
      const canvas = await html2canvas(clonedElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        width: 794, // A4 width in pixels at 96 DPI
      });

      console.log('Canvas dimensions:', canvas.width, 'x', canvas.height);

      // Remove the cloned element
      document.body.removeChild(clonedElement);

      // A4 dimensions in mm
      const pdfWidth = 210;
      const pdfHeight = 297;

      // Calculate the aspect ratio
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // Create PDF with custom height to fit all content
      const imgWidth = pdfWidth; // Full width
      const imgHeight = (pdfWidth / canvasWidth) * canvasHeight; // Proportional height

      // Use custom page size that matches our content
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [pdfWidth, imgHeight], // Custom page size to fit content exactly
        compress: true,
      });

      console.log('PDF dimensions:', pdfWidth, 'x', imgHeight);

      // Convert to JPEG with high quality compression
      const imgData = canvas.toDataURL("image/jpeg", 0.95);

      // Add image filling the entire page
      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight, undefined, "FAST");

      // Download PDF
      pdf.save("Anas_Elkhodary_Resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950 py-20 print:p-0 print:bg-white">
      <div className="container mx-auto px-6 print:px-0">
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
            <motion.button
              onClick={handleDownloadPDF}
              disabled={isGenerating}
              whileHover={{ scale: isGenerating ? 1 : 1.05 }}
              whileTap={{ scale: isGenerating ? 1 : 0.95 }}
              className={`px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 ${
                isGenerating ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isGenerating ? (
                <>
                  <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating PDF...
                </>
              ) : (
                <>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </>
              )}
            </motion.button>

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

        {/* Resume Component - wrapped in ref for PDF generation */}
        <div ref={resumeRef} className="max-w-4xl mx-auto">
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
            This resume is optimized for PDF export and printing. Click the download button above to save a copy.
          </p>
          <p className="text-xs mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
