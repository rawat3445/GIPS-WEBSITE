"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Building2,
  Users,
  GraduationCap,
  TrendingUp,
  Shield,
  Star,
  Trophy,
  FileCheck,
  BookOpen,
  Target,
  Sparkles,
  ArrowLeft,
  Medal,
  BarChart3,
  FlaskConical,
  Stethoscope,
} from "lucide-react";

export default function AccreditationPage() {
  // Animation variants
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

  const cardHoverVariants = {
    rest: { scale: 1, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const approvalCards = [
    {
      icon: Shield,
      title: "State Medical Council",
      description:
        "Recognized by the Uttarakhand State Medical Faculty ensuring compliance with state healthcare education standards.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: GraduationCap,
      title: "UGC Recognition",
      description:
        "Our institution maintains standards set by the University Grants Commission for quality higher education in allied health sciences.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Building2,
      title: "All India Council",
      description:
        "Affiliated with recognized paramedical councils ensuring national-level standardization of our courses.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Award,
      title: "ISO Certified",
      description:
        "ISO 9001:2015 certified for quality management systems in education delivery and administration.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const qualityParameters = [
    { label: "Faculty-Student Ratio", value: "1:15 (As per norms)", icon: Users },
    {
      label: "Faculty Qualifications",
      value: "100% qualified with relevant degrees",
      icon: GraduationCap,
    },
    {
      label: "Laboratory Facilities",
      value: "300 sq ft per 20 students",
      icon: FlaskConical,
    },
    {
      label: "Clinical Training",
      value: "500+ bed hospitals",
      icon: Stethoscope,
    },
  ];

  const rankings = [
    {
      icon: Trophy,
      title: "Top Paramedical Institute",
      description:
        "Recognized among the leading paramedical colleges in Uttarakhand for academic excellence.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: TrendingUp,
      title: "85%+ Placement Rate",
      description:
        "Students placed in leading hospitals, diagnostic centers, and healthcare institutions.",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Star,
      title: "Industry-Recognized Training",
      description:
        "Partnerships with top healthcare facilities ensuring practical, hands-on training.",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      icon: Medal,
      title: "Academic Excellence Awards",
      description:
        "Consistently producing university toppers and merit holders across various disciplines.",
      gradient: "from-purple-400 to-pink-500",
    },
  ];

  const studentBenefits = [
    { text: "Recognized Degrees", icon: FileCheck },
    { text: "Quality Education", icon: BookOpen },
    { text: "Government Jobs Eligibility", icon: Shield },
    { text: "Better Career Prospects", icon: Target },
    { text: "Further Education", icon: GraduationCap },
    { text: "Professional Registration", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8 mt-0">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotate: [0, 10, -10, 0],
              transition: { duration: 2, repeat: Infinity, repeatDelay: 3 },
            }}
          >
            <Award className="w-16 h-16 text-blue-600 mx-auto" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Approval, Accreditation & Rankings
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            GIPS is recognized and approved by various statutory and professional
            bodies, ensuring that our academic programs meet the highest quality
            standards.
          </p>
        </motion.div>

        {/* University Affiliation - Hero Card */}
        <motion.div
          className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 md:p-12 mb-12 text-white shadow-2xl"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24" />

          <div className="relative z-10 flex items-start space-x-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <GraduationCap className="w-16 h-16 flex-shrink-0" />
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold mb-3">University Affiliation</h2>
              <p className="text-xl font-semibold mb-2">
                H.N.B. Uttarakhand Medical Education University
              </p>
              <p className="text-blue-100 leading-relaxed">
                All our paramedical programs are recognized and approved by the state
                medical university, ensuring standardized curriculum and quality
                education.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Regulatory Approvals Grid */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approvalCards.map((card, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={itemVariants}
                whileHover="hover"
                initial="rest"
              >
                <motion.div
                  className="bg-white rounded-2xl p-6 h-full shadow-lg border border-gray-100 overflow-hidden"
                  variants={cardHoverVariants}
                >
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <card.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>

                  <motion.div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* NAAC Accreditation */}
        <motion.div
          className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 mb-12 border border-purple-100 shadow-xl"
          variants={itemVariants}
        >
          <div className="space-y-6">
            {/* NAAC Card */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-md"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-4">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                  NAAC
                </span>
                <h3 className="font-bold text-xl text-gray-800">
                  National Assessment and Accreditation Council
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                NAAC accreditation evaluates our institution on seven key criteria:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Curricular Aspects & Program Design",
                  "Teaching-Learning & Evaluation",
                  "Research & Innovation",
                  "Infrastructure & Resources",
                  "Student Support & Progression",
                  "Governance & Leadership",
                  "Institutional Values",
                ].map((criterion, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{criterion}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quality Card */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-md"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-4">
                <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                  Quality
                </span>
                <h3 className="font-bold text-xl text-gray-800">
                  Program-Specific Accreditation
                </h3>
              </div>
              <p className="text-gray-700">
                Our individual paramedical programs undergo rigorous evaluation based
                on curriculum structure, faculty competence, student performance, and
                outcome-based learning approaches.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Quality Parameters */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {qualityParameters.map((param, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex items-start space-x-4"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
                variants={itemVariants}
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-3 flex-shrink-0">
                  <param.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {param.label}
                  </h3>
                  <p className="text-sm text-gray-600">{param.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rankings Grid */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {rankings.map((rank, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${rank.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <rank.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      {rank.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {rank.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${rank.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Benefits */}
        <motion.div
          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 mb-12 border border-green-100 shadow-xl"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Why These Approvals Matter for Students
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {studentBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-4 shadow-md flex items-center space-x-3"
                whileHover={{ scale: 1.05, backgroundColor: "#f0fdf4" }}
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <benefit.icon className="w-6 h-6 text-green-600 flex-shrink-0" />
                </motion.div>
                <span className="font-medium text-gray-800 text-sm">
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Continuous Improvement */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8"
          variants={itemVariants}
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
        >
          <div className="flex items-start space-x-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Target className="w-10 h-10 text-blue-600 flex-shrink-0" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Commitment to Continuous Improvement
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We regularly undergo institutional assessments and self-evaluation
                processes to maintain and enhance our quality standards. Our faculty
                participates in continuous professional development, and we update our
                curriculum based on the latest healthcare industry requirements and
                technological advancements. Student feedback, alumni success, and
                industry partnerships drive our ongoing quality enhancement initiatives.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Back Button */}
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
