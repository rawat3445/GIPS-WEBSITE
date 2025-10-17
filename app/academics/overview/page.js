import { BookOpen, Users, Award, Target, Microscope, Building2, Globe, TrendingUp } from 'lucide-react';

export default function AcademicOverview() {
  const keyFeatures = [
    {
      icon: BookOpen,
      title: "Comprehensive Programs",
      description: "Wide range of paramedical courses designed to meet healthcare industry demands"
    },
    {
      icon: Microscope,
      title: "Advanced Laboratories",
      description: "State-of-the-art labs equipped with modern medical equipment and technology"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Highly qualified and experienced faculty members dedicated to student success"
    },
    {
      icon: Award,
      title: "Accreditation & Recognition",
      description: "Affiliated with recognized medical universities and approved by regulatory bodies"
    }
  ];

  const programs = [
    {
      category: "Bachelor's Programs",
      courses: [
        "Bachelor of Physiotherapy (BPT)",
        "Bachelor in Operation Theatre Technology (BOTT)",
        "Bachelor of Optometry (B.Optom)",
        "Bachelor in Medical Radiology & Imaging Technology (BMRIT)"
      ]
    },
    {
      category: "Diploma Programs",
      courses: [
        "Diploma in Optometry (D.Optom)"
      ]
    }
  ];

  const statistics = [
    { number: "500+", label: "Students Enrolled" },
    { number: "50+", label: "Expert Faculty" },
    { number: "5", label: "Programs Offered" },
    { number: "95%", label: "Placement Rate" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Academic Overview</h1>
          <p className="text-xl text-blue-100">
            Garhwal Institute of Paramedical Sciences - Excellence in Healthcare Education
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About GIPS Academics</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Garhwal Institute of Paramedical Sciences (GIPS) stands as a premier institution dedicated to 
              providing world-class education in paramedical sciences. Established with a vision to create 
              skilled healthcare professionals, we combine theoretical knowledge with extensive practical 
              training to prepare students for successful careers in the medical field.
            </p>
            <p className="text-lg">
              Our academic framework is designed to foster critical thinking, clinical competence, and 
              professional ethics. We believe in nurturing not just competent technicians, but compassionate 
              healthcare professionals who understand the importance of patient care and medical excellence.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Target className="w-10 h-10 mr-3" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-blue-50 leading-relaxed">
              To provide quality paramedical education that transforms students into competent healthcare 
              professionals through innovative teaching methods, hands-on training, and character development, 
              contributing to the advancement of healthcare services in India and beyond.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Globe className="w-10 h-10 mr-3" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-purple-50 leading-relaxed">
              To be recognized as a leading paramedical institution in India, known for academic excellence, 
              research innovation, and producing healthcare professionals who set benchmarks in patient care, 
              medical technology, and community health services.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Programs Offered */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Programs Offered</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{program.category}</h3>
                <ul className="space-y-3">
                  {program.courses.map((course, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">GIPS at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-indigo-100 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Infrastructure */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Building2 className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Academic Infrastructure</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Modern Classrooms</h3>
              <p className="text-gray-600">
                Smart classrooms equipped with audio-visual aids and digital learning resources
              </p>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Clinical Training</h3>
              <p className="text-gray-600">
                Partnerships with leading hospitals for practical training and internships
              </p>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Research Facilities</h3>
              <p className="text-gray-600">
                Dedicated research labs encouraging innovation and academic excellence
              </p>
            </div>
          </div>
        </div>

        {/* Academic Approach */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Our Academic Approach</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <span className="text-2xl text-indigo-600 mr-4">01</span>
              <div>
                <h4 className="font-semibold text-lg mb-1">Theory-Practice Integration</h4>
                <p>Balanced curriculum combining classroom lectures with extensive practical sessions</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl text-indigo-600 mr-4">02</span>
              <div>
                <h4 className="font-semibold text-lg mb-1">Industry-Aligned Learning</h4>
                <p>Regular updates to curriculum based on latest medical technology and healthcare trends</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl text-indigo-600 mr-4">03</span>
              <div>
                <h4 className="font-semibold text-lg mb-1">Continuous Assessment</h4>
                <p>Regular evaluations, assignments, and practical tests to monitor student progress</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl text-indigo-600 mr-4">04</span>
              <div>
                <h4 className="font-semibold text-lg mb-1">Holistic Development</h4>
                <p>Focus on soft skills, communication, and professional ethics alongside technical training</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}