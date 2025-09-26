import Link from "next/link";
import { Eye, Clock, Users, BookOpen, Briefcase, TrendingUp, Award, Calendar } from "lucide-react";

export default function optometryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-6 mt-15">
      <div className="max-w-6xl mx-auto ">
        {/* Header Section */}
        <div className="bg-white shadow-xl rounded-3xl p-8 mb-8 ">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 p-3 rounded-full">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-blue-700">
                Bachelor of Optometry (B.Optom)
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Professional Undergraduate Allied Healthcare Program
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            The Bachelor of Science in Optometry is a professional undergraduate allied 
            healthcare program designed to prepare students for a rewarding career in vision 
            care. This course equips students with in-depth knowledge of the human eye, vision 
            disorders, and techniques for diagnosis, treatment, and management of eye conditions.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Duration</h3>
            <p className="text-2xl font-bold text-blue-600">4 Years</p>
            <p className="text-sm text-gray-600">3 Years + 1 Year Internship</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Eligibility</h3>
            <p className="text-lg font-bold text-green-600">10+2</p>
            <p className="text-sm text-gray-600">PCB/PCM Stream</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Award className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Min. Score</h3>
            <p className="text-2xl font-bold text-purple-600">50%</p>
            <p className="text-sm text-gray-600">(45% for reserved)</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Users className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Age Limit</h3>
            <p className="text-2xl font-bold text-orange-600">17+</p>
            <p className="text-sm text-gray-600">At admission</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course Details */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Course Details
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Eligibility Criteria</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Academic:</strong> Successful completion of 10+2 (Science Stream) with Physics, Chemistry, and Biology as core subjects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Minimum Score:</strong> 50% aggregate (45% for reserved categories)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Age:</strong> 17 years at the time of admission</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Admission Process</h3>
                <p className="text-gray-700">
                  Based on entrance examination/interview conducted by the institute or 
                  after passing the qualifying examination.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Focus Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Anatomy and physiology (general & ocular)</li>
                  <li>• Optometric instrumentation</li>
                  <li>• Contact lens and advances</li>
                  <li>• Low vision rehabilitation</li>
                  <li>• Binocular vision & vision therapy</li>
                  <li>• Community eye care</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-green-600" />
              Career Opportunities
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Job Roles</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-green-700">Optometrist</span>
                    <span className="text-sm text-gray-600 block">in hospitals and clinics (Govt. & Private)</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-blue-700">Optical Retail Consultant</span>
                    <span className="text-sm text-gray-600 block">in optical chains and retail stores</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-purple-700">Contact Lens Specialist</span>
                    <span className="text-sm text-gray-600 block">specialized contact lens practice</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-orange-700">Vision Researcher</span>
                    <span className="text-sm text-gray-600 block">research institutions and labs</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-red-700">Vision Therapist</span>
                    <span className="text-sm text-gray-600 block">specialized vision therapy centers</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-indigo-700">Low Vision Specialist</span>
                    <span className="text-sm text-gray-600 block">rehabilitation centers</span>
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
                    <span className="font-bold text-green-600">₹2-4 LPA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Mid Level (2-5 years)</span>
                    <span className="font-bold text-blue-600">₹4-6 LPA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Senior Level (5+ years)</span>
                    <span className="font-bold text-purple-600">₹6-10+ LPA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Outlook */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Industry Outlook
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Growing Market</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  The Indian Spectacles Market is valued at $4.1 billion in 2024 and is projected to expand at a CAGR of 11.4% to reach $7.6 billion by 2030.
                </p>
                <p className="text-gray-700">
                  Over half of Indias  population requires vision correction, creating unprecedented demand for optometrists.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Career Growth</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  Multiple specialization opportunities available in contact lenses, low vision, pediatric optometry, and more.
                </p>
                <p className="text-gray-700">
                  Growing opportunities in telemedicine and digital eye care solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About the Course */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">About the Course</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Students will learn to use advanced optical instruments, prescribe corrective 
            lenses, and collaborate with ophthalmologists for surgical and medical care. 
            The program combines theoretical knowledge with extensive practical training to 
            ensure graduates are well-prepared for the dynamic field of vision care.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">What You will Learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li>• Human eye anatomy and physiology</li>
                <li>• Vision disorders diagnosis and management</li>
                <li>• Advanced optical instrumentation</li>
                <li>• Contact lens fitting and care</li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li>• Low vision rehabilitation techniques</li>
                <li>• Binocular vision assessment</li>
                <li>• Community eye health programs</li>
                <li>• Practice management and patient care</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            ← Back to Programs
          </Link>
        </div>
      </div>
    </div>
  );
}