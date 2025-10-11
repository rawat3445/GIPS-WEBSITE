"use client"
import { useState } from 'react';
import { Microscope, Target, Users, Lightbulb, TrendingUp, BookOpen, Globe, Award, CheckCircle, FileText, Beaker, Brain, DollarSign, Calendar, Mail, Phone, Download } from 'lucide-react';

export default function RDCell() {
  const [activeTab, setActiveTab] = useState('about');

  const objectives = [
    {
      icon: Target,
      title: "Foster Research Culture",
      description: "Create an environment that encourages innovative thinking and research among faculty and students"
    },
    {
      icon: Lightbulb,
      title: "Promote Innovation",
      description: "Support cutting-edge research projects that address contemporary healthcare challenges"
    },
    {
      icon: Globe,
      title: "Build Collaborations",
      description: "Establish partnerships with leading hospitals, industries, and research institutions"
    },
    {
      icon: BookOpen,
      title: "Enhance Publications",
      description: "Facilitate publication in high-impact national and international journals"
    },
    {
      icon: TrendingUp,
      title: "Secure Funding",
      description: "Help researchers access external funding from government and private agencies"
    },
    {
      icon: Award,
      title: "Recognize Excellence",
      description: "Acknowledge and reward outstanding research contributions"
    }
  ];

  const researchAreas = [
    {
      area: "Physiotherapy & Rehabilitation",
      icon: "🏥",
      topics: [
        "Musculoskeletal rehabilitation techniques",
        "Neurological physiotherapy interventions",
        "Sports injury management",
        "Pediatric physiotherapy approaches",
        "Geriatric care and rehabilitation"
      ]
    },
    {
      area: "Medical Radiology & Imaging",
      icon: "🔬",
      topics: [
        "Advanced imaging modalities",
        "Radiation safety protocols",
        "AI in medical imaging",
        "Contrast media research",
        "Image quality optimization"
      ]
    },
    {
      area: "Operation Theatre Technology",
      icon: "⚕️",
      topics: [
        "Surgical instrumentation innovations",
        "OT safety and protocols",
        "Sterilization techniques",
        "Emergency surgical procedures",
        "OT management systems"
      ]
    },
    {
      area: "Optometry & Vision Science",
      icon: "👁️",
      topics: [
        "Contact lens research",
        "Pediatric vision care",
        "Low vision rehabilitation",
        "Binocular vision disorders",
        "Ocular disease management"
      ]
    },
    {
      area: "Healthcare Technology",
      icon: "💻",
      topics: [
        "Medical device development",
        "Telemedicine solutions",
        "Healthcare informatics",
        "Wearable health monitors",
        "Digital health interventions"
      ]
    },
    {
      area: "Clinical Research",
      icon: "📊",
      topics: [
        "Evidence-based practice studies",
        "Clinical trials and protocols",
        "Patient outcome research",
        "Healthcare quality improvement",
        "Epidemiological studies"
      ]
    }
  ];

  const facilities = [
    {
      facility: "Advanced Research Laboratories",
      description: "State-of-the-art labs equipped with modern research equipment",
      features: ["Biomechanics lab", "Diagnostic imaging equipment", "Clinical simulation facilities", "Data analysis workstations"]
    },
    {
      facility: "Digital Library & Resources",
      description: "Access to online journals, databases, and research tools",
      features: ["PubMed, Scopus, Web of Science", "Reference management software", "Statistical analysis tools", "E-books and journals"]
    },
    {
      facility: "Research Collaboration Spaces",
      description: "Dedicated areas for research teams and discussions",
      features: ["Meeting rooms", "Presentation facilities", "Collaborative workspaces", "Video conferencing"]
    },
    {
      facility: "Funding Support Office",
      description: "Assistance with grant writing and funding applications",
      features: ["Proposal development help", "Budget planning support", "Grant submission assistance", "Progress reporting guidance"]
    }
  ];

  const fundingSchemes = [
    {
      type: "Internal Seed Grants",
      amount: "Up to ₹5 lakhs",
      eligibility: "Faculty members with innovative research proposals",
      duration: "12-24 months"
    },
    {
      type: "Student Research Grants",
      amount: "₹25,000 - ₹1 lakh",
      eligibility: "UG/PG students for dissertation and research projects",
      duration: "6-12 months"
    },
    {
      type: "Conference Participation Fund",
      amount: "₹15,000 - ₹50,000",
      eligibility: "Faculty and students presenting papers",
      duration: "Per conference"
    },
    {
      type: "Publication Support",
      amount: "Up to ₹30,000",
      eligibility: "For article processing charges in reputed journals",
      duration: "Per publication"
    }
  ];

  const achievements = [
    { year: "2024", achievement: "45+ research papers published in peer-reviewed journals", icon: "📄" },
    { year: "2024", achievement: "₹75 lakhs research funding secured from external agencies", icon: "💰" },
    { year: "2023", achievement: "Organized National Conference on Paramedical Sciences", icon: "🎤" },
    { year: "2023", achievement: "5 patents filed by faculty members", icon: "⚖️" },
    { year: "2023", achievement: "Collaboration established with 8 new hospitals", icon: "🤝" },
    { year: "2022", achievement: "Best Research Institute Award at State Level", icon: "🏆" }
  ];

  const researchProcess = [
    {
      step: 1,
      title: "Identify Research Problem",
      description: "Select relevant and impactful research topic in consultation with mentors"
    },
    {
      step: 2,
      title: "Submit Proposal",
      description: "Prepare detailed research proposal with objectives, methodology, and budget"
    },
    {
      step: 3,
      title: "Ethical Clearance",
      description: "Obtain approval from Institutional Ethics Committee if required"
    },
    {
      step: 4,
      title: "Funding Allocation",
      description: "R&D Cell reviews and approves funding based on merit and feasibility"
    },
    {
      step: 5,
      title: "Conduct Research",
      description: "Execute research with support from R&D Cell and mentors"
    },
    {
      step: 6,
      title: "Publish & Present",
      description: "Disseminate findings through publications and conference presentations"
    }
  ];

  const events = [
    {
      event: "Research Methodology Workshops",
      frequency: "Quarterly",
      description: "Training on research design, statistics, and analysis tools"
    },
    {
      event: "Research Seminar Series",
      frequency: "Monthly",
      description: "Faculty and guest speakers present their research work"
    },
    {
      event: "Annual Research Symposium",
      frequency: "Yearly",
      description: "Platform for students and faculty to present research papers"
    },
    {
      event: "Grant Writing Workshops",
      frequency: "Bi-annually",
      description: "Training on writing effective research proposals"
    }
  ];

  const committeeMembers = [
    { role: "Director", name: "Dr. Rajesh Kumar", designation: "Chairperson, R&D Cell", email: "director@gips.edu.in" },
    { role: "Coordinator", name: "Dr. Priya Sharma", designation: "R&D Cell Coordinator", email: "rd.cell@gips.edu.in" },
    { role: "Faculty Member", name: "Dr. Amit Verma", designation: "Research Guide - Physiotherapy", email: "amit.verma@gips.edu.in" },
    { role: "Faculty Member", name: "Dr. Meera Patel", designation: "Research Guide - Radiology", email: "meera.patel@gips.edu.in" },
    { role: "External Expert", name: "Dr. Suresh Reddy", designation: "Industry Consultant", email: "consultant@gips.edu.in" }
  ];

  const faqs = [
    {
      question: "Who can apply for R&D Cell funding?",
      answer: "All full-time faculty members and enrolled students of GIPS are eligible to apply for research funding. Students must have a faculty mentor for their research projects."
    },
    {
      question: "What types of research are supported?",
      answer: "The R&D Cell supports basic research, applied research, clinical studies, technology development, and interdisciplinary research in all paramedical disciplines."
    },
    {
      question: "How long does the proposal review process take?",
      answer: "Proposals are reviewed within 30 days of submission. The R&D Committee meets monthly to evaluate applications."
    },
    {
      question: "Is ethical clearance mandatory?",
      answer: "Yes, any research involving human subjects, animals, or biological samples requires prior approval from the Institutional Ethics Committee."
    },
    {
      question: "Can I apply for external funding?",
      answer: "Yes, the R&D Cell actively encourages and assists faculty in applying for external funding from agencies like ICMR, DST, DBT, and other government/private organizations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 mt-15">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
              <Microscope className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">Research & Development Cell</h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Driving Innovation and Excellence in Paramedical Research
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
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              About R&D Cell
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'research'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Research Areas
            </button>
            <button
              onClick={() => setActiveTab('funding')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'funding'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Funding & Support
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'process'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Research Process
            </button>
          </div>
        </div>

        {/* About Tab */}
        {activeTab === 'about' && (
          <div>
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-blue-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About the R&D Cell</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  The Research & Development Cell at Garhwal Institute of Paramedical Sciences is the driving 
                  force behind our commitment to academic excellence and innovation. Established to promote 
                  a robust research culture, the R&D Cell serves as the central hub for all research activities, 
                  providing comprehensive support to faculty and students in their research endeavors.
                </p>
                <p>
                  Our mission is to foster high-quality research that contributes to the advancement of 
                  paramedical sciences, improves healthcare delivery, and addresses real-world medical 
                  challenges. We believe that research is not just about generating knowledge but also about 
                  translating discoveries into practical applications that benefit patients and communities.
                </p>
                <p>
                  The R&D Cell facilitates research through funding support, infrastructure development, 
                  mentorship programs, and collaborative partnerships with leading healthcare institutions. 
                  We encourage interdisciplinary research and provide a supportive ecosystem where innovative 
                  ideas can flourish and make a meaningful impact.
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
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center text-white mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{objective.title}</h3>
                      <p className="text-gray-600">{objective.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl p-10 mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Research Facilities</h2>
              <div className="space-y-6">
                {facilities.map((fac, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{fac.facility}</h3>
                    <p className="text-gray-700 mb-4">{fac.description}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {fac.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center bg-indigo-50 rounded-lg p-3">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl shadow-xl p-10 mb-12 text-white">
              <div className="flex items-center justify-center mb-8">
                <Award className="w-12 h-12 mr-4" />
                <h2 className="text-4xl font-bold">Recent Achievements</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-center border border-white/30">
                    <div className="text-5xl mb-3">{achievement.icon}</div>
                    <p className="text-lg font-semibold mb-2">{achievement.achievement}</p>
                    <p className="text-sm opacity-90">{achievement.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Committee Members */}
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
              <div className="flex items-center mb-8">
                <Users className="w-10 h-10 text-blue-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-800">R&D Committee Members</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {committeeMembers.map((member, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-all">
                    <div className="flex items-start">
                      <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4 flex-shrink-0">
                        {member.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800">{member.name}</h4>
                        <p className="text-sm text-blue-600 font-semibold mb-1">{member.role}</p>
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

        {/* Research Areas Tab */}
        {activeTab === 'research' && (
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Priority Research Areas</h2>
            <div className="space-y-6">
              {researchAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white">
                    <div className="flex items-center">
                      <span className="text-5xl mr-4">{area.icon}</span>
                      <h3 className="text-3xl font-bold">{area.area}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Focus Topics:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {area.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-start bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                          <Beaker className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Events & Workshops */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-10 mt-12 text-white">
              <div className="flex items-center justify-center mb-8">
                <Calendar className="w-10 h-10 mr-4" />
                <h2 className="text-4xl font-bold">Research Events & Workshops</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
                    <h4 className="text-2xl font-bold mb-2">{event.event}</h4>
                    <p className="text-lg mb-3 opacity-90">Frequency: {event.frequency}</p>
                    <p className="text-purple-100">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Funding Tab */}
        {activeTab === 'funding' && (
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-green-600">
              <div className="flex items-center mb-6">
                <DollarSign className="w-10 h-10 text-green-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-800">Funding Opportunities</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The R&D Cell provides multiple funding schemes to support research activities. All proposals 
                are evaluated based on scientific merit, feasibility, and potential impact.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {fundingSchemes.map((scheme, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-green-500 transition-all">
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">{scheme.type}</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="font-semibold text-gray-700 w-24">Amount:</span>
                        <span className="text-green-600 font-bold">{scheme.amount}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold text-gray-700 w-24">Eligible:</span>
                        <span className="text-gray-600">{scheme.eligibility}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-semibold text-gray-700 w-24">Duration:</span>
                        <span className="text-gray-600">{scheme.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* External Funding */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">External Funding Agencies</h3>
              <p className="text-lg text-gray-700 mb-6">
                We assist researchers in applying for grants from various government and private organizations:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {['Indian Council of Medical Research (ICMR)', 'Department of Science & Technology (DST)', 'Department of Biotechnology (DBT)', 'Council of Scientific & Industrial Research (CSIR)', 'University Grants Commission (UGC)', 'State Government Schemes'].map((agency, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 shadow-md flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{agency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-purple-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Research Application Process</h2>
              <div className="space-y-6">
                {researchProcess.map((process, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-6 flex-shrink-0">
                      {process.step}
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">{process.title}</h4>
                      <p className="text-gray-700 text-lg">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-l-4 border-blue-500 bg-blue-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h4>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Forms */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-10 text-white text-center">
              <Download className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Download Application Forms</h3>
              <p className="text-xl mb-8 text-indigo-100">
                Download the necessary forms and guidelines for research proposals
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-lg">
                  Research Proposal Form
                </button>
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-lg">
                  Ethics Clearance Form
                </button>
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-lg">
                  Progress Report Template
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mt-12 text-center">
          <Brain className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Have a Research Idea?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with the R&D Cell to discuss your research proposal and get started on your innovation journey!
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center bg-blue-50 rounded-lg px-6 py-3">
              <Mail className="w-6 h-6 text-blue-600 mr-3" />
              <span className="text-gray-700 font-semibold">rd.cell@gips.edu.in</span>
            </div>
            <div className="flex items-center bg-blue-50 rounded-lg px-6 py-3">
              <Phone className="w-6 h-6 text-blue-600 mr-3" />
              <span className="text-gray-700 font-semibold">+91-XXXX-XXXXXX</span>
            </div>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
            Submit Research Proposal
          </button>
        </div>
      </div>
    </div>
  );
}