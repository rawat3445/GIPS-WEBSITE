"use client"
import { useState } from 'react';
import { Briefcase, TrendingUp, Users, Building2, GraduationCap, DollarSign, MapPin, Award, Target, BookOpen, CheckCircle, Star, Globe, Heart } from 'lucide-react';

export default function CareerPage() {
  const [activeTab, setActiveTab] = useState('opportunities');

  const careerPaths = [
    {
      course: "Bachelor of Physiotherapy (BPT)",
      icon: "🏥",
      color: "from-blue-500 to-indigo-600",
      careers: [
        { role: "Physiotherapist", sector: "Hospitals, Clinics, Rehabilitation Centers" },
        { role: "Sports Physiotherapist", sector: "Sports Teams, Fitness Centers, Sports Academies" },
        { role: "Occupational Therapist", sector: "Hospitals, Schools, Community Health" },
        { role: "Clinical Specialist", sector: "Specialty Hospitals, ICU, Neurology Departments" },
        { role: "Rehabilitation Specialist", sector: "Rehab Centers, Elderly Care Homes" },
        { role: "Healthcare Consultant", sector: "Private Practice, Corporate Wellness Programs" }
      ],
      salary: "₹3-8 lakhs per annum (starting), ₹10-20 lakhs (experienced)",
      growth: "High demand, excellent growth potential with specialization"
    },
    {
      course: "Bachelor in Medical Radiology & Imaging Technology (BMRIT)",
      icon: "🔬",
      color: "from-purple-500 to-pink-600",
      careers: [
        { role: "Radiographer", sector: "Hospitals, Diagnostic Centers, Imaging Labs" },
        { role: "MRI Technician", sector: "Multi-specialty Hospitals, Imaging Centers" },
        { role: "CT Scan Technician", sector: "Hospitals, Trauma Centers, Research Labs" },
        { role: "X-Ray Technician", sector: "Clinics, Hospitals, Health Checkup Centers" },
        { role: "Ultrasound Technician", sector: "Maternity Hospitals, Diagnostic Centers" },
        { role: "Radiology Supervisor", sector: "Hospital Radiology Departments" }
      ],
      salary: "₹2.5-6 lakhs per annum (starting), ₹8-15 lakhs (experienced)",
      growth: "Rapidly growing field with advanced imaging technology adoption"
    },
    {
      course: "Bachelor in Operation Theatre Technology (BOTT)",
      icon: "⚕️",
      color: "from-green-500 to-teal-600",
      careers: [
        { role: "OT Technician", sector: "Multi-specialty Hospitals, Surgical Centers" },
        { role: "Surgical Assistant", sector: "Operation Theatres, Emergency Departments" },
        { role: "Anesthesia Technician", sector: "Hospitals, Day Care Surgery Centers" },
        { role: "Sterilization In-charge", sector: "Hospitals, CSSD Departments" },
        { role: "OT Coordinator", sector: "Hospital Administration, OT Management" },
        { role: "Medical Equipment Specialist", sector: "Medical Device Companies, Hospitals" }
      ],
      salary: "₹2.5-6 lakhs per annum (starting), ₹7-12 lakhs (experienced)",
      growth: "Increasing demand due to rise in surgical procedures"
    },
    {
      course: "Bachelor of Optometry (B.Optom)",
      icon: "👁️",
      color: "from-orange-500 to-red-600",
      careers: [
        { role: "Optometrist", sector: "Eye Hospitals, Optical Stores, Vision Centers" },
        { role: "Clinical Optometrist", sector: "Specialty Eye Hospitals, Eye Clinics" },
        { role: "Contact Lens Specialist", sector: "Optical Retail Chains, Eye Care Centers" },
        { role: "Vision Therapist", sector: "Pediatric Eye Clinics, Vision Therapy Centers" },
        { role: "Low Vision Specialist", sector: "NGOs, Disability Centers, Eye Hospitals" },
        { role: "Optical Store Manager", sector: "Retail Optical Chains, Private Practice" }
      ],
      salary: "₹2-5 lakhs per annum (starting), ₹6-12 lakhs (experienced)",
      growth: "Growing field with increasing vision problems and awareness"
    }
  ];

  const topRecruiters = [
    { name: "AIIMS (All India Institute of Medical Sciences)", sector: "Government Hospital" },
    { name: "Fortis Healthcare", sector: "Multi-specialty Hospital Chain" },
    { name: "Apollo Hospitals", sector: "Healthcare Group" },
    { name: "Max Healthcare", sector: "Hospital Chain" },
    { name: "Medanta - The Medicity", sector: "Multi-specialty Hospital" },
    { name: "Manipal Hospitals", sector: "Healthcare Network" },
    { name: "Columbia Asia", sector: "International Hospital Group" },
    { name: "Narayana Health", sector: "Healthcare Provider" },
    { name: "Care Hospitals", sector: "Multi-specialty Chain" },
    { name: "Government Medical Colleges & Hospitals", sector: "Government Sector" },
    { name: "District Hospitals", sector: "Government Healthcare" },
    { name: "Diagnostic Centers (SRL, Dr. Lal PathLabs, Thyrocare)", sector: "Diagnostics" }
  ];

  const placementStats = [
    { metric: "95%+", label: "Placement Rate", icon: TrendingUp },
    { metric: "150+", label: "Companies Visited", icon: Building2 },
    { metric: "₹3-8 LPA", label: "Average Package", icon: DollarSign },
    { metric: "500+", label: "Students Placed", icon: Users }
  ];

  const placementProcess = [
    {
      step: 1,
      title: "Registration",
      description: "Students register with placement cell in final year",
      icon: GraduationCap
    },
    {
      step: 2,
      title: "Profile Building",
      description: "Resume preparation, LinkedIn profile, portfolio development",
      icon: BookOpen
    },
    {
      step: 3,
      title: "Training & Preparation",
      description: "Soft skills, interview techniques, aptitude tests, mock interviews",
      icon: Target
    },
    {
      step: 4,
      title: "Campus Drives",
      description: "Companies visit campus, conduct interviews and selection",
      icon: Building2
    },
    {
      step: 5,
      title: "Job Offers",
      description: "Selected candidates receive offer letters and joining details",
      icon: Award
    },
    {
      step: 6,
      title: "Post-Placement Support",
      description: "Guidance for job joining, career counseling, alumni network",
      icon: Users
    }
  ];

  const careerSupport = [
    {
      service: "Resume Building Workshop",
      description: "Professional guidance on creating impactful resumes and cover letters",
      icon: BookOpen
    },
    {
      service: "Mock Interviews",
      description: "Practice sessions with industry experts for interview preparation",
      icon: Users
    },
    {
      service: "Personality Development",
      description: "Communication skills, body language, professional etiquette training",
      icon: Star
    },
    {
      service: "Aptitude Training",
      description: "Logical reasoning, quantitative ability, and verbal skills enhancement",
      icon: Target
    },
    {
      service: "Industry Interaction",
      description: "Guest lectures, seminars, and workshops by healthcare professionals",
      icon: Globe
    },
    {
      service: "Internship Coordination",
      description: "Assistance in securing internships at leading hospitals",
      icon: Heart
    }
  ];

  const higherStudies = [
    {
      option: "Master's Programs",
      courses: ["MPT (Master of Physiotherapy)", "M.Sc. in Medical Imaging", "M.Optom (Master of Optometry)", "M.Sc. in Operation Theatre Technology"],
      description: "Specialized master's programs for advanced knowledge and better career prospects"
    },
    {
      option: "Research & PhD",
      courses: ["PhD in Physiotherapy", "PhD in Medical Sciences", "Research Fellow positions"],
      description: "For those interested in academic and research careers"
    },
    {
      option: "Foreign Universities",
      courses: ["MS/PhD in USA, UK, Australia, Canada", "Clinical fellowships abroad"],
      description: "International exposure and global career opportunities"
    },
    {
      option: "Certification Courses",
      courses: ["Advanced imaging techniques", "Sports physiotherapy", "Pediatric optometry", "Surgical technology"],
      description: "Specialized certifications for niche career paths"
    }
  ];

  const entrepreneurship = [
    "Start your own Physiotherapy Clinic",
    "Open Diagnostic/Imaging Center",
    "Establish Optical Store/Vision Center",
    "Healthcare Consultancy Services",
    "Medical Equipment Sales & Service",
    "Freelance Healthcare Professional",
    "Corporate Wellness Programs",
    "Home Healthcare Services"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 mt-30">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
              <Briefcase className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">Career Opportunities</h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Building Successful Careers in Healthcare - From Campus to Career Excellence
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Placement Statistics */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Placement Highlights</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {placementStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all">
                  <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-800 mb-2">{stat.metric}</div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('opportunities')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'opportunities'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Career Paths
            </button>
            <button
              onClick={() => setActiveTab('placement')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'placement'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Placement Process
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'support'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Career Support
            </button>
            <button
              onClick={() => setActiveTab('higher')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'higher'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Higher Studies
            </button>
          </div>
        </div>

        {/* Career Opportunities Tab */}
        {activeTab === 'opportunities' && (
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-blue-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Career Paths by Course</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                GIPS graduates have diverse career opportunities in hospitals, diagnostic centers, clinics, 
                research institutions, and healthcare organizations. Here&apos;s a detailed overview of career 
                paths available after completing each program:
              </p>
            </div>

            <div className="space-y-8">
              {careerPaths.map((path, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className={`bg-gradient-to-r ${path.color} p-8 text-white`}>
                    <div className="flex items-center">
                      <span className="text-6xl mr-6">{path.icon}</span>
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{path.course}</h3>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                            💰 {path.salary}
                          </span>
                          <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                            📈 {path.growth}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-gray-800 mb-6">Career Opportunities:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {path.careers.map((career, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-5 hover:border-blue-500 transition-all">
                          <h5 className="text-lg font-bold text-gray-800 mb-2">{career.role}</h5>
                          <p className="text-gray-600 text-sm flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                            {career.sector}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Top Recruiters */}
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl shadow-xl p-10 mt-12 text-white">
              <h2 className="text-4xl font-bold mb-8 text-center">Top Recruiters</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {topRecruiters.map((recruiter, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-md rounded-xl p-5 border border-white/30">
                    <h4 className="font-bold text-lg mb-1">{recruiter.name}</h4>
                    <p className="text-sm text-green-100">{recruiter.sector}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Placement Process Tab */}
        {activeTab === 'placement' && (
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-purple-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Placement Process</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                GIPS has a dedicated Placement Cell that works year-round to ensure maximum placement 
                opportunities for students. Our systematic approach prepares students for successful 
                careers from day one.
              </p>
            </div>

            <div className="space-y-6">
              {placementProcess.map((process, index) => {
                const IconComponent = process.icon;
                return (
                  <div key={index} className="flex items-start bg-white rounded-2xl shadow-xl p-8">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-6 flex-shrink-0">
                      {process.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <IconComponent className="w-8 h-8 text-purple-600 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-800">{process.title}</h3>
                      </div>
                      <p className="text-gray-700 text-lg">{process.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Career Support Tab */}
        {activeTab === 'support' && (
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-orange-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Career Development Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our Placement Cell provides comprehensive career support services to ensure students are 
                industry-ready and confident in their job search journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerSupport.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.service}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Higher Studies Tab */}
        {activeTab === 'higher' && (
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-green-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Higher Education Options</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Many GIPS graduates choose to pursue higher studies to specialize in their field and 
                enhance their career prospects. We provide guidance and support for students aspiring 
                for advanced degrees.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {higherStudies.map((option, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{option.option}</h3>
                  <p className="text-gray-700 mb-4">{option.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {option.courses.map((course, idx) => (
                      <span key={idx} className="bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-300 text-sm font-semibold">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Entrepreneurship */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-10 text-white">
              <h2 className="text-4xl font-bold mb-6 text-center">Entrepreneurship Opportunities</h2>
              <p className="text-xl text-center mb-8 text-indigo-100">
                Start your own healthcare venture and be your own boss!
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {entrepreneurship.map((option, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-md rounded-xl p-5 flex items-center border border-white/30">
                    <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0" />
                    <span className="text-lg">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}