"use client"
import { useState } from 'react';
import { Shield, AlertTriangle, Phone, Mail, Users, FileText, CheckCircle, XCircle, Eye, Lock, Gavel, Bell } from 'lucide-react';

export default function AntiRagging() {
  const [showReportForm, setShowReportForm] = useState(false);

  const whatIsRagging = [
    "Any act causing physical or psychological harm or apprehension",
    "Teasing, abusing, or playing practical jokes on new students",
    "Asking students to do any act which they will not do in ordinary course",
    "Any form of verbal abuse, indecent gestures, or obscene behavior",
    "Exploitation of services from juniors or new students",
    "Financial extortion or forceful expenditure"
  ];

  const committeeMembers = [
    { role: "Chairperson", name: "Dr. Rajesh Kumar", designation: "Director, GIPS", contact: "+91-XXXX-XXXXXX" },
    { role: "Faculty Representative", name: "Prof. Meena Sharma", designation: "Dean, Student Affairs", contact: "+91-XXXX-XXXXXX" },
    { role: "Non-Teaching Staff", name: "Mr. Vijay Singh", designation: "Administrative Officer", contact: "+91-XXXX-XXXXXX" },
    { role: "Parent Representative", name: "Mrs. Anjali Verma", designation: "Parent Member", contact: "+91-XXXX-XXXXXX" },
    { role: "Student Representative", name: "Rahul Patel", designation: "Student Council President", contact: "+91-XXXX-XXXXXX" },
    { role: "NGO Representative", name: "Mr. Arun Desai", designation: "Social Activist", contact: "+91-XXXX-XXXXXX" }
  ];

  const punishments = [
    { severity: "Minor", actions: ["Warning", "Written apology", "Community service", "Suspension from classes"] },
    { severity: "Major", actions: ["Suspension from institution", "Debarring from exams", "Withholding scholarships", "Expulsion from institution"] },
    { severity: "Criminal", actions: ["FIR with police", "Criminal prosecution", "Imprisonment", "Heavy fines as per law"] }
  ];

  const preventiveMeasures = [
    {
      icon: Users,
      title: "Orientation Programs",
      description: "Mandatory sessions for all new students about anti-ragging policies"
    },
    {
      icon: Eye,
      title: "CCTV Surveillance",
      description: "24/7 monitoring of all campus areas including hostels and common spaces"
    },
    {
      icon: Bell,
      title: "Anonymous Reporting",
      description: "Multiple channels for confidential complaint submission"
    },
    {
      icon: Shield,
      title: "Regular Inspections",
      description: "Surprise checks in hostels and campus areas by committee members"
    },
    {
      icon: FileText,
      title: "Affidavit Submission",
      description: "Mandatory anti-ragging affidavit from students and parents"
    },
    {
      icon: Lock,
      title: "Strict Action",
      description: "Zero-tolerance policy with immediate disciplinary measures"
    }
  ];

  const reportingChannels = [
    { icon: Phone, title: "24/7 Helpline", value: "1800-XXX-XXXX (Toll-Free)", color: "text-red-600" },
    { icon: Phone, title: "Emergency Contact", value: "+91-XXXX-XXXXXX", color: "text-orange-600" },
    { icon: Mail, title: "Email", value: "antiragging@gips.edu.in", color: "text-blue-600" },
    { icon: Mail, title: "UGC Helpline", value: "helpline@antiragging.in", color: "text-purple-600" }
  ];

  const steps = [
    {
      step: 1,
      title: "Report Immediately",
      description: "Contact helpline, email, or approach committee members directly"
    },
    {
      step: 2,
      title: "Confidentiality Assured",
      description: "Your identity will be protected throughout the process"
    },
    {
      step: 3,
      title: "Investigation",
      description: "Committee investigates the complaint thoroughly and fairly"
    },
    {
      step: 4,
      title: "Action Taken",
      description: "Strict disciplinary action against guilty parties within 24 hours"
    }
  ];

  const faqs = [
    {
      question: "What if I witness ragging but I'm not a victim?",
      answer: "You should still report it. Witnesses play a crucial role in eliminating ragging. Your report will be kept confidential."
    },
    {
      question: "Will my identity be revealed if I report?",
      answer: "No. The committee ensures complete confidentiality and your identity will be protected throughout the investigation."
    },
    {
      question: "Can ragging happen online or on social media?",
      answer: "Yes. Cyber-ragging through social media, messages, or online platforms is equally punishable under anti-ragging laws."
    },
    {
      question: "What is the UGC Anti-Ragging Helpline?",
      answer: "UGC has a 24/7 toll-free helpline (1800-180-5522) where students can report ragging incidents anonymously."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 mt-30">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-700 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-[#E56F40] bg-opacity-20 p-4 rounded-full backdrop-blur-sm">
              <Shield className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 text-center">Anti-Ragging Policy</h1>
          <div className=" bg-opacity-20 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <p className="text-2xl text-center leading-relaxed">
              <strong>ZERO TOLERANCE</strong> - GIPS is committed to maintaining a safe, respectful, 
              and ragging-free environment for all students
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowReportForm(!showReportForm)}
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-xl hover:bg-red-50 transition-all shadow-2xl flex items-center"
            >
              <AlertTriangle className="w-6 h-6 mr-2" />
              Report Ragging Incident
            </button>
          </div>
        </div>
      </div>

      {/* Report Form Modal */}
      {showReportForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-gray-800 flex items-center">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                Report Ragging Incident
              </h3>
              <button onClick={() => setShowReportForm(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                ✕
              </button>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg font-semibold text-red-600">
                Your report will be treated with utmost confidentiality
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="font-semibold mb-2">Multiple Ways to Report:</p>
                <ul className="space-y-2">
                  {reportingChannels.map((channel, idx) => (
                    <li key={idx} className="flex items-center">
                      <channel.icon className={`w-5 h-5 ${channel.color} mr-3`} />
                      <span><strong>{channel.title}:</strong> {channel.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="font-semibold mb-2">Online Complaint Portal:</p>
                <p>Visit: <a href="https://www.antiragging.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.antiragging.in</a></p>
                <p className="text-sm mt-2">Register your complaint on the UGC-approved portal for immediate action</p>
              </div>
              <button
                onClick={() => setShowReportForm(false)}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-red-600">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Commitment</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              GIPS follows a strict <strong>zero-tolerance policy</strong> towards ragging in any form. 
              The institution is committed to maintaining a safe, respectful, and inclusive environment 
              for all students, as mandated by the University Grants Commission (UGC) and Supreme Court of India.
            </p>
            <p>
              An Anti-Ragging Committee and a dedicated helpline are in place to address complaints 
              promptly and ensure preventive measures are followed. Awareness programs and orientation 
              sessions are organized regularly to educate students about their rights and responsibilities.
            </p>
            <p>
              Every student is encouraged to report any incident of ragging, and <strong>strict disciplinary 
              actions</strong> are taken against those found guilty, ensuring a campus free from fear and harassment.
            </p>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl shadow-xl p-10 mb-12 text-white">
          <div className="flex items-center justify-center mb-8">
            <Phone className="w-10 h-10 mr-4" />
            <h2 className="text-4xl font-bold">Emergency Contacts</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reportingChannels.map((channel, index) => {
              const IconComponent = channel.icon;
              return (
                <div key={index} className="bg-gradient-to-r from-red-600 to-orange-600  shadow-xl  mb-12   bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <IconComponent className="w-10 h-10 mx-auto mb-3" />
                  <h4 className="font-bold text-xl mb-2">{channel.title}</h4>
                  <p className="text-2xl font-bold">{channel.value}</p>      
                </div>
              );
            })}
          </div>
          <div className="mt-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl shadow-xl mb-12 bg-opacity-20 backdrop-blur-sm  p-6 text-center">
            <p className="text-xl font-semibold mb-2">National Anti-Ragging Helpline (UGC)</p>
            <p className="text-3xl font-bold">1800-180-5522 (24/7 Toll-Free)</p>
            <p className="text-sm mt-2 opacity-90">You can also report online at www.antiragging.in</p>
          </div>
        </div>

        {/* What is Ragging */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-10 h-10 text-orange-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-800">What Constitutes Ragging?</h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            As per UGC Regulations, ragging includes any of the following acts:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {whatIsRagging.map((item, index) => (
              <div key={index} className="flex items-start bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                <XCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Preventive Measures */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Preventive Measures at GIPS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preventiveMeasures.map((measure, index) => {
              const IconComponent = measure.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-white mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{measure.title}</h3>
                  <p className="text-gray-600">{measure.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reporting Process */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">How to Report Ragging</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Anti-Ragging Committee */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <div className="flex items-center mb-8">
            <Users className="w-10 h-10 text-purple-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-800">Anti-Ragging Committee Members</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMembers.map((member, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500 transition-all">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl mb-4">
                  {member.name.charAt(0)}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-1">{member.role}</h4>
                <p className="text-gray-700 font-semibold mb-1">{member.name}</p>
                <p className="text-sm text-gray-600 mb-2">{member.designation}</p>
                <p className="text-sm text-purple-600 font-semibold">{member.contact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Punishments */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl shadow-xl p-10 mb-12 text-white">
          <div className="flex items-center justify-center mb-8">
            <Gavel className="w-10 h-10 mr-4" />
            <h2 className="text-4xl font-bold">Consequences of Ragging</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {punishments.map((punishment, index) => (
              <div key={index} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-2xl font-bold mb-4">{punishment.severity} Offense</h4>
                <ul className="space-y-2">
                  {punishment.actions.map((action, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-l-4 border-red-500 bg-gray-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h4>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Links */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Important Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-3">UGC Anti-Ragging Portal</h4>
              <p className="text-gray-700 mb-3">Register complaints and submit mandatory affidavits</p>
              <a href="https://www.antiragging.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                www.antiragging.in →
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-3">UGC Regulations</h4>
              <p className="text-gray-700 mb-3">Read the complete UGC regulations on curbing ragging</p>
              <a href="https://www.ugc.ac.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                UGC Official Website →
              </a>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center border-t-4 border-green-600">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Together We Can End Ragging</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
            Every student deserves a safe and supportive environment. If you see something, say something. 
            Your courage to report can save someone from harassment and trauma.
          </p>
          <p className="text-2xl font-bold text-red-600">
            Remember: Ragging is a CRIMINAL OFFENSE punishable by law
          </p>
        </div>
      </div>
    </div>
  );
}