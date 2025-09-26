import React from 'react';
import Link from "next/link";
import { Scissors, Clock, Users, BookOpen, Briefcase, TrendingUp, Award, Calendar, Shield, Stethoscope } from "lucide-react";

export default function BottPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 py-12 px-6 mt-15">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="bg-white shadow-xl rounded-3xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-teal-600 p-3 rounded-full">
              <Scissors className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-teal-700">
                Bachelor in Operation Theater Technology (BOTT)
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Specialized Undergraduate Program in Surgical Technology
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            The Bachelor in Operation Theater Technology (BOTT) is a specialized undergraduate 
            program designed to equip students with the knowledge and skills required to assist 
            in surgical procedures and manage operation theater (OT) activities efficiently. 
            This program prepares students to work as vital members of the surgical team, 
            ensuring smooth functioning and maintenance of operating rooms in hospitals and healthcare institutions.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Clock className="w-8 h-8 text-teal-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Duration</h3>
            <p className="text-2xl font-bold text-teal-600">4 Years</p>
            <p className="text-sm text-gray-600">3 Years + 1 Year Internship</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Eligibility</h3>
            <p className="text-lg font-bold text-blue-600">10+2</p>
            <p className="text-sm text-gray-600">PCB Stream</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Recognition</h3>
            <p className="text-lg font-bold text-green-600">Board</p>
            <p className="text-sm text-gray-600">Recognized Board</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Shield className="w-8 h-8 text-red-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800">Focus</h3>
            <p className="text-lg font-bold text-red-600">Surgical</p>
            <p className="text-lg font-bold text-gray-600">&</p>
            <p className="text-sm text-gray-600">Anesthesia,</p>
            <p className="text-sm text-gray-600">Technologist</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course Details */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-teal-600" />
              Course Details
            </h2>

            <div className="space-y-6">
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-teal-800 mb-3">Course Duration</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Duration:</strong> 3 Years + 1 Year Internship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Eligibility:</strong> 10+2 (Science Stream – PCB/PCM) or equivalent from a recognized board</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Course Highlights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Comprehensive training in operation theater management, surgical instrumentation, anesthesia technology, and infection control</li>
                  <li>• Hands-on experience through clinical training and internships in reputed hospitals</li>
                  <li>• Exposure to advanced surgical technologies and emergency procedures</li>
                  <li>• Experienced faculty, well-equipped simulation labs, and real-time surgical environment training</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Job Roles</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Operation Theater Technician</li>
                  <li>• Surgical Assistant</li>
                  <li>• Anesthesia Technician</li>
                  <li>• OT In-Charge</li>
                  <li>• Healthcare Administrator</li>
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
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Work Environments</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-blue-700">Hospitals</span>
                    <span className="text-sm text-gray-600 block">(Government & Private)</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-green-700">Surgical Centers</span>
                    <span className="text-sm text-gray-600 block">specialized surgical facilities</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-purple-700">Emergency & Trauma Units</span>
                    <span className="text-sm text-gray-600 block">critical care facilities</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-orange-700">Medical Colleges & Research Institutions</span>
                    <span className="text-sm text-gray-600 block">academic and research roles</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="font-medium text-red-700">Organ Transplant Units</span>
                    <span className="text-sm text-gray-600 block">specialized transplant centers</span>
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
                    <span className="font-bold text-green-600">₹1.2-1.4 LPA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Mid Level (2-5 years)</span>
                    <span className="font-bold text-blue-600">₹1.5-1.7 LPA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Senior Level (5+ years)</span>
                    <span className="font-bold text-purple-600">₹2.4+ LPA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Specialized/Management</span>
                    <span className="font-bold text-red-600">₹2-20 LPA</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-yellow-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Monthly Salary Range</span>
                    <span className="font-bold text-teal-600">₹15K-25K+</span>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-800 mb-2">Top Recruiters</h4>
                <p className="text-sm text-gray-700">
                  AIIMS, Narayana Health, Apollo Hospitals, Max Healthcare, 
                  Fortis Healthcare, and other leading hospital chains.
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
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">Healthcare Sector Growth</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  India  healthcare sector expected to reach Rs. 4,11,275 crore (US$ 47,806.9 million) by 2033, at a CAGR of 17.67%
                </p>
                <p className="text-gray-700">
                  Private equity and venture capital investments surpassing US$ 1 billion in the first five months of FY24, marking a 220% increase
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Operating Room Equipment Market</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  Global operating room equipment market valued at US$ 37.3 billion in 2022, expected to reach US$ 59.5 billion by 2032
                </p>
                <p className="text-gray-700">
                  India Operating Tables Market valued at USD 26.78 million in 2024, anticipated to reach USD 38.83 million by 2030 (6.25% CAGR)
                </p>
              </div>
            </div>
          </div>

          {/* Additional Market Insights */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-teal-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-teal-800">Job Security</h4>
              <p className="text-lg font-bold text-teal-600 mt-2">High</p>
              <p className="text-sm text-gray-600">Essential healthcare service</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-orange-800">Career Growth</h4>
              <p className="text-lg font-bold text-orange-600 mt-2">Excellent</p>
              <p className="text-sm text-gray-600">Multiple advancement paths</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-purple-800">Work Environment</h4>
              <p className="text-lg font-bold text-purple-600 mt-2">Dynamic</p>
              <p className="text-sm text-gray-600">High-tech surgical settings</p>
            </div>
          </div>
        </div>

        {/* About the Course */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What You will Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-teal-600" />
                Surgical Fundamentals
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Anatomy & Physiology</li>
                <li>• Surgical Procedures</li>
                <li>• Medical Terminology</li>
                <li>• Pathology Basics</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-teal-800 mb-3 flex items-center gap-2">
                <Scissors className="w-5 h-5 text-teal-600" />
                OT Technology
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Surgical Instrumentation</li>
                <li>• OT Equipment Operation</li>
                <li>• Sterilization Techniques</li>
                <li>• Infection Control</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                Anesthesia & Emergency
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Anesthesia Technology</li>
                <li>• Emergency Procedures</li>
                <li>• Patient Monitoring</li>
                <li>• Safety Protocols</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-teal-100 to-blue-100 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Clinical Training & Internship</h3>
            <p className="text-gray-700 leading-relaxed">
              The one-year mandatory internship provides extensive hands-on experience in various 
              surgical departments. Students work directly in operating theaters, learning to 
              handle surgical instruments, maintain sterile environments, assist surgeons, 
              and manage OT logistics under expert supervision.
            </p>
          </div>
        </div>

        {/* Specialization Areas */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Specialization Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-teal-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Cardiac Surgery Technology</h3>
                  <p className="text-gray-600">Specialized equipment for heart surgeries</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Neurosurgery Technology</h3>
                  <p className="text-gray-600">Brain and nervous system surgical support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Orthopedic Surgery Technology</h3>
                  <p className="text-gray-600">Bone and joint surgery assistance</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Minimally Invasive Surgery</h3>
                  <p className="text-gray-600">Laparoscopic and endoscopic procedures</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-orange-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Transplant Surgery Technology</h3>
                  <p className="text-gray-600">Organ transplantation support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Emergency Surgery Technology</h3>
                  <p className="text-gray-600">Trauma and emergency procedures</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose BOTT */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose BOTT?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-teal-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Critical Healthcare Role</h3>
                  <p className="text-gray-600">Essential member of surgical teams</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">High-Tech Environment</h3>
                  <p className="text-gray-600">Work with advanced surgical technology</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Job Security</h3>
                  <p className="text-gray-600">Always in demand in healthcare sector</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Career Advancement</h3>
                  <p className="text-gray-600">Opportunities for leadership roles</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-orange-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Meaningful Work</h3>
                  <p className="text-gray-600">Direct contribution to patient outcomes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-red-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">Diverse Opportunities</h3>
                  <p className="text-gray-600">Multiple surgical specialties to choose from</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            ← Back to Programs
          </Link>
        </div>
      </div>
    </div>
  );
}