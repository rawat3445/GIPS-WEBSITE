"use client"
import { useState } from 'react';
import { Award, DollarSign, TrendingUp, Users, FileText, CheckCircle, Star, Gift, BookOpen, Calendar, Download, Mail, AlertCircle } from 'lucide-react';

export default function Scholarships() {
  const [activeTab, setActiveTab] = useState('overview');

  const scholarshipTypes = [
    {
      id: 'merit',
      title: "Merit-Based Scholarships",
      icon: Award,
      color: "from-yellow-500 to-orange-600",
      emoji: "🏆",
      description: "Rewards for academic excellence and outstanding performance",
      scholarships: [
        {
          name: "Gold Medal Scholarship",
          eligibility: "Students securing 90% and above in 10+2",
          amount: "100% tuition fee waiver for first year",
          benefits: "Full fee waiver + Certificate"
        },
        {
          name: "Silver Medal Scholarship",
          eligibility: "Students securing 80-89% in 10+2",
          amount: "50% tuition fee waiver for first year",
          benefits: "50% fee waiver + Certificate"
        },
        {
          name: "Bronze Medal Scholarship",
          eligibility: "Students securing 70-79% in 10+2",
          amount: "25% tuition fee waiver for first year",
          benefits: "25% fee waiver + Certificate"
        },
        {
          name: "Rank Holder Scholarship",
          eligibility: "Top 3 students in each course (yearly basis)",
          amount: "₹10,000 - ₹25,000",
          benefits: "Cash prize + Certificate of Excellence"
        }
      ]
    },
    {
      id: 'government',
      title: "Government Scholarships",
      icon: Users,
      color: "from-blue-500 to-indigo-600",
      emoji: "🏛️",
      description: "State and central government scholarship schemes",
      scholarships: [
        {
          name: "Post Matric Scholarship (SC/ST)",
          eligibility: "SC/ST students pursuing higher education",
          amount: "As per government norms (₹10,000 - ₹30,000 per year)",
          benefits: "Annual financial assistance"
        },
        {
          name: "OBC Scholarship",
          eligibility: "OBC (Non-Creamy Layer) students",
          amount: "As per government guidelines",
          benefits: "Tuition fee reimbursement"
        },
        {
          name: "Minority Scholarship",
          eligibility: "Students from minority communities",
          amount: "₹10,000 - ₹20,000 per year",
          benefits: "Financial support for education"
        },
        {
          name: "EWS Scholarship",
          eligibility: "Economically Weaker Section students",
          amount: "As per state government norms",
          benefits: "Fee concession and stipend"
        },
        {
          name: "National Scholarship Portal (NSP)",
          eligibility: "Various categories based on NSP schemes",
          amount: "Variable based on scheme",
          benefits: "Central and state government scholarships"
        }
      ]
    },
    {
      id: 'financial',
      title: "Financial Aid & Need-Based",
      icon: DollarSign,
      color: "from-green-500 to-teal-600",
      emoji: "💰",
      description: "Support for economically disadvantaged students",
      scholarships: [
        {
          name: "Fee Concession Scheme",
          eligibility: "Family income less than ₹2.5 lakhs per annum",
          amount: "20-50% fee concession",
          benefits: "Reduced fee burden"
        },
        {
          name: "Interest-Free Education Loan",
          eligibility: "Students in need of financial support",
          amount: "Up to ₹2 lakhs (repayable after course)",
          benefits: "No interest charged"
        },
        {
          name: "Emergency Financial Aid",
          eligibility: "Students facing sudden financial crisis",
          amount: "₹5,000 - ₹25,000 (one-time)",
          benefits: "Immediate financial relief"
        },
        {
          name: "Work-Study Program",
          eligibility: "Students willing to work part-time on campus",
          amount: "₹3,000 - ₹5,000 per month",
          benefits: "Earn while you learn"
        }
      ]
    },
    {
      id: 'special',
      title: "Special Category Scholarships",
      icon: Star,
      color: "from-purple-500 to-pink-600",
      emoji: "⭐",
      description: "Scholarships for specific categories and achievements",
      scholarships: [
        {
          name: "Sports Excellence Scholarship",
          eligibility: "State/National level sports achievements",
          amount: "₹15,000 - ₹50,000",
          benefits: "Fee waiver + Sports kit support"
        },
        {
          name: "Girls Education Scholarship",
          eligibility: "Female students with good academic record",
          amount: "₹10,000 per year",
          benefits: "Encouragement for girl's education"
        },
        {
          name: "Divyang (PwD) Scholarship",
          eligibility: "Students with disabilities (40% and above)",
          amount: "50% fee concession",
          benefits: "Special support and accommodation"
        },
        {
          name: "Single Parent/Orphan Scholarship",
          eligibility: "Students from single parent families or orphans",
          amount: "30-40% fee concession",
          benefits: "Financial and emotional support"
        },
        {
          name: "Defense Personnel Ward Scholarship",
          eligibility: "Children of defense personnel",
          amount: "20% fee concession",
          benefits: "Honor for defense service"
        }
      ]
    }
  ];

  const eligibilityCriteria = [
    {
      icon: BookOpen,
      title: "Academic Requirements",
      points: [
        "Must be enrolled as a regular student at GIPS",
        "Maintain minimum 60% attendance in classes",
        "No active academic disciplinary action",
        "Regular progression in course completion"
      ]
    },
    {
      icon: FileText,
      title: "Documentation",
      points: [
        "Valid income certificate (for need-based)",
        "Caste certificate (for category-specific)",
        "Previous year mark sheets",
        "Bank account details for direct transfer"
      ]
    },
    {
      icon: CheckCircle,
      title: "Conduct Requirements",
      points: [
        "Good conduct and discipline record",
        "No involvement in ragging or misconduct",
        "Active participation in college activities",
        "Adherence to institutional rules and regulations"
      ]
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Check Eligibility",
      description: "Review scholarship criteria and ensure you meet all requirements"
    },
    {
      step: 2,
      title: "Collect Documents",
      description: "Gather all required certificates, income proof, and academic records"
    },
    {
      step: 3,
      title: "Fill Application Form",
      description: "Complete scholarship application form available at admission office"
    },
    {
      step: 4,
      title: "Submit Documents",
      description: "Submit application with all supporting documents before deadline"
    },
    {
      step: 5,
      title: "Verification",
      description: "Committee verifies documents and eligibility of all applicants"
    },
    {
      step: 6,
      title: "Selection & Approval",
      description: "Scholarship committee reviews and approves eligible candidates"
    },
    {
      step: 7,
      title: "Disbursement",
      description: "Scholarship amount credited or adjusted in fee structure"
    }
  ];

  const requiredDocuments = [
    "Scholarship application form (duly filled)",
    "Latest passport size photographs (2 copies)",
    "Copy of 10th and 12th mark sheets",
    "Current semester/year fee receipt",
    "Income certificate (for need-based scholarships)",
    "Caste certificate (for SC/ST/OBC scholarships)",
    "Domicile certificate",
    "Bank account passbook first page copy",
    "Aadhar card copy",
    "Previous scholarship receipt (if applicable)"
  ];

  const importantDates = [
    { event: "Scholarship Portal Opens", date: "July 1, 2025" },
    { event: "Last Date for Application", date: "August 31, 2025" },
    { event: "Document Verification", date: "September 1-15, 2025" },
    { event: "Merit List Declaration", date: "September 30, 2025" },
    { event: "Scholarship Disbursement", date: "October 2025 onwards" }
  ];

  const faqs = [
    {
      question: "Can I apply for multiple scholarships?",
      answer: "Yes, you can apply for multiple scholarships if you meet the eligibility criteria. However, you will be awarded only one scholarship - whichever offers maximum benefit. Government and institutional scholarships cannot be combined."
    },
    {
      question: "When will I receive the scholarship amount?",
      answer: "Merit-based scholarships are typically adjusted in the fee structure at the time of admission or semester fee payment. Government scholarships are disbursed as per government timelines, usually after document verification is complete."
    },
    {
      question: "Will the scholarship continue for all years?",
      answer: "Merit scholarships for 90%+ students continue if you maintain 75% marks annually. Other scholarships are reviewed yearly based on academic performance and eligibility criteria."
    },
    {
      question: "What happens if I don't maintain the required percentage?",
      answer: "If your marks fall below the required percentage, the scholarship may be discontinued from the next academic year. However, you can reapply if you improve your performance."
    },
    {
      question: "Is there a scholarship for sibling students?",
      answer: "Yes, if two or more siblings are studying at GIPS simultaneously, a 10% fee concession is provided to one of the siblings (the one with higher fees pays full, others get 10% off)."
    },
    {
      question: "How do I apply for government scholarships?",
      answer: "For government scholarships, you need to apply through the National Scholarship Portal (scholarships.gov.in) and also submit application at GIPS admission office with all required documents for institutional processing."
    }
  ];

  const externalScholarships = [
    {
      name: "PM Scholarship Scheme",
      provider: "Government of India",
      amount: "₹2,000 - ₹3,000 per month",
      link: "www.ksb.gov.in"
    },
    {
      name: "UGC Scholarships",
      provider: "University Grants Commission",
      amount: "Variable",
      link: "www.ugc.ac.in"
    },
    {
      name: "AICTE Pragati Scholarship",
      provider: "AICTE (For Girls)",
      amount: "₹50,000 per year",
      link: "www.aicte-india.org"
    },
    {
      name: "State Government Schemes",
      provider: "Uttarakhand Government",
      amount: "As per state norms",
      link: "www.ukpolicedp.in"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 mt-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
              <Award className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">Scholarships at GIPS</h1>
          <p className="text-2xl text-yellow-100 max-w-4xl mx-auto leading-relaxed">
            Empowering Dreams Through Financial Support - Making Quality Education Accessible
          </p>
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
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('types')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'types'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Scholarship Types
            </button>
            <button
              onClick={() => setActiveTab('apply')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'apply'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              How to Apply
            </button>
            <button
              onClick={() => setActiveTab('faqs')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'faqs'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
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
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-orange-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Scholarship Program at GIPS</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  At Garhwal Institute of Paramedical Sciences, we believe that financial constraints should 
                  never be a barrier to quality education. Our comprehensive scholarship program is designed 
                  to support meritorious and deserving students, enabling them to pursue their dreams in the 
                  healthcare sector without financial burden.
                </p>
                <p>
                  GIPS provides a wide range of scholarships including merit-based awards for academic excellence, 
                  government scholarships for reserved categories, need-based financial aid for economically weaker 
                  students, and special scholarships for various categories including sports achievers, girls education, 
                  and students with disabilities.
                </p>
                <p>
                  Our scholarship committee carefully reviews each application to ensure that deserving candidates 
                  receive the support they need. We are proud that over 40% of our students benefit from various 
                  scholarship schemes, making education accessible and affordable for all.
                </p>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">General Eligibility Criteria</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {eligibilityCriteria.map((criteria, index) => {
                  const IconComponent = criteria.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white mb-4">
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

            {/* Important Dates */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-10 text-white mb-12">
              <div className="flex items-center justify-center mb-8">
                <Calendar className="w-10 h-10 mr-4" />
                <h2 className="text-4xl font-bold">Important Dates 2025</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {importantDates.map((item, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-md rounded-xl p-5 border border-white/30">
                    <h4 className="font-bold text-lg mb-2">{item.event}</h4>
                    <p className="text-blue-100">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* External Scholarships */}
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">External Scholarship Opportunities</h2>
              <p className="text-gray-700 mb-6">
                Apart from institutional scholarships, students can also apply for various government and private scholarships:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {externalScholarships.map((scholarship, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 transition-all">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{scholarship.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{scholarship.provider}</p>
                    <p className="text-orange-600 font-semibold mb-3">{scholarship.amount}</p>
                    <a href={`https://${scholarship.link}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      {scholarship.link} →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Types Tab */}
        {activeTab === 'types' && (
          <div className="space-y-8">
            {scholarshipTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <div key={type.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className={`bg-gradient-to-r ${type.color} p-8 text-white`}>
                    <div className="flex items-center">
                      <span className="text-6xl mr-6">{type.emoji}</span>
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{type.title}</h3>
                        <p className="text-lg opacity-90">{type.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      {type.scholarships.map((scholarship, index) => (
                        <div key={index} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-400 transition-all">
                          <h4 className="text-2xl font-bold text-gray-800 mb-3">{scholarship.name}</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm font-semibold text-gray-600 mb-1">Eligibility</p>
                              <p className="text-gray-800">{scholarship.eligibility}</p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-600 mb-1">Amount/Benefit</p>
                              <p className="text-green-600 font-bold">{scholarship.amount}</p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-600 mb-1">Additional Benefits</p>
                              <p className="text-gray-800">{scholarship.benefits}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Apply Tab */}
        {activeTab === 'apply' && (
          <div>
            {/* Application Process */}
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-purple-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Scholarship Application Process</h2>
              <div className="space-y-6">
                {applicationProcess.map((process, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-6 flex-shrink-0">
                      {process.step}
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">{process.title}</h4>
                      <p className="text-gray-700 text-lg">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-xl p-10">
              <div className="flex items-center mb-8">
                <FileText className="w-10 h-10 text-orange-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-800">Required Documents</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-md border-l-4 border-orange-500">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-white border-l-4 border-red-500 p-4 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Important:</strong> All documents must be self-attested. Original documents will be verified at the time of interview. Incomplete applications will be rejected.
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
                  <div key={index} className="border-l-4 border-orange-500 bg-orange-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h4>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mt-0 text-center">
          <Gift className="w-16 h-16 text-orange-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Need Help with Scholarship Application?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact our scholarship cell for any queries or assistance with your application.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center bg-orange-50 rounded-lg px-6 py-3">
              <Mail className="w-6 h-6 text-orange-600 mr-3" />
              <span className="text-gray-700 font-semibold">scholarships@gips.edu.in</span>
            </div>
            <div className="flex items-center bg-orange-50 rounded-lg px-6 py-3">
              <Download className="w-6 h-6 text-orange-600 mr-3" />
              <span className="text-gray-700 font-semibold">Download Application Form</span>
            </div>
          </div>
          <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
            Apply for Scholarship
          </button>
        </div>
      </div>
    </div>
  );
}