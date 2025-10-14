"use client"
import { Target, Heart, Lightbulb, TrendingUp, Users, Award, Globe, BookOpen, Sparkles, CheckCircle } from 'lucide-react';

export default function VisionMissionPage() {
  const missionPoints = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Provide comprehensive paramedical education with modern facilities, updated curriculum, and industry-relevant training"
    },
    {
      icon: Lightbulb,
      title: "Research & Innovation",
      description: "Encourage research, innovation, and evidence-based practices in healthcare sciences and medical technology"
    },
    {
      icon: Heart,
      title: "Values & Ethics",
      description: "Promote values of empathy, integrity, compassion, and dedicated service to society and patients"
    },
    {
      icon: Users,
      title: "Holistic Development",
      description: "Foster overall personality development combining technical skills with soft skills and professional conduct"
    },
    {
      icon: Globe,
      title: "Industry Collaboration",
      description: "Build strong partnerships with hospitals, healthcare institutions, and industry for practical exposure"
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Strive for excellence through continuous evaluation, feedback, and enhancement of educational processes"
    }
  ];

  const coreObjectives = [
    "Develop competent healthcare professionals with strong theoretical knowledge and practical skills",
    "Create a conducive learning environment that encourages curiosity, creativity, and critical thinking",
    "Provide state-of-the-art laboratories, libraries, and infrastructure for quality education",
    "Ensure hands-on clinical training through hospital tie-ups and internship programs",
    "Promote research culture and support faculty and students in publishing research papers",
    "Maintain high standards of teaching through qualified, experienced, and dedicated faculty",
    "Foster ethical values, professional behavior, and patient-centric approach in students",
    "Facilitate excellent placement opportunities with leading hospitals and healthcare organizations",
    "Contribute to community health through outreach programs and awareness campaigns",
    "Achieve recognition as a premier paramedical institution at state and national level"
  ];

  const strategicGoals = [
    {
      goal: "Academic Excellence",
      description: "Maintain high academic standards through quality teaching, regular assessments, and continuous curriculum updates"
    },
    {
      goal: "Infrastructure Development",
      description: "Continuously upgrade facilities, laboratories, equipment, and learning resources"
    },
    {
      goal: "Faculty Enhancement",
      description: "Recruit qualified faculty and provide regular training, workshops, and professional development opportunities"
    },
    {
      goal: "Student Success",
      description: "Ensure 95%+ placement rate, support higher education aspirations, and nurture entrepreneurship"
    },
    {
      goal: "Research Promotion",
      description: "Establish research centers, provide funding, and encourage publication in reputed journals"
    },
    {
      goal: "Community Engagement",
      description: "Organize health camps, awareness programs, and contribute to public health initiatives"
    }
  ];

  const values = [
    { value: "Excellence", icon: Award, description: "Striving for the highest standards" },
    { value: "Integrity", icon: CheckCircle, description: "Upholding ethical practices" },
    { value: "Innovation", icon: Sparkles, description: "Embracing new ideas" },
    { value: "Compassion", icon: Heart, description: "Caring with empathy" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 mt-30">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
              <Target className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">Vision & Mission</h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Guiding Principles That Drive Excellence in Paramedical Education
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Vision Section */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-blue-600">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center text-white mr-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800">Our Vision</h2>
          </div>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p className="text-2xl font-semibold text-indigo-700 mb-6">
              &quot;To be a center of excellence in paramedical education, research, and healthcare service&quot;
            </p>
            <p>
              At Garhwal Institute of Paramedical Sciences (GIPS), we envision ourselves as a leading 
              institution that sets benchmarks in paramedical education and allied health sciences. Our 
              vision is to create a dynamic learning ecosystem where students not only acquire technical 
              knowledge but also develop into compassionate, ethical, and competent healthcare professionals.
            </p>
            <p>
              We aspire to be recognized nationally and internationally for our academic excellence, 
              innovative teaching methodologies, cutting-edge research, and contributions to healthcare 
              delivery. Our ultimate vision is to produce graduates who make meaningful differences in 
              people&apos;s lives through quality patient care, medical innovation, and community health service.
            </p>
            <p>
              We aim to nurture professionals who combine technical expertise with human values - 
              individuals who are not just skilled practitioners but also caring healers, ethical 
              decision-makers, and responsible citizens committed to improving healthcare accessibility 
              and quality in society.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-2xl p-8 text-white">
            <div className="flex items-center">
              <Heart className="w-12 h-12 mr-4" />
              <h2 className="text-4xl font-bold">Our Mission</h2>
            </div>
            <p className="text-xl mt-4 text-purple-100">
              Transforming aspirations into achievements through quality education and holistic development
            </p>
          </div>
          <div className="bg-white rounded-b-2xl shadow-xl p-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missionPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-14 h-14 rounded-full flex items-center justify-center text-white mb-4">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{point.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{point.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Core Objectives */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Core Objectives</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {coreObjectives.map((objective, index) => (
              <div key={index} className="flex items-start bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 border-l-4 border-blue-600">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{objective}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Goals */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Strategic Goals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicGoals.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.goal}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl shadow-xl p-10 mb-12 text-white">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-center border border-white/30 hover:bg-white/30 transition-all">
                  <IconComponent className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{item.value}</h3>
                  <p className="text-sm text-orange-100">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Sparkles className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Commitment</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              We are committed to creating a nurturing educational environment where every student can 
              realize their full potential. Through innovative teaching, dedicated faculty, modern 
              infrastructure, and strong industry connections, we prepare our students not just for 
              jobs, but for meaningful careers in healthcare.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At GIPS, we don&apos;t just educate - we inspire, empower, and transform lives. We believe 
              that when our students succeed, healthcare improves, communities thrive, and society 
              benefits. This is our vision, our mission, and our promise to every student who walks 
              through our doors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}