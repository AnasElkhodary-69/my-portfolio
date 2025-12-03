import { projectStats } from "@/data/projects";

export default function About() {
  const skills = [
    { category: "Frontend", items: ["Next.js", "React", "Astro", "Tailwind CSS", "TypeScript", "Flutter"] },
    { category: "Backend", items: ["Python/Flask", "Node.js", "SQLAlchemy", "REST APIs", "Webhooks"] },
    { category: "AI/ML", items: ["Mistral AI", "DSPy", "RAG Systems", "NLP", "OCR (pytesseract)"] },
    { category: "DevOps", items: ["Docker", "Git", "CI/CD", "Gunicorn", "Daemon Services"] },
    { category: "Database", items: ["SQLite", "PostgreSQL", "Odoo ERP", "Redis"] },
    { category: "Tools", items: ["VS Code", "Android Studio", "Postman", "Firebase"] }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Full-stack developer with expertise in building scalable web applications,
            intelligent automation systems, and cross-platform mobile apps
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What I Do
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I specialize in building modern, scalable applications that solve real-world problems.
                My experience spans from creating beautiful, performant websites to developing
                complex AI-powered automation systems.
              </p>
              <p>
                With a strong foundation in both frontend and backend development, I've successfully
                delivered projects ranging from multi-tenant SaaS platforms to production-ready
                AI systems processing emails 24/7.
              </p>
              <p>
                I'm passionate about clean code, user experience, and leveraging the latest
                technologies to build solutions that make a difference.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills & Technologies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
              >
                <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">{projectStats.totalProjects}</div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">50K+</div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">Lines of Code</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">{projectStats.totalTechnologies}+</div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">Technologies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">{projectStats.liveProjects}</div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">Live Deployments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
