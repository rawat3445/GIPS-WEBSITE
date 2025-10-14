"use client";
import { useState } from 'react';
import { HeartHandshake, MessageCircle, Heart, DollarSign, Briefcase, Shield, Phone, Mail, MapPin, Clock, Users, Smile, AlertCircle, CheckCircle, HelpCircle, BookOpen, Stethoscope } from 'lucide-react';

export default function StudentSupport() {
  const [selectedService, setSelectedService] = useState(null);
  const [showEmergency, setShowEmergency] = useState(false);

  const supportServices = [
    {
      id: 'counseling',
      icon: MessageCircle,
      title: "Counseling Services",
      subtitle: "Academic, Career & Personal Support",
      description: "Professional counseling support for all your academic and personal concerns",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      details: {
        overview: "Our counseling services provide comprehensive support to help students navigate academic challenges, career decisions, and personal issues.",
        services: [
          "One-on-one confidential counseling sessions",
          "Academic performance guidance and study strategies",
          "Career counseling and future planning",
          "Stress management and coping techniques",
          "Personal development and goal setting"
        ],
        availability: "Monday to Friday: 9:00 AM - 5:00 PM",
        contact: "counseling@gips.edu.in"
      }
    },
    {
      id: 'health',
      icon: Heart,
      title: "Health & Wellness",
      subtitle: "Your Physical & Mental Wellbeing",
      description: "Access to healthcare facilities and comprehensive wellness programs",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      details: {
        overview: "We prioritize student health with on-campus medical facilities and regular wellness initiatives.",
        services: [
          "On-campus medical room with first aid",
          "Tie-ups with nearby hospitals for emergencies",
          "Regular health checkup camps",
          "Yoga and meditation sessions",
          "Mental health awareness programs",
          "Nutritional guidance and diet counseling"
        ],
        availability: "24/7 Emergency Support Available",
        contact: "health@gips.edu.in"
      }
    },
    {
      id: 'financial',
      icon: DollarSign,
      title: "Financial Aid",
      subtitle: "Scholarships & Fee Support",
      description: "Scholarships, fee waivers, and financial assistance programs",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      details: {
        overview: "We believe financial constraints should never hinder education. Multiple aid options are available.",
        services: [
          "Merit-based scholarships for top performers",
          "Need-based financial assistance",
          "Fee installment facilities",
          "Education loan guidance and support",
          "Government scholarship application help",
          "Work-study opportunities on campus"
        ],
        availability: "Office Hours: 10:00 AM - 4:00 PM",
        contact: "financial@gips.edu.in"
      }
    },
    {
      id: 'placement',
      icon: Briefcase,
      title: "Placements & Internships",
      subtitle: "Career Development Support",
      description: "Dedicated placement cell connecting you with opportunities",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      details: {
        overview: "Our placement cell works tirelessly to bridge the gap between education and employment.",
        services: [
          "Campus recruitment drives with hospitals",
          "Resume building and profile optimization",
          "Mock interviews and group discussions",
          "Internship opportunities at leading institutions",
          "Industry networking events",
          "Skill development workshops"
        ],
        availability: "Monday to Saturday: 9:00 AM - 5:00 PM",
        contact: "placement@gips.edu.in"
      }
    },
    {
      id: 'safety',
      icon: Shield,
      title: "Anti-Ragging & Safety",
      subtitle: "Safe Campus Environment",
      description: "Zero tolerance policy with strict monitoring and safety measures",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      details: {
        overview: "GIPS maintains a completely safe and ragging-free environment for all students.",
        services: [
          "24/7 CCTV surveillance across campus",
          "Anti-ragging committee and squad",
          "Anonymous complaint mechanism",
          "Regular awareness campaigns",
          "Security personnel on duty round the clock",
          "Women's safety cell and helpline"
        ],
        availability: "24/7 Emergency Helpline Available",
        contact: "safety@gips.edu.in"
      }
    },
    {
      id: 'academic',
      icon: BookOpen,
      title: "Academic Support",
      subtitle: "Learning Assistance Programs",
      description: "Extra support for academic excellence and learning enhancement",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      details: {
        overview: "Additional academic support to help every student achieve their full potential.",
        services: [
          "Remedial classes for challenging subjects",
          "Peer tutoring and study groups",
          "Library extended hours during exams",
          "Learning disability support",
          "Language and communication skills",
          "Research guidance and support"
        ],
        availability: "Monday to Saturday: 8:00 AM - 6:00 PM",
        contact: "academic@gips.edu.in"
      }
    }
  ];

  const quickHelp = [
    { icon: Phone, title: "Emergency", value: "+91-XXXX-XXXXXX", color: "text-red-600" },
    { icon: Mail, title: "General Inquiries", value: "support@gips.edu.in", color: "text-blue-600" },
    { icon: MessageCircle, title: "WhatsApp Support", value: "+91-XXXX-XXXXXX", color: "text-green-600" },
    { icon: MapPin, title: "Student Services Office", value: "Admin Block, Ground Floor", color: "text-purple-600" }
  ];

  const faqs = [
    {
      question: "How can I access counseling services?",
      answer: "You can book an appointment through the student portal or visit the counseling center directly during office hours. All sessions are confidential."
    },
    {
      question: "What scholarships are available?",
      answer: "We offer merit-based scholarships, need-based financial aid, and help with government scholarships. Visit the financial aid office for detailed information."
    },
    {
      question: "How does the placement process work?",
      answer: "Students are registered with the placement cell in their final year. We conduct pre-placement training, invite recruiters, and facilitate interviews on campus."
    },
    {
      question: "What should I do in case of a medical emergency?",
      answer: "Contact the emergency helpline immediately. Our medical team and nearby hospital partners provide 24/7 emergency support."
    }
  ];

  const testimonials = [
    {
      name: "Sneha Patel",
      course: "BPT Final Year",
      message: "The counseling services helped me overcome my exam anxiety. The support staff is incredibly caring and understanding."
    },
    {
      name: "Arjun Singh",
      course: "BMRIT 3rd Year",
      message: "Got placed in a leading hospital through campus recruitment. The placement cell's training and support was invaluable!"
    },
    {
      name: "Priya Sharma",
      course: "B.Optom 2nd Year",
      message: "The scholarship I received made my education possible. Forever grateful to GIPS for their financial support."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 mt-30">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className=" bg-opacity-20 p-4 rounded-full backdrop-blur-sm">
              <HeartHandshake className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">Student Support Services</h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            We&apos;re here for you every step of the way - providing comprehensive support 
            for your academic, personal, and professional journey
          </p>
          <button
            onClick={() => setShowEmergency(!showEmergency)}
            className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform hover:scale-105 flex items-center mx-auto"
          >
            <AlertCircle className="w-6 h-6 mr-2" />
            Emergency Contacts
          </button>
        </div>
      </div>

      {/* Emergency Contact Modal */}
      {showEmergency && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                <AlertCircle className="w-8 h-8 text-red-600 mr-3" />
                Emergency Contacts
              </h3>
              <button onClick={() => setShowEmergency(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-semibold text-red-800 mb-2">24/7 Emergency Helpline</p>
                <p className="text-2xl font-bold text-red-600">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-800 mb-2">Campus Security</p>
                <p className="text-xl font-bold text-blue-600">+91-XXXX-XXXXXX</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-800 mb-2">Medical Emergency</p>
                <p className="text-xl font-bold text-green-600">+91-XXXX-XXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-purple-600">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Commitment to You</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            GIPS offers a wide range of student support services to ensure a safe, enriching, 
            and supportive academic environment. We understand that student life encompasses 
            more than just academics, which is why we provide comprehensive support across 
            all aspects of your college experience.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our dedicated team of professionals is committed to your success, wellbeing, and 
            personal growth. Whether you need academic guidance, financial assistance, career 
            counseling, or just someone to talk to - we&apos;re here for you.
          </p>
        </div>

        {/* Support Services Grid */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Support Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportServices.map((service) => {
              const IconComponent = service.icon;
              const isSelected = selectedService === service.id;
              
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(isSelected ? null : service.id)}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 ${
                    isSelected ? 'scale-105 shadow-2xl ring-4 ring-purple-400' : 'hover:scale-102 hover:shadow-xl'
                  }`}
                >
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                    <div className="bg-white bg-opacity-30 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-90">{service.subtitle}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    {!isSelected && (
                      <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors flex items-center">
                        Learn more <span className="ml-2">→</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Service Details */}
        {selectedService && (
          <div className="bg-white rounded-2xl shadow-2xl p-10 mb-12 border-l-8 border-purple-600 animate-fadeIn">
            {(() => {
              const service = supportServices.find(s => s.id === selectedService);
              const IconComponent = service.icon;
              return (
                <>
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-full flex items-center justify-center text-white mr-4`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">{service.title}</h3>
                      <p className="text-gray-600">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Overview</h4>
                    <p className="text-gray-700 leading-relaxed">{service.details.overview}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">What We Offer</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.details.services.map((item, idx) => (
                        <div key={idx} className="flex items-start bg-gray-50 rounded-lg p-4">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <Clock className="w-5 h-5 text-purple-600 mr-2" />
                        <h5 className="font-bold text-gray-800">Availability</h5>
                      </div>
                      <p className="text-gray-700">{service.details.availability}</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <Mail className="w-5 h-5 text-purple-600 mr-2" />
                        <h5 className="font-bold text-gray-800">Contact</h5>
                      </div>
                      <p className="text-gray-700">{service.details.contact}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedService(null)}
                    className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Close Details
                  </button>
                </>
              );
            })()}
          </div>
        )}

        {/* Quick Help Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-10 mb-12 text-white">
          <h2 className="text-4xl font-bold mb-8 text-center">Quick Help & Contact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickHelp.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className=" bg-opacity-20 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-30 transition-all text-center">
                  <IconComponent className="w-10 h-10 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm opacity-90">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <div className="flex items-center mb-8">
            <HelpCircle className="w-10 h-10 text-purple-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-400 transition-colors">
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-start">
                  <span className="text-purple-600 mr-3">Q:</span>
                  {faq.question}
                </h4>
                <p className="text-gray-700 ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">What Students Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-purple-600">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-12 text-white text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Need Help? We&apos;re Here!</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Don&apos;t hesitate to reach out. Our support team is dedicated to ensuring 
            you have the best possible experience at GIPS.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg">
              Contact Support Team
            </button>
            <button className="bg-purple-800 bg-opacity-50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-70 transition-colors border-2 border-white">
              Visit Student Services Office
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}