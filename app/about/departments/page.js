"use client"
import Link from "next/link";

export default function DepartmentsPage() {
  const departments = [
    {
      id: 1,
      name: "Physiotherapy",
      color: "blue",
      description: "Our Physiotherapy department focuses on rehabilitation and physical wellness through evidence-based treatment methods.",
      programs: ["Bachelor of Physiotherapy (BPT)", "Post-Graduate Diploma in Physiotherapy", "Sports Physiotherapy Specialization"],
      highlights: ["State-of-the-art rehabilitation facilities", "Expert faculty with international certifications", "Clinical internships in leading hospitals"],
      career: "Physical Therapist, Sports Rehabilitation Specialist, Clinical Physiotherapist"
    },
    {
      id: 2,
      name: "Radiology & Imaging Technology",
      color: "green",
      description: "Advanced diagnostic imaging programs training professionals in modern radiological techniques and technology.",
      programs: ["Diploma in Radiography", "Bachelor of Radiography (BRT)", "Advanced Imaging Technology Programs"],
      highlights: ["Latest imaging equipment including CT, MRI, and X-ray", "Hands-on training with modern technology", "Digital imaging and PACS system training"],
      career: "Radiographer, Imaging Technologist, Quality Assurance Specialist"
    },
    {
      id: 3,
      name: "Operation Theatre Technology",
      color: "purple",
      description: "Specialized training for skilled operation theatre professionals equipped to manage surgical environments.",
      programs: ["Diploma in Operation Theatre Technology (DOTT)", "Advanced Surgical Technology", "Infection Control & Sterilization Certification"],
      highlights: ["Simulated operating theatre labs", "Exposure to diverse surgical specialties", "Training in latest surgical instruments and protocols"],
      career: "Operation Theatre Technician, Surgical Technologist, Operating Room Manager"
    },
    {
      id: 4,
      name: "Optometry",
      color: "orange",
      description: "Comprehensive eye care training producing skilled optometrists and vision care specialists.",
      programs: ["Diploma in Optometry", "Bachelor of Optometry (BOpt)", "Advanced Contact Lens & Refractive Surgery Programs"],
      highlights: ["Modern optometry labs and equipment", "Clinical practice in well-equipped vision centers", "Training in latest diagnostic techniques"],
      career: "Optometrist, Vision Care Specialist, Refractive Surgery Technician"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: "bg-blue-50", border: "border-blue-200", header: "text-blue-800", accent: "bg-blue-100" },
      green: { bg: "bg-green-50", border: "border-green-200", header: "text-green-800", accent: "bg-green-100" },
      purple: { bg: "bg-purple-50", border: "border-purple-200", header: "text-purple-800", accent: "bg-purple-100" },
      orange: { bg: "bg-orange-50", border: "border-orange-200", header: "text-orange-800", accent: "bg-orange-100" }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 mt-0">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow-md rounded-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Departments at GIPS</h1>
          <p className="text-gray-700 text-lg">
            GIPS offers diverse programs through specialized departments, each designed to provide focused knowledge, practical skills, and comprehensive training. Our departments are equipped with modern facilities and staffed by experienced faculty committed to excellence in healthcare education.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {departments.map((dept) => {
            const colors = getColorClasses(dept.color);
            return (
              <div key={dept.id} className={`${colors.bg} border-2 ${colors.border} shadow-md rounded-2xl p-8 hover:shadow-lg transition-shadow`}>
                {/* Department Header */}
                <h2 className={`text-2xl font-bold ${colors.header} mb-2`}>{dept.name}</h2>
                <p className="text-gray-700 mb-5">{dept.description}</p>

                {/* Programs */}
                <div className="mb-5">
                  <h3 className={`font-semibold ${colors.header} mb-2 text-sm uppercase tracking-wide`}>Programs Offered</h3>
                  <ul className="space-y-2">
                    {dept.programs.map((program, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-start">
                        <span className={`${colors.accent} text-gray-800 font-semibold mr-2 px-2 py-1 rounded text-xs`}>✓</span>
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlights */}
                <div className="mb-5">
                  <h3 className={`font-semibold ${colors.header} mb-2 text-sm uppercase tracking-wide`}>Department Highlights</h3>
                  <ul className="space-y-2">
                    {dept.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-start">
                        <span className="mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Career Path */}
                <div className={`${colors.accent} p-4 rounded-lg`}>
                  <h3 className={`font-semibold ${colors.header} mb-1 text-sm`}>Career Opportunities</h3>
                  <p className="text-gray-700 text-sm">{dept.career}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Our Departments */}
        <div className="bg-white shadow-md rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Choose GIPS Departments?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Expert Faculty</h3>
              <p className="text-gray-700 text-sm">Highly qualified and experienced instructors with real-world healthcare experience</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Modern Infrastructure</h3>
              <p className="text-gray-700 text-sm">State-of-the-art labs and equipment aligned with international standards</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-2">Practical Training</h3>
              <p className="text-gray-700 text-sm">Extensive clinical internships and hands-on experience in leading hospitals</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-orange-800 mb-2">Industry Recognition</h3>
              <p className="text-gray-700 text-sm">Courses approved by regulatory bodies with national and international accreditation</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800 mb-2">Career Support</h3>
              <p className="text-gray-700 text-sm">Placement assistance and career guidance for all graduates</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 mb-2">Global Standards</h3>
              <p className="text-gray-700 text-sm">Curriculum designed to meet international healthcare education standards</p>
            </div>
          </div>
        </div>

        {/* Admission Information */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-md rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-semibold mb-3">Ready to Start Your Healthcare Career?</h2>
          <p className="mb-4">
            Join our departments and become a skilled healthcare professional. GIPS is committed to nurturing talent and creating future leaders in healthcare.
          </p>
          <p className="text-blue-100">Contact our admission office for eligibility criteria, application procedures, and intake information.</p>
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