import React from 'react';
import Link from "next/link";
import { Zap, Clock, Users, BookOpen, Briefcase, TrendingUp, Award, Calendar, Monitor, Shield } from "lucide-react";

export default function BmritPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 py-12 px-6 mt-15">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="bg-white shadow-xl rounded-3xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-600 p-3 rounded-full">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-purple-700">
                Bachelor in Medical Radiology & Imaging Technology (BMRIT)
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Undergraduate Program in Advanced Medical Imaging
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            The Bachelor in Medical Radiology & Imaging Technology (BMRIT) is an undergraduate 
            program designed to train students in the advanced techniques of medical imaging and 
            radiographic procedures. This course equips students with the knowledge and technical 
            expertise required to operate imaging equipment such as X-ray, MRI, CT scan, and ultrasound, 
            assisting in accurate diagnosis and treatment planning.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Duration</h3>
            <p className="text-2xl font-bold text-purple-600">4 Years</p>
            <p className="text-sm text-gray-600">3 Years + 1 Year Internship</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Eligibility</h3>
            <p className="text-lg font-bold text-blue-600">10+2</p>
            <p className="text-sm text-gray-600">PCB/PCM Stream</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Recognition</h3>
            <p className="text-lg font-bold text-green-600">Board</p>
            <p className="text-sm text-gray-600">Recognized Board</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Shield className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Focus</h3>
            <p className="text-lg font-bold text-orange-600">Safety</p>
            <p className="text-sm text-gray-600">Radiation Safety</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course Details */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-purple-600" />
              Course Details
            </h2>

            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Course Duration</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Duration:</strong> 3 Years + 1 Year Internship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Eligibility:</strong> 10+2 (Science Stream – PCB/PCM) or equivalent from a recognized board</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Course Highlights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• In-depth training in X-ray, CT scan, MRI, Ultrasound, Mammography, and Fluoroscopy</li>
                  <li>• Practical exposure through clinical training and internships in reputed diagnostic centers and hospitals</li>
                  <li>• Emphasis on radiation safety, imaging techniques, and patient positioning</li>
                  <li>• Hands-on experience with modern diagnostic imaging equipment</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Job Roles</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Radiology Technician</li>
                  <li>• MRI/CT Scan Technologist</li>
                  <li>• X-ray Technician</li>
                  <li>• Sonographer</li>
                  <li>• Radiology Safety Officer</li>
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
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Work Environments</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-blue-700">Hospitals</span>
                    <span className="text-sm text-gray-600 block">(Government & Private)</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-green-700">Diagnostic & Imaging Centers</span>
                    <span className="text-sm text-gray-600 block">standalone imaging facilities</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-purple-700">Cancer Treatment Centers</span>
                    <span className="text-sm text-gray-600 block">oncology imaging specialists</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-orange-700">Research Institutes</span>
                    <span className="text-sm text-gray-600 block">medical imaging research</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-red-700">Radiology Equipment Companies</span>
                    <span className="text-sm text-gray-600 block">technical support and sales</span>
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
                    <span className="font-bold text-green-600">₹2-4.5 LPA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Mid Level (2-5 years)</span>
                    <span className="font-bold text-blue-600">₹3-6 LPA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Senior Level (5+ years)</span>
                    <span className="font-bold text-purple-600">₹4-20 LPA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Specialized Roles</span>
                    <span className="font-bold text-red-600">₹8-20+ LPA</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  *Salaries vary based on location, experience, and specialization
                </p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">Growth Opportunities</h4>
                <p className="text-sm text-gray-700">
                  Opportunities for specialization in advanced imaging techniques, 
                  leadership roles, and potential for international career prospects.
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
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Expanding Market</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  India  medical imaging market reached USD 1,454.5 Million in 2024 and is expected to reach USD 2,181.8 Million by 2033, exhibiting a growth rate of 4.61%
                </p>
                <p className="text-gray-700">
                  The diagnostic imaging market was valued at USD 845.91 Million in 2024 and is anticipated to grow with a CAGR of 8.28% through 2030
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Technology Advancement</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  Ultrasound was the largest segment with a revenue share of 30.44% in 2024, followed by MRI and CT scan technologies
                </p>
                <p className="text-gray-700">
                  Asia Pacific dominated the market with USD 16.18 billion in 2024, with India being a key contributor
                </p>
              </div>
            </div>
          </div>

          {/* Additional Market Insights */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-purple-800">Course Fees</h4>
              <p className="text-2xl font-bold text-purple-600 mt-2">₹1.1-5L</p>
              <p className="text-sm text-gray-600">Total course duration</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-orange-800">Job Security</h4>
              <p className="text-lg font-bold text-orange-600 mt-2">High</p>
              <p className="text-sm text-gray-600">Essential healthcare service</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-teal-800">Career Flexibility</h4>
              <p className="text-lg font-bold text-teal-600 mt-2">Excellent</p>
              <p className="text-sm text-gray-600">Multiple specializations</p>
            </div>
          </div>
        </div>

        {/* About the Course */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">About the Course</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Students will learn to operate advanced imaging equipment, ensure radiation safety protocols, 
            and collaborate with radiologists and medical professionals for accurate diagnosis. The program 
            emphasizes both theoretical knowledge and extensive practical training to prepare graduates 
            for the rapidly evolving field of medical imaging technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600" />
                Core Imaging Techniques
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• X-ray Radiography</li>
                <li>• Computed Tomography (CT)</li>
                <li>• Magnetic Resonance Imaging (MRI)</li>
                <li>• Ultrasound Technology</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-600" />
                Safety & Technical Skills
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Radiation Safety Protocols</li>
                <li>• Patient Positioning Techniques</li>
                <li>• Equipment Operation & Maintenance</li>
                <li>• Image Quality Assessment</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <Monitor className="w-5 h-5 text-blue-600" />
                Advanced Technologies
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Mammography</li>
                <li>• Fluoroscopy</li>
                <li>• Digital Radiography</li>
                <li>• Nuclear Imaging Basics</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Clinical Training & Internship</h3>
            <p className="text-gray-700 leading-relaxed">
              The one-year mandatory internship provides extensive hands-on experience in various 
              diagnostic imaging departments. Students work with state-of-the-art equipment in 
              hospitals and imaging centers, developing practical skills in patient care, 
              equipment operation, and collaboration with healthcare teams.
            </p>
          </div>
        </div>

        {/* Why Choose BMRIT */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose BMRIT?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">High-Tech Healthcare Field</h3>
                  <p className="text-gray-600">Work with cutting-edge medical imaging technology</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Critical Healthcare Role</h3>
                  <p className="text-gray-600">Essential for accurate medical diagnosis and treatment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Growing Job Market</h3>
                  <p className="text-gray-600">Increasing demand for skilled imaging technologists</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-orange-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Specialization Opportunities</h3>
                  <p className="text-gray-600">Multiple career paths in different imaging modalities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Stable Career</h3>
                  <p className="text-gray-600">Essential healthcare service with job security</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-teal-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Continuous Innovation</h3>
                  <p className="text-gray-600">Constantly evolving field with new technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            ← Back to Programs
          </Link>
        </div>
      </div>
    </div>
  );
}