// Generates a text-based (ATS-parseable) resume PDF from the /resume page.
// Usage: start the site (`npm run build && npm start`), then `npm run resume:pdf`.
// Optional: RESUME_URL=http://localhost:3000/resume npm run resume:pdf
import { chromium } from "@playwright/test";

const url = process.env.RESUME_URL || "http://localhost:3000/resume";
const output = "public/Anas_Elkhodary_Resume.pdf";

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage();
await page.emulateMedia({ media: "print", colorScheme: "light" });
await page.goto(url, { waitUntil: "networkidle" });
// Let entrance animations finish so nothing is captured mid-fade
await page.waitForTimeout(1500);
await page.pdf({
  path: output,
  printBackground: true,
  // Page size and margins come from the @media print rules in app/globals.css
  preferCSSPageSize: true,
});
await browser.close();
console.log(`Saved ${output}`);
