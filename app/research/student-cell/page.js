"use client"
import React, { useState } from 'react';
import { ChevronDown, BookOpen, CheckCircle, ClipboardCheck, Presentation, Search, Filter } from 'lucide-react';

export default function StudentResearchCell() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Neuroprotective Mechanisms in Alzheimer's Disease",
      department: 'Neuroscience',
      students: ['Sarah Khan', 'Rajesh Patel'],
      supervisor: 'Dr. Emily Richardson',
      description: 'Investigation of novel compounds targeting amyloid-beta pathways to prevent neurodegeneration',
      status: 'Completed',
      review: 'Approved',
      ethicsStatus: 'Approved',
      presentationDate: '2024-11-15',
      details: {
        abstract: 'This study focuses on identifying and testing neuroprotective compounds that can inhibit amyloid-beta aggregation, a key pathological hallmark of Alzheimer\'s disease. Through in vitro and computational modeling approaches, we evaluated 15 candidate compounds.',
        methodology: 'Cell culture studies, Western blotting, Immunofluorescence microscopy, Molecular docking studies',
        findings: 'Three compounds demonstrated significant neuroprotection with minimal toxicity',
        impact: 'Potential therapeutic targets for future drug development'
      },
      reviewDetails: 'Peer review completed by departmental panel. Strengths: Novel approach to compound screening. Recommendations: Validate findings with animal models.',
      ethicsDetails: 'Full IRB review completed. Approval granted for all human cell line studies and data handling protocols. Compliance: HIPAA and institutional guidelines maintained.',
      presentationDetails: 'Final oral presentation scheduled. Format: 20-minute presentation + 10-minute Q&A. Location: Auditorium Hall, Room 301'
    },
    {
      id: 2,
      title: 'Machine Learning Models for Early Stroke Detection',
      department: 'Biomedical Engineering',
      students: ['Asha Verma', 'Michael Chen', 'Lisa Rodriguez'],
      supervisor: 'Prof. David Kumar',
      description: 'Development of AI algorithms to predict stroke risk using patient vital signs and imaging data',
      status: 'In Progress',
      review: 'Under Review',
      ethicsStatus: 'Approved',
      presentationDate: null,
      details: {
        abstract: 'Integration of machine learning techniques with clinical imaging datasets to create predictive models for early stroke detection. The project aims to improve prediction accuracy by 25% compared to existing methodologies.',
        methodology: 'Data preprocessing, Feature engineering, Neural network development, Cross-validation analysis',
        findings: 'Model achieved 92% accuracy on test dataset with sensitivity of 89%',
        impact: 'Potential to reduce time-to-treatment in emergency departments'
      },
      reviewDetails: 'Currently under expert panel review. Initial feedback positive. Expected completion: December 2024.',
      ethicsDetails: 'IRB approval obtained for use of de-identified patient data. Data security protocols implemented with encryption and access controls.',
      presentationDetails: 'Preliminary presentation completed in October. Final presentation scheduled for January 2025.'
    },
    {
      id: 3,
      title: 'Biomaterial Development for Tissue Engineering',
      department: 'Biomedical Engineering',
      students: ['James Wilson', 'Nina Patel'],
      supervisor: 'Dr. Angela Martinez',
      description: 'Engineering of biodegradable scaffold materials for neural tissue regeneration',
      status: 'Completed',
      review: 'Approved',
      ethicsStatus: 'Approved',
      presentationDate: '2024-10-20',
      details: {
        abstract: 'Design and characterization of novel poly(lactic-co-glycolic acid) (PLGA) scaffolds with embedded bioactive signals to promote neural cell differentiation and axonal growth.',
        methodology: 'Electrospinning, Scanning electron microscopy, Cell viability assays, Gene expression analysis',
        findings: 'Scaffolds promoted 85% neural differentiation efficiency and supported axonal outgrowth beyond 500 micrometers',
        impact: 'Applicable to spinal cord injury and peripheral nerve repair therapies'
      },
      reviewDetails: 'Comprehensive review completed. Innovative approach to scaffold design praised. Minor revisions requested on statistical analysis.',
      ethicsDetails: 'Full IRB review completed. Animal cell cultures approved. Biosafety protocols followed. Waste disposal procedures verified.',
      presentationDetails: 'Successfully presented on October 20, 2024. Excellent audience engagement with 15+ questions from faculty.'
    },
    {
      id: 4,
      title: 'Genetic Risk Factors in Parkinson\'s Disease',
      department: 'Genetics',
      students: ['Robert Zhang', 'Priya Sharma'],
      supervisor: 'Dr. Thomas Mueller',
      description: 'Genome-wide association study identifying novel genetic variants associated with Parkinson\'s disease susceptibility',
      status: 'In Progress',
      review: 'Approved',
      ethicsStatus: 'Pending',
      presentationDate: null,
      details: {
        abstract: 'Large-scale genetic analysis involving 5000+ patients with Parkinson\'s disease to identify novel genomic regions contributing to disease risk and progression.',
        methodology: 'DNA extraction and genotyping, Statistical analysis, Bioinformatics pathway analysis, Validation studies',
        findings: 'Identified 3 novel genetic loci with significant association to disease risk',
        impact: 'Could inform personalized medicine approaches and drug target identification'
      },
      reviewDetails: 'Research methodology approved by committee. Study design complies with all standards. Longitudinal tracking approved.',
      ethicsDetails: 'Ethics review in progress. Awaiting final committee decision on data handling procedures. Expected approval: December 2024.',
      presentationDetails: 'Preliminary findings seminar scheduled for January 2025. Full presentation after ethics approval.'
    },
    {
      id: 5,
      title: 'Immunotherapy Strategies for Brain Tumors',
      department: 'Oncology Research',
      students: ['Victoria Brooks', 'Hassan Al-Rahman', 'Emma Thompson'],
      supervisor: 'Dr. Susan Park',
      description: 'Evaluation of checkpoint inhibitor combinations for treatment of glioblastoma multiforme',
      status: 'Completed',
      review: 'Approved',
      ethicsStatus: 'Approved',
      presentationDate: '2024-09-18',
      details: {
        abstract: 'Preclinical investigation of synergistic effects between different immunotherapy agents in glioblastoma cell lines and animal models.',
        methodology: 'Cell culture screening, Flow cytometry, In vivo tumor models, Immune profiling',
        findings: 'Combination therapy increased survival rate by 60% and showed reduced tumor progression',
        impact: 'Strong preclinical evidence for future clinical trial initiation'
      },
      reviewDetails: 'Exceptional quality research. Comprehensive methodology and robust findings. Recommended for publication in high-impact journal.',
      ethicsDetails: 'Full IACUC and IRB approval obtained for all animal and human cell studies. Animal welfare standards fully maintained.',
      presentationDetails: 'Successfully presented. Published in Neuro-Oncology Research journal. Extended seminar invited by external institute.'
    },
    {
      id: 6,
      title: 'Neuroinflammation Biomarkers in Multiple Sclerosis',
      department: 'Neurology Research',
      students: ['Alex Kumar', 'Sophie Chen'],
      supervisor: 'Dr. Jennifer Lee',
      description: 'Discovery and validation of cerebrospinal fluid biomarkers for disease activity monitoring',
      status: 'In Progress',
      review: 'Under Review',
      ethicsStatus: 'Approved',
      presentationDate: null,
      details: {
        abstract: 'Identification of novel inflammatory biomarkers in cerebrospinal fluid (CSF) to improve monitoring of disease progression and treatment response in MS patients.',
        methodology: 'CSF sample analysis, Proteomics, Immunoassays, Clinical correlation studies',
        findings: 'Discovered 5 novel biomarkers with strong correlation to disease activity',
        impact: 'Could enable personalized treatment strategies and early intervention'
      },
      reviewDetails: 'Currently under peer review. Data quality excellent. Awaiting final committee feedback.',
      ethicsDetails: 'Approved for use of human CSF samples. Patient consent obtained. Biosafety level 2 protocols implemented.',
      presentationDetails: 'Mid-project update presentation completed. Final presentation scheduled after ethics clearance.'
    }
  ];

  const departments = ['all', 'Neuroscience', 'Biomedical Engineering', 'Genetics', 'Oncology Research', 'Neurology Research'];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.department === selectedFilter);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-500/20 text-green-300 border-green-500/50';
      case 'In Progress': return 'bg-blue-500/20 text-blue-300 border-blue-500/50';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/50';
    }
  };

  const getReviewStatusColor = (status) => {
    switch(status) {
      case 'Approved': return 'bg-green-500/20 text-green-300';
      case 'Under Review': return 'bg-yellow-500/20 text-yellow-300';
      case 'Pending': return 'bg-red-500/20 text-red-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen mt-30">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <BookOpen className="w-10 h-10 text-purple-500" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4 text-center bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400">
            Student Research Cell
          </h1>
          <p className="text-xl text-slate-300 text-center mb-8">Active Student Projects & Research Portfolio</p>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedFilter(dept)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedFilter === dept
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {dept === 'all' ? 'All Projects' : dept}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Projects List */}
          <div className="space-y-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600 transition">
                  {/* Project Header */}
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="w-full"
                  >
                    <div className="p-6 sm:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 text-left">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                              {project.status}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getReviewStatusColor(project.review)}`}>
                              Review: {project.review}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getReviewStatusColor(project.ethicsStatus)}`}>
                              Ethics: {project.ethicsStatus}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                            <span>📚 {project.department}</span>
                            <span>👨‍🏫 {project.supervisor}</span>
                            <span>👥 {project.students.length} students</span>
                          </div>
                        </div>
                        <ChevronDown className={`w-6 h-6 text-purple-400 transition transform ${expandedProject === project.id ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {expandedProject === project.id && (
                    <div className="border-t border-slate-700/50 px-6 sm:px-8 py-6 space-y-6">
                      {/* Description */}
                      <div>
                        <h4 className="text-lg font-bold text-purple-400 mb-3">Overview</h4>
                        <p className="text-slate-300">{project.description}</p>
                      </div>

                      {/* Students */}
                      <div>
                        <h4 className="text-lg font-bold text-purple-400 mb-3">Research Team</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.students.map((student, idx) => (
                            <span key={idx} className="px-4 py-2 bg-slate-700/50 rounded-full text-slate-300">
                              {student}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Three Main Sections */}
                      <div className="grid md:grid-cols-3 gap-6">
                        {/* Project Details */}
                        <div className="bg-slate-700/30 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                            <BookOpen className="w-5 h-5" />
                            Project Details
                          </h4>
                          <div className="space-y-4 text-sm text-slate-300">
                            <div>
                              <p className="font-semibold text-white mb-2">Abstract</p>
                              <p className="text-slate-400">{project.details.abstract}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-white mb-2">Methodology</p>
                              <p className="text-slate-400">{project.details.methodology}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-white mb-2">Key Findings</p>
                              <p className="text-slate-400">{project.details.findings}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-white mb-2">Impact</p>
                              <p className="text-slate-400">{project.details.impact}</p>
                            </div>
                          </div>
                        </div>

                        {/* Peer Review */}
                        <div className="bg-slate-700/30 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                            <ClipboardCheck className="w-5 h-5" />
                            Peer Review
                          </h4>
                          <div className="space-y-4 text-sm text-slate-300">
                            <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-green-500">
                              <p className="font-semibold text-white mb-2">Review Status: {project.review}</p>
                              <p className="text-slate-400">{project.reviewDetails}</p>
                            </div>
                            <div className="text-xs text-slate-500 pt-2">
                              <p>✓ Evaluated by departmental peer review committee</p>
                              <p>✓ Methodology and findings assessed</p>
                              <p>✓ Compliance standards verified</p>
                            </div>
                          </div>
                        </div>

                        {/* Ethics Approval */}
                        <div className="bg-slate-700/30 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Ethics Approval
                          </h4>
                          <div className="space-y-4 text-sm text-slate-300">
                            <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-yellow-500">
                              <p className="font-semibold text-white mb-2">Status: {project.ethicsStatus}</p>
                              <p className="text-slate-400">{project.ethicsDetails}</p>
                            </div>
                            <div className="text-xs text-slate-500 pt-2">
                              <p>✓ IRB/IACUC reviewed</p>
                              <p>✓ Data protection protocols followed</p>
                              <p>✓ Subject safety ensured</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Presentation */}
                      {project.presentationDate && (
                        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/50">
                          <h4 className="text-lg font-bold text-purple-300 mb-4 flex items-center gap-2">
                            <Presentation className="w-5 h-5" />
                            Final Presentation
                          </h4>
                          <p className="text-slate-300 mb-3">{project.presentationDetails}</p>
                          <div className="text-sm text-slate-400">
                            <p>📅 Date: {new Date(project.presentationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                          </div>
                        </div>
                      )}
                      {!project.presentationDate && (
                        <div className="bg-blue-600/20 rounded-xl p-6 border border-blue-500/50">
                          <h4 className="text-lg font-bold text-blue-300 mb-2">📅 Final Presentation</h4>
                          <p className="text-slate-300">Presentation scheduled after project completion and ethics approval.</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Info Cards */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-white mb-3">Project Work</h3>
              <p className="text-slate-400">Students engage in rigorous, original research under faculty supervision, covering design, execution, and analysis phases.</p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-white mb-3">Peer Review</h3>
              <p className="text-slate-400">All projects undergo comprehensive evaluation by faculty committee to assess methodology, findings, and scientific contribution.</p>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-white mb-3">Ethics Review</h3>
              <p className="text-slate-400">IRB/IACUC approval ensures all research meets ethical standards, protects subjects, and maintains data security protocols.</p>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-12 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Understanding Project Status</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-4">Project Status</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex gap-2"><span className="bg-green-500/20 px-2 py-1 rounded text-xs text-green-300">Completed</span> Research finished</li>
                  <li className="flex gap-2"><span className="bg-blue-500/20 px-2 py-1 rounded text-xs text-blue-300">In Progress</span> Ongoing research</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-4">Review Status</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex gap-2"><span className="bg-green-500/20 px-2 py-1 rounded text-xs text-green-300">Approved</span> Passed review</li>
                  <li className="flex gap-2"><span className="bg-yellow-500/20 px-2 py-1 rounded text-xs text-yellow-300">Under Review</span> Being evaluated</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-4">Ethics Status</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex gap-2"><span className="bg-green-500/20 px-2 py-1 rounded text-xs text-green-300">Approved</span> Ethics cleared</li>
                  <li className="flex gap-2"><span className="bg-red-500/20 px-2 py-1 rounded text-xs text-red-300">Pending</span> Awaiting approval</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-slate-700/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Student Research Cell. All projects conducted under institutional guidelines.</p>
          <p className="text-sm mt-2">Committed to ethical, rigorous, and impactful student research.</p>
        </div>
      </footer>

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