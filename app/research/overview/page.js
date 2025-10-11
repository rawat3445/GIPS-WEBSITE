"use client"
import { useState } from 'react';
import { Microscope, Lightbulb, Shield, Rocket, Users, BookOpen, FileText, TrendingUp, Target, Sparkles, Beaker, Globe, Brain, CheckCircle, Award, Flame } from 'lucide-react';

export default function ResearchOverview() {
  const [selectedCell, setSelectedCell] = useState(null);

  const researchCells = [
    {
      id: 'rd-cell',
      title: "Research & Development Cell",
      icon: Microscope,
      color: "from-blue-500 to-indigo-600",
      emoji: "🔬",
      tagline: "Advancing Knowledge Through Innovation",
      description: "The Research & Development Cell at GIPS serves as the cornerstone of academic excellence and innovation. It promotes a research-oriented culture among faculty and students, facilitating cutting-edge research in paramedical sciences. The cell provides comprehensive support including funding, infrastructure, expert guidance, and collaboration opportunities with leading healthcare institutions and research organizations.",
      keyFunctions: [
        "Promoting research culture among students and faculty members",
        "Providing seed funding and grants for research projects",
        "Organizing workshops, seminars, and national conferences",
        "Facilitating collaborations with hospitals and research institutes",
        "Supporting publication in peer-reviewed journals",
        "Maintaining state-of-the-art research laboratories"
      ],
      achievements: [
        "30+ research papers published annually",
        "Collaboration with 15+ hospitals",
        "₹50 lakhs+ research funding secured"
      ]
    },
    {
      id: 'ipr-cell',
      title: "Intellectual Property Rights Cell",
      icon: Shield,
      color: "from-purple-500 to-pink-600",
      emoji: "⚖️",
      tagline: "Protecting Innovation, Empowering Creators",
      description: "The IPR Cell at GIPS is dedicated to fostering innovation by protecting intellectual property created by students, faculty, and researchers. It provides comprehensive guidance on patents, copyrights, trademarks, and design registrations. The cell educates the academic community about IP rights, assists in filing applications, and ensures that innovative ideas developed within the institution are legally protected and commercialized effectively.",
      keyFunctions: [
        "Awareness programs on intellectual property rights",
        "Assistance in patent filing and prosecution",
        "Prior art search and patentability assessment",
        "Copyright and trademark registration support",
        "Technology transfer and licensing guidance",
        "IP portfolio management and commercialization"
      ],
      achievements: [
        "10+ patents filed by faculty and students",
        "Regular IPR awareness workshops conducted",
        "Partnerships with IP law firms"
      ]
    },
    {
      id: 'coe',
      title: "Centre of Excellence",
      icon: Award,
      color: "from-orange-500 to-red-600",
      emoji: "🏆",
      tagline: "Nurturing Excellence in Specialized Domains",
      description: "The Centre of Excellence at GIPS represents our commitment to achieving the highest standards in specialized areas of paramedical education and research. It focuses on advanced training, specialized research, and development of expertise in niche areas of healthcare. The centre brings together distinguished faculty, researchers, and industry experts to create a hub of knowledge and innovation that addresses contemporary challenges in the medical field.",
      keyFunctions: [
        "Specialized training programs in emerging healthcare technologies",
        "Advanced research in focus areas like rehabilitation sciences",
        "Industry-sponsored projects and consultancy services",
        "Development of innovative medical devices and protocols",
        "International collaborations and exchange programs",
        "Continuing education for healthcare professionals"
      ],
      achievements: [
        "5 specialized research labs established",
        "International collaborations with 3 universities",
        "Training provided to 500+ professionals"
      ]
    },
    {
      id: 'startup-cell',
      title: "Startups & Innovation Cell",
      icon: Rocket,
      color: "from-green-500 to-teal-600",
      emoji: "🚀",
      tagline: "Transforming Ideas into Healthcare Ventures",
      description: "The Startups & Innovation Cell at GIPS cultivates an entrepreneurial mindset among students and faculty by providing a supportive ecosystem for innovation and venture creation in healthcare technology. The cell offers mentorship, funding support, incubation facilities, and networking opportunities to transform innovative ideas into successful healthcare startups. It bridges the gap between academic research and commercial applications, encouraging students to become job creators rather than job seekers.",
      keyFunctions: [
        "Entrepreneurship development programs and bootcamps",
        "Mentorship from successful entrepreneurs and industry leaders",
        "Incubation support and co-working spaces",
        "Seed funding and connections with angel investors",
        "Business plan development and pitch training",
        "Market research and commercialization strategies"
      ],
      achievements: [
        "15+ student startups incubated",
        "₹1 Crore+ funding raised by startups",
        "3 successful healthcare product launches"
      ]
    },
    {
      id: 'student-research',
      title: "Student Research Cell",
      icon: Users,
      color: "from-indigo-500 to-purple-600",
      emoji: "👥",
      tagline: "Empowering Future Researchers",
      description: "The Student Research Cell at GIPS is a student-driven initiative that encourages undergraduate and postgraduate students to actively engage in research activities. It provides a platform for students to develop research skills, present their work, and contribute to scientific knowledge in paramedical sciences. The cell organizes research competitions, facilitates peer learning, and helps students publish their research findings, preparing them for advanced academic pursuits and research careers.",
      keyFunctions: [
        "Organizing student research symposiums and poster presentations",
        "Facilitating student participation in national conferences",
        "Conducting research methodology workshops",
        "Peer mentoring and research study groups",
        "Assistance in literature review and data analysis",
        "Support for undergraduate research projects"
      ],
      achievements: [
        "200+ students actively involved in research",
        "50+ student papers presented at conferences",
        "Annual student research fest organized"
      ]
    }
  ];

  const researchImpact = [
    {
      metric: "100+",
      label: "Research Projects",
      icon: FileText
    },
    {
      metric: "150+",
      label: "Publications",
      icon: BookOpen
    },
    {
      metric: "20+",
      label: "Patents & IPR",
      icon: Shield
    },
    {
      metric: "15+",
      label: "Startups Incubated",
      icon: Rocket
    },
    {
      metric: "6",
      label: "Research Cells",
      icon: Beaker
    }
  ];

  const whyResearch = [
    {
      icon: Brain,
      title: "Critical Thinking",
      description: "Develop analytical and problem-solving skills through research"
    },
    {
      icon: Target,
      title: "Evidence-Based Practice",
      description: "Contribute to evidence-based healthcare practices"
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Create innovative solutions for healthcare challenges"
    },
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description: "Enhance career prospects in academia and industry"
    }
  ];

  const collaborations = [
    "Leading Government & Private Hospitals",
    "National Research Institutions (ICMR, DBT)",
    "International Universities & Research Centers",
    "Healthcare Technology Companies",
    "Pharmaceutical & Medical Device Industries",
    "NGOs & Community Health Organizations"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 mt-15">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
              <Microscope className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">Research at GIPS</h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Fostering Innovation, Advancing Healthcare, Transforming Lives
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {researchImpact.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/30">
                  <IconComponent className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">{item.metric}</div>
                  <div className="text-sm opacity-90">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-blue-600">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Research Excellence at GIPS</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              At Garhwal Institute of Paramedical Sciences, research is the foundation of academic excellence 
              and innovation. We believe that quality research not only advances scientific knowledge but also 
              improves patient care, healthcare delivery, and contributes to solving real-world medical challenges.
            </p>
            <p>
              Our research ecosystem comprises six specialized cells, each dedicated to fostering innovation, 
              protecting intellectual property, nurturing excellence, promoting entrepreneurship, empowering 
              student researchers, and establishing centers of specialized expertise. These cells work 
              collaboratively to create a vibrant research culture that encourages curiosity, creativity, 
              and cutting-edge discoveries.
            </p>
            <p>
              From fundamental research in physiotherapy and medical imaging to applied research in healthcare 
              technology and startups, GIPS provides comprehensive support for faculty and students to engage 
              in meaningful research that makes a difference in the medical community.
            </p>
          </div>
        </div>

        {/* Why Research Matters */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Why Research Matters</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyResearch.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Research Cells Overview */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Research Cells</h2>
          <div className="space-y-6">
            {researchCells.map((cell) => {
              const IconComponent = cell.icon;
              const isSelected = selectedCell === cell.id;
              
              return (
                <div
                  key={cell.id}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${
                    isSelected ? 'ring-4 ring-blue-400' : ''
                  }`}
                >
                  <div
                    onClick={() => setSelectedCell(isSelected ? null : cell.id)}
                    className={`bg-gradient-to-r ${cell.color} p-8 text-white cursor-pointer hover:opacity-95 transition-opacity`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center flex-1">
                        <div className="text-6xl mr-6">{cell.emoji}</div>
                        <div>
                          <h3 className="text-3xl font-bold mb-2">{cell.title}</h3>
                          <p className="text-lg opacity-90 italic">{cell.tagline}</p>
                        </div>
                      </div>
                      <div className="text-3xl">
                        {isSelected ? '−' : '+'}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                      {/* Description */}
                      <div className="mb-6">
                        <h4 className="text-2xl font-bold text-gray-800 mb-4">About</h4>
                        <p className="text-gray-700 leading-relaxed text-lg">{cell.description}</p>
                      </div>

                      {/* Key Functions */}
                      <div className="mb-6">
                        <h4 className="text-2xl font-bold text-gray-800 mb-4">Key Functions</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {cell.keyFunctions.map((func, idx) => (
                            <div key={idx} className="flex items-start bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                              <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{func}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                        <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                          <Award className="w-6 h-6 text-orange-600 mr-2" />
                          Key Achievements
                        </h4>
                        <div className="space-y-2">
                          {cell.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center text-gray-700">
                              <Flame className="w-5 h-5 text-orange-500 mr-2" />
                              <span className="font-semibold">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Research Collaborations */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-10 mb-12 text-white">
          <div className="flex items-center justify-center mb-8">
            <Globe className="w-10 h-10 mr-4" />
            <h2 className="text-4xl font-bold">Research Collaborations</h2>
          </div>
          <p className="text-xl text-center mb-8 text-indigo-100">
            GIPS collaborates with leading institutions to enhance research quality and impact
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {collaborations.map((collab, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-md rounded-xl p-5 flex items-center border border-white/30">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0" />
                <span className="text-lg">{collab}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Support for Researchers */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Support for Researchers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">For Faculty</h3>
              <div className="space-y-3">
                <div className="flex items-start bg-blue-50 rounded-lg p-4">
                  <span className="text-blue-600 mr-3">•</span>
                  <span className="text-gray-700">Seed funding up to ₹5 lakhs per project</span>
                </div>
                <div className="flex items-start bg-blue-50 rounded-lg p-4">
                  <span className="text-blue-600 mr-3">•</span>
                  <span className="text-gray-700">Publication support and assistance</span>
                </div>
                <div className="flex items-start bg-blue-50 rounded-lg p-4">
                  <span className="text-blue-600 mr-3">•</span>
                  <span className="text-gray-700">Conference participation funding</span>
                </div>
                <div className="flex items-start bg-blue-50 rounded-lg p-4">
                  <span className="text-blue-600 mr-3">•</span>
                  <span className="text-gray-700">Collaborative research opportunities</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">For Students</h3>
              <div className="space-y-3">
                <div className="flex items-start bg-purple-50 rounded-lg p-4">
                  <span className="text-purple-600 mr-3">•</span>
                  <span className="text-gray-700">Research methodology training workshops</span>
                </div>
                <div className="flex items-start bg-purple-50 rounded-lg p-4">
                  <span className="text-purple-600 mr-3">•</span>
                  <span className="text-gray-700">Mentorship from experienced faculty</span>
                </div>
                <div className="flex items-start bg-purple-50 rounded-lg p-4">
                  <span className="text-purple-600 mr-3">•</span>
                  <span className="text-gray-700">Access to research labs and equipment</span>
                </div>
                <div className="flex items-start bg-purple-50 rounded-lg p-4">
                  <span className="text-purple-600 mr-3">•</span>
                  <span className="text-gray-700">Funding for innovative project ideas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center border-t-4 border-blue-600">
          <Lightbulb className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Join the Research Community</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you&apos;re a faculty member with a groundbreaking idea or a student eager to explore 
            research, GIPS provides the perfect ecosystem to turn your vision into reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
              Submit Research Proposal
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Contact Research Cell
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}