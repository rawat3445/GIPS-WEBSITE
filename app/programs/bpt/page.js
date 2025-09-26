import Link from "next/link";
import { Activity, Clock, Users, BookOpen, Briefcase, TrendingUp, Award, Calendar, Heart } from "lucide-react";

export default function BptPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-12 px-6 mt-15">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="bg-white shadow-xl rounded-3xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-600 p-3 rounded-full">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-green-700">
                Bachelor of Physiotherapy (BPT)
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Four-year Undergraduate Program in Physical Rehabilitation
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            The Bachelor of Physiotherapy (BPT) is a four-year undergraduate program that focuses 
            on the science of physical movement and the prevention, diagnosis, and treatment of 
            physical disabilities and injuries. This course equips students with the knowledge 
            and practical skills required to help individuals restore mobility, reduce pain, 
            and improve overall physical function through therapeutic exercises and rehabilitation techniques.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Duration</h3>
            <p className="text-2xl font-bold text-green-600">4.5 Years</p>
            <p className="text-sm text-gray-600">4 Years + 6 Months Internship</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Eligibility</h3>
            <p className="text-lg font-bold text-blue-600">10+2</p>
            <p className="text-sm text-gray-600">Science Stream (PCB)</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Recognition</h3>
            <p className="text-lg font-bold text-purple-600">Board</p>
            <p className="text-sm text-gray-600">Recognized Board</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Heart className="w-8 h-8 text-red-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Focus</h3>
            <p className="text-lg font-bold text-red-600">Rehabilitation</p>
            <p className="text-sm text-gray-600">Physical Therapy</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course Details */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-green-600" />
              Course Details
            </h2>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Course Duration</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Duration:</strong> 4 Years + 6 Months Internship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Eligibility:</strong> 10+2 (Science Stream – PCB) or equivalent from a recognized board</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Course Highlights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Comprehensive training in anatomy, physiology, biomechanics, exercise therapy, and electrotherapy</li>
                  <li>• Hands-on clinical experience through internships in hospitals, rehabilitation centers, and physiotherapy clinics</li>
                  <li>• Exposure to sports physiotherapy, neurological rehabilitation, orthopedics, and cardiopulmonary physiotherapy</li>
                  <li>• Focus on manual therapy, posture correction, and patient-centered rehabilitation</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Specialization Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Orthopedic Physiotherapy</li>
                  <li>• Neurological Rehabilitation</li>
                  <li>• Cardiopulmonary Physiotherapy</li>
                  <li>• Sports Physiotherapy</li>
                  <li>• Pediatric Physiotherapy</li>
                  <li>• Geriatric Care</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-blue-600" />
              Career Opportunities
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Job Roles</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-blue-700">Physiotherapist</span>
                    <span className="text-sm text-gray-600 block">in hospitals, clinics, and rehabilitation centers</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-green-700">Rehabilitation Specialist</span>
                    <span className="text-sm text-gray-600 block">specialized rehabilitation programs</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-purple-700">Sports Physiotherapist</span>
                    <span className="text-sm text-gray-600 block">sports teams and fitness centers</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-orange-700">Occupational Health Specialist</span>
                    <span className="text-sm text-gray-600 block">corporate and industrial settings</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-red-700">Researcher & Lecturer</span>
                    <span className="text-sm text-gray-600 block">academic institutions and research centers</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Salary Expectations
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Entry Level (0-2 years)</span>
                    <span className="font-bold text-green-600">₹2.5-4 LPA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Mid Level (2-5 years)</span>
                    <span className="font-bold text-blue-600">₹4-6 LPA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Senior Level (5+ years)</span>
                    <span className="font-bold text-purple-600">₹6-10+ LPA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Specialized/Private Practice</span>
                    <span className="font-bold text-red-600">₹8-15+ LPA</span>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">Government Opportunities</h4>
                <p className="text-sm text-gray-700">
                  Various positions available in government hospitals, AIIMS, PGI, 
                  Railway hospitals, and Armed Forces medical services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Market Outlook */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Industry Outlook & Market Growth
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Expanding Market</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  India  physiotherapy market size was valued at $0.96 billion in 2022 and is estimated to expand at a CAGR of 8.85% from 2022 to 2030 and will reach $1.9 billion in 2030.
                </p>
                <p className="text-gray-700">
                  The physiotherapy equipment market in India is expected to reach a projected revenue of US$ 1,673.5 million by 2030 with a compound annual growth rate of 9% from 2024 to 2030.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Growth Drivers</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  Key factors driving growth include an expanding geriatric population, increasing prevalence of cardiovascular diseases, and rising awareness of physiotherapy.
                </p>
                <p className="text-gray-700">
                  Growing demand for rehabilitation services and preventive healthcare creating numerous career opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Market Insights */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-purple-800">Monthly Salary Range</h4>
              <p className="text-2xl font-bold text-purple-600 mt-2">₹20K-₹1L+</p>
              <p className="text-sm text-gray-600">Entry-level: ₹20,000-₹35,000, Experienced: ₹60,000-₹1,00,000+</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-orange-800">Career Flexibility</h4>
              <p className="text-lg font-bold text-orange-600 mt-2">High</p>
              <p className="text-sm text-gray-600">Government, Private, Self-practice options</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-teal-800">Job Security</h4>
              <p className="text-lg font-bold text-teal-600 mt-2">Excellent</p>
              <p className="text-sm text-gray-600">Growing healthcare demand</p>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What You will Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Foundation Subjects</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Human Anatomy & Physiology</li>
                <li>• Pathology & Microbiology</li>
                <li>• Biochemistry & Psychology</li>
                <li>• Pharmacology & Sociology</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Core Physiotherapy</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Exercise Therapy</li>
                <li>• Electrotherapy & Modalities</li>
                <li>• Manual Therapy Techniques</li>
                <li>• Biomechanics & Kinesiology</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Clinical Specializations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Orthopedic Physiotherapy</li>
                <li>• Neurological Rehabilitation</li>
                <li>• Cardiopulmonary Therapy</li>
                <li>• Sports & Community Health</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Clinical Training & Internship</h3>
            <p className="text-gray-700 leading-relaxed">
              The 6-month mandatory internship provides hands-on experience in various clinical settings 
              including hospitals, rehabilitation centers, sports clinics, and community health centers. 
              Students gain practical skills in patient assessment, treatment planning, therapeutic 
              interventions, and professional patient care.
            </p>
          </div>
        </div>

        {/* Why Choose BPT */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose BPT?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">High Demand Career</h3>
                  <p className="text-gray-600">Growing healthcare sector ensures excellent job prospects</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Rewarding Profession</h3>
                  <p className="text-gray-600">Help people recover and improve their quality of life</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Diverse Opportunities</h3>
                  <p className="text-gray-600">Multiple specializations and work environments available</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-orange-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Global Recognition</h3>
                  <p className="text-gray-600">Indian BPT degree recognized internationally</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Entrepreneurial Scope</h3>
                  <p className="text-gray-600">Opportunity to start your own physiotherapy clinic</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-teal-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Continuous Learning</h3>
                  <p className="text-gray-600">Rapidly evolving field with new techniques and technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            ← Back to Programs
          </Link>
        </div>
      </div>
    </div>
  );
}