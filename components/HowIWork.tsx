"use client";

import { motion } from "framer-motion";

export default function HowIWork() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements, defining project scope, and creating a detailed roadmap with clear milestones.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      title: "Development & Testing",
      description: "Building your solution with clean code, best practices, and rigorous testing to ensure quality and reliability.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      number: "03",
      title: "Deployment & Support",
      description: "Launching your project to production with documentation, training, and ongoing support to ensure success.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-indigo-50/30 to-white dark:from-gray-950 dark:via-slate-900 dark:to-gray-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100/40 to-purple-100/40 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full mb-6"
          >
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">⚡ MY PROCESS</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            How I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Work
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A streamlined process that delivers results from concept to deployment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Animated connector line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 dark:from-blue-800 dark:via-indigo-800 dark:to-purple-800 rounded-full" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-all duration-500 -z-10`} />

              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/20 h-full"
              >
                {/* Animated number badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2, type: "spring" }}
                  className={`relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.gradient} text-white rounded-2xl mb-6 text-3xl font-extrabold shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <span className="relative z-10">{step.number}</span>
                </motion.div>

                {/* Icon with animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  className={`text-transparent bg-clip-text bg-gradient-to-br ${step.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 inline-block`}
                >
                  {step.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:${step.gradient} transition-all">
                  {step.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Progress indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-600 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${step.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA with modern design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-2xl hover:shadow-purple-500/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Let's Start Your Project
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
