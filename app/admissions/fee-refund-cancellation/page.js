"use client";
import { useState } from "react";
import {
  AlertCircle,
  ClipboardCheck,
  FileText,
  XCircle,
  Calendar,
  Mail,
  CheckCircle,
  Clock,
  FileSignature,
  Info,
  ShieldCheck,
} from "lucide-react";

export default function FeeRefund() {
  const [activeTab, setActiveTab] = useState("policy");

  const refundRules = [
    {
      title: "Admission Fees",
      description:
        "Admission fees are strictly non-refundable under any circumstances. This fee covers seat reservation, registration, and administrative processing.",
      icon: XCircle,
      color: "from-red-500 to-red-700",
    },
    {
      title: "Tuition Fees",
      description:
        "Tuition fee refunds may be considered only if a student withdraws before the commencement of classes. Once classes begin, tuition fees are non-refundable.",
      icon: ClipboardCheck,
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Hostel & Transport Fees",
      description:
        "Hostel and transport fees are refundable only if cancellation is made before availing the facility or within the notified period.",
      icon: Clock,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Scholarship Students",
      description:
        "Students admitted under scholarship schemes are not eligible for fee refunds. If withdrawn, full course fees become payable as per the policy.",
      icon: ShieldCheck,
      color: "from-amber-500 to-orange-600",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Submit Refund Request",
      description:
        "The student must submit a written application to the Accounts Office along with supporting documents and reason for withdrawal.",
    },
    {
      step: 2,
      title: "Verification by Administration",
      description:
        "The Accounts Department verifies fee details and confirms student records with the Admission Cell.",
    },
    {
      step: 3,
      title: "Approval Process",
      description:
        "Refund requests are reviewed by the Principal and the Finance Committee before approval.",
    },
    {
      step: 4,
      title: "Refund Timeline",
      description:
        "Approved refunds are processed within 30 working days through bank transfer or cheque as per institute norms.",
    },
  ];

  const cancellationPoints = [
    "Cancellations must be requested in writing and signed by the student or guardian.",
    "No verbal or phone-based refund or cancellation requests are accepted.",
    "Seat cancellations after course commencement will result in forfeiture of the entire fee.",
    "GIPS reserves the right to modify refund timelines under special circumstances.",
  ];

  const faqs = [
    {
      question: "Can I get a refund if I withdraw before the session starts?",
      answer:
        "Yes, tuition fee refunds may be processed if the withdrawal is made before classes begin, subject to a written application and approval.",
    },
    {
      question: "Is the admission fee refundable?",
      answer:
        "No. Admission fees are completely non-refundable as they are used for administrative and seat reservation processes.",
    },
    {
      question: "What if my refund is delayed?",
      answer:
        "If your refund takes longer than 30 working days, please contact the Accounts Office with your application ID and payment details.",
    },
    {
      question: "Can I transfer my fee to another student?",
      answer:
        "No. Fee transfers or adjustments to another student’s account are not permitted under institute policy.",
    },
    {
      question: "How do I know if my refund has been approved?",
      answer:
        "Once your refund is approved, you will receive an email confirmation from accounts@gips.edu.in with transaction details.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 mt-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
              <FileText className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">Fee Refund & Cancellation Policy</h1>
          <p className="text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Clear, Transparent & Student-Friendly Refund Guidelines at GIPS
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-10 flex flex-wrap gap-3">
          {["policy", "process", "faqs"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab === "policy" && "Refund Policy"}
              {tab === "process" && "Refund Process"}
              {tab === "faqs" && "FAQs"}
            </button>
          ))}
        </div>

        {/* Refund Policy */}
        {activeTab === "policy" && (
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-green-600 mb-10">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                GIPS Fee Refund & Cancellation Policy
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Garhwal Institute of Paramedical Sciences (GIPS) ensures that all refund and
                cancellation requests are handled transparently in accordance with institutional
                policies. Students are advised to carefully read and understand the guidelines
                before making payments.
              </p>
              <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-lg mt-6">
                <AlertCircle className="w-5 h-5 text-green-600 inline mr-2" />
                <span className="text-gray-700">
                  <strong>Note:</strong> Admission fees are <b>strictly non-refundable</b> once paid.
                </span>
              </div>
            </div>

            {/* Refund Rules */}
            <div className="grid md:grid-cols-2 gap-6">
              {refundRules.map((rule, i) => {
                const Icon = rule.icon;
                return (
                  <div
                    key={i}
                    className="bg-white shadow-md p-6 rounded-xl border-t-4 border-green-500 hover:shadow-lg transition-all"
                  >
                    <div
                      className={`flex items-center mb-4 bg-gradient-to-r ${rule.color} text-white px-4 py-2 rounded-lg`}
                    >
                      <Icon className="w-6 h-6 mr-3" />
                      <h3 className="text-xl font-bold">{rule.title}</h3>
                    </div>
                    <p className="text-gray-700">{rule.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Refund Process */}
        {activeTab === "process" && (
          <div className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-blue-600">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
              Step-by-Step Refund Process
            </h2>
            <div className="space-y-8">
              {processSteps.map((s, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-2xl mr-6 flex-shrink-0">
                    {s.step}
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">{s.title}</h4>
                    <p className="text-gray-700 text-lg">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cancellation Notes */}
            <div className="mt-10 bg-red-50 border-l-4 border-red-600 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Cancellation Guidelines</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {cancellationPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* FAQs */}
        {activeTab === "faqs" && (
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border-l-4 border-green-600 bg-green-50 rounded-lg p-6"
                >
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mt-0 text-center">
          <Mail className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Need Help with Refund or Cancellation?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            For any refund-related assistance, please reach out to the Accounts Department.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center bg-green-50 rounded-lg px-6 py-3">
              <Mail className="w-6 h-6 text-green-600 mr-3" />
              <span className="text-gray-700 font-semibold">
                accounts@gips.edu.in
              </span>
            </div>
          </div>
          <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
            Apply for Refund
          </button>
        </div>
      </div>
    </div>
  );
}
