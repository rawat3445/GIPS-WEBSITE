import Link from "next/link";

export default function StudentServicesPage() {
  const services = [
    {
      id: 1,
      title: "Library & E-Resources",
      color: "blue",
      description: "Comprehensive digital and physical library with thousands of medical and academic resources",
      features: [
        "Physical library with 50,000+ books and journals",
        "24/7 access to e-books and online databases",
        "Medical research journals and publications",
        "Computer labs with internet access",
        "Study areas and quiet zones",
        "Interlibrary loan services"
      ],
      icon: "📚"
    },
    {
      id: 2,
      title: "Counseling & Mental Health",
      color: "green",
      description: "Professional counseling services supporting mental health and overall well-being",
      features: [
        "One-on-one psychological counseling sessions",
        "Stress and anxiety management workshops",
        "Career-related counseling",
        "Personal development seminars",
        "Confidential support and guidance",
        "Crisis intervention support"
      ],
      icon: "🧠"
    },
    {
      id: 3,
      title: "Career Guidance & Placement",
      color: "purple",
      description: "Dedicated support for career planning and job placement assistance",
      features: [
        "Resume and portfolio building workshops",
        "Interview preparation programs",
        "Job fairs and recruitment drives",
        "Internship opportunities with leading hospitals",
        "Alumni network connections",
        "100% placement assistance guarantee"
      ],
      icon: "💼"
    },
    {
      id: 4,
      title: "Sports & Recreation",
      color: "orange",
      description: "State-of-the-art facilities promoting physical fitness and wellness",
      features: [
        "Fully equipped gym and fitness center",
        "Indoor and outdoor sports courts",
        "Yoga and meditation classes",
        "Sports club memberships",
        "Inter-college tournament participation",
        "Health and fitness programs"
      ],
      icon: "⚽"
    },
    {
      id: 5,
      title: "Hostel & Accommodation",
      color: "red",
      description: "Safe and comfortable residential facilities for students from other cities",
      features: [
        "Separate boys' and girls' hostels",
        "24/7 security and CCTV monitoring",
        "Well-furnished rooms with basic amenities",
        "Dining facilities with nutritious meals",
        "High-speed internet connectivity",
        "Common recreation areas"
      ],
      icon: "🏠"
    },
    {
      id: 6,
      title: "Transportation Services",
      color: "indigo",
      description: "Convenient and safe transportation options for students",
      features: [
        "College shuttle service within city",
        "Pick-up and drop-off facilities",
        "Transportation to clinical internships",
        "Special routes for hostel students",
        "Affordable transportation passes",
        "Real-time GPS tracking for safety"
      ],
      icon: "🚌"
    },
    {
      id: 7,
      title: "Health & Medical Support",
      color: "cyan",
      description: "Comprehensive healthcare services for student wellness",
      features: [
        "On-campus medical clinic",
        "Regular health check-ups",
        "Vaccination programs",
        "First aid training",
        "Health insurance assistance",
        "Telemedicine consultation facility"
      ],
      icon: "🏥"
    },
    {
      id: 8,
      title: "Student Clubs & Activities",
      color: "pink",
      description: "Diverse clubs and cultural activities for personality development",
      features: [
        "Medical and research clubs",
        "Cultural and arts societies",
        "Sports clubs and teams",
        "Community service organizations",
        "Seminars and guest lectures",
        "Annual college fest and events"
      ],
      icon: "🎭"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: "bg-blue-50", border: "border-blue-200", header: "text-blue-800" },
      green: { bg: "bg-green-50", border: "border-green-200", header: "text-green-800" },
      purple: { bg: "bg-purple-50", border: "border-purple-200", header: "text-purple-800" },
      orange: { bg: "bg-orange-50", border: "border-orange-200", header: "text-orange-800" },
      red: { bg: "bg-red-50", border: "border-red-200", header: "text-red-800" },
      indigo: { bg: "bg-indigo-50", border: "border-indigo-200", header: "text-indigo-800" },
      cyan: { bg: "bg-cyan-50", border: "border-cyan-200", header: "text-cyan-800" },
      pink: { bg: "bg-pink-50", border: "border-pink-200", header: "text-pink-800" }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 mt-30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow-md rounded-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Student Services</h1>
          <p className="text-gray-700 text-lg">
            GIPS is committed to providing comprehensive student services that support academic excellence and personal growth. We offer a wide range of facilities and support systems to ensure students have access to everything they need for a successful educational journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {services.map((service) => {
            const colors = getColorClasses(service.color);
            return (
              <div key={service.id} className={`${colors.bg} border-2 ${colors.border} shadow-md rounded-2xl p-8 hover:shadow-lg transition-shadow`}>
                {/* Service Header */}
                <div className="flex items-start mb-4">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <div>
                    <h2 className={`text-2xl font-bold ${colors.header}`}>{service.title}</h2>
                    <p className="text-gray-700 text-sm mt-1">{service.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className={`font-semibold ${colors.header} mb-3 text-sm uppercase tracking-wide`}>Key Features</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-start">
                        <span className="mr-3 text-lg">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Systems */}
        <div className="bg-white shadow-md rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Our Support Systems</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Academic Support</h3>
              <p className="text-gray-700 text-sm">Tutoring, lab support, remedial classes, and research guidance to help students excel in their studies</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Personal Development</h3>
              <p className="text-gray-700 text-sm">Personality development, soft skills training, leadership programs, and communication workshops</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Financial Assistance</h3>
              <p className="text-gray-700 text-sm">Scholarship programs, fee concessions, financial aid, and education loan assistance</p>
            </div>
          </div>
        </div>

        {/* Student Testimonial */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-md rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-600 bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <p className="mb-3 italic">&quot;The student services at GIPS are exceptional. The counseling support and career guidance helped me secure my dream placement!&quot;</p>
              <p className="font-semibold">- Priya Sharma, BPT Graduate</p>
            </div>
            <div className="bg-blue-600 bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <p className="mb-3 italic">&quot;From the library resources to sports facilities, everything is world-class. GIPS truly cares about holistic student development.&quot;</p>
              <p className="font-semibold">- Raj Kumar, Radiography Student</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white shadow-md rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">How do I access the library services?</h3>
              <p className="text-gray-700 text-sm">All students have access to the library from day one of enrollment. E-resources can be accessed 24/7 with your student login credentials.</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Is counseling service confidential?</h3>
              <p className="text-gray-700 text-sm">Yes, all counseling sessions are completely confidential and are conducted by trained professionals. Your privacy is our priority.</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">When does placement support begin?</h3>
              <p className="text-gray-700 text-sm">Career guidance and placement preparation begin from your first year to ensure you&apos;re fully prepared for internships and final placements.</p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Are hostel facilities available for all students?</h3>
              <p className="text-gray-700 text-sm">Hostel facilities are available for outstation and local students based on availability. Priority is given to students from other cities.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 shadow-md rounded-2xl p-8 mb-8 text-white text-center">
          <h2 className="text-2xl font-semibold mb-3">Need Student Service Support?</h2>
          <p className="mb-4">
            Our student service team is here to help you throughout your journey at GIPS. Reach out to us anytime!
          </p>
          <p className="text-green-100">Contact: studentservices@gips.edu.in | Phone: +91-XXX-XXXX-XXXX</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/about" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
            ← Back to About Overview
          </Link>
        </div>
      </div>
    </div>
  );
}