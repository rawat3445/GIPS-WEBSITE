"use client"
import { useState } from 'react';
import { Shield, FileText, Lightbulb, Award, Users, CheckCircle, TrendingUp, Globe, Scale, Lock, BookOpen, Briefcase, AlertCircle, Mail, Phone, Download, Star } from 'lucide-react';

export default function IPRCell() {
  const [activeTab, setActiveTab] = useState('about');
  const [expandedType, setExpandedType] = useState(null);

  const iprTypes = [
    {
      id: 'patent',
      title: "Patents",
      icon: "📜",
      color: "from-blue-500 to-indigo-600",
      description: "Legal protection for inventions and innovative processes",
      whatIsIt: "A patent is an exclusive right granted for an invention, which provides protection for a limited period (20 years from filing date) in exchange for public disclosure of the invention.",
      coverage: [
        "New medical devices and instruments",
        "Innovative therapeutic techniques and methods",
        "Novel pharmaceutical formulations",
        "Healthcare technology solutions",
        "Diagnostic equipment and processes",
        "Rehabilitation devices and mechanisms"
      ],
      requirements: [
        "Novelty - Must be new and not previously known",
        "Inventive Step - Non-obvious to experts in the field",
        "Industrial Application - Must be useful and practical",
        "Proper documentation and technical specifications"
      ]
    },
    {
      id: 'copyright',
      title: "Copyright",
      icon: "©️",
      color: "from-purple-500 to-pink-600",
      description: "Protection for original literary, artistic, and educational works",
      whatIsIt: "Copyright protects original works of authorship including books, research papers, software, presentations, and educational materials. Protection lasts for the lifetime of the author plus 60 years.",
      coverage: [
        "Research papers and dissertations",
        "Educational content and course materials",
        "Software and computer programs",
        "Videos and multimedia content",
        "Textbooks and reference manuals",
        "Databases and compilations"
      ],
      requirements: [
        "Original work created by the author",
        "Fixed in tangible medium",
        "Minimum degree of creativity",
        "Automatic protection upon creation"
      ]
    },
    {
      id: 'trademark',
      title: "Trademark",
      icon: "™️",
      color: "from-green-500 to-teal-600",
      description: "Protection for distinctive marks, logos, and brand identities",
      whatIsIt: "A trademark is a distinctive sign that identifies products or services of a particular source. It can be renewed indefinitely every 10 years.",
      coverage: [
        "College logos and emblems",
        "Brand names for innovations",
        "Product names and taglines",
        "Service marks for programs",
        "Certification marks",
        "Collective marks"
      ],
      requirements: [
        "Distinctive and not generic",
        "Not similar to existing marks",
        "Should not be deceptive",
        "Clear graphical representation"
      ]
    },
    {
      id: 'design',
      title: "Industrial Design",
      icon: "🎨",
      color: "from-orange-500 to-red-600",
      description: "Protection for aesthetic aspects of functional articles",
      whatIsIt: "Design registration protects the visual design of objects - shape, configuration, pattern, or ornament. Protection lasts for 15 years from registration date.",
      coverage: [
        "Medical device designs",
        "Equipment housing and enclosures",
        "Furniture and fixtures",
        "Product packaging design",
        "Interface designs",
        "Orthotic and prosthetic designs"
      ],
      requirements: [
        "New or original design",
        "Visible and aesthetic features",
        "Not previously published",
        "Applied to article by industrial process"
      ]
    }
  ];

  const objectives = [
    {
      icon: Lightbulb,
      title: "Create IP Awareness",
      description: "Educate faculty and students about intellectual property rights and their importance"
    },
    {
      icon: Shield,
      title: "Protect Innovations",
      description: "Facilitate filing and prosecution of patents, copyrights, trademarks, and designs"
    },
    {
      icon: TrendingUp,
      title: "Commercialization Support",
      description: "Assist in technology transfer, licensing, and commercialization of IP assets"
    },
    {
      icon: Globe,
      title: "Build IP Portfolio",
      description: "Develop and maintain a strong intellectual property portfolio"
    },
    {
      icon: Users,
      title: "Policy Implementation",
      description: "Implement IP policies ensuring fair distribution of rights and benefits"
    },
    {
      icon: BookOpen,
      title: "Capacity Building",
      description: "Conduct workshops, training programs, and awareness sessions"
    }
  ];

  const achievements = [
    { year: "2024", count: "12", type: "Patents Filed", icon: "📜" },
    { year: "2023-24", count: "5", type: "Patents Granted", icon: "✅" },
    { year: "2024", count: "8", type: "Copyrights Registered", icon: "©️" },
    { year: "2023-24", count: "3", type: "Trademarks Filed", icon: "™️" },
    { year: "2024", count: "15", type: "IP Awareness Workshops", icon: "🎓" },
    { year: "2023-24", count: "2", type: "Technology Transfers", icon: "🤝" }
  ];

  const committeeMembers = [
    { role: "Chairperson", name: "Dr. Rajesh Kumar", designation: "Director, GIPS", email: "director@gips.edu.in" },
    { role: "IPR Coordinator", name: "Dr. Anjali Sharma", designation: "Associate Professor", email: "ipr.cell@gips.edu.in" },
    { role: "Legal Advisor", name: "Adv. Suresh Patel", designation: "IP Attorney", email: "legal@gips.edu.in" },
    { role: "Faculty Member", name: "Dr. Priya Verma", designation: "Research Coordinator", email: "priya.verma@gips.edu.in" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 mt-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
              <Shield className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">Intellectual Property Rights Cell</h1>
          <p className="text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Protecting Innovation, Empowering Creativity, Fostering Excellence
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'about'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              About IPR Cell
            </button>
            <button
              onClick={() => setActiveTab('ipr-types')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'ipr-types'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Types of IPR
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'services'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Services & FAQs
            </button>
          </div>
        </div>

        {/* About Tab */}
        {activeTab === 'about' && (
          <div>
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-purple-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About the IPR Cell</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  The Intellectual Property Rights (IPR) Cell at Garhwal Institute of Paramedical Sciences 
                  is dedicated to fostering a culture of innovation by protecting and promoting intellectual 
                  property created by our faculty, researchers, and students. Established in line with the 
                  National IPR Policy and guidelines from DPIIT and AICTE, the IPR Cell serves as the 
                  institutional mechanism for managing all IP-related matters.
                </p>
                <p>
                  In today&apos;s knowledge-driven economy, intellectual property has become a critical asset for 
                  educational institutions. The IPR Cell plays a vital role in identifying, protecting, and 
                  commercializing innovations emerging from research activities. We provide comprehensive 
                  support ranging from IP awareness and training to patent filing, prosecution, and 
                  technology transfer.
                </p>
                <p>
                  Our vision is to make GIPS a hub of innovation where intellectual property is recognized, 
                  valued, and effectively managed. We strive to create an ecosystem where researchers are 
                  encouraged to innovate, their creations are protected, and innovations reach society 
                  through effective commercialization and licensing mechanisms.
                </p>
              </div>
            </div>

            {/* Objectives */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Objectives</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {objectives.map((objective, index) => {
                  const IconComponent = objective.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center text-white mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{objective.title}</h3>
                      <p className="text-gray-600">{objective.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl shadow-xl p-10 mb-12 text-white">
              <div className="flex items-center justify-center mb-8">
                <Award className="w-12 h-12 mr-4" />
                <h2 className="text-4xl font-bold">Our Achievements</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-center border border-white/30">
                    <div className="text-5xl mb-3">{achievement.icon}</div>
                    <div className="text-4xl font-bold mb-2">{achievement.count}</div>
                    <p className="text-lg font-semibold mb-1">{achievement.type}</p>
                    <p className="text-sm opacity-90">{achievement.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Committee Members */}
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <div className="flex items-center mb-8">
                <Users className="w-10 h-10 text-purple-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-800">IPR Committee Members</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {committeeMembers.map((member, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500 transition-all">
                    <div className="flex items-start">
                      <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl mr-4 flex-shrink-0">
                        {member.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800">{member.name}</h4>
                        <p className="text-sm text-purple-600 font-semibold mb-1">{member.role}</p>
                        <p className="text-sm text-gray-600 mb-2">{member.designation}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Mail className="w-4 h-4 mr-2" />
                          {member.email}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* IPR Types Tab */}
        {activeTab === 'ipr-types' && (
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Types of Intellectual Property Rights</h2>
            <div className="space-y-6">
              {iprTypes.map((type) => {
                const isExpanded = expandedType === type.id;
                return (
                  <div key={type.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div
                      onClick={() => setExpandedType(isExpanded ? null : type.id)}
                      className={`bg-gradient-to-r ${type.color} p-8 text-white cursor-pointer hover:opacity-95 transition-opacity`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center flex-1">
                          <span className="text-6xl mr-6">{type.icon}</span>
                          <div>
                            <h3 className="text-3xl font-bold mb-2">{type.title}</h3>
                            <p className="text-lg opacity-90">{type.description}</p>
                          </div>
                        </div>
                        <div className="text-4xl font-bold">
                          {isExpanded ? '−' : '+'}
                        </div>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                        <div className="mb-6">
                          <h4 className="text-2xl font-bold text-gray-800 mb-3">What is {type.title}?</h4>
                          <p className="text-gray-700 text-lg leading-relaxed">{type.whatIsIt}</p>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-2xl font-bold text-gray-800 mb-4">What Can Be Protected?</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {type.coverage.map((item, idx) => (
                              <div key={idx} className="flex items-start bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                                <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                                <span className="text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6">
                          <h4 className="text-2xl font-bold text-gray-800 mb-4">Key Requirements</h4>
                          <div className="space-y-3">
                            {type.requirements.map((req, idx) => (
                              <div key={idx} className="flex items-start">
                                <Star className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                                <span className="text-gray-700">{req}</span>
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
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-pink-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Services Offered by IPR Cell</h2>
              <div className="space-y-6">
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">IP Consultation & Guidance</h3>
                  <p className="text-gray-700">Expert consultation on patentability assessment, IP strategy development, and freedom to operate analysis.</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Filing Assistance</h3>
                  <p className="text-gray-700">Complete support for patent drafting, prior art search, application preparation, and prosecution.</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">IP Training & Workshops</h3>
                  <p className="text-gray-700">Regular workshops on patent drafting, IP law, innovation disclosure, and technology commercialization.</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Technology Transfer Support</h3>
                  <p className="text-gray-700">Assistance in licensing negotiations, market validation, and industry collaboration facilitation.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-10 text-white text-center">
              <Download className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Download Forms & Resources</h3>
              <p className="text-xl mb-8 text-indigo-100">
                Access all necessary forms and guidelines for IP protection
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-lg">
                  Innovation Disclosure Form
                </button>
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-lg">
                  IP Policy Document
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mt-0 text-center">
          <Lightbulb className="w-16 h-16 text-purple-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Have an Innovation to Protect?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact the IPR Cell to discuss your invention and get expert guidance on intellectual property protection!
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center bg-purple-50 rounded-lg px-6 py-3">
              <Mail className="w-6 h-6 text-purple-600 mr-3" />
              <span className="text-gray-700 font-semibold">ipr.cell@gips.edu.in</span>
            </div>
            <div className="flex items-center bg-purple-50 rounded-lg px-6 py-3">
              <Phone className="w-6 h-6 text-purple-600 mr-3" />
              <span className="text-gray-700 font-semibold">+91-XXXX-XXXXXX</span>
            </div>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
            Submit Innovation Disclosure
          </button>
        </div>
      </div>
    </div>
  );
}