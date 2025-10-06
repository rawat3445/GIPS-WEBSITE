"use client";
import { useState } from 'react';
import { Users, Heart, Lightbulb, Target, TrendingUp, MessageCircle, BookOpen, Award, Smile, Brain, Compass, Sparkles } from 'lucide-react';

export default function StudentMentoring() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const mentoringPrograms = [
    {
      icon: BookOpen,
      title: "Academic Counseling",
      description: "One-on-one sessions to excel in academics",
      details: [
        "Personalized study plans and strategies",
        "Subject-specific guidance and doubt clearing",
        "Exam preparation and time management",
        "Performance tracking and improvement tips"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-500"
    },
    {
      icon: Target,
      title: "Career Guidance",
      description: "Navigate your professional journey",
      details: [
        "Competitive exam preparation support",
        "Career path exploration and planning",
        "Industry trends and job market insights",
        "Higher education opportunities abroad"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-500"
    },
    {
      icon: Sparkles,
      title: "Personality Development",
      description: "Build confidence and professional skills",
      details: [
        "Communication and presentation skills",
        "Leadership and teamwork workshops",
        "Professional etiquette and grooming",
        "Interview preparation and mock sessions"
      ],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-500"
    },
    {
      icon: Heart,
      title: "Mental Health Support",
      description: "Your wellbeing is our priority",
      details: [
        "Stress management and coping strategies",
        "Confidential counseling sessions",
        "Peer support groups and activities",
        "Work-life balance guidance"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-500"
    }
  ];

  const mentorshipBenefits = [
    {
      icon: Users,
      title: "Personal Attention",
      description: "Dedicated mentors assigned to small student groups"
    },
    {
      icon: Compass,
      title: "Holistic Growth",
      description: "Focus on academic, personal, and professional development"
    },
    {
      icon: MessageCircle,
      title: "Open Communication",
      description: "Safe space to discuss concerns and aspirations"
    },
    {
      icon: TrendingUp,
      title: "Continuous Progress",
      description: "Regular monitoring and feedback on your journey"
    },
    {
      icon: Brain,
      title: "Skill Enhancement",
      description: "Workshops and training for overall personality development"
    },
    {
      icon: Smile,
      title: "Emotional Support",
      description: "Caring environment that values mental health and wellbeing"
    }
  ];

  const mentorQualities = [
    "Experienced faculty with deep industry knowledge",
    "Empathetic listeners who understand student challenges",
    "Skilled counselors trained in mentoring techniques",
    "Passionate educators committed to student success",
    "Accessible and approachable at all times"
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "BPT Final Year",
      quote: "My mentor helped me overcome my fears and guided me through difficult subjects. Their support was instrumental in my academic success."
    },
    {
      name: "Rahul Kumar",
      course: "BOTT 2nd Year",
      quote: "The career counseling sessions opened my eyes to various opportunities in the medical field. I'm now confident about my future."
    },
    {
      name: "Anjali Verma",
      course: "B.Optom 3rd Year",
      quote: "The mental health support and stress management workshops helped me maintain balance during challenging times. Truly grateful!"
    }
  ];

  const stats = [
    { number: "1:15", label: "Mentor-Student Ratio" },
    { number: "100%", label: "Students Mentored" },
    { number: "50+", label: "Dedicated Mentors" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-20 p-4 rounded-full backdrop-blur-sm">
              <Users className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">Student Mentoring</h1>
          <p className="text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Nurturing Every Student Through Personalized Guidance and Care
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-purple-600">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center">
            <Lightbulb className="w-10 h-10 text-yellow-500 mr-4" />
            Our Mentoring Philosophy
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              GIPS strongly believes in nurturing every student through personalized mentoring programs. 
              Faculty members act as academic and personal guides, ensuring that students can balance 
              their academic journey with emotional and professional growth.
            </p>
            <p>
              We understand that each student is unique, with individual dreams, challenges, and potential. 
              Our mentoring program is designed to provide holistic support that goes beyond textbooks, 
              helping students develop into confident, well-rounded healthcare professionals.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mentorship Programs */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Mentorship Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mentoringPrograms.map((program, index) => {
              const IconComponent = program.icon;
              const isSelected = selectedProgram === index;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedProgram(isSelected ? null : index)}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 ${
                    isSelected ? 'scale-105 shadow-2xl' : 'hover:scale-102 hover:shadow-xl'
                  }`}
                >
                  <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-white bg-opacity-30 p-3 rounded-xl mr-4">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{program.title}</h3>
                          <p className="text-sm opacity-90 mt-1">{program.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`p-6 transition-all duration-300 ${isSelected ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
                    <ul className="space-y-3">
                      {program.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-purple-600 mr-3 mt-1">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {!isSelected && (
                    <div className="px-6 pb-6">
                      <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                        Click to learn more →
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-10 mb-12 text-white">
          <h2 className="text-4xl font-bold mb-8 text-center">Why Our Mentoring Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentorshipBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-30 transition-all">
                  <div className="bg-white bg-opacity-30 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-purple-100">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mentor Qualities */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Our Mentors</h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Our mentors are carefully selected faculty members who combine academic expertise with 
            genuine care for student wellbeing and success.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mentorQualities.map((quality, index) => (
              <div key={index} className="flex items-start bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border-l-4 border-purple-600">
                <Award className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{quality}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Student Voices</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-purple-600">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-2xl shadow-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Need Guidance?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Our mentors are here to support you every step of the way. Don&apos;t hesitate to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg">
              Schedule a Session
            </button>
            <button className="bg-purple-800 bg-opacity-50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-70 transition-colors border-2 border-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}