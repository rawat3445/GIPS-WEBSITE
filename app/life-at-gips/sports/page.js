"use client"
import { useState } from 'react';
import { Trophy, Dumbbell, Users, Calendar, Medal, Heart, Target, Zap, Award, Star, Flag, Timer } from 'lucide-react';

export default function Sports() {
  const [selectedSport, setSelectedSport] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const sportsCategories = [
    {
      id: 'outdoor',
      name: 'Outdoor Sports',
      icon: '⚽',
      color: 'from-green-500 to-emerald-600',
      sports: [
        { name: 'Cricket', icon: '🏏', description: 'Full-size cricket ground with practice nets' },
        { name: 'Football', icon: '⚽', description: 'FIFA standard football field' },
        { name: 'Basketball', icon: '🏀', description: 'Outdoor and indoor courts available' },
        { name: 'Volleyball', icon: '🏐', description: 'Multiple courts for practice and matches' },
        { name: 'Athletics', icon: '🏃', description: '400m track and field events' },
        { name: 'Badminton', icon: '🏸', description: 'Outdoor courts with proper lighting' }
      ]
    },
    {
      id: 'indoor',
      name: 'Indoor Sports',
      icon: '🏓',
      color: 'from-blue-500 to-indigo-600',
      sports: [
        { name: 'Table Tennis', icon: '🏓', description: 'Multiple tables in air-conditioned hall' },
        { name: 'Chess', icon: '♟️', description: 'Chess club with regular tournaments' },
        { name: 'Carrom', icon: '🎯', description: 'Boards available in recreation room' },
        { name: 'Yoga', icon: '🧘', description: 'Daily sessions in dedicated yoga hall' },
        { name: 'Badminton', icon: '🏸', description: 'Indoor courts with professional flooring' },
        { name: 'Gym', icon: '💪', description: 'Modern gymnasium with latest equipment' }
      ]
    },
    {
      id: 'fitness',
      name: 'Fitness & Wellness',
      icon: '💪',
      color: 'from-orange-500 to-red-600',
      sports: [
        { name: 'Gymnasium', icon: '🏋️', description: 'Cardio and strength training equipment' },
        { name: 'Yoga & Meditation', icon: '🧘', description: 'Morning and evening sessions' },
        { name: 'Aerobics', icon: '🤸', description: 'Group fitness classes' },
        { name: 'Zumba', icon: '💃', description: 'Dance fitness workouts' },
        { name: 'Physiotherapy', icon: '⚕️', description: 'Sports injury prevention and recovery' },
        { name: 'Nutrition Guidance', icon: '🥗', description: 'Diet plans for athletes' }
      ]
    }
  ];

  const facilities = [
    {
      icon: Dumbbell,
      title: "Modern Gymnasium",
      description: "Equipped with latest cardio and strength training machines",
      features: ["Treadmills", "Cross trainers", "Weight training", "Personal trainers"]
    },
    {
      icon: Flag,
      title: "Sports Grounds",
      description: "Well-maintained outdoor facilities for various sports",
      features: ["Cricket ground", "Football field", "Basketball courts", "Volleyball courts"]
    },
    {
      icon: Users,
      title: "Indoor Complex",
      description: "Air-conditioned multi-purpose indoor sports hall",
      features: ["Badminton courts", "Table tennis", "Yoga hall", "Recreation area"]
    },
    {
      icon: Heart,
      title: "Fitness Center",
      description: "Complete wellness and fitness programs",
      features: ["Yoga classes", "Aerobics", "Zumba", "Meditation sessions"]
    }
  ];

  const achievements = [
    { year: '2024', event: 'Inter-College Cricket Tournament', position: 'Winners', icon: '🏆' },
    { year: '2024', event: 'State Level Basketball Championship', position: 'Runners-up', icon: '🥈' },
    { year: '2023', event: 'University Football League', position: 'Semi-finalists', icon: '⚽' },
    { year: '2023', event: 'Table Tennis Championship', position: 'Winners', icon: '🏓' },
    { year: '2023', event: 'Athletics Meet - 100m Sprint', position: 'Gold Medal', icon: '🥇' },
    { year: '2022', event: 'Volleyball Tournament', position: 'Champions', icon: '🏐' }
  ];

  const events = [
    {
      name: 'Annual Sports Week',
      month: 'November',
      description: 'Week-long celebration with various competitions',
      activities: ['Inter-department tournaments', 'Track and field events', 'Fun games', 'Prize distribution']
    },
    {
      name: 'Intra-College Championships',
      month: 'Throughout Year',
      description: 'Regular competitions within college departments',
      activities: ['Cricket leagues', 'Football matches', 'Basketball tournaments', 'Badminton contests']
    },
    {
      name: 'Fitness Challenges',
      month: 'Monthly',
      description: 'Health and fitness initiatives for all students',
      activities: ['Yoga workshops', 'Marathon runs', 'Fitness assessments', 'Wellness seminars']
    }
  ];

  const benefits = [
    { icon: Heart, title: "Physical Health", description: "Improve cardiovascular fitness and overall health" },
    { icon: Zap, title: "Mental Wellness", description: "Reduce stress and enhance mental clarity" },
    { icon: Users, title: "Teamwork", description: "Build leadership and collaboration skills" },
    { icon: Target, title: "Discipline", description: "Develop focus, dedication, and time management" },
    { icon: Trophy, title: "Achievement", description: "Gain confidence through competitive success" },
    { icon: Star, title: "Networking", description: "Build friendships and social connections" }
  ];

  const sportsCommittee = [
    { role: "Sports Director", name: "Dr. Rajesh Kumar", contact: "sports@gips.edu.in" },
    { role: "Physical Education Officer", name: "Prof. Amit Sharma", contact: "pe@gips.edu.in" },
    { role: "Fitness Coordinator", name: "Mr. Vikram Singh", contact: "fitness@gips.edu.in" },
    { role: "Women's Sports Coordinator", name: "Ms. Priya Patel", contact: "women-sports@gips.edu.in" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 mt-30">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-cyan-200 px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-20 p-4 rounded-full backdrop-blur-sm animate-pulse">
              <Trophy className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">Sports at GIPS</h1>
          <p className="text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Empowering Students Through Sports, Fitness, and Healthy Competition
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-sky-400 bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-bold text-xl">15+</span>
              <span className="ml-2">Sports Activities</span>
            </div>
            <div className="bg-blue-500 bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-bold text-xl">500+</span>
              <span className="ml-2">Active Athletes</span>
            </div>
            <div className="bg-purple-700 bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-bold text-xl">20+</span>
              <span className="ml-2">Annual Events</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-green-600">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Sports Matter at GIPS</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At GIPS, we believe that physical fitness and sports are integral to holistic education. 
            Our comprehensive sports program is designed to promote physical health, mental wellness, 
            teamwork, and leadership skills among students.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We provide state-of-the-art facilities, professional coaching, and regular competitions 
            to help students discover their athletic potential while maintaining a healthy balance 
            between academics and physical activities.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('sports')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'sports'
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Sports & Activities
            </button>
            <button
              onClick={() => setActiveTab('facilities')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'facilities'
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Facilities
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'events'
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Events & Achievements
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            {/* Benefits Grid */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Benefits of Sports Participation</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center text-white mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sports Committee */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-10 text-white">
              <h2 className="text-4xl font-bold mb-8 text-center">Sports Committee</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {sportsCommittee.map((member, index) => (
                  <div key={index} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
                    <h4 className="text-xl font-bold mb-2">{member.role}</h4>
                    <p className="text-lg mb-2">{member.name}</p>
                    <p className="text-sm opacity-90">{member.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Sports & Activities Tab */}
        {activeTab === 'sports' && (
          <div className="space-y-8">
            {sportsCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <div className="flex items-center">
                    <span className="text-5xl mr-4">{category.icon}</span>
                    <h3 className="text-3xl font-bold">{category.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.sports.map((sport, index) => (
                      <div key={index} className="border-2 border-gray-200 rounded-lg p-5 hover:border-green-500 transition-all hover:shadow-lg">
                        <div className="flex items-center mb-3">
                          <span className="text-4xl mr-3">{sport.icon}</span>
                          <h4 className="text-xl font-bold text-gray-800">{sport.name}</h4>
                        </div>
                        <p className="text-gray-600 text-sm">{sport.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Facilities Tab */}
        {activeTab === 'facilities' && (
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">World-Class Sports Facilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => {
                const IconComponent = facility.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center text-white mb-6">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{facility.title}</h3>
                    <p className="text-gray-600 mb-4">{facility.description}</p>
                    <div className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Events & Achievements Tab */}
        {activeTab === 'events' && (
          <div>
            {/* Annual Events */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Annual Sports Events</h2>
              <div className="space-y-6">
                {events.map((event, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-10 h-10 text-green-600 mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{event.name}</h3>
                        <p className="text-gray-600">{event.month}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {event.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center bg-green-50 rounded-lg p-3">
                          <span className="text-green-600 mr-2">•</span>
                          <span className="text-gray-700">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl shadow-xl p-10 text-white">
              <div className="flex items-center justify-center mb-8">
                <Medal className="w-12 h-12 mr-4" />
                <h2 className="text-4xl font-bold">Recent Achievements</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-5xl mb-3">{achievement.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{achievement.event}</h4>
                    <p className="text-lg mb-1">{achievement.position}</p>
                    <p className="text-sm opacity-90">{achievement.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mt-12 text-center">
          <Award className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Join the Sports Community!</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you&apos;re a seasoned athlete or just starting out, GIPS sports programs welcome everyone. 
            Discover your passion, build your fitness, and make lifelong memories!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
              Register for Sports
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-full font-bold text-lg transition-all">
              View Sports Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}