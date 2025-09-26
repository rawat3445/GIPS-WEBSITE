import Link from "next/link";
import { Eye, Clock, Users, BookOpen, Briefcase, TrendingUp, Award, Calendar, GraduationCap, Target } from "lucide-react";

export default function diplomaoptometryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 py-12 px-6 mt-15">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="bg-white shadow-xl rounded-3xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-sky-600 p-3 rounded-full">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-sky-700">
                Diploma in Optometry (D.Optom)
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Foundation Program in Vision Care and Eye Health
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            The Diploma in Optometry is a specialized program designed to provide 
            students with essential knowledge and practical skills in vision care, eye examination 
            techniques, and management of refractive errors. This program offers a strong foundation 
            in optometry, preparing students to work as competent vision consultants and optometric 
            assistants in the healthcare industry.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Clock className="w-8 h-8 text-sky-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Duration</h3>
            <p className="text-2xl font-bold text-sky-600">2 Years</p>
            <p className="text-sm text-gray-600">Full-time Program</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Eligibility</h3>
            <p className="text-lg font-bold text-blue-600">10+2</p>
            <p className="text-sm text-gray-600">Any Stream</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Course Fee</h3>
            <p className="text-lg font-bold text-green-600">₹1-3L</p>
            <p className="text-sm text-gray-600">Total Program</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Target className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Focus</h3>
            <p className="text-lg font-bold text-purple-600">Practical</p>
            <p className="text-sm text-gray-600">Skills Training</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course Details */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-sky-600" />
              Course Details
            </h2>

            <div className="space-y-6">
              <div className="bg-sky-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-sky-800 mb-3">Program Overview</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Duration:</strong> 2 Years (Full-time)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Eligibility:</strong> 10+2 from any recognized board</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Age Limit:</strong> No specific age restriction</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Why Choose This Program?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Every year thousands of people need optometry care</li>
                  <li>• We are a leader in vision care treatment</li>
                  <li>• Huge scope for career advancement</li>
                  <li>• Growing demand in healthcare sector</li>
                  <li>• Practical hands-on training approach</li>
                  <li>• Industry-relevant curriculum</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Course Highlights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Comprehensive training in optometry fundamentals</li>
                  <li>• Hands-on experience with optical instruments</li>
                  <li>• Clinical training in vision assessment</li>
                  <li>• Patient interaction and counseling skills</li>
                  <li>• Modern laboratory facilities</li>
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
              <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Job Roles</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-blue-700">Vision Consultant</span>
                    <span className="text-sm text-gray-600 block">optical retail chains and clinics</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-green-700">Optometric Assistant</span>
                    <span className="text-sm text-gray-600 block">hospitals and eye care centers</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-purple-700">Customer Care Associate</span>
                    <span className="text-sm text-gray-600 block">optical retail stores</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-orange-700">Optical Sales Representative</span>
                    <span className="text-sm text-gray-600 block">eyewear manufacturing companies</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-red-700">Vision Screening Technician</span>
                    <span className="text-sm text-gray-600 block">community health programs</span>
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
                    <span className="text-gray-700">Entry Level (0-1 year)</span>
                    <span className="font-bold text-green-600">₹1.5-2.5 LPA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Experienced (1-3 years)</span>
                    <span className="font-bold text-blue-600">₹2-4 LPA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Senior Level (3+ years)</span>
                    <span className="font-bold text-purple-600">₹3-7 LPA</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  *Based on current market trends and location variations
                </p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">Career Growth Path</h4>
                <p className="text-sm text-gray-700">
                  Graduates can pursue advanced certifications, specialize in contact lens fitting, 
                  or progress to supervisory roles in optical retail chains.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum & Subjects */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What You well Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-sky-600" />
                Foundation Subjects
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Basic Anatomy & Physiology</li>
                <li>• Geometrical Optics</li>
                <li>• Ocular Anatomy</li>
                <li>• Visual Optics</li>
              </ul>
            </div>
            
            <div className="bg-sky-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-sky-800 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-sky-600" />
                Clinical Skills
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Vision Testing Techniques</li>
                <li>• Refraction Methods</li>
                <li>• Contact Lens Basics</li>
                <li>• Optical Dispensing</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Practical Training
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Instrument Handling</li>
                <li>• Patient Communication</li>
                <li>• Lens Fitting Techniques</li>
                <li>• Optical Shop Management</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-sky-100 to-blue-100 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Practical Training</h3>
            <p className="text-gray-700 leading-relaxed">
              Students gain hands-on experience in optical laboratories, vision care centers, 
              and retail optical outlets. The program emphasizes practical skills development 
              through real-world training scenarios, ensuring graduates are job-ready upon completion.
            </p>
          </div>
        </div>

        {/* Industry Demand & Growth */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Industry Demand & Scope
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-sky-800 mb-4">Growing Market Demand</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  The demand for optometrists is increasing due to factors such as rising screen time, an aging population, & growing awareness about eye care
                </p>
                <p className="text-gray-700">
                  The rise in digital device usage has significantly increased vision-related problems, creating more job opportunities for optometry professionals.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Career Advancement</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  The Diploma in Optometry scope for a successful career is quite vast for fresh graduates in both the public and the private sector.
                </p>
                <p className="text-gray-700">
                  Graduates can work as vision consultants, customer care associates, and progress to management roles in optical chains.
                </p>
              </div>
            </div>
          </div>

          {/* Market Statistics */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-sky-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-sky-800">Average Course Fee</h4>
              <p className="text-2xl font-bold text-sky-600 mt-2">₹1-3L</p>
              <p className="text-sm text-gray-600">Complete program cost</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-orange-800">Job Market</h4>
              <p className="text-lg font-bold text-orange-600 mt-2">Expanding</p>
              <p className="text-sm text-gray-600">High demand across sectors</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-purple-800">Salary Range</h4>
              <p className="text-lg font-bold text-purple-600 mt-2">₹2-7L</p>
              <p className="text-sm text-gray-600">Annual package range</p>
            </div>
          </div>
        </div>

        {/* Comparison with Bachelor's Program */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Diploma vs Bachelor in Optometry</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-sky-50 p-6 rounded-xl border-l-4 border-sky-500">
              <h3 className="text-xl font-semibold text-sky-800 mb-4">Diploma in Optometry</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Duration:</strong> 2 years</li>
                <li>• <strong>Focus:</strong> Practical skills and immediate job readiness</li>
                <li>• <strong>Entry:</strong> 10+2 any stream</li>
                <li>• <strong>Career:</strong> Technician and assistant roles</li>
                <li>• <strong>Investment:</strong> Lower cost, faster entry to workforce</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Bachelor of Optometry</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Duration:</strong> 4 years (3+1 internship)</li>
                <li>• <strong>Focus:</strong> Comprehensive theoretical and clinical training</li>
                <li>• <strong>Entry:</strong> 10+2 Science (PCB/PCM)</li>
                <li>• <strong>Career:</strong> Independent practice and specialist roles</li>
                <li>• <strong>Investment:</strong> Higher cost, advanced career opportunities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose GIPS */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose D.Optom at GIPS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-sky-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Industry-Ready Curriculum</h3>
                  <p className="text-gray-600">Practical-focused training aligned with current industry needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Experienced Faculty</h3>
                  <p className="text-gray-600">Learn from qualified professionals with industry experience</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Modern Facilities</h3>
                  <p className="text-gray-600">Well-equipped laboratories and clinical training areas</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Placement Assistance</h3>
                  <p className="text-gray-600">Strong industry connections for job placement support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-orange-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Affordable Education</h3>
                  <p className="text-gray-600">Quality education at competitive fees structure</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Quick Entry to Workforce</h3>
                  <p className="text-gray-600">2-year program for faster career start</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            ← Back to Programs
          </Link>
        </div>
      </div>
    </div>
  );
}