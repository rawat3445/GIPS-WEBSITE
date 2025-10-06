import { Lightbulb, BookOpen, Laptop, Users, Microscope, Hospital, GraduationCap, TrendingUp, Award, Target, Brain, FileText } from 'lucide-react';

export default function CurriculumInnovations() {
  const innovations = [
    {
      icon: Laptop,
      title: "Digital Learning Tools",
      description: "Advanced simulations, e-learning modules, and interactive digital content",
      features: [
        "Virtual lab simulations for hands-on practice",
        "Online learning management system (LMS)",
        "Digital libraries and e-resources",
        "Multimedia presentations and video lectures"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Skill-based Training",
      description: "Regular workshops and practical training sessions to enhance technical competencies",
      features: [
        "Industry expert-led workshops",
        "Soft skills and communication training",
        "Technical skill development programs",
        "Professional certification courses"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Brain,
      title: "Interdisciplinary Approach",
      description: "Case studies and problem-solving methods across medical specialties",
      features: [
        "Real-world clinical case analysis",
        "Cross-departmental learning projects",
        "Problem-based learning (PBL) methodology",
        "Critical thinking and analytical skills"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Hospital,
      title: "Clinical Training",
      description: "Comprehensive internships at reputed hospitals and healthcare facilities",
      features: [
        "Hands-on patient care experience",
        "Rotation across multiple departments",
        "Exposure to latest medical equipment",
        "Mentorship from senior practitioners"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Microscope,
      title: "Research-driven Projects",
      description: "Guided research initiatives under experienced faculty supervision",
      features: [
        "Independent research opportunities",
        "Access to research labs and resources",
        "Publication and presentation support",
        "Innovation and development projects"
      ],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Industry Integration",
      description: "Curriculum aligned with current healthcare industry standards and trends",
      features: [
        "Regular industry feedback incorporation",
        "Guest lectures from healthcare professionals",
        "Latest medical technology training",
        "Emerging trends and practices"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const curriculumFeatures = [
    {
      icon: Award,
      title: "Competency-Based Learning",
      description: "Focus on developing specific skills and competencies required in healthcare"
    },
    {
      icon: Target,
      title: "Outcome-Oriented",
      description: "Clear learning outcomes mapped to professional requirements"
    },
    {
      icon: BookOpen,
      title: "Updated Content",
      description: "Regular curriculum updates based on medical advancements"
    },
    {
      icon: GraduationCap,
      title: "Expert-Designed",
      description: "Curriculum developed by experienced academicians and practitioners"
    }
  ];

  const learningMethodologies = [
    {
      method: "Blended Learning",
      description: "Combination of traditional classroom teaching with online and digital resources"
    },
    {
      method: "Experiential Learning",
      description: "Learning through practical experiences, lab work, and clinical exposure"
    },
    {
      method: "Collaborative Learning",
      description: "Group projects, peer learning, and team-based assignments"
    },
    {
      method: "Continuous Assessment",
      description: "Regular evaluations through assignments, tests, and practical examinations"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-15">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4">
            <Lightbulb className="w-12 h-12 mr-4" />
            <h1 className="text-5xl font-bold">Curriculum Innovations</h1>
          </div>
          <p className="text-xl text-purple-100">
            Pioneering Modern Healthcare Education at GIPS
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Evolving with Healthcare Excellence</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              GIPS continuously adapts its curriculum to meet the demands of the modern healthcare ecosystem. 
              Our academic framework is periodically reviewed and updated by industry experts, academicians, 
              and healthcare professionals, ensuring that students are equipped with industry-relevant skills 
              and knowledge that prepares them for successful careers.
            </p>
            <p className="text-lg">
              We believe in creating a dynamic learning environment where traditional teaching methods are 
              enhanced with innovative approaches, technology integration, and real-world applications. Our 
              curriculum is designed not just to impart knowledge, but to develop critical thinking, problem-solving 
              abilities, and professional competencies.
            </p>
          </div>
        </div>

        {/* Curriculum Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">What Makes Our Curriculum Stand Out</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Innovations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Curriculum Innovations</h2>
          <div className="space-y-6">
            {innovations.map((innovation, index) => {
              const IconComponent = innovation.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`bg-gradient-to-r ${innovation.color} p-6 text-white`}>
                    <div className="flex items-center">
                      <IconComponent className="w-10 h-10 mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold">{innovation.title}</h3>
                        <p className="text-blue-100 mt-1">{innovation.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {innovation.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-purple-600 mr-2 mt-1">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Learning Methodologies */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <FileText className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Teaching & Learning Methodologies</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {learningMethodologies.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">{item.method}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum Review Process */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Curriculum Development Process</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Industry Analysis</h3>
                <p className="text-gray-700">
                  Regular consultation with healthcare industry experts to identify current and emerging skill requirements
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Review</h3>
                <p className="text-gray-700">
                  Academic board comprising experienced faculty and medical professionals reviews curriculum content
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Feedback</h3>
                <p className="text-gray-700">
                  Incorporating feedback from current students and alumni to improve learning experience
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Implementation & Assessment</h3>
                <p className="text-gray-700">
                  Rolling out updated curriculum with continuous monitoring and assessment of learning outcomes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Creating Future-Ready Healthcare Professionals</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Our innovative curriculum ensures that GIPS graduates are not just job-ready, but are 
            equipped to become leaders and innovators in the healthcare industry, capable of adapting 
            to the ever-evolving medical landscape.
          </p>
        </div>
      </div>
    </div>
  );
}