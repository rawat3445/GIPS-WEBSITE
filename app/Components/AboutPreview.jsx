"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Heart,
  GraduationCap,
  Target,
} from "lucide-react";

export default function AboutPreview() {
  const stats = [
    {
      icon: GraduationCap,
      number: "15+",
      label: "Years of Excellence",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      number: "5000+",
      label: "Alumni Network",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      number: "100%",
      label: "Qualified Faculty",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      number: "100%",
      label: "Placement Rate",
      gradient: "from-orange-500 to-amber-500",
    },
  ];

  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Training professionals with empathy and excellence",
    },
    {
      icon: Target,
      title: "Career-Focused",
      description: "Programs designed for real-world success",
    },
    {
      icon: Sparkles,
      title: "Modern Facilities",
      description: "State-of-the-art labs and equipment",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Since 2010</span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                GIPS
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Welcome to{" "}
              <span className="font-semibold text-gray-800">
                Garhwal Institute of Paramedical Sciences (GIPS)
              </span>{" "}
              — an esteemed institution run by Shri Satchandi Jankalyan Samiti,
              dedicated to excellence in paramedical education and healthcare
              training. Since our establishment in 2010, we have been committed
              to nurturing skilled, compassionate, and knowledgeable healthcare
              professionals.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg p-2 flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-xs">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/about">
                <motion.button
                  className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Discover Our Story</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 relative z-10" />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100 overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 shadow-md`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <motion.h3
                    className="text-3xl font-bold text-gray-800 mb-2"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.number}
                  </motion.h3>

                  <p className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>

                {/* Decorative corner */}
                <motion.div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}

            {/* Large Feature Card */}
            <motion.div
              className="col-span-2 relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated circles */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full opacity-10"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />

              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <BookOpen className="w-10 h-10 mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">
                  Excellence in Healthcare Education
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Empowering the next generation of healthcare professionals
                  with knowledge, skills, and compassion.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
