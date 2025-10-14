"use client"
import Image from 'next/image';
import { useState } from 'react';
import { Users, Briefcase, Award, Heart, Globe, TrendingUp, MapPin, Building2, Star, Target } from 'lucide-react';

export default function AlumniPage() {
  const [activeTab, setActiveTab] = useState('featured');

  // Placeholder alumni - replace with actual data later
  const featuredAlumni = [
    {
      id: 1,
      name: "Alumni Name 1",
      batch: "Batch 2020",
      course: "BPT",
      currentRole: "Senior Physiotherapist",
      company: "Apollo Hospitals",
      location: "Delhi",
      achievement: "Leading the rehabilitation department with innovative techniques",
      image: "/api/placeholder/200/200"
    },
    {
      id: 2,
      name: "Alumni Name 2",
      batch: "Batch 2019",
      course: "BMRIT",
      currentRole: "Chief Radiographer",
      company: "Fortis Healthcare",
      location: "Mumbai",
      achievement: "Implemented advanced imaging protocols, improved diagnostic accuracy",
      image: "/api/placeholder/200/200"
    },
    {
      id: 3,
      name: "Alumni Name 3",
      batch: "Batch 2021",
      course: "B.Optom",
      currentRole: "Clinical Optometrist",
      company: "Own Practice",
      location: "Dehradun",
      achievement: "Successfully running own optometry clinic serving 500+ patients",
      image: "/api/placeholder/200/200"
    },
    {
      id: 4,
      name: "Alumni Name 4",
      batch: "Batch 2018",
      course: "BOTT",
      currentRole: "OT In-Charge",
      company: "Max Super Specialty",
      location: "Gurgaon",
      achievement: "Managing 12 operation theatres, trained 50+ junior technicians",
      image: "/api/placeholder/200/200"
    },
    {
      id: 5,
      name: "Alumni Name 5",
      batch: "Batch 2020",
      course: "BPT",
      currentRole: "Sports Physiotherapist",
      company: "Indian Cricket Team",
      location: "Bangalore",
      achievement: "Working with national sports teams, multiple awards",
      image: "/api/placeholder/200/200"
    },
    {
      id: 6,
      name: "Alumni Name 6",
      batch: "Batch 2019",
      course: "BMRIT",
      currentRole: "MRI Specialist",
      company: "AIIMS",
      location: "New Delhi",
      achievement: "Research in advanced imaging, published 10+ papers",
      image: "/api/placeholder/200/200"
    }
  ];

  const alumniByYear = [
    {
      year: "2024",
      count: "45+",
      description: "Recent graduates making their mark in healthcare"
    },
    {
      year: "2023",
      count: "50+",
      description: "Working across India in leading hospitals"
    },
    {
      year: "2022",
      count: "48+",
      description: "Established professionals with growing expertise"
    },
    {
      year: "2021",
      count: "42+",
      description: "Mid-career professionals in senior positions"
    }
  ];

  const alumniStats = [
    { icon: Users, number: "500+", label: "Total Alumni" },
    { icon: Building2, number: "200+", label: "Companies" },
    { icon: Globe, number: "25+", label: "Cities" },
    { icon: Award, number: "50+", label: "Awards Won" }
  ];

  const successStories = [
    {
      title: "From Student to Entrepreneur",
      category: "Success Story",
      description: "Placeholder for success story - Alumni who started their own diagnostic center after graduating from GIPS. Now employing 20+ staff and serving the community.",
      image: "/api/placeholder/400/250"
    },
    {
      title: "International Achievement",
      category: "Global Success",
      description: "Placeholder for international success - GIPS alumnus working in renowned hospital abroad, representing Indian paramedical excellence on global stage.",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Research Excellence",
      category: "Academic Achievement",
      description: "Placeholder for research story - Alumni pursuing PhD, published papers in international journals, contributing to medical research advancements.",
      image: "/api/placeholder/400/250"
    }
  ];

  const alumniTestimonials = [
    {
      quote: "GIPS gave me the foundation, skills, and confidence to build a successful career. The practical training and faculty mentorship were invaluable in shaping my professional journey.",
      name: "Testimonial Name 1",
      designation: "Senior Physiotherapist, Leading Hospital",
      batch: "Batch 2019",
      image: "/api/placeholder/100/100"
    },
    {
      quote: "The education I received at GIPS was world-class. The combination of theoretical knowledge and hands-on experience prepared me perfectly for the challenges of the healthcare industry.",
      name: "Testimonial Name 2",
      designation: "Chief Radiographer, Multi-specialty Hospital",
      batch: "Batch 2020",
      image: "/api/placeholder/100/100"
    },
    {
      quote: "GIPS is not just an institute, it's a family. The connections, friendships, and professional network I built here continue to benefit my career even today.",
      name: "Testimonial Name 3",
      designation: "Optometry Clinic Owner",
      batch: "Batch 2018",
      image: "/api/placeholder/100/100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 mt-30">
      {/* Hero Section - Unique Teal/Emerald Theme */}
      <div className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
              <Users className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">GIPS Alumni Network</h1>
          <p className="text-2xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
            Celebrating Success Stories of Our Healthcare Professionals
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Alumni Statistics */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Alumni at a Glance</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {alumniStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all">
                  <IconComponent className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'featured'
                  ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Featured Alumni
            </button>
            <button
              onClick={() => setActiveTab('stories')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'stories'
                  ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Success Stories
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'testimonials'
                  ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => setActiveTab('batchwise')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'batchwise'
                  ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Batch-wise
            </button>
          </div>
        </div>

        {/* Featured Alumni Tab */}
        {activeTab === 'featured' && (
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-teal-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Featured Alumni</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Meet our accomplished alumni who are making significant contributions to healthcare 
                across various specializations and organizations. Their success stories inspire current 
                students and showcase the quality of education at GIPS.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredAlumni.map((alumni) => (
                <div key={alumni.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  {/* Photo Placeholder - Easy to replace */}
                  <div className="bg-gradient-to-br from-teal-100 to-emerald-100 h-64 flex items-center justify-center">
                    <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden relative">
  <Image
    src={alumni.image}
    alt={alumni.name}
    fill
    className="object-cover"
  />
</div>

                  </div>
                  
                  {/* Alumni Details - Easy to update */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{alumni.name}</h3>
                    <p className="text-teal-600 font-semibold mb-1">{alumni.batch} | {alumni.course}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-700">
                        <Briefcase className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-sm font-semibold">{alumni.currentRole}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Building2 className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-sm">{alumni.company}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-4 h-4 mr-2 text-teal-600" />
                        <span className="text-sm">{alumni.location}</span>
                      </div>
                    </div>
                    
                    <div className="border-t-2 border-teal-100 pt-4">
                      <p className="text-gray-600 text-sm leading-relaxed italic">
                        {alumni.achievement}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Success Stories Tab */}
        {activeTab === 'stories' && (
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-emerald-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Success Stories</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Inspiring journeys of GIPS alumni who have achieved remarkable success in their careers. 
                From starting their own ventures to working with prestigious organizations, our alumni 
                are making us proud every day.
              </p>
            </div>

            <div className="space-y-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                  <div className="md:flex">
                    {/* Image Placeholder - Easy to replace */}
                    <div className="md:w-1/3 bg-gradient-to-br from-emerald-100 to-cyan-100 flex items-center justify-center p-8">
                      <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden relative">
  <Image
    src={story.image}
    alt={story.title}
    fill
    className="object-cover"
  />
</div>

                    </div>
                    
                    {/* Story Details - Easy to update */}
                    <div className="md:w-2/3 p-8">
                      <span className="inline-block bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        {story.category}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">{story.title}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {story.description}
                      </p>
                      <button className="mt-6 text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                        Read Full Story →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add More Placeholder */}
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-dashed border-teal-300 rounded-2xl p-12 text-center mt-8">
              <Target className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">More Stories Coming Soon</h3>
              <p className="text-gray-600">We&apos;re collecting more inspiring success stories from our alumni network</p>
            </div>
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-cyan-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Alumni Testimonials</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hear directly from our alumni about their experiences at GIPS and how it shaped their 
                professional careers. Their words reflect the quality of education and life-long impact 
                of being part of the GIPS family.
              </p>
            </div>

            <div className="space-y-6">
              {alumniTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all">
                  <div className="flex items-start">
                    {/* Photo Placeholder */}
                    <div className="mr-6 flex-shrink-0">
                      <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden relative">
  <Image
    src={testimonial.image}
    alt={testimonial.name}
    fill
    className="object-cover"
  />
</div>

                    </div>
                    
                    {/* Testimonial Content - Easy to update */}
                    <div className="flex-1">
                      <div className="text-teal-600 text-5xl mb-4">&quot;</div>
                      <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
                        {testimonial.quote}
                      </p>
                      <div className="border-t-2 border-teal-100 pt-4">
                        <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-teal-600 font-semibold">{testimonial.designation}</p>
                        <p className="text-gray-600 text-sm">{testimonial.batch}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Batch-wise Tab */}
        {activeTab === 'batchwise' && (
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-emerald-600">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Alumni by Batch</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our alumni network spans across multiple batches, each contributing uniquely to the 
                healthcare sector. Explore alumni information organized by graduation year.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {alumniByYear.map((batch, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border-l-4 border-teal-600">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-4xl font-bold text-gray-800">Batch of {batch.year}</h3>
                    <span className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-2 rounded-full text-2xl font-bold">
                      {batch.count}
                    </span>
                  </div>
                  <p className="text-gray-600">{batch.description}</p>
                  <button className="mt-4 text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                    View Batch Details →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Alumni Network CTA */}
        <div className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 rounded-2xl shadow-xl p-12 mt-12 text-white text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Stay Connected with GIPS</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-3xl mx-auto">
            Join our alumni network, share your success story, mentor current students, and stay 
            connected with your alma mater. Together we grow stronger!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-lg">
              Register as Alumni
            </button>
            <button className="bg-teal-800 bg-opacity-50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-70 transition-all border-2 border-white">
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}