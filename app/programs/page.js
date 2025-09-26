import Link from "next/link";
import { Activity, Eye, Monitor, Scissors, Clock, Users, TrendingUp, Award, GraduationCap, BookOpen } from "lucide-react";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-6 mt-15">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-white shadow-xl rounded-3xl p-8 mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-4 rounded-full">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Our Academic Programs</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Garhwal Institute of Paramedical Sciences (GIPS), we offer comprehensive undergraduate programs 
            in paramedical and allied health sciences. Each program combines rigorous academic curriculum with 
            extensive practical training and clinical exposure to prepare healthcare professionals of tomorrow.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-lg text-center">
            <BookOpen className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <h3 className="font-bold text-2xl text-blue-600">4</h3>
            <p className="text-sm text-gray-600">Programs Offered</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg text-center">
            <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <h3 className="font-bold text-2xl text-green-600">3-4</h3>
            <p className="text-sm text-gray-600">Years Duration</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg text-center">
            <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <h3 className="font-bold text-2xl text-purple-600">100%</h3>
            <p className="text-sm text-gray-600">Placement Focus</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg text-center">
            <Award className="w-6 h-6 text-orange-600 mx-auto mb-2" />
            <h3 className="font-bold text-2xl text-orange-600">10+2</h3>
            <p className="text-sm text-gray-600">Eligibility</p>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* BPT Program */}
          <div className="bg-white shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-white/20 p-3 rounded-full">
                  <Activity className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Bachelor of Physiotherapy</h2>
                  <p className="text-green-100">BPT</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                A comprehensive four-year program focusing on physical rehabilitation, therapeutic exercises, 
                and patient care. Prepares students to restore mobility, reduce pain, and improve overall 
                physical function through evidence-based physiotherapy techniques.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-600"><strong>Duration:</strong> 4 Years + 6 Months Internship</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-600"><strong>Eligibility:</strong> 10+2 (PCB)</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-gray-600"><strong>Salary Range:</strong> ₹2.5-10+ LPA</span>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-green-800 mb-2">Key Specializations:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">Orthopedic</span>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">Neurological</span>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">Sports</span>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs">Cardiopulmonary</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Career Opportunities:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Physiotherapist in Hospitals & Clinics</li>
                  <li>• Sports Physiotherapist</li>
                  <li>• Rehabilitation Specialist</li>
                  <li>• Private Practice Owner</li>
                </ul>
              </div>
              
              <Link href="/programs/bpt" className="inline-flex items-center gap-2 w-full justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full transition-colors">
                Explore BPT Program →
              </Link>
            </div>
          </div>

          {/* B.Optom Program */}
          <div className="bg-white shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-white/20 p-3 rounded-full">
                  <Eye className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Bachelor of Optometry</h2>
                  <p className="text-blue-100">B.Optom</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Professional undergraduate program in vision care and eye health. Equips students with 
                expertise in eye examination, diagnosis of vision disorders, and management of various 
                eye conditions using advanced optical instruments.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-600"><strong>Duration:</strong> 3 Years + 1 Year Internship</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-600"><strong>Eligibility:</strong> 10+2 (PCB/PCM), 50% marks</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-gray-600"><strong>Salary Range:</strong> ₹2-10+ LPA</span>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">Focus Areas:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs">Contact Lens</span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs">Low Vision</span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs">Vision Therapy</span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs">Binocular Vision</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Career Opportunities:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Clinical Optometrist</li>
                  <li>• Optical Retail Consultant</li>
                  <li>• Vision Researcher</li>
                  <li>• Contact Lens Specialist</li>
                </ul>
              </div>
              
              <Link href="/programs/optometry" className="inline-flex items-center gap-2 w-full justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-colors">
                Explore B.Optom Program →
              </Link>
            </div>
          </div>

          {/* BMRIT Program */}
          <div className="bg-white shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-white/20 p-3 rounded-full">
                  <Monitor className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Medical Radiology & Imaging</h2>
                  <p className="text-purple-100">BMRIT</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Advanced program in medical imaging technology focusing on diagnostic procedures using 
                X-ray, MRI, CT scan, ultrasound, and other imaging modalities. Emphasizes radiation 
                safety and modern diagnostic equipment operation.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-gray-600"><strong>Duration:</strong> 3 Years + 1 Year Internship</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-600"><strong>Eligibility:</strong> 10+2 (PCB/PCM)</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-600"><strong>Salary Range:</strong> ₹2-20+ LPA</span>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-purple-800 mb-2">Imaging Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-xs">X-ray</span>
                  <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-xs">MRI</span>
                  <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-xs">CT Scan</span>
                  <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-xs">Ultrasound</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Career Opportunities:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Radiology Technician</li>
                  <li>• MRI/CT Technologist</li>
                  <li>• Sonographer</li>
                  <li>• Radiology Safety Officer</li>
                </ul>
              </div>
              
              <Link href="/programs/bmrit" className="inline-flex items-center gap-2 w-full justify-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full transition-colors">
                Explore BMRIT Program →
              </Link>
            </div>
          </div>

          {/* BOTT Program */}
          <div className="bg-white shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-6">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-white/20 p-3 rounded-full">
                  <Scissors className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Operation Theater Technology</h2>
                  <p className="text-teal-100">BOTT</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Specialized program for surgical technology and operation theater management. 
                Trains students in surgical procedures, instrument handling, anesthesia support, 
                and maintaining sterile environments in operating rooms.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span className="text-sm text-gray-600"><strong>Duration:</strong> 3 Years + 1 Year Internship</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-600"><strong>Eligibility:</strong> 10+2 (PCB/PCM)</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-gray-600"><strong>Salary Range:</strong> ₹1.2-20+ LPA</span>
                </div>
              </div>
              
              <div className="bg-teal-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-teal-800 mb-2">Specialization Areas:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-teal-200 text-teal-800 px-2 py-1 rounded-full text-xs">Cardiac Surgery</span>
                  <span className="bg-teal-200 text-teal-800 px-2 py-1 rounded-full text-xs">Neurosurgery</span>
                  <span className="bg-teal-200 text-teal-800 px-2 py-1 rounded-full text-xs">Orthopedic</span>
                  <span className="bg-teal-200 text-teal-800 px-2 py-1 rounded-full text-xs">Emergency</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Career Opportunities:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Operation Theater Technician</li>
                  <li>• Surgical Assistant</li>
                  <li>• Anesthesia Technician</li>
                  <li>• OT In-Charge</li>
                </ul>
              </div>
              
              <Link href="/programs/bott" className="inline-flex items-center gap-2 w-full justify-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-full transition-colors">
                Explore BOTT Program →
              </Link>
            </div>
          </div>
        </div>

        {/* Market Outlook Section */}
        <div className="bg-white shadow-xl rounded-3xl p-8 mt-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Healthcare Industry Outlook</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">Growing Market</h3>
              <p className="text-sm text-gray-600">Healthcare sector expanding rapidly with increasing demand for skilled professionals</p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-2">High Demand</h3>
              <p className="text-sm text-gray-600">Consistent demand for paramedical professionals across all healthcare sectors</p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-600 mb-2">Job Security</h3>
              <p className="text-sm text-gray-600">Essential healthcare services ensure excellent job security and career stability</p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-2">Career Growth</h3>
              <p className="text-sm text-gray-600">Multiple advancement opportunities including specialization and leadership roles</p>
            </div>
          </div>
        </div>

        {/* Admission Information */}
        <div className="bg-white shadow-xl rounded-3xl p-8 mt-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admission Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">General Eligibility</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• 10+2 from recognized board</li>
                <li>• Science stream (PCB/PCM)</li>
                <li>• Minimum 45-50% marks</li>
                <li>• Age: 17+ years at admission</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Admission Process</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Entrance examination</li>
                <li>• Merit-based selection</li>
                <li>• Document verification</li>
                <li>• Medical fitness certificate</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Course Features</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Clinical exposure</li>
                <li>• Hands-on training</li>
                <li>• Modern labs & equipment</li>
                <li>• Industry partnerships</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-xl rounded-3xl p-8 mt-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Healthcare Career?</h2>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Join thousands of successful healthcare professionals who started their journey at GIPS. 
            Choose from our comprehensive programs and build a rewarding career in healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="inline-flex items-center justify-center bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors">
              Apply Now
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}