import { BookOpen, Award, Calendar, Users, Library, FileText, GraduationCap, HeartHandshake } from 'lucide-react';

export default function Academics() {
  const academicSections = [
    {
      title: "Academic Overview",
      icon: BookOpen,
      description: "Comprehensive view of our academic structure and programs",
      link: "/academics/overview",
      color: "bg-blue-500"
    },
    {
      title: "Curriculum Innovations",
      icon: Award,
      description: "Modern teaching methods and industry-aligned curriculum",
      link: "/academics/curriculum-innovations",
      color: "bg-purple-500"
    },
    {
      title: "Examination",
      icon: FileText,
      description: "Assessment systems and evaluation procedures",
      link: "/academics/examination",
      color: "bg-green-500"
    },
    {
      title: "Student Mentoring",
      icon: Users,
      description: "Personalized guidance for academic and career growth",
      link: "/academics/student-mentoring",
      color: "bg-orange-500"
    },
    {
      title: "Libraries",
      icon: Library,
      description: "State-of-the-art library facilities and resources",
      link: "/academics/libraries",
      color: "bg-indigo-500"
    },
    {
      title: "Academic Calendar",
      icon: Calendar,
      description: "Important dates and academic schedules",
      link: "/academics/academic-calendar",
      color: "bg-red-500"
    },
    {
      title: "List of Holidays",
      icon: GraduationCap,
      description: "Official holidays and breaks throughout the year",
      link: "/academics/holidays",
      color: "bg-teal-500"
    },
    {
      title: "Student Support",
      icon: HeartHandshake,
      description: "Comprehensive support services for student welfare",
      link: "/academics/student-support",
      color: "bg-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 mt-15">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Garhwal Institute of Paramedical Sciences
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Academic Excellence</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Garhwal Institute of Paramedical Sciences (GIPS), academics are built around 
            innovation, mentorship, and practical exposure. We strive to equip students 
            with knowledge, skills, and values that empower them to excel in their 
            chosen careers.
          </p>
        </div>

        {/* Academic Sections Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Explore Academics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <a
                  key={index}
                  href={section.link}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                >
                  <div className={`${section.color} p-6 flex justify-center items-center h-24`}>
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Why Choose GIPS Academics?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">Expert Faculty</h3>
              <p className="text-blue-100">
                Learn from experienced professionals and industry experts
              </p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">Hands-on Training</h3>
              <p className="text-blue-100">
                Practical exposure through labs and clinical rotations
              </p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">Modern Curriculum</h3>
              <p className="text-blue-100">
                Updated programs aligned with industry standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}