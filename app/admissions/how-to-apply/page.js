"use client"
import { useState } from 'react';
import { FileText, Upload, CreditCard, CheckCircle, Send, Download, AlertCircle, Clock, Mail, Phone, ExternalLink, User, BookOpen, Calendar, DollarSign } from 'lucide-react';

export default function HowToApply() {
  const [activeMode, setActiveMode] = useState('online');

  const applicationSteps = [
    {
      step: 1,
      title: "Visit GIPS Admission Portal",
      description: "Go to the official GIPS website and click on 'Admissions' or 'Apply Now' button",
      icon: ExternalLink,
      details: [
        "Navigate to www.gips.edu.in",
        "Click on 'Admissions' in the main menu",
        "Select 'Apply Online' button",
        "Registration page will open"
      ],
      duration: "2 minutes"
    },
    {
      step: 2,
      title: "Create Your Account",
      description: "Register with your email ID and mobile number to create login credentials",
      icon: User,
      details: [
        "Enter valid email address",
        "Provide active mobile number",
        "Create a strong password",
        "Verify email and mobile via OTP",
        "Note down your application ID"
      ],
      duration: "5 minutes"
    },
    {
      step: 3,
      title: "Fill Application Form",
      description: "Complete the online application form with accurate personal and academic details",
      icon: FileText,
      details: [
        "Personal details (name, DOB, gender, category)",
        "Contact information (address, email, phone)",
        "Academic qualifications (10th, 12th marks)",
        "Course preference selection",
        "Parent/Guardian details",
        "Upload recent photograph and signature"
      ],
      duration: "15-20 minutes"
    },
    {
      step: 4,
      title: "Upload Documents",
      description: "Scan and upload all required documents in specified format (PDF/JPG, max 2MB each)",
      icon: Upload,
      details: [
        "10th mark sheet and certificate",
        "12th mark sheet and certificate",
        "Transfer Certificate (TC)",
        "Caste certificate (if applicable)",
        "Recent passport size photograph",
        "Signature in white background",
        "Aadhar card copy"
      ],
      duration: "10 minutes"
    },
    {
      step: 5,
      title: "Pay Application Fee",
      description: "Make secure online payment of application fee through available payment methods",
      icon: CreditCard,
      details: [
        "Fee: ₹1,000 (General/OBC)",
        "Fee: ₹500 (SC/ST/PwD)",
        "Payment via Debit/Credit Card",
        "Net Banking/UPI accepted",
        "Payment gateway is secure",
        "Save payment receipt"
      ],
      duration: "5 minutes"
    },
    {
      step: 6,
      title: "Review & Submit",
      description: "Carefully review all entered information before final submission",
      icon: CheckCircle,
      details: [
        "Preview complete application form",
        "Verify all details are correct",
        "Check uploaded documents",
        "Confirm payment status",
        "Click 'Final Submit' button",
        "Application cannot be edited after submission"
      ],
      duration: "5 minutes"
    },
    {
      step: 7,
      title: "Download & Print",
      description: "Save confirmation page and take printout for future reference",
      icon: Download,
      details: [
        "Download application confirmation PDF",
        "Take printout of application form",
        "Keep payment receipt safe",
        "Note your application number",
        "Save login credentials",
        "Bring printout during counseling"
      ],
      duration: "3 minutes"
    }
  ];

  const offlineSteps = [
    {
      step: 1,
      title: "Obtain Application Form",
      description: "Visit GIPS campus or download form from website",
      points: [
        "Download form from www.gips.edu.in",
        "Or collect from Admission Office",
        "Form available from May onwards",
        "Take multiple photocopies"
      ]
    },
    {
      step: 2,
      title: "Fill Form Carefully",
      description: "Use black/blue pen, write in CAPITAL LETTERS",
      points: [
        "Fill all mandatory fields",
        "Use block letters",
        "No overwriting or cutting",
        "Affix recent photograph"
      ]
    },
    {
      step: 3,
      title: "Attach Documents",
      description: "Self-attest all document copies",
      points: [
        "Attach all required certificates",
        "Self-attest each document",
        "Arrange in proper order",
        "Use paper clips, no staples"
      ]
    },
    {
      step: 4,
      title: "Pay Application Fee",
      description: "Submit fee via Demand Draft",
      points: [
        "DD in favor of 'GIPS'",
        "Payable at Garhwal",
        "Write name on back of DD",
        "Attach DD with form"
      ]
    },
    {
      step: 5,
      title: "Submit Application",
      description: "Submit at admission office or send by post",
      points: [
        "Submit during office hours",
        "Or send by registered post",
        "Get acknowledgment receipt",
        "Keep photocopy of form"
      ]
    }
  ];

  const requiredDocuments = [
    { doc: "10th Standard Mark Sheet", format: "PDF/JPG", size: "Max 2MB" },
    { doc: "12th Standard Mark Sheet", format: "PDF/JPG", size: "Max 2MB" },
    { doc: "Transfer Certificate", format: "PDF/JPG", size: "Max 2MB" },
    { doc: "Caste Certificate (if applicable)", format: "PDF/JPG", size: "Max 2MB" },
    { doc: "Domicile Certificate", format: "PDF/JPG", size: "Max 2MB" },
    { doc: "Aadhar Card", format: "PDF/JPG", size: "Max 2MB" },
    { doc: "Passport Size Photograph", format: "JPG", size: "Max 100KB, White Background" },
    { doc: "Signature Image", format: "JPG", size: "Max 50KB, White Background" }
  ];

  const importantTips = [
    {
      icon: CheckCircle,
      tip: "Double-check all information",
      description: "Verify personal details, marks, and contact information before submission"
    },
    {
      icon: Upload,
      tip: "Use clear scanned copies",
      description: "Documents should be readable, not blurred or dark"
    },
    {
      icon: Clock,
      tip: "Apply before deadline",
      description: "Don't wait for last day, submit at least 2-3 days before deadline"
    },
    {
      icon: Mail,
      tip: "Use valid email & phone",
      description: "All communications will be sent via email and SMS"
    },
    {
      icon: Download,
      tip: "Save confirmation page",
      description: "Take printout and keep it safe for counseling"
    },
    {
      icon: AlertCircle,
      tip: "No multiple applications",
      description: "Submit only one application. Multiple applications will be rejected"
    }
  ];

  const applicationFees = [
    { category: "General / OBC (Non-Creamy Layer)", fee: "₹1,000" },
    { category: "SC / ST", fee: "₹500" },
    { category: "Persons with Disabilities (PwD)", fee: "₹500" },
    { category: "EWS (Economically Weaker Section)", fee: "₹1,000" }
  ];

  const paymentMethods = [
    {
      method: "Credit/Debit Card",
      details: "Visa, Mastercard, RuPay cards accepted"
    },
    {
      method: "Net Banking",
      details: "All major banks supported"
    },
    {
      method: "UPI",
      details: "Google Pay, PhonePe, Paytm, BHIM"
    },
    {
      method: "Demand Draft (Offline)",
      details: "In favor of 'GIPS', payable at Garhwal"
    }
  ];

  const afterSubmission = [
    {
      step: "Check Application Status",
      description: "Login to portal to track your application status regularly"
    },
    {
      step: "Wait for Merit List",
      description: "Merit list will be published on website based on eligibility and marks"
    },
    {
      step: "Attend Counseling",
      description: "If selected, attend counseling with original documents on scheduled date"
    },
    {
      step: "Complete Admission",
      description: "Pay admission fee, submit documents, and complete enrollment formalities"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 mt-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
              <FileText className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">How to Apply</h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Complete Guide to GIPS Admission Application Process
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Mode Selection */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Choose Application Mode</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => setActiveMode('online')}
              className={`p-8 rounded-xl border-4 transition-all ${
                activeMode === 'online'
                  ? 'border-blue-600 bg-blue-50 shadow-lg'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <ExternalLink className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Online Application</h3>
              <p className="text-gray-600">Fast, convenient, and recommended method</p>
              <div className="mt-4 text-blue-600 font-semibold">✓ Apply from anywhere</div>
            </button>
            <button
              onClick={() => setActiveMode('offline')}
              className={`p-8 rounded-xl border-4 transition-all ${
                activeMode === 'offline'
                  ? 'border-purple-600 bg-purple-50 shadow-lg'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <Download className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Offline Application</h3>
              <p className="text-gray-600">Manual form submission at campus</p>
              <div className="mt-4 text-purple-600 font-semibold">✓ Traditional method</div>
            </button>
          </div>
        </div>

        {/* Online Application Process */}
        {activeMode === 'online' && (
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-blue-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Online Application Process</h2>
              <p className="text-lg text-gray-700 mb-4">
                Follow these simple steps to complete your online application. The entire process takes approximately 45 minutes.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Estimated Time:</strong> 45 minutes to 1 hour for complete application
                  </p>
                </div>
              </div>
            </div>

            {/* Step by Step Process */}
            <div className="space-y-6 mb-12">
              {applicationSteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.step} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white">
                      <div className="bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4 flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{step.title}</h3>
                        <p className="text-blue-100">{step.description}</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                        <Clock className="w-5 h-5 inline mr-2" />
                        {step.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start bg-blue-50 rounded-lg p-4">
                            <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Offline Application Process */}
        {activeMode === 'offline' && (
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-purple-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Offline Application Process</h2>
              <p className="text-lg text-gray-700 mb-4">
                For candidates who prefer manual application submission, follow these steps.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Note:</strong> Online application is faster and recommended. Offline applications may take longer to process.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-12">
              {offlineSteps.map((step) => (
                <div key={step.step} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
                    <div className="bg-white text-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4 flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{step.title}</h3>
                      <p className="text-purple-100">{step.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.points.map((point, idx) => (
                        <div key={idx} className="flex items-start bg-purple-50 rounded-lg p-4">
                          <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Required Documents */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <div className="flex items-center mb-8">
            <Upload className="w-10 h-10 text-orange-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-800">Required Documents</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <th className="px-6 py-4 text-left text-lg font-semibold">Document</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Format</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Size/Specifications</th>
                </tr>
              </thead>
              <tbody>
                {requiredDocuments.map((doc, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-orange-50 transition-colors`}>
                    <td className="px-6 py-4 font-medium text-gray-800">{doc.doc}</td>
                    <td className="px-6 py-4 text-gray-700">{doc.format}</td>
                    <td className="px-6 py-4 text-gray-600">{doc.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Application Fee */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl p-10 mb-12">
          <div className="flex items-center mb-8">
            <DollarSign className="w-10 h-10 text-green-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-800">Application Fee Structure</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {applicationFees.map((fee, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg flex justify-between items-center">
                <span className="font-semibold text-gray-800">{fee.category}</span>
                <span className="text-2xl font-bold text-green-600">{fee.fee}</span>
              </div>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Payment Methods</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg p-5 shadow-md">
                <h4 className="font-bold text-gray-800 mb-2">{method.method}</h4>
                <p className="text-gray-600 text-sm">{method.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Tips */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-10 mb-12 text-white">
          <h2 className="text-4xl font-bold mb-8 text-center">Important Tips for Application</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantTips.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
                  <IconComponent className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.tip}</h3>
                  <p className="text-sm text-indigo-100">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* After Submission */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <div className="flex items-center mb-8">
            <Send className="w-10 h-10 text-blue-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-800">After Submitting Application</h2>
          </div>
          <div className="space-y-4">
            {afterSubmission.map((item, index) => (
              <div key={index} className="flex items-start bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{item.step}</h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Help */}
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Need Help with Application?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our admission helpdesk is available to assist you with any queries during the application process.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center justify-center bg-blue-50 rounded-lg p-6">
              <Phone className="w-8 h-8 text-blue-600 mr-4" />
              <div className="text-left">
                <h4 className="font-bold text-gray-800 mb-1">Call Helpline</h4>
                <p className="text-gray-700">+9182739 68106</p>
                <p className="text-sm text-gray-600">Mon-Sat: 9 AM - 6 PM</p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-purple-50 rounded-lg p-6">
              <Mail className="w-8 h-8 text-purple-600 mr-4" />
              <div className="text-left">
                <h4 className="font-bold text-gray-800 mb-1">Email Support</h4>
                <p className="text-gray-700">garhwalparamedicalinstitute@gmail.com</p>
                <p className="text-sm text-gray-600">24/7 Email Support</p>
              </div>
            </div>
          </div>
          <a href='/admissions' className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
            Start Application Now
          </a>
        </div>
      </div>
    </div>
  );
}