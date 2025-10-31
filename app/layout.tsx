import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anas Elkhodary - Full Stack Developer & AI Engineer | Portfolio",
  description: "Professional portfolio of Anas Elkhodary, showcasing expertise in Full Stack Development, AI/ML Engineering, and SaaS applications. Featured projects: SavetyAI, SalesBreach, Sales Master, AI Automation systems.",
  keywords: [
    "Anas Elkhodary",
    "Full Stack Developer",
    "AI Engineer",
    "Machine Learning",
    "Next.js Developer",
    "React Developer",
    "Python Developer",
    "Flask Developer",
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
    url: "https://my-portfolio-anaselkhodary69-9512s-projects.vercel.app",
    title: "Anas Elkhodary - Full Stack Developer & AI Engineer",
    description: "Professional portfolio showcasing Full Stack Development, AI/ML Engineering, and innovative SaaS solutions. Explore my projects in web development, mobile apps, and AI automation.",
    siteName: "Anas Elkhodary Portfolio",
    images: [
      {
        url: "/images/savety-ai-preview.png",
        width: 1200,
        height: 630,
        alt: "Anas Elkhodary Portfolio - Full Stack Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anas Elkhodary - Full Stack Developer & AI Engineer",
    description: "Professional portfolio showcasing Full Stack Development, AI/ML Engineering, and innovative SaaS solutions.",
    images: ["/images/savety-ai-preview.png"],
    creator: "@AnasElkhodary",
  },
  alternates: {
    canonical: "https://my-portfolio-anaselkhodary69-9512s-projects.vercel.app",
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
    "jobTitle": "Full Stack Developer & AI Engineer",
    "url": "https://my-portfolio-anaselkhodary69-9512s-projects.vercel.app",
    "sameAs": [
      "https://github.com/AnasElkhodary-69",
      "https://www.linkedin.com/in/anas-elkhodary-428765172/",
      "https://www.facebook.com/anas.radwan.930838/"
    ],
    "email": "anaselkhodary69@gmail.com",
    "knowsAbout": [
      "Full Stack Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Next.js",
      "React",
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
