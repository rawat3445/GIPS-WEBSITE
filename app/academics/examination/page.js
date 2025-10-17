import { ClipboardCheck, FileText, Calendar, Award, TrendingUp, CheckCircle, AlertCircle, BookOpen, Target, BarChart } from 'lucide-react';

export default function Examination() {
  const examTypes = [
    {
      icon: FileText,
      title: "Internal Assessments",
      description: "Regular evaluation through continuous assessment",
      details: [
        "Mid-term examinations",
        "Class tests and quizzes",
        "Assignments and projects",
        "Attendance and participation"
      ],
      weightage: "30%",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: BookOpen,
      title: "End Semester Exams",
      description: "Comprehensive theoretical examinations",
      details: [
        "Written theory examinations",
        "Objective and subjective questions",
        "Case study analysis",
        "Problem-solving assessments"
      ],
      weightage: "70%",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Practical Examinations",
      description: "Hands-on skill assessment in laboratories",
      details: [
        "Laboratory technique evaluation",
        "Equipment handling proficiency",
        "Clinical skill demonstrations",
        "Viva voce examinations"
      ],
      weightage: "50%",
      color: "from-green-500 to-green-600"
    }
  ];

  const evaluationCriteria = [
    {
      criteria: "Theory Examinations",
      internal: "30%",
      external: "70%",
      total: "100%"
    },
    {
      criteria: "Practical Examinations",
      internal: "50%",
      external: "50%",
      total: "100%"
    },
    {
      criteria: "Overall Assessment",
      internal: "40%",
      external: "60%",
      total: "100%"
    }
  ];

  const gradingSystem = [
    { grade: "O", marks: "90-100", performance: "Outstanding", points: "10" },
    { grade: "A+", marks: "80-89", performance: "Excellent", points: "9" },
    { grade: "A", marks: "70-79", performance: "Very Good", points: "8" },
    { grade: "B+", marks: "60-69", performance: "Good", points: "7" },
    { grade: "B", marks: "50-59", performance: "Above Average", points: "6" },
    { grade: "C", marks: "40-49", performance: "Average", points: "5" },
    { grade: "F", marks: "Below 40", performance: "Fail", points: "0" }
  ];

  const examGuidelines = [
    {
      icon: Calendar,
      title: "Exam Schedule",
      points: [
        "Academic calendar published at the beginning of semester",
        "Exam timetable released 2 weeks prior to examinations",
        "Regular updates through student portal",
        "Make-up exams for genuine medical emergencies"
      ]
    },
    {
      icon: CheckCircle,
      title: "Eligibility Criteria",
      points: [
        "Minimum 75% attendance required for appearing in exams",
        "All internal assessments must be completed",
        "No pending dues or disciplinary actions",
        "Submission of all required assignments"
      ]
    },
    {
      icon: AlertCircle,
      title: "Examination Rules",
      points: [
        "Students must carry admit card and ID card",
        "Entry allowed only 15 minutes before exam start",
        "Mobile phones and electronic devices strictly prohibited",
        "Strict action against any form of malpractice"
      ]
    },
    {
      icon: BarChart,
      title: "Result Declaration",
      points: [
        "Results published within 30 days of examination",
        "Grade cards available through student portal",
        "Re-evaluation facility available on request",
        "Supplementary exams for failed subjects"
      ]
    }
  ];

  const features = [
    {
      title: "Transparent Evaluation",
      description: "Clear and objective assessment criteria ensuring fairness",
      icon: TrendingUp
    },
    {
      title: "Continuous Monitoring",
      description: "Regular feedback to track student progress throughout semester",
      icon: BarChart
    },
    {
      title: "Digital Integration",
      description: "Online exam portals and automated result processing",
      icon: ClipboardCheck
    },
    {
      title: "Quality Assurance",
      description: "External examiners and moderation for maintaining standards",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4">
            <ClipboardCheck className="w-12 h-12 mr-4" />
            <h1 className="text-5xl font-bold">Examination System</h1>
          </div>
          <p className="text-xl text-blue-100">
            Fair, Transparent, and Comprehensive Assessment at GIPS
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Examination Philosophy</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
           <p className="text-lg">
              The examination system at GIPS is designed to comprehensively evaluate student learning, 
              understanding, and practical skills. We follow a balanced approach that combines continuous 
              assessment with end-semester examinations, ensuring that every student&apos;s progress is 
              monitored and evaluated fairly throughout their academic journey.
            </p>
            <p className="text-lg">
              Our evaluation methodology focuses not just on theoretical knowledge but also on practical 
              competencies, clinical skills, and professional aptitude. We believe in transparent, 
              objective, and standardized assessment processes that prepare students for real-world 
              healthcare challenges.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Examination System Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Types of Examinations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Types of Examinations</h2>
          <div className="space-y-6">
            {examTypes.map((exam, index) => {
              const IconComponent = exam.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`bg-gradient-to-r ${exam.color} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <IconComponent className="w-10 h-10 mr-4" />
                        <div>
                          <h3 className="text-2xl font-bold">{exam.title}</h3>
                          <p className="text-blue-100 mt-1">{exam.description}</p>
                        </div>
                      </div>
                      <div className=" bg-opacity-20 rounded-lg px-4 py-2 bg-blue-700">
                        <div className="text-2xl font-bold">{exam.weightage}</div>
                        <div className="text-xs">Weightage</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {exam.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">✓</span>
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

        {/* Evaluation Criteria Table */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Evaluation Criteria & Weightage</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <th className="px-6 py-4 text-left text-lg font-semibold">Assessment Type</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold">Internal</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold">External</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                {evaluationCriteria.map((item, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-blue-50 transition-colors`}>
                    <td className="px-6 py-4 font-medium text-gray-800">{item.criteria}</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-semibold">{item.internal}</td>
                    <td className="px-6 py-4 text-center text-purple-600 font-semibold">{item.external}</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Grading System */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Grading System</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <th className="px-6 py-4 text-center text-lg font-semibold">Grade</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold">Marks Range</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold">Performance</th>
                  <th className="px-6 py-4 text-center text-lg font-semibold">Grade Points</th>
                </tr>
              </thead>
              <tbody>
                {gradingSystem.map((grade, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b hover:bg-indigo-50 transition-colors`}>
                    <td className="px-6 py-4 text-center font-bold text-xl text-indigo-600">{grade.grade}</td>
                    <td className="px-6 py-4 text-center text-gray-700 font-medium">{grade.marks}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{grade.performance}</td>
                    <td className="px-6 py-4 text-center font-semibold text-purple-600">{grade.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Examination Guidelines */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Examination Guidelines & Procedures</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {examGuidelines.map((guideline, index) => {
              const IconComponent = guideline.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{guideline.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {guideline.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Important Notes</h2>
          <div className="space-y-4 text-blue-50">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
              <p className="text-lg">
                Students must maintain academic integrity. Any form of malpractice or unfair means will result in strict disciplinary action.
              </p>
            </div>
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
              <p className="text-lg">
                For detailed examination rules, schedule, and updates, students should regularly check the official notice board and student portal.
              </p>
            </div>
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
              <p className="text-lg">
                Students facing any genuine difficulties regarding examinations should contact the examination cell or academic coordinator immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}