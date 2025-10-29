"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Activity,
  Eye,
  Stethoscope,
  GraduationCap,
  Lightbulb,
  Award,
  Users,
  Building2,
  Briefcase,
  TrendingUp,
  Globe,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  Target,
  BookOpen,
  Clock,
} from "lucide-react";

export default function DepartmentsPage() {
  const departments = [
    {
      id: 1,
      name: "Physiotherapy",
      icon: Activity,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      description:
        "Our Physiotherapy department focuses on rehabilitation and physical wellness through evidence-based treatment methods.",
      programs: [
        "Bachelor of Physiotherapy (BPT)",
        "Post-Graduate Diploma in Physiotherapy",
        "Sports Physiotherapy Specialization",
      ],
      highlights: [
        "State-of-the-art rehabilitation facilities",
        "Expert faculty with international certifications",
        "Clinical internships in leading hospitals",
      ],
      career:
        "Physical Therapist, Sports Rehabilitation Specialist, Clinical Physiotherapist",
    },
    {
      id: 2,
      name: "Radiology & Imaging Technology",
      icon: Stethoscope,
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      description:
        "Advanced diagnostic imaging programs training professionals in modern radiological techniques and technology.",
      programs: [
        "Diploma in Radiography",
        "Bachelor of Radiography (BRT)",
        "Advanced Imaging Technology Programs",
      ],
      highlights: [
        "Latest imaging equipment including CT, MRI, and X-ray",
        "Hands-on training with modern technology",
        "Digital imaging and PACS system training",
      ],
      career:
        "Radiographer, Imaging Technologist, Quality Assurance Specialist",
    },
    {
      id: 3,
      name: "Operation Theatre Technology",
      icon: Heart,
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      description:
        "Specialized training for skilled operation theatre professionals equipped to manage surgical environments.",
      programs: [
        "Diploma in Operation Theatre Technology (DOTT)",
        "Advanced Surgical Technology",
        "Infection Control & Sterilization Certification",
      ],
      highlights: [
        "Simulated operating theatre labs",
        "Exposure to diverse surgical specialties",
        "Training in latest surgical instruments and protocols",
      ],
      career:
        "Operation Theatre Technician, Surgical Technologist, Operating Room Manager",
    },
    {
      id: 4,
      name: "Optometry",
      icon: Eye,
      color: "orange",
      gradient: "from-orange-500 to-amber-500",
      description:
        "Comprehensive eye care training producing skilled optometrists and vision care specialists.",
      programs: [
        "Diploma in Optometry",
        "Bachelor of Optometry (BOpt)",
        "Advanced Contact Lens & Refractive Surgery Programs",
      ],
      highlights: [
        "Modern optometry labs and equipment",
        "Clinical practice in well-equipped vision centers",
        "Training in latest diagnostic techniques",
      ],
      career:
        "Optometrist, Vision Care Specialist, Refractive Surgery Technician",
    },
  ];

  const whyChooseItems = [
    {
      icon: Users,
      title: "Expert Faculty",
      description:
        "Highly qualified and experienced instructors with real-world healthcare experience",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Building2,
      title: "Modern Infrastructure",
      description:
        "State-of-the-art labs and equipment aligned with international standards",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Lightbulb,
      title: "Practical Training",
      description:
        "Extensive clinical internships and hands-on experience in leading hospitals",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description:
        "Courses approved by regulatory bodies with national and international accreditation",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Briefcase,
      title: "Career Support",
      description: "Placement assistance and career guidance for all graduates",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description:
        "Curriculum designed to meet international healthcare education standards",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8 mt-0">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div
          className="bg-white shadow-xl rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden"
          variants={itemVariants}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-100 to-blue-100 rounded-full opacity-20 -ml-24 -mb-24" />

          <div className="relative z-10">
            <motion.div
              className="flex items-center justify-center mb-6"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <BookOpen className="w-16 h-16 text-blue-600" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 text-center">
              Departments at GIPS
            </h1>
            <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto leading-relaxed">
              GIPS offers diverse programs through specialized departments, each
              designed to provide focused knowledge, practical skills, and
              comprehensive training. Our departments are equipped with modern
              facilities and staffed by experienced faculty committed to excellence
              in healthcare education.
            </p>
          </div>
        </motion.div>

        {/* Departments Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
        >
          {departments.map((dept, index) => (
            <motion.div
              key={dept.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 shadow-lg rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${dept.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-start space-x-4 mb-6">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${dept.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <dept.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {dept.name}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {dept.description}
                    </p>
                  </div>
                </div>

                {/* Programs */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wide">
                      Programs Offered
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {dept.programs.map((program, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start space-x-2 text-gray-700 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{program}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Sparkles className="w-5 h-5 text-purple-600 mr-2" />
                    <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wide">
                      Department Highlights
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {dept.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start space-x-2 text-gray-700 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                      >
                        <span className="text-purple-500 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Career Path */}
                <motion.div
                  className={`bg-gradient-to-r ${dept.gradient} bg-opacity-10 p-5 rounded-2xl border border-gray-200`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-2">
                    <Briefcase className="w-5 h-5 text-gray-700 mr-2" />
                    <h3 className="font-bold text-gray-800 text-sm">
                      Career Opportunities
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm">{dept.career}</p>
                </motion.div>
              </div>

              {/* Corner decoration */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Our Departments */}
        <motion.div
          className="bg-white shadow-xl rounded-3xl p-8 md:p-12 mb-12"
          variants={itemVariants}
        >
          <div className="text-center mb-10">
            <motion.div
              className="inline-block mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Target className="w-12 h-12 text-blue-600 mx-auto" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Why Choose GIPS Departments?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience excellence in healthcare education with our
              comprehensive support and world-class facilities
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {whyChooseItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-md`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Hover indicator */}
                <motion.div
                  className="mt-4 flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span>Learn more</span>
                  <TrendingUp className="w-4 h-4 ml-1" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Admission CTA */}
        <motion.div
          className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-2xl rounded-3xl p-8 md:p-12 mb-8 text-white"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
        >
          {/* Animated background circles */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full opacity-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />

          <div className="relative z-10 text-center md:text-left">
            <motion.div
              className="inline-block mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            >
              <Sparkles className="w-12 h-12" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Healthcare Career?
            </h2>
            <p className="text-white/90 mb-4 text-lg leading-relaxed">
              Join our departments and become a skilled healthcare professional.
              GIPS is committed to nurturing talent and creating future leaders in
              healthcare.
            </p>
            <p className="text-white/80 text-sm mb-6">
              Contact our admission office for eligibility criteria, application
              procedures, and intake information.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/admissions"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Apply Now</span>
                <Clock className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div variants={itemVariants}>
          <Link
            href="/about"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to About Overview</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
