"use client"
import { Award, TrendingUp, Star, Trophy, BookOpen, Users, Target, Lightbulb, CheckCircle, Sparkles } from 'lucide-react';

export default function AwardsPage() {
  const researchExcellence = [
    {
      title: "Research Publications",
      description: "Faculty and students actively publish research papers in national and international peer-reviewed journals",
      achievements: [
        "50+ research papers published by faculty members",
        "Published in reputed journals like PubMed, Scopus indexed journals",
        "Research in physiotherapy, radiology, optometry, and OT technology",
        "Student participation in research projects and case studies"
      ],
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Academic Conferences",
      description: "Regular participation and paper presentations at state, national, and international conferences",
      achievements: [
        "Faculty presented papers at 20+ national conferences",
        "Students participated in inter-college research symposiums",
        "Hosted institutional research day with poster presentations",
        "Collaboration with leading medical universities for research"
      ],
      icon: Users,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Innovation & Patents",
      description: "Encouraging innovation and intellectual property development among faculty and students",
      achievements: [
        "10+ patents filed by faculty members in healthcare technology",
        "Innovation in medical devices and rehabilitation equipment",
        "Student projects featured in innovation competitions",
        "Tie-ups with R&D organizations for collaborative research"
      ],
      icon: Lightbulb,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Research Funding",
      description: "Successful acquisition of research grants and funding from various agencies",
      achievements: [
        "₹75 lakhs+ research funding secured from external agencies",
        "Grants from ICMR, DST, and state government schemes",
        "Internal seed funding provided for faculty research projects",
        "Support for student dissertation and thesis work"
      ],
      icon: TrendingUp,
      color: "from-orange-500 to-red-600"
    }
  ];

  const institutionalMilestones = [
    {
      year: "2024",
      achievement: "Research Excellence Recognition",
      description: "GIPS faculty published highest number of research papers in paramedical sciences"
    },
    {
      year: "2023",
      achievement: "Best Paramedical Institute",
      description: "Recognized among top paramedical colleges in Uttarakhand for quality education"
    },
    {
      year: "2023",
      achievement: "Innovation Award",
      description: "Faculty awarded for innovative teaching methodologies and student-centric approach"
    },
    {
      year: "2022",
      achievement: "100% Placement Record",
      description: "Achieved 100% placement for graduating batch in leading hospitals"
    }
  ];

  const facultyAchievements = [
    "Dr. Animesh Mondal - Published 15+ research papers in optometry and vision science",
    "Dr. Siddharth Kuriyal - Received Best Paper Award at National Physiotherapy Conference",
    "Faculty members serving as reviewers for international medical journals",
    "Regular participation as invited speakers at academic workshops and seminars",
    "Faculty mentoring students for research projects and dissertation work",
    "Active involvement in curriculum development and educational reforms"
  ];

  const studentAchievements = [
    "Students won 1st prize at Inter-College Research Paper Presentation",
    "50+ students presented research posters at institutional symposium",
    "Student research projects showcased at state-level science exhibitions",
    "Students secured positions in university merit lists consistently",
    "Active participation in health awareness camps and community service",
    "Students won sports competitions at inter-college level"
  ];

  const recognitions = [
    {
      title: "Academic Excellence",
      description: "Consistently producing university toppers and gold medalists",
      icon: Trophy
    },
    {
      title: "Quality Education",
      description: "Recognized for maintaining high teaching standards and student outcomes",
      icon: Star
    },
    {
      title: "Industry Collaboration",
      description: "Strong partnerships with 15+ leading hospitals for clinical training",
      icon: Target
    },
    {
      title: "Infrastructure",
      description: "State-of-the-art laboratories and learning facilities",
      icon: Sparkles
    }
  ];

  const futureGoals = [
    "Establish GIPS as a Research Hub for paramedical sciences in North India",
    "Increase research publications to 100+ papers annually",
    "Secure national-level research grants from premier funding agencies",
    "Develop Center of Excellence in specialized paramedical domains",
    "Achieve NAAC accreditation with highest grade",
    "Expand international collaborations for research and student exchange",
    "Organize national-level conferences and workshops at GIPS",
    "Create innovation and incubation center for medical technology startups"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 mt-30">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
              <Award className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">Awards & Achievements</h1>
          <p className="text-2xl text-yellow-100 max-w-4xl mx-auto leading-relaxed">
            Celebrating Excellence in Research, Education, and Student Success
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-orange-600">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Journey of Excellence</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Over the years, Garhwal Institute of Paramedical Sciences (GIPS) has earned recognition 
              for its unwavering commitment to excellence in education, research, student support, and 
              community service. While we continue to work towards securing formal awards and recognitions, 
              our greatest achievement lies in the success of our students and the quality of education 
              we provide.
            </p>
            <p>
              GIPS takes pride in its research-driven approach to paramedical education. Our faculty 
              members and students actively engage in research activities, publishing papers, presenting 
              at conferences, and contributing to the advancement of healthcare knowledge. This commitment 
              to research excellence sets us apart and prepares our students for future academic and 
              professional pursuits.
            </p>
            <p>
              We believe that true excellence is measured not just by awards on the wall, but by the 
              impact we create in the lives of our students, the healthcare sector, and the communities 
              we serve. Our achievements are reflected in our graduates&apos; successful careers, our faculty&apos;s 
              research contributions, and our institution&apos;s growing reputation in paramedical education.
            </p>
          </div>
        </div>

        {/* Research Excellence Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl p-8 text-white">
            <div className="flex items-center">
              <BookOpen className="w-12 h-12 mr-4" />
              <div>
                <h2 className="text-4xl font-bold">Research Excellence</h2>
                <p className="text-xl mt-2 text-blue-100">
                  Driving Innovation Through Quality Research and Academic Contributions
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-b-2xl shadow-xl p-10">
            <div className="space-y-8">
              {researchExcellence.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="border-2 border-gray-200 rounded-xl p-8 hover:border-blue-500 transition-all">
                    <div className="flex items-center mb-6">
                      <div className={`bg-gradient-to-r ${category.color} w-16 h-16 rounded-full flex items-center justify-center text-white mr-4`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                        <p className="text-gray-600 mt-1">{category.description}</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Institutional Milestones */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Institutional Milestones</h2>
          <div className="space-y-6">
            {institutionalMilestones.map((milestone, index) => (
              <div key={index} className="flex items-start bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{milestone.achievement}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty & Student Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <Users className="w-10 h-10 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Faculty Achievements</h2>
            </div>
            <div className="space-y-3">
              {facultyAchievements.map((achievement, index) => (
                <div key={index} className="flex items-start bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <Star className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <Trophy className="w-10 h-10 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Student Achievements</h2>
            </div>
            <div className="space-y-3">
              {studentAchievements.map((achievement, index) => (
                <div key={index} className="flex items-start bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                  <Award className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recognitions */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-10 mb-12 text-white">
          <h2 className="text-4xl font-bold mb-8 text-center">Areas of Recognition</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recognitions.map((recognition, index) => {
              const IconComponent = recognition.icon;
              return (
                <div key={index} className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-center border border-white/30 hover:bg-white/30 transition-all">
                  <IconComponent className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{recognition.title}</h3>
                  <p className="text-sm text-indigo-100">{recognition.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future Goals */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <div className="flex items-center mb-8">
            <Target className="w-10 h-10 text-blue-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-800">Future Goals & Aspirations</h2>
          </div>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            As GIPS continues to grow and evolve, we have set ambitious goals to further enhance our 
            academic excellence, research capabilities, and institutional recognition:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {futureGoals.map((goal, index) => (
              <div key={index} className="flex items-start bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 border-l-4 border-blue-600">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{goal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl shadow-xl p-10 text-white text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Our Greatest Achievement</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto leading-relaxed">
            While we are proud of our accomplishments, our greatest achievement is the success of our 
            students. Every graduate who becomes a skilled healthcare professional, every research paper 
            that advances medical knowledge, and every life touched by our alumni - these are the awards 
            that truly matter to us.
          </p>
          <p className="text-lg text-yellow-100">
            At GIPS, we don&apos;t just collect awards - we create futures, transform lives, and contribute 
            to better healthcare for all.
          </p>
        </div>
      </div>
    </div>
  );
}