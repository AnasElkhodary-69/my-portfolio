"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects as projectsData } from "@/data/projects";

// Transform projects data for the homepage cards
const projects = projectsData.map(p => ({
  id: p.id,
  title: p.title,
  category: p.category,
  description: p.shortDescription,
  tech: p.tech.slice(0, 4), // Show first 4 tech items
  highlights: p.highlights.slice(0, 4), // Show first 4 highlights
  status: p.status,
  link: p.link,
  image: p.image
}));

const categories = ["All", "Web Design", "Web Application", "AI Automation", "Mobile App"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-slate-900 dark:to-gray-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100/40 to-pink-100/40 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 rounded-full mb-6"
          >
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">💼 MY WORK</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work in web development, AI automation, and mobile applications
          </p>
        </motion.div>

        {/* Category Filter with modern design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-8 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "text-white"
                  : "text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md"
              }`}
            >
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with staggered animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-indigo-400/0 group-hover:from-blue-400/20 group-hover:to-indigo-400/20 rounded-3xl blur-xl transition-all duration-500 -z-10" />

              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              >
                {/* Project Image with overlay */}
                {project.image && (
                  <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Status badge overlay */}
                    <div className="absolute top-4 right-4">
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                        className={`px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-lg ${
                          project.status === "Live" || project.status === "Production"
                            ? "bg-green-500/90 text-white"
                            : project.status === "In Development"
                            ? "bg-yellow-500/90 text-white"
                            : "bg-blue-500/90 text-white"
                        }`}
                      >
                        {project.status}
                      </motion.span>
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack with modern pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-lg border border-blue-100 dark:border-blue-800"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-lg">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA buttons with better styling */}
                  <div className="flex gap-3 mt-auto">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                    >
                      View Details
                    </Link>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-xl text-sm font-bold hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
