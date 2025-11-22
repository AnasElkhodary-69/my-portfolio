import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Anas Elkhodary - Product Builder & AI Engineer | Portfolio",
  description: "Professional portfolio of Anas Elkhodary, showcasing expertise in Product Building, AI/ML Engineering, and SaaS applications. Featured projects: SavetyAI, SalesBreach, Sales Master, IKRAA+OOLA, AI Automation systems.",
  keywords: [
    "Anas Elkhodary",
    "Product Builder",
    "AI Engineer",
    "Machine Learning",
    "Next.js Developer",
    "React Developer",
    "Python Developer",
    "Flutter Developer",
    "AI Automation",
    "Web Development",
    "Mobile App Development",
    "SaaS Developer",
    "Portfolio"
  ],
  authors: [{ name: "Anas Elkhodary", url: "https://github.com/AnasElkhodary-69" }],
  creator: "Anas Elkhodary",
  publisher: "Anas Elkhodary",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anaselkhodary.vercel.app",
    title: "Anas Elkhodary - Product Builder & AI Engineer",
    description: "Professional portfolio showcasing Product Building, AI/ML Engineering, and innovative SaaS solutions. Explore my projects in web development, mobile apps, and AI automation.",
    siteName: "Anas Elkhodary Portfolio",
    images: [
      {
        url: "/images/savety-ai-preview.png",
        width: 1200,
        height: 630,
        alt: "Anas Elkhodary Portfolio - Product Builder & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anas Elkhodary - Product Builder & AI Engineer",
    description: "Professional portfolio showcasing Product Building, AI/ML Engineering, and innovative SaaS solutions.",
    images: ["/images/savety-ai-preview.png"],
    creator: "@AnasElkhodary",
  },
  alternates: {
    canonical: "https://anaselkhodary.vercel.app",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anas Elkhodary",
    "jobTitle": "Product Builder & AI Engineer",
    "url": "https://anaselkhodary.vercel.app",
    "sameAs": [
      "https://github.com/AnasElkhodary-69",
      "https://www.linkedin.com/in/anas-elkhodary",
      "https://www.facebook.com/anas.radwan.930838/"
    ],
    "email": "anaselkhodary69@gmail.com",
    "knowsAbout": [
      "Product Building",
      "Artificial Intelligence",
      "Machine Learning",
      "Next.js",
      "React",
      "Flutter",
      "Python",
      "Flask",
      "TypeScript",
      "Tailwind CSS",
      "AI Automation",
      "SaaS Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Software Engineering"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120' width='120' height='120'><defs><linearGradient id='gA' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='%237C3AED'/><stop offset='1' stop-color='%23FF5CA0'/></linearGradient><linearGradient id='gE' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='%2306B6D4'/><stop offset='1' stop-color='%2360A5FA'/></linearGradient><filter id='shadow' x='-40%25' y='-40%25' width='180%25' height='180%25'><feDropShadow dx='0' dy='2' stdDeviation='3' flood-color='%23000' flood-opacity='0.12'/></filter></defs><text x='42' y='74' font-family='Inter,Roboto,Helvetica,Arial,sans-serif' font-weight='800' font-size='74' text-anchor='middle' dominant-baseline='middle' fill='url(%23gA)' filter='url(%23shadow)' style='letter-spacing:-4px'>A</text><g transform='translate(68,72) rotate(-8)'><text x='0' y='0' font-family='Inter,Roboto,Helvetica,Arial,sans-serif' font-weight='800' font-size='78' text-anchor='middle' dominant-baseline='middle' fill='url(%23gE)' style='mix-blend-mode:multiply;opacity:0.95;letter-spacing:-6px'>E</text></g></svg>" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <GoogleAnalytics />
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
