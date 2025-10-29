"use client"
import Image from "next/image";
import { useState } from 'react';
import { Award, Users, BookOpen, TrendingUp, Target, Heart, Globe, Building2, CheckCircle } from 'lucide-react';

export default function AboutGipsPage() {
  const [activeTab, setActiveTab] = useState('about');

  const facultyMembers = [
    {
      category: "General Body",
      members: [
        {
          name: "Mr. Kavinder Istwal",
          position: "Chairman",
          qualification: "Garhwal Institute of Paramedical Sciences",
          location: "Shri Shatchandi Jan Kalyan Samiti, Pauri Garhwal",
          image: "/Chairman_sir.jpg"
        },
        {
          name: "Mr. Nripesh Tiwari",
          position: "General Secretary",
          qualification: "Garhwal Institute of Paramedical Sciences",
          location: "Shri Bhatchandi Jankiya Van Samiti, Pauri Garhwal",
          image: ""
        }
      ]
    },
    {
      category: "Department of Optometry",
      members: [
        {
          name: "Dr. Animesh Mondal",
          position: "Associate Professor / Vice-Principal / Academic In-Charge",
          qualification: "Garhwal Institute of Paramedical Sciences, Pauri Garhwal",
          degree: "B.OPTOMETRY, MSc., Ph.D. ONTOMETRY",
          image: "/Principal-Sir.jpg"
        }
      ]
    },
    {
      category: "Department of Physiotherapy",
      members: [
        {
          name: "Dr. Siddharth Kuriyal",
          position: "Assistant Professor / Controller of Examinations / Faculty In-Charge",
          qualification: "Dept. of Physiotherapy, Garhwal Institute of Paramedical Sciences, Pauri Garhwal",
          degree: "MPT (NEUROLOGY), Ph.D. Scholar (Neurology and psychosomatic Disorders)",
          image: "/Sid_sir.png"
        },
        {
          name: "Dr. Priyanka Shah",
          position: "Lecturer / Sports & Cultural In-Charge",
          qualification: "Dept. of Physiotherapy, Garhwal Institute of Paramedical Sciences, Pauri Garhwal",
          degree: "BACHELORS IN PHYSIOTHERAPY",
          image: "/priyanka-mam.png"
        }
      ]
    },
    {
      category: "Department of Operation Theatre Technology",
      members: [
        {
          name: "Mr. Hritik Jairwan",
          position: "Faculty In-Charge / In-Charge, Anti-Ragging Committee",
          qualification: "Dept. of Operation Theatre Technology, Garhwal Institute of Paramedical Sciences, Pauri Garhwal",
          hospital: "BOTT (SGRH, DOON HOSPITAL, DEHRADUN)",
          image: "/Hritik.png"
        },

        {
          name: "Ms. Aastha",
          position: "Lecturer",
          qualification: "Dept. of Operation Theatre Technology, Garhwal Institute of Paramedical Sciences, Pauri Garhwal",
          hospital: "Uttranchal P.G Collage Of Biomedical Science and Hospital",
          image: "/Ms.Astha.jpg"
        }
      ]
    },
    {
      category: "Department of Medical Radio-Imaging Technology",
      members: [
        {
          name: "Mrs. Nidhi Negi",
          position: "Faculty In-Charge / In-Charge, Anti-Ragging Committee",
          qualification: "Dept. of Medical Radio-Imaging Technology, Garhwal Institute of Paramedical Sciences, Pauri Garhwal",
          hospital: "BMRIT (VCSGG GOVT. MEDICAL COLLEGE, SRINAGAR)",
          image: "/Nidhi-mam.png"
        },
        {
          name: "Miss. Sunita Kaswal",
          position: "Lecturer",
          qualification: "Dept. of Medical Radio-Imaging Technology, Garhwal Institute of Paramedical Sciences, Pauri Garhwal",
          degree: "BACHELORS IN MEDICAL RADIO-IMAGING TECHNOLOGY",
          image: ""
        }
      ]
    }
  ];

  const highlights = [
    {
      icon: Award,
      title: "Accredited & Affiliated",
      description: "Affiliated with H.N.B. Uttarakhand Medical Education University, Dehradun"
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Highly qualified faculty with years of teaching and clinical experience"
    },
    {
      icon: BookOpen,
      title: "Modern Infrastructure",
      description: "State-of-the-art laboratories, libraries, and training facilities"
    },
    {
      icon: TrendingUp,
      title: "Excellent Placements",
      description: "95%+ placement record with top hospitals and healthcare institutions"
    }
  ];

  const visionMission = [
    {
      title: "Our Vision",
      icon: Target,
      content: "To be recognized as a leading paramedical institution in India, known for producing competent healthcare professionals who contribute meaningfully to society through quality patient care and medical innovation.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Our Mission",
      icon: Heart,
      content: "To provide comprehensive paramedical education that combines theoretical knowledge with practical skills, fostering ethical values, professional competence, and a commitment to lifelong learning in healthcare.",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const values = [
    { value: "Excellence", description: "Striving for the highest standards in education and healthcare" },
    { value: "Integrity", description: "Maintaining ethical practices and transparency in all endeavors" },
    { value: "Innovation", description: "Embracing new technologies and teaching methodologies" },
    { value: "Compassion", description: "Caring for patients and community with empathy and respect" },
    { value: "Collaboration", description: "Working together for better healthcare outcomes" },
    { value: "Responsibility", description: "Commitment to social and professional accountability" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 mt-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
              <Building2 className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">About GIPS</h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Garhwal Institute of Paramedical Sciences - Shaping Future Healthcare Professionals
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'about'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => setActiveTab('faculty')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'faculty'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Our Faculty
            </button>
          </div>
        </div>

        {/* About Tab */}
        {activeTab === 'about' && (
          <div>
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-blue-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to GIPS</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Garhwal Institute of Paramedical Sciences (GIPS) is a premier institution committed to 
                  excellence in healthcare education. Established with the vision of empowering students 
                  with both knowledge and values, GIPS has become a trusted name in paramedical training 
                  and allied health sciences in Uttarakhand.
                </p>
                <p>
                  Located in the serene hills of Pauri Garhwal, our institute provides an ideal learning 
                  environment where students can focus on their academic and professional development. We 
                  are proud to be affiliated with H.N.B. Uttarakhand Medical Education University, Dehradun, 
                  ensuring that our programs meet the highest educational standards and are recognized 
                  nationwide.
                </p>
                <p>
                  At GIPS, we believe in holistic development — combining academic rigor with practical 
                  exposure. With experienced faculty, modern laboratories, well-equipped libraries, and 
                  strong industry linkages, our students are prepared to become skilled, compassionate, 
                  and competent healthcare professionals who can make a real difference in people&apos;s lives.
                </p>
                <p>
                  Our curriculum is designed to provide comprehensive theoretical knowledge alongside 
                  extensive hands-on training through clinical rotations, internships, and hospital tie-ups. 
                  We emphasize not just technical skills but also ethical values, communication abilities, 
                  and professional conduct that are essential in the healthcare sector.
                </p>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {visionMission.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className={`bg-gradient-to-r ${item.color} rounded-2xl shadow-xl p-10 text-white`}>
                    <div className="flex items-center mb-6">
                      <IconComponent className="w-12 h-12 mr-4" />
                      <h3 className="text-3xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-lg leading-relaxed opacity-95">{item.content}</p>
                  </div>
                );
              })}
            </div>

            {/* Core Values */}
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Core Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-lg transition-all">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{item.value}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Why Choose GIPS?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all text-center">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{highlight.title}</h3>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Affiliation */}
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl shadow-xl p-10 text-white text-center">
              <Globe className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Affiliation & Recognition</h2>
              <p className="text-xl mb-6 text-green-100 max-w-3xl mx-auto">
                GIPS is affiliated with H.N.B. Uttarakhand Medical Education University, Dehradun, 
                and approved by the State Medical Faculty. Our programs are recognized by relevant 
                regulatory bodies, ensuring quality education and nationwide recognition of degrees.
              </p>
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">University Affiliated</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">State Approved</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Quality Assured</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Faculty Tab */}
        {activeTab === 'faculty' && (
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-purple-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Distinguished Faculty</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                GIPS takes pride in its team of highly qualified, experienced, and dedicated faculty members. 
                Our professors bring a wealth of academic knowledge and practical clinical experience, ensuring 
                that students receive the best possible education and mentorship. Our faculty members are not 
                just teachers but mentors who guide students throughout their academic journey and beyond.
              </p>
            </div>

            {/* Faculty Members by Department */}
            {facultyMembers.map((department, deptIndex) => (
              <div key={deptIndex} className="mb-12">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-2xl p-6 text-white">
                  <h3 className="text-3xl font-bold">{department.category}</h3>
                </div>
                <div className="bg-white rounded-b-2xl shadow-xl p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {department.members.map((faculty, index) => (
                      <div key={index} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-500 hover:shadow-xl transition-all">
                        {/* Faculty Image */}
                        <div className="bg-white w-60 h-79 mx-auto rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                          <Image
                            src={faculty.image} 
                            alt={faculty.name}
                            width={175}
                            height={10}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Faculty Details */}
                        <div className="text-center">
                          <h4 className="text-xl font-bold text-gray-800 mb-2">{faculty.name}</h4>
                          <p className="text-sm font-semibold text-indigo-600 mb-3">{faculty.position}</p>
                          
                          <div className="text-left space-y-2 text-sm text-gray-600">
                            <p className="leading-relaxed">{faculty.qualification}</p>
                            {faculty.location && (
                              <p className="leading-relaxed">{faculty.location}</p>
                            )}
                            {faculty.degree && (
                              <p className="font-semibold text-gray-800 mt-0">{faculty.degree}</p>
                            )}
                            {faculty.hospital && (
                              <p className="font-semibold text-gray-800 mt-0">{faculty.hospital}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Faculty Achievements */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl shadow-xl p-10 text-white text-center">
              <Award className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Faculty Excellence</h3>
              <p className="text-xl mb-6 max-w-3xl mx-auto">
                Our faculty members have published numerous research papers, received teaching excellence 
                awards, and actively contribute to the advancement of paramedical sciences through their 
                research, clinical practice, and community service.
              </p>
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <p className="text-sm">Research Publications</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <p className="text-sm">Years Combined Experience</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-sm">Qualified Faculty</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <p className="text-sm">Awards & Recognitions</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}