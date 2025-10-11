"use client";
import { useState } from "react";
import {
  CreditCard,
  Banknote,
  Building,
  FileText,
  CheckCircle,
  AlertCircle,
  Calendar,
  Mail,
  Info,
  Download,
  Receipt,
} from "lucide-react";

export default function FeePayment() {
  const [activeTab, setActiveTab] = useState("overview");

  const paymentModes = [
    {
      title: "Online Payment",
      description:
        "Students can make online payments through the official GIPS Fee Portal using Debit/Credit Cards, Net Banking, or UPI.",
      details: [
        "Go to the official payment link: https://payments.gips.edu.in",
        "Select your course and semester",
        "Verify student details and amount",
        "Proceed with secure online payment",
      ],
      icon: CreditCard,
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Bank Transfer / NEFT",
      description:
        "You may directly transfer fees to the official GIPS account via NEFT or IMPS. Please ensure to mention your Student ID in the transaction remarks.",
      details: [
        "Bank Name: State Bank of India",
        "Account Name: Garhwal Institute of Paramedical Sciences",
        "Account Number: 123456789012",
        "IFSC Code: SBIN000XXXX",
        "Branch: Dehradun",
      ],
      icon: Banknote,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "In-Person Payment",
      description:
        "Students can also pay directly at the GIPS Accounts Office via Cash, Demand Draft, or POS Machine.",
      details: [
        "Timing: Monday to Saturday (10:00 AM – 3:00 PM)",
        "Location: Accounts Section, Administrative Block",
        "Demand Draft in favor of ‘Garhwal Institute of Paramedical Sciences’, payable at Dehradun",
      ],
      icon: Building,
      color: "from-orange-500 to-red-600",
    },
  ];

  const feeGuidelines = [
    {
      title: "Tuition Fees",
      content:
        "Tuition fees are payable semester-wise or annually, depending on your course. All payments must be made before the last due date to avoid late fines.",
    },
    {
      title: "Admission Fees",
      content:
        "Admission fees are one-time and non-refundable. It covers registration, ID issuance, and student database entry.",
    },
    {
      title: "Hostel Fees",
      content:
        "Students availing hostel accommodation must pay hostel fees at the beginning of each academic year. Hostel fees are also non-refundable once the session begins.",
    },
    {
      title: "Transport Fees",
      content:
        "Transport facility users must submit transport fees at the start of the session. Charges depend on the distance and chosen route.",
    },
    {
      title: "Late Fee Policy",
      content:
        "Payments made after the due date are subject to a late fee as per institutional rules. Continued non-payment may result in suspension from classes or exam restrictions.",
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Login to Fee Portal",
      description:
        "Visit the official GIPS Fee Payment portal and login using your registered student ID.",
    },
    {
      step: 2,
      title: "Select Payment Type",
      description:
        "Choose the type of fee you wish to pay – Admission, Tuition, Hostel, or Transport.",
    },
    {
      step: 3,
      title: "Verify Details",
      description:
        "Ensure all student and course details are correct before proceeding to payment.",
    },
    {
      step: 4,
      title: "Make Payment",
      description:
        "Complete the transaction using Debit/Credit Card, Net Banking, or UPI method.",
    },
    {
      step: 5,
      title: "Download Receipt",
      description:
        "Once successful, download and save the payment receipt for your records.",
    },
  ];

  const faqs = [
    {
      question: "Can I pay my fees in installments?",
      answer:
        "Yes, installment options are available for select courses. Contact the accounts office for approval before the due date.",
    },
    {
      question: "Is the admission fee refundable?",
      answer:
        "No, the admission fee is strictly non-refundable as it covers the seat reservation and registration process.",
    },
    {
      question: "What if the payment fails during an online transaction?",
      answer:
        "If your transaction fails but the amount is debited, it will be automatically refunded within 5–7 working days. For issues, contact accounts@gips.edu.in.",
    },
    {
      question: "Can I pay through someone else’s bank account?",
      answer:
        "Yes, you can pay using any valid bank account, but ensure your Student ID and Name are clearly mentioned in the remarks.",
    },
    {
      question: "Will I receive a physical receipt?",
      answer:
        "Yes, you can collect the printed fee receipt from the Accounts Office or download it from the online portal.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 mt-15">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
              <Receipt className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">Fee Payment Portal</h1>
          <p className="text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Secure, Simple & Transparent Fee Payment System for GIPS Students
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-10 flex flex-wrap gap-3">
          {["overview", "modes", "process", "faqs"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab === "overview" && "Overview"}
              {tab === "modes" && "Payment Modes"}
              {tab === "process" && "Payment Process"}
              {tab === "faqs" && "FAQs"}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-green-600 mb-10">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Overview of Fee Payment at GIPS
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Garhwal Institute of Paramedical Sciences (GIPS) ensures a
                seamless and transparent fee payment experience for all
                students. Multiple payment modes are available, including secure
                online options and offline facilities through our Accounts
                Department.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Fee payments are an important part of the academic process.
                Students are advised to clear their dues within the prescribed
                dates to avoid any inconvenience during examinations or
                registration.
              </p>
              <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded-lg mt-6">
                <AlertCircle className="w-5 h-5 text-green-600 inline mr-2" />
                <span className="text-gray-700">
                  <strong>Note:</strong> Admission fees are non-refundable under
                  any circumstances.
                </span>
              </div>
            </div>

            {/* Fee Guidelines */}
            <div className="grid md:grid-cols-2 gap-6">
              {feeGuidelines.map((item, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md p-6 rounded-xl border-t-4 border-green-500 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Payment Modes */}
        {activeTab === "modes" && (
          <div className="space-y-8">
            {paymentModes.map((mode, i) => {
              const Icon = mode.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border"
                >
                  <div
                    className={`bg-gradient-to-r ${mode.color} text-white p-8 flex items-center`}
                  >
                    <Icon className="w-12 h-12 mr-6" />
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{mode.title}</h3>
                      <p className="text-lg opacity-90">{mode.description}</p>
                    </div>
                  </div>
                  <div className="p-8 bg-gray-50">
                    <ul className="space-y-3">
                      {mode.details.map((d, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Payment Process */}
        {activeTab === "process" && (
          <div className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-blue-600">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
              Step-by-Step Fee Payment Process
            </h2>
            <div className="space-y-8">
              {steps.map((s, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-2xl mr-6 flex-shrink-0">
                    {s.step}
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">
                      {s.title}
                    </h4>
                    <p className="text-gray-700 text-lg">{s.description}</p>
                  </div>
                </div>
              ))}
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
        <div className="bg-white rounded-2xl shadow-xl p-12 mt-12 text-center">
          <Mail className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Need Help with Fee Payment?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            For any payment-related queries, contact the Accounts Department at
            GIPS.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center bg-green-50 rounded-lg px-6 py-3">
              <Mail className="w-6 h-6 text-green-600 mr-3" />
              <span className="text-gray-700 font-semibold">
                accounts@gips.edu.in
              </span>
            </div>
            <div className="flex items-center bg-green-50 rounded-lg px-6 py-3">
              <Download className="w-6 h-6 text-green-600 mr-3" />
              <span className="text-gray-700 font-semibold">
                Download Payment Receipt
              </span>
            </div>
          </div>
          <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
