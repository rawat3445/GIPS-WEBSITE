"use client"
import { useState } from 'react';
import { GraduationCap, FileText, CheckCircle, Calendar, DollarSign, MapPin, Phone, Mail, Download, AlertCircle, Users, BookOpen, Award, TrendingUp, Clock } from 'lucide-react';

export default function After12th() {
  const [activeTab, setActiveTab] = useState('overview');

  const courses = [
    {
      name: "Bachelor of Physiotherapy (BPT)",
      duration: "4.5 years (4 years + 6 months internship)",
      eligibility: "10+2 with Physics, Chemistry, Biology (PCB) - Min 50% marks",
      seats: "60",
      fee: "₹80,000 - ₹1,00,000 per year",
      career: "Physiotherapist, Rehabilitation Specialist, Sports Therapist, Clinical Researcher"
    },
    {
      name: "Bachelor in Medical Radiology & Imaging Technology (BMRIT)",
      duration: "3 years",
      eligibility: "10+2 with Physics, Chemistry, Biology (PCB) - Min 50% marks",
      seats: "40",
      fee: "₹70,000 - ₹90,000 per year",
      career: "Radiographer, MRI/CT Scan Technician, Imaging Specialist, Hospital Technologist"
    },
    {
      name: "Bachelor in Operation Theatre Technology (BOTT)",
      duration: "3 years",
      eligibility: "10+2 with Physics, Chemistry, Biology (PCB) - Min 50% marks",
      seats: "40",
      fee: "₹65,000 - ₹85,000 per year",
      career: "OT Technician, Surgical Assistant, Sterilization Technician, Hospital Administrator"
    },
    {
      name: "Bachelor of Optometry (B.Optom)",
      duration: "4 years",
      eligibility: "10+2 with Physics, Chemistry, Biology/Math - Min 50% marks",
      seats: "30",
      fee: "₹75,000 - ₹95,000 per year",
      career: "Optometrist, Vision Therapist, Contact Lens Specialist, Eye Care Professional"
    },
    {
      name: "Diploma in Optometry (D.Optom)",
      duration: "2 years",
      eligibility: "10+2 with Physics, Chemistry, Biology/Math - Min 45% marks",
      seats: "30",
      fee: "₹45,000 - ₹60,000 per year",
      career: "Optometry Technician, Vision Screening Specialist, Optical Store Manager"
    }
  ];

  const eligibilityCriteria = [
    {
      icon: BookOpen,
      title: "Academic Qualification",
      points: [
        "Passed 10+2 or equivalent from a recognized board",
        "Must have Physics, Chemistry, and Biology (PCB) as main subjects",
        "Minimum 50% aggregate marks in PCB (45% for reserved categories)",
        "English as a compulsory subject"
      ]
    },
    {
      icon: Calendar,
      title: "Age Criteria",
      points: [
        "Minimum age: 17 years as on 31st December of admission year",
        "No upper age limit for general category",
        "Age relaxation as per government norms for reserved categories"
      ]
    },
    {
      icon: Users,
      title: "Reservation Policy",
      points: [
        "15% seats reserved for SC candidates",
        "7.5% seats reserved for ST candidates",
        "27% seats reserved for OBC (Non-Creamy Layer)",
        "5% seats for Persons with Disabilities (PwD)"
      ]
    }
  ];

  const admissionProcess = [
    {
      step: 1,
      title: "Online Registration",
      description: "Fill the online application form on GIPS website with accurate details",
      duration: "May - June"
    },
    {
      step: 2,
      title: "Submit Documents",
      description: "Upload required documents (mark sheets, certificates, ID proof, photos)",
      duration: "Within 48 hours"
    },
    {
      step: 3,
      title: "Entrance Test (If applicable)",
      description: "Appear for entrance examination or qualify through 10+2 merit",
      duration: "July"
    },
    {
      step: 4,
      title: "Merit List Declaration",
      description: "Check merit list on website. Selected candidates receive admission offer",
      duration: "July - August"
    },
    {
      step: 5,
      title: "Counseling & Document Verification",
      description: "Attend counseling session with original documents for verification",
      duration: "August"
    },
    {
      step: 6,
      title: "Fee Payment & Admission",
      description: "Pay admission fee and complete enrollment formalities",
      duration: "August - September"
    }
  ];

  const requiredDocuments = [
    "10th Standard Mark Sheet & Certificate",
    "12th Standard Mark Sheet & Certificate",
    "Transfer Certificate (TC) from previous institution",
    "Migration Certificate (if applicable)",
    "Character Certificate from school principal",
    "Caste Certificate (for SC/ST/OBC candidates)",
    "Domicile Certificate",
    "Aadhar Card copy",
    "Passport size photographs (4 copies)",
    "Medical Fitness Certificate",
    "Gap Certificate (if any year gap after 12th)",
    "Income Certificate (for scholarship eligibility)"
  ];

  const selectionCriteria = [
    {
      method: "Merit-Based",
      description: "Selection based on 10+2 board exam marks (PCB aggregate)",
      weightage: "Primary method for most courses"
    },
    {
      method: "Entrance Test",
      description: "Institute may conduct entrance test for specific programs",
      weightage: "If applicable, 60% entrance + 40% 10+2 marks"
    },
    {
      method: "Personal Interview",
      description: "Face-to-face interaction to assess aptitude and motivation",
      weightage: "Final round for shortlisted candidates"
    }
  ];

  const whyChooseGIPS = [
    {
      icon: Award,
      title: "Recognized & Affiliated",
      description: "Approved by state medical council and affiliated with reputed university"
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Learn from qualified professors and industry professionals"
    },
    {
      icon: TrendingUp,
      title: "Excellent Placements",
      description: "95%+ placement record with top hospitals and healthcare centers"
    },
    {
      icon: BookOpen,
      title: "Practical Training",
      description: "Hands-on clinical exposure through hospital tie-ups and internships"
    }
  ];

  const importantDates = [
    { event: "Application Start Date", date: "May 1, 2025" },
    { event: "Last Date to Apply", date: "June 30, 2025" },
    { event: "Entrance Test (if applicable)", date: "July 15, 2025" },
    { event: "Merit List Declaration", date: "July 25, 2025" },
    { event: "Counseling Dates", date: "August 1-10, 2025" },
    { event: "Classes Commence", date: "August 20, 2025" }
  ];

  const faqs = [
    {
      question: "Can I apply if I have Biology and Mathematics but not Chemistry?",
      answer: "No, Physics, Chemistry, and Biology (PCB) are mandatory subjects for paramedical courses. Mathematics alone cannot substitute Chemistry."
    },
    {
      question: "Is there any entrance exam for admission?",
      answer: "Admission is primarily merit-based on 10+2 marks. However, GIPS may conduct an entrance test for certain programs. Check the admission notification for specific course requirements."
    },
    {
      question: "What is the fee structure? Are there any scholarships?",
      answer: "Fees vary by program (₹45,000 to ₹1,00,000 per year). Yes, scholarships are available based on merit and for economically weaker sections. Government scholarships are also applicable."
    },
    {
      question: "Can I get direct admission without entrance test?",
      answer: "Yes, most courses offer merit-based admission based on 10+2 marks. However, seats are limited and admission is competitive."
    },
    {
      question: "Is hostel facility available for outstation students?",
      answer: "Yes, GIPS provides separate hostel facilities for boys and girls with all modern amenities, dining hall, and 24/7 security."
    },
    {
      question: "What are the job opportunities after completing these courses?",
      answer: "Graduates get placements in government and private hospitals, diagnostic centers, rehabilitation centers, clinics, and can also pursue higher studies or start their own practice."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 mt-15">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
              <GraduationCap className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">Admissions After 12th</h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Start Your Healthcare Career at Garhwal Institute of Paramedical Sciences
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg">
              Apply Now
            </button>
            <button className="bg-blue-800 bg-opacity-50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-70 transition-all border-2 border-white">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'courses'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Courses Offered
            </button>
            <button
              onClick={() => setActiveTab('process')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'process'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Admission Process
            </button>
            <button
              onClick={() => setActiveTab('faqs')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'faqs'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              FAQs
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-blue-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to GIPS Admissions</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Students who have completed their 10+2 (Science stream with Physics, Chemistry, and Biology) 
                  are eligible to apply for various undergraduate programs offered by Garhwal Institute of 
                  Paramedical Sciences. Our institution is committed to providing quality education and 
                  practical training to students aspiring to build a successful career in the healthcare sector.
                </p>
                <p>
                  Admission to GIPS is strictly based on merit, ensuring that only dedicated and deserving 
                  candidates get the opportunity to pursue their dreams. We follow a transparent selection 
                  process aligned with state and national guidelines, with adequate representation for all 
                  categories as per government reservation policies.
                </p>
                <p>
                  At GIPS, we offer comprehensive paramedical programs with excellent infrastructure, 
                  experienced faculty, and strong industry connections that ensure outstanding placement 
                  opportunities for our graduates. Join us to embark on a rewarding journey in healthcare!
                </p>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Eligibility Criteria</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {eligibilityCriteria.map((criteria, index) => {
                  const IconComponent = criteria.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center text-white mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">{criteria.title}</h3>
                      <ul className="space-y-2">
                        {criteria.points.map((point, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-1" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Why Choose GIPS */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-10 mb-12 text-white">
              <h2 className="text-4xl font-bold mb-8 text-center">Why Choose GIPS?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyChooseGIPS.map((reason, index) => {
                  const IconComponent = reason.icon;
                  return (
                    <div key={index} className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-center border border-white/30">
                      <IconComponent className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                      <p className="text-sm text-indigo-100">{reason.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Important Dates */}
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <div className="flex items-center mb-8">
                <Calendar className="w-10 h-10 text-blue-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-800">Important Dates 2025</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {importantDates.map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 border-l-4 border-blue-600">
                    <span className="font-semibold text-gray-800">{item.event}</span>
                    <span className="text-blue-600 font-bold">{item.date}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-orange-100 border-l-4 border-orange-500 p-4 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Note:</strong> Dates are tentative and subject to change. Please check the official website regularly for updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Courses Available After 12th</h2>
            <div className="space-y-6">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">{course.name}</h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                        Duration: {course.duration}
                      </span>
                      <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                        Seats: {course.seats}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                          Eligibility
                        </h4>
                        <p className="text-gray-700">{course.eligibility}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                          <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                          Fee Structure
                        </h4>
                        <p className="text-gray-700">{course.fee}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                        <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                        Career Opportunities
                      </h4>
                      <p className="text-gray-700">{course.career}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <div>
            {/* Admission Process */}
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-purple-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Step-by-Step Admission Process</h2>
              <div className="space-y-6">
                {admissionProcess.map((process, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-6 flex-shrink-0">
                      {process.step}
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-2xl font-bold text-gray-800">{process.title}</h4>
                        <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold">
                          {process.duration}
                        </span>
                      </div>
                      <p className="text-gray-700 text-lg">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selection Criteria */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-10 mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Selection Criteria</h2>
              <div className="space-y-4">
                {selectionCriteria.map((criteria, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{criteria.method}</h4>
                    <p className="text-gray-700 mb-2">{criteria.description}</p>
                    <p className="text-sm text-blue-600 font-semibold">{criteria.weightage}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <div className="flex items-center mb-8">
                <FileText className="w-10 h-10 text-orange-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-800">Required Documents</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 p-4 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Important:</strong> All documents must be self-attested. Original documents must be carried during counseling for verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQs Tab */}
        {activeTab === 'faqs' && (
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-l-4 border-blue-500 bg-blue-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h4>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mt-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Need Help with Admission?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our admission team is here to assist you. Contact us for any queries regarding courses, eligibility, or application process.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center bg-blue-50 rounded-lg p-6">
              <Phone className="w-10 h-10 text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">Call Us</h4>
              <p className="text-gray-700">+91-XXXX-XXXXXX</p>
              <p className="text-sm text-gray-600">Mon-Sat: 9 AM - 6 PM</p>
            </div>
            <div className="flex flex-col items-center bg-purple-50 rounded-lg p-6">
              <Mail className="w-10 h-10 text-purple-600 mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">Email Us</h4>
              <p className="text-gray-700">admissions@gips.edu.in</p>
              <p className="text-sm text-gray-600">24/7 Support</p>
            </div>
            <div className="flex flex-col items-center bg-green-50 rounded-lg p-6">
              <MapPin className="w-10 h-10 text-green-600 mb-3" />
              <h4 className="font-bold text-gray-800 mb-2">Visit Us</h4>
              <p className="text-gray-700">GIPS Campus</p>
              <p className="text-sm text-gray-600">Garhwal, Uttarakhand</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
            Start Your Application
          </button>
        </div>
      </div>
    </div>
  );
}