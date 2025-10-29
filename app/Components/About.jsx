"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  Target,
  Award,
  Trophy,
  Heart,
  Microscope,
  Users,
  MapPin,
  ArrowRight,
  Sparkles,
  BookOpen,
  GraduationCap,
  Stethoscope,
  Globe,
  CheckCircle2,
  Lightbulb,
  HandHeart,
} from "lucide-react";

export default function AboutPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Info cards with icons
  const infoCards = [
    {
      title: "About GIPS",
      desc: "Learn about our history, growth, and unique approach to paramedical education.",
      link: "/about/gips",
      icon: Building2,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      title: "Vision & Mission",
      desc: "Discover our guiding principles and the mission that drives us forward.",
      link: "/about/vision-mission",
      icon: Target,
      gradient: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      title: "Accreditations",
      desc: "Approved and recognized by national councils with top rankings.",
      link: "/about/accreditation",
      icon: Award,
      gradient: "from-teal-500 to-emerald-500",
      bgColor: "from-teal-50 to-emerald-50",
    },
    {
      title: "Awards & Achievements",
      desc: "Celebrating excellence through institutional, faculty, and student awards.",
      link: "/about/awards",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
    },
    {
      title: "Social Responsibilities",
      desc: "Contributing to society with community health, awareness, and outreach programs.",
      link: "/about/social-responsibilities",
      icon: HandHeart,
      gradient: "from-rose-500 to-red-500",
      bgColor: "from-rose-50 to-red-50",
    },
    {
      title: "Departments",
      desc: "Explore our diverse academic departments and world-class facilities.",
      link: "/about/departments",
      icon: Microscope,
      gradient: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50",
    },
    {
      title: "Student Services",
      desc: "Supporting students with mentoring, counseling, and career guidance.",
      link: "/about/student-services",
      icon: Users,
      gradient: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50",
    },
    {
      title: "How to Reach Us",
      desc: "Get directions to our campus and contact details for easy reach.",
      link: "/about/location",
      icon: MapPin,
      gradient: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
    },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "Modern Education",
      description:
        "State-of-the-art curriculum aligned with industry standards",
    },
    {
      icon: Stethoscope,
      title: "Expert Faculty",
      description: "Highly qualified professionals with extensive experience",
    },
    {
      icon: Globe,
      title: "Hands-on Training",
      description: "Practical learning in real healthcare environments",
    },
    {
      icon: CheckCircle2,
      title: "100% Placement Support",
      description: "Dedicated career guidance and placement assistance",
    },
  ];

  return (
    <main className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-100 via-blue-100 to-purple-100 py-20 px-6 text-center">
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.div animate={floatingAnimation} className="inline-block mb-6">
            <BookOpen className="w-16 h-16 text-blue-600 mx-auto" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6">
            About Garhwal Institute of Paramedical Sciences
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
          >
            Garhwal Institute of Paramedical Sciences (GIPS) is a premier
            institution dedicated to excellence in paramedical education and
            healthcare training. Since its establishment, GIPS has been
            committed to nurturing skilled healthcare professionals who combine
            academic excellence with a human touch.
          </motion.p>

          {/* Decorative dots */}
          <motion.div
            className="flex justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-600 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Info Cards Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {infoCards.map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Link href={item.link}>
                <motion.div
                  className="relative h-full p-6 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden group cursor-pointer"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="flex items-center text-cyan-600 font-medium group-hover:text-cyan-700 transition-colors">
                      <span>Read More</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <motion.div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose GIPS Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20 text-center overflow-hidden">
        {/* Animated background circles */}
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-12 h-12 text-white mx-auto" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose GIPS?
            </h2>

            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
              With a legacy of excellence, GIPS combines modern education,
              expert faculty, and hands-on training to shape healthcare leaders
              of tomorrow.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
              >
                <motion.div
                  className="bg-white rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <highlight.icon className="w-7 h-7 text-blue-600" />
                </motion.div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {highlight.title}
                </h3>
                <p className="text-white/80 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-br from-gray-50 to-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Start Your Healthcare Journey?
          </h3>
          <p className="text-gray-600 mb-8">
            Join GIPS and become part of a community dedicated to excellence in
            healthcare education.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/admissions"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
