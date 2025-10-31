"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 dark:from-blue-600/10 dark:to-indigo-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 dark:from-indigo-600/5 dark:to-blue-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full shadow-lg border border-white/20 dark:border-gray-700/20"
        >
          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm flex items-center gap-2">
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              className="inline-block"
            >
              👋
            </motion.span>
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight"
        >
          Hi, I'm{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient">
              Anas
            </span>
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-400/40 via-indigo-400/40 to-purple-400/40 -z-10 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-300 mb-6"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          I build production-ready web applications, SaaS platforms, and AI-powered automation systems.
          <br />
          <span className="font-semibold text-gray-700 dark:text-gray-300">Specialized in creating scalable solutions that solve real business problems.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6 group-hover:rotate-6 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-2xl font-bold text-lg hover:border-blue-600 dark:hover:border-blue-400 hover:bg-white dark:hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Stats with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "5", label: "Live Projects", icon: "🚀" },
            { value: "3", label: "SaaS Platforms", icon: "💼" },
            { value: "24/7", label: "AI Systems", icon: "🤖" },
            { value: "100%", label: "Client Satisfaction", icon: "⭐" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
