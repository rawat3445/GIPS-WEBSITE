"use client"
import { useState } from 'react';
import { Music, Drama, Palette, Mic2, Camera, BookOpen, PartyPopper, Sparkles, Users, Calendar, Award, Star, Flame, Heart } from 'lucide-react';

export default function Cultural() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('overview');

  const culturalCategories = [
    {
      id: 'music',
      name: 'Music',
      icon: Music,
      color: 'from-purple-500 to-pink-600',
      emoji: '🎵',
      activities: [
        'Classical & Western Vocal',
        'Instrumental Performances',
        'Band Performances',
        'Music Competitions',
        'Singing Workshops',
        'A Cappella Groups'
      ]
    },
    {
      id: 'dance',
      name: 'Dance',
      icon: Sparkles,
      color: 'from-pink-500 to-red-600',
      emoji: '💃',
      activities: [
        'Classical Dance (Bharatanatyam, Kathak)',
        'Contemporary Dance',
        'Hip-Hop & Street Dance',
        'Folk Dance Performances',
        'Dance Workshops',
        'Choreography Competitions'
      ]
    },
    {
      id: 'drama',
      name: 'Drama & Theater',
      icon: Drama,
      color: 'from-blue-500 to-indigo-600',
      emoji: '🎭',
      activities: [
        'Stage Plays & Dramas',
        'Stand-up Comedy',
        'Mime & Street Theater',
        'Nukkad Natak (Street Plays)',
        'Monologue Performances',
        'Theater Workshops'
      ]
    },
    {
      id: 'art',
      name: 'Art & Craft',
      icon: Palette,
      color: 'from-orange-500 to-yellow-600',
      emoji: '🎨',
      activities: [
        'Painting Exhibitions',
        'Sketch & Doodle Competitions',
        'Rangoli & Mehendi',
        'Pottery & Sculpture',
        'Photography Contests',
        'Digital Art Workshops'
      ]
    },
    {
      id: 'literary',
      name: 'Literary Events',
      icon: BookOpen,
      color: 'from-green-500 to-teal-600',
      emoji: '📚',
      activities: [
        'Poetry Slams',
        'Debate Competitions',
        'Creative Writing',
        'Storytelling Sessions',
        'Book Club Meetings',
        'Essay Writing Contests'
      ]
    },
    {
      id: 'fashion',
      name: 'Fashion & Modeling',
      icon: Star,
      color: 'from-indigo-500 to-purple-600',
      emoji: '✨',
      activities: [
        'Fashion Shows',
        'Ramp Walk Competitions',
        'Mr. & Ms. GIPS',
        'Ethnic Wear Events',
        'Photography & Portfolio',
        'Style & Grooming Workshops'
      ]
    }
  ];

  const annualEvents = [
    {
      name: 'GIPS Cultural Fest',
      month: 'February-March',
      icon: '🎪',
      description: 'The biggest annual cultural extravaganza',
      highlights: [
        'Celebrity guest performances',
        'Inter-college competitions',
        '3-day mega event',
        'Music, dance, drama, and fashion shows',
        'Food stalls and exhibitions',
        'Prize money worth ₹5 lakhs'
      ]
    },
    {
      name: 'Freshers Welcome',
      month: 'August',
      icon: '🎉',
      description: 'Grand welcome for new students',
      highlights: [
        'Talent showcases',
        'Mr. & Ms. Fresher competition',
        'Cultural performances',
        'Ice-breaking activities',
        'Meet & greet with seniors',
        'Entertainment & refreshments'
      ]
    },
    {
      name: 'Farewell Party',
      month: 'April-May',
      icon: '🎓',
      description: 'Emotional send-off for graduating students',
      highlights: [
        'Musical performances',
        'Dance tributes',
        'Memory slideshow',
        'Award ceremony',
        'Dinner & entertainment',
        'Group photos & memories'
      ]
    },
    {
      name: 'Festival Celebrations',
      month: 'Year-round',
      icon: '🪔',
      description: 'Celebrating India\'s diverse festivals',
      highlights: [
        'Diwali celebrations with rangoli',
        'Holi color festival',
        'Navratri dandiya nights',
        'Christmas & New Year parties',
        'Independence & Republic Day',
        'Regional festival events'
      ]
    }
  ];

  const clubs = [
    {
      name: 'Music Club',
      icon: Music,
      color: 'bg-purple-500',
      members: '80+',
      description: 'For melody lovers and musicians'
    },
    {
      name: 'Dance Society',
      icon: Sparkles,
      color: 'bg-pink-500',
      members: '100+',
      description: 'Groove and move with rhythm'
    },
    {
      name: 'Drama Club',
      icon: Drama,
      color: 'bg-blue-500',
      members: '60+',
      description: 'Stage performances and theater'
    },
    {
      name: 'Art Circle',
      icon: Palette,
      color: 'bg-orange-500',
      members: '50+',
      description: 'Creative expressions through art'
    },
    {
      name: 'Literary Society',
      icon: BookOpen,
      color: 'bg-green-500',
      members: '70+',
      description: 'Words, wisdom, and writing'
    },
    {
      name: 'Photography Club',
      icon: Camera,
      color: 'bg-indigo-500',
      members: '40+',
      description: 'Capture moments, create memories'
    }
  ];

  const achievements = [
    { year: '2024', event: 'State Level Cultural Fest', achievement: '1st Prize in Group Dance', icon: '🏆' },
    { year: '2024', event: 'Inter-College Drama Competition', achievement: 'Best Play Award', icon: '🎭' },
    { year: '2023', event: 'Regional Music Fest', achievement: 'Winner - Solo Singing', icon: '🎤' },
    { year: '2023', event: 'Art Exhibition Competition', achievement: 'Best Painting Award', icon: '🎨' },
    { year: '2023', event: 'University Fashion Show', achievement: 'Best Designer Award', icon: '✨' },
    { year: '2022', event: 'Poetry Slam Championship', achievement: 'First Position', icon: '📖' }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Stress Relief',
      description: 'Cultural activities help reduce academic stress and promote mental wellbeing'
    },
    {
      icon: Users,
      title: 'Social Bonding',
      description: 'Build lasting friendships and connections through shared interests'
    },
    {
      icon: Star,
      title: 'Talent Discovery',
      description: 'Discover and nurture your hidden talents and creative abilities'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Get recognized for your talents through competitions and awards'
    },
    {
      icon: Sparkles,
      title: 'Confidence Building',
      description: 'Boost self-confidence through stage performances and public speaking'
    },
    {
      icon: Flame,
      title: 'Life Skills',
      description: 'Develop teamwork, leadership, and time management skills'
    }
  ];

  const testimonials = [
    {
      name: 'Aisha Khan',
      course: 'BPT Final Year',
      role: 'Music Club President',
      message: 'Being part of the Music Club has been transformative. The annual fest gave me a platform to showcase my singing talent to hundreds of people!'
    },
    {
      name: 'Rohan Verma',
      course: 'BMRIT 3rd Year',
      role: 'Drama Club Member',
      message: 'Our drama performances taught me teamwork and public speaking. The experience has been invaluable for my personal growth.'
    },
    {
      name: 'Priya Sharma',
      course: 'B.Optom 2nd Year',
      role: 'Dance Society Captain',
      message: 'Dance is my passion and GIPS gave me the perfect platform to pursue it alongside my studies. Won several inter-college competitions!'
    }
  ];

  const filteredActivities = selectedCategory === 'all' 
    ? culturalCategories 
    : culturalCategories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 mt-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-[#DC539C] bg-opacity-20 p-4 rounded-full backdrop-blur-sm animate-bounce">
              <PartyPopper className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">Cultural Life at GIPS</h1>
          <p className="text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Where Creativity Meets Expression - Celebrating Art, Music, Dance, and Culture
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-gradient-to-r from-purple-500 bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-bold text-xl">6</span>
              <span className="ml-2">Cultural Clubs</span>
            </div>
            <div className="bg-gradient-to-r from-pink-500 bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-bold text-xl">400+</span>
              <span className="ml-2">Active Members</span>
            </div>
            <div className="bg-gradient-to-r from-orange-500 bg-opacity-20 bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-bold text-xl">50+</span>
              <span className="ml-2">Annual Events</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-purple-600">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Unleash Your Creative Spirit</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              GIPS believes in nurturing creativity and self-expression through a variety of cultural activities. 
              Students actively participate in music, dance, drama, art, and literary events that bring vibrancy 
              to campus life and create unforgettable memories.
            </p>
            <p>
              The annual cultural fest is one of the most awaited events at GIPS, providing a platform for 
              students to showcase their talents, celebrate India&apos;s rich cultural heritage, and compete with 
              participants from colleges across the region.
            </p>
            <p>
              From festive celebrations to talent hunts and inter-college competitions, GIPS ensures every 
              student has an opportunity to shine beyond academics and discover their creative potential.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('activities')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'activities'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Activities
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'events'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Annual Events
            </button>
            <button
              onClick={() => setActiveTab('clubs')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'clubs'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Clubs & Societies
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Why Participate in Cultural Activities?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center text-white mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-2xl shadow-xl p-10 text-white mb-12">
              <div className="flex items-center justify-center mb-8">
                <Award className="w-12 h-12 mr-4" />
                <h2 className="text-4xl font-bold">Recent Achievements</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className=" bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-5xl mb-3 text-center">{achievement.icon}</div>
                    <h4 className="font-bold text-lg mb-2">{achievement.event}</h4>
                    <p className="text-sm mb-2">{achievement.achievement}</p>
                    <p className="text-xs opacity-90">{achievement.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Student Voices</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-purple-600">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.course}</p>
                        <p className="text-xs text-purple-600 font-semibold">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">{testimonial.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Activities Tab */}
        {activeTab === 'activities' && (
          <div>
            {/* Category Filter */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Filter by Category:</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Categories
                </button>
                {culturalCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.emoji} {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Activities Display */}
            <div className="space-y-8">
              {filteredActivities.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                      <div className="flex items-center">
                        <span className="text-5xl mr-4">{category.emoji}</span>
                        <div>
                          <h3 className="text-3xl font-bold">{category.name}</h3>
                          <p className="text-sm opacity-90">Express yourself through {category.name.toLowerCase()}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.activities.map((activity, index) => (
                          <div key={index} className="flex items-center bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-4 hover:border-purple-400 transition-all">
                            <span className="text-purple-600 mr-3 text-xl">✓</span>
                            <span className="text-gray-700 font-medium">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Annual Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Annual Cultural Events</h2>
            {annualEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-6">{event.icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">{event.name}</h3>
                    <p className="text-purple-600 font-semibold text-lg">{event.month}</p>
                    <p className="text-gray-600 mt-0">{event.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {event.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4">
                      <Star className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Clubs Tab */}
        {activeTab === 'clubs' && (
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Cultural Clubs & Societies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {clubs.map((club, index) => {
                const IconComponent = club.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1">
                    <div className={`${club.color} p-6 text-white text-center`}>
                      <IconComponent className="w-16 h-16 mx-auto mb-3" />
                      <h3 className="text-2xl font-bold">{club.name}</h3>
                    </div>
                    <div className="p-6 text-center">
                      <p className="text-3xl font-bold text-purple-600 mb-2">{club.members}</p>
                      <p className="text-gray-600">Active Members</p>
                      <p className="text-gray-700 mt-4">{club.description}</p>
                      <button className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all">
                        Join Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-10 text-white text-center">
              <Users className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">How to Join a Club?</h3>
              <p className="text-xl mb-6 max-w-3xl mx-auto">
                All students are welcome to join any cultural club! Simply contact the club coordinator 
                or visit the Student Activities Office during the first week of semester.
              </p>
              <p className="text-lg opacity-90">
                No prior experience needed - just bring your enthusiasm and passion!
              </p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mt-0 text-center">
          <PartyPopper className="w-16 h-16 text-purple-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Be Part of Something Amazing!</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Don&apos;t let your talents go unnoticed. Join our vibrant cultural community and create 
            memories that will last a lifetime. Your stage is waiting!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
              Register for Events
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-full font-bold text-lg transition-all">
              View Event Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}