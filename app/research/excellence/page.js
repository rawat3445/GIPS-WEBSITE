"use client"
import React, { useState } from 'react';
import { ChevronDown, Brain, CheckCircle, Shield, FileText, Microscope, Users, Mail, Phone, MapPin } from 'lucide-react';

export default function CenterOfExcellence() {
  const [expandedCriteria, setExpandedCriteria] = useState(null);
  const [activeTab, setActiveTab] = useState('inclusion');

  const stats = [
    { number: '50+', text: 'Active Research Projects', icon: '🔬' },
    { number: '1000+', text: 'Study Participants', icon: '👥' },
    { number: '15', text: 'Years of Excellence', icon: '🏆' },
    { number: '100%', text: 'Patient Safety Priority', icon: '❤️' }
  ];

  const researchAreas = [
    { title: "Alzheimer's Disease", desc: 'Disease-modifying therapies', color: 'from-blue-500 to-blue-600' },
    { title: "Parkinson's Disease", desc: 'Neuroprotective interventions', color: 'from-purple-500 to-purple-600' },
    { title: 'Multiple Sclerosis', desc: 'Immunomodulatory therapies', color: 'from-pink-500 to-pink-600' },
    { title: 'Stroke Recovery', desc: 'Neuroplasticity enhancement', color: 'from-green-500 to-green-600' },
    { title: 'Epilepsy Management', desc: 'Seizure prediction tech', color: 'from-orange-500 to-orange-600' },
    { title: 'Chronic Pain', desc: 'Neuromodulation tech', color: 'from-red-500 to-red-600' }
  ];

  const teamMembers = [
    { role: 'Neuroscientists', icon: '🧬', desc: 'Basic & advanced research' },
    { role: 'Neurologists', icon: '⚕️', desc: 'Clinical experts' },
    { role: 'Neuroradiologists', icon: '🖼️', desc: 'Advanced brain imaging' },
    { role: 'Research Coordinators', icon: '📋', desc: 'Study operations' },
    { role: 'Data Scientists', icon: '📊', desc: 'Complex data analysis' },
    { role: 'Clinical Nurses', icon: '💉', desc: 'Patient care & monitoring' }
  ];

  const inclusionCriteria = [
    { title: 'Age Range', desc: '18-75 years old' },
    { title: 'Diagnosis', desc: 'Confirmed neurological condition' },
    { title: 'Cognitive Capacity', desc: 'Able to give informed consent' },
    { title: 'Stability', desc: 'Clinically stable for 4+ weeks' },
    { title: 'Medication', desc: 'Consistent regimen for 8+ weeks' },
    { title: 'Language', desc: 'Fluent in study language' },
  ];

  const exclusionCriteria = [
    { title: 'Medical Issues', desc: 'Uncontrolled hypertension or cardiac disease' },
    { title: 'Substance Use', desc: 'Active abuse within 12 months' },
    { title: 'Psychiatric', desc: 'Untreated mental illness' },
    { title: 'Pregnancy', desc: 'Pregnant or nursing status' },
    { title: 'MRI Issues', desc: 'Metal implants or claustrophobia' },
    { title: 'Drug Interactions', desc: 'Conflicting medications' },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen mt-0">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <Brain className="w-12 h-12 text-purple-500 animate-pulse" />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 bg-clip-text  bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400">
            Center of Excellence
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 font-light">Neuroscience Research & Innovation</p>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Pioneering breakthrough research in neurological disorders through ethical practices and cutting-edge clinical trials</p>
        </div>
      </header>

      <div className="relative">
        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">{stat.number}</div>
                    <p className="text-slate-300">{stat.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <CheckCircle className="w-10 h-10 text-green-500" />
                Participant Eligibility
              </h2>
              <p className="text-slate-400 text-lg">Strict criteria ensuring safety and research validity</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Inclusion */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-green-500/50 transition">
                  <h3 className="text-2xl font-bold text-green-400 mb-6">✓ Inclusion Criteria</h3>
                  <div className="space-y-4">
                    {inclusionCriteria.map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition">
                        <div className="text-green-500 font-bold">→</div>
                        <div>
                          <h4 className="font-semibold text-white">{item.title}</h4>
                          <p className="text-sm text-slate-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Exclusion */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-red-500/50 transition">
                  <h3 className="text-2xl font-bold text-red-400 mb-6">✗ Exclusion Criteria</h3>
                  <div className="space-y-4">
                    {exclusionCriteria.map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition">
                        <div className="text-red-500 font-bold">×</div>
                        <div>
                          <h4 className="font-semibold text-white">{item.title}</h4>
                          <p className="text-sm text-slate-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ethics & Compliance */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Shield className="w-10 h-10 text-blue-500" />
                Ethics & Compliance
              </h2>
              <p className="text-slate-400 text-lg">Rigorous oversight ensuring participant safety and rights</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-blue-400 mb-6">IRB Oversight</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex gap-3"><span className="text-blue-500">✓</span> Protocol Review & Approval</li>
                    <li className="flex gap-3"><span className="text-blue-500">✓</span> Informed Consent Validation</li>
                    <li className="flex gap-3"><span className="text-blue-500">✓</span> Risk Assessment & Monitoring</li>
                    <li className="flex gap-3"><span className="text-blue-500">✓</span> Adverse Event Investigation</li>
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-amber-400 mb-6">🏅 Certifications</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex gap-3"><span className="text-amber-500">✓</span> AAHRPP Accredited</li>
                    <li className="flex gap-3"><span className="text-amber-500">✓</span> ICH-GCP Compliant</li>
                    <li className="flex gap-3"><span className="text-amber-500">✓</span> FDA Registered</li>
                    <li className="flex gap-3"><span className="text-amber-500">✓</span> HIPAA Compliant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Documentation */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <FileText className="w-10 h-10 text-purple-500" />
                Patient Documentation
              </h2>
              <p className="text-slate-400 text-lg">Transparent documentation and full access to your rights</p>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: '📄', title: 'Informed Consent', desc: 'Detailed study information' },
                    { icon: '🔒', title: 'Privacy Notice', desc: 'Data protection policies' },
                    { icon: '🆘', title: 'Safety Info', desc: 'Emergency protocols' },
                    { icon: '⚖️', title: 'Bill of Rights', desc: 'Participant protections' },
                    { icon: '📊', title: 'Results Summary', desc: 'Study findings' },
                    { icon: '📑', title: 'Medical Records', desc: 'Full access granted' },
                  ].map((doc, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition">
                      <div className="text-2xl">{doc.icon}</div>
                      <div>
                        <h4 className="font-semibold text-white">{doc.title}</h4>
                        <p className="text-sm text-slate-400">{doc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Trials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Microscope className="w-10 h-10 text-cyan-500" />
                Research Areas
              </h2>
              <p className="text-slate-400 text-lg">Cutting-edge studies across multiple neurological disciplines</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-20 transition duration-500`}></div>
                  <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                      <p className="text-slate-400">{area.desc}</p>
                    </div>
                    <div className={`mt-4 w-1 h-1 rounded-full bg-gradient-to-r ${area.color}`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trial Phases */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Clinical Trial Phases</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { phase: 'Phase I', participants: '20-100', focus: 'Safety Assessment' },
                  { phase: 'Phase II', participants: '100-300', focus: 'Efficacy Evaluation' },
                  { phase: 'Phase III', participants: '1000-3000', focus: 'Confirmation & Monitoring' },
                  { phase: 'Phase IV', participants: 'Thousands', focus: 'Long-term Safety' },
                ].map((trial, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition"></div>
                    <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-blue-400 mb-2">{trial.phase}</div>
                      <p className="text-sm text-slate-400 mb-3">Participants: {trial.participants}</p>
                      <p className="text-slate-300">{trial.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Team */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Users className="w-10 h-10 text-green-500" />
                Our Expert Team
              </h2>
              <p className="text-slate-400 text-lg">Multidisciplinary professionals dedicated to excellence</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 text-center hover:border-green-500/50 transition">
                    <div className="text-5xl mb-4">{member.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.role}</h3>
                    <p className="text-slate-400">{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
                <p className="text-slate-300 text-lg mb-8">Join our groundbreaking research and help advance neurological treatment</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:research@centerofexcellence.org" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-white hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105">
                    Get in Touch
                  </a>
                  <button className="px-8 py-4 bg-slate-700/50 hover:bg-slate-700/75 rounded-lg font-bold text-white transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center md:text-left">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-5 h-5 text-purple-500" /> Email
                </h3>
                <a href="mailto:research@centerofexcellence.org" className="text-slate-400 hover:text-purple-400 transition">
                  research@centerofexcellence.org
                </a>
              </div>
              <div className="text-center">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2 justify-center">
                  <Phone className="w-5 h-5 text-purple-500" /> Phone
                </h3>
                <a href="tel:+1-800-7373427" className="text-slate-400 hover:text-purple-400 transition">
                  1-800-RESEARCH
                </a>
              </div>
              <div className="text-center md:text-right">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2 justify-center md:justify-end">
                  <MapPin className="w-5 h-5 text-purple-500" /> Hours
                </h3>
                <p className="text-slate-400">Mon-Fri, 8:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="border-t border-slate-700/50 pt-8 text-center text-slate-400">
              <p>&copy; 2024 Center of Excellence - Neuroscience Research. All rights reserved.</p>
              <p className="mt-0 text-sm">Advancing neurological health through ethical, innovative research.</p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}