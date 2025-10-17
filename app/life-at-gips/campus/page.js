"use client";
import { useState } from 'react';
import { Home, Building2, Utensils, Wifi, Bus, Coffee, TreePine, Dumbbell, BookOpen, Users, Heart, Lightbulb, Leaf, Globe, Camera, Smile } from 'lucide-react';

export default function CampusLife() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFacility, setSelectedFacility] = useState(null);

  const campusFacilities = [
    {
      id: 'academic',
      icon: Building2,
      title: "Academic Facilities",
      color: "from-blue-500 to-indigo-600",
      emoji: "🏫",
      features: [
        "Smart classrooms with audio-visual aids",
        "Modern laboratories with latest equipment",
        "Spacious lecture halls and seminar rooms",
        "Practical training centers",
        "Digital learning resources",
        "Research facilities"
      ]
    },
    {
      id: 'library',
      icon: BookOpen,
      title: "Library & Resources",
      color: "from-purple-500 to-pink-600",
      emoji: "📚",
      features: [
        "10,000+ books and journals",
        "Digital library with e-resources",
        "Comfortable reading zones",
        "Group study rooms",
        "Computer workstations",
        "24/7 access during exams"
      ]
    },
    {
      id: 'hostel',
      icon: Home,
      title: "Hostel Accommodation",
      color: "from-green-500 to-teal-600",
      emoji: "🏠",
      features: [
        "Separate hostels for boys and girls",
        "24/7 security and CCTV surveillance",
        "Comfortable furnished rooms",
        "Common rooms and TV lounges",
        "Wi-Fi connectivity",
        "Laundry facilities"
      ]
    },
    {
      id: 'cafeteria',
      icon: Utensils,
      title: "Cafeteria & Dining",
      color: "from-orange-500 to-red-600",
      emoji: "🍽️",
      features: [
        "Hygienic and nutritious meals",
        "Multiple cuisine options",
        "Separate vegetarian & non-veg counters",
        "Snacks and beverages",
        "Affordable pricing",
        "Clean and spacious dining area"
      ]
    },
    {
      id: 'sports',
      icon: Dumbbell,
      title: "Sports & Recreation",
      color: "from-yellow-500 to-orange-600",
      emoji: "⚽",
      features: [
        "Modern gymnasium",
        "Indoor and outdoor sports facilities",
        "Basketball and volleyball courts",
        "Cricket ground and football field",
        "Table tennis and badminton",
        "Yoga and fitness center"
      ]
    },
    {
      id: 'transport',
      icon: Bus,
      title: "Transportation",
      color: "from-cyan-500 to-blue-600",
      emoji: "🚌",
      features: [
        "College bus service on multiple routes",
        "Safe and comfortable travel",
        "Affordable transport fees",
        "GPS-enabled buses",
        "Well-maintained fleet",
        "Convenient pick-up points"
      ]
    },
    {
      id: 'medical',
      icon: Heart,
      title: "Medical Facilities",
      color: "from-red-500 to-pink-600",
      emoji: "🏥",
      features: [
        "On-campus medical room",
        "First aid facilities",
        "Tie-up with nearby hospitals",
        "Regular health checkup camps",
        "Emergency ambulance service",
        "Mental health counseling"
      ]
    },
    {
      id: 'technology',
      icon: Wifi,
      title: "Technology & IT",
      color: "from-indigo-500 to-purple-600",
      emoji: "💻",
      features: [
        "High-speed Wi-Fi campus-wide",
        "Computer labs with latest systems",
        "Student portal for academics",
        "Digital attendance system",
        "Online learning platforms",
        "Tech support desk"
      ]
    }
  ];

  const clubsAndSocieties = [
    {
      name: "Innovation & Entrepreneurship Club",
      icon: Lightbulb,
      color: "bg-yellow-500",
      description: "Fostering innovative thinking and entrepreneurial skills",
      activities: ["Start-up workshops", "Innovation challenges", "Mentorship programs", "Pitch competitions"]
    },
    {
      name: "Health & Wellness Society",
      icon: Heart,
      color: "bg-red-500",
      description: "Promoting health awareness and wellness programs",
      activities: ["Health camps", "Awareness campaigns", "Yoga sessions", "Nutrition workshops"]
    },
    {
      name: "Environmental Club",
      icon: Leaf,
      color: "bg-green-500",
      description: "Leading green initiatives and sustainability efforts",
      activities: ["Tree plantation", "Waste management", "Clean campus drives", "Eco-friendly events"]
    },
    {
      name: "Social Outreach Program",
      icon: Users,
      color: "bg-blue-500",
      description: "Community service and social responsibility",
      activities: ["Village health camps", "Blood donation drives", "Educational outreach", "Charity events"]
    },
    {
      name: "Cultural Society",
      icon: Globe,
      color: "bg-purple-500",
      description: "Celebrating diversity and cultural heritage",
      activities: ["Cultural festivals", "Traditional events", "Art exhibitions", "Music & dance"]
    },
    {
      name: "Photography Club",
      icon: Camera,
      color: "bg-pink-500",
      description: "Capturing campus moments and memories",
      activities: ["Photo walks", "Contests", "Exhibitions", "Workshops"]
    }
  ];

  const studentLife = [
    {
      aspect: "Academic Support",
      icon: BookOpen,
      description: "Dedicated faculty mentorship, remedial classes, and study groups"
    },
    {
      aspect: "Social Events",
      icon: Users,
      description: "Regular festivals, celebrations, and bonding activities"
    },
    {
      aspect: "Personal Growth",
      icon: Smile,
      description: "Personality development, leadership training, and skill workshops"
    },
    {
      aspect: "Recreation",
      icon: Coffee,
      description: "Cafeteria hangouts, sports activities, and entertainment zones"
    }
  ];

  const campusHighlights = [
    { title: "Green Campus", description: "Eco-friendly environment with lush greenery", icon: "🌳" },
    { title: "Safe & Secure", description: "24/7 security with CCTV surveillance", icon: "🛡️" },
    { title: "Wi-Fi Enabled", description: "High-speed internet throughout campus", icon: "📶" },
    { title: "Modern Infrastructure", description: "State-of-the-art facilities and equipment", icon: "🏢" },
    { title: "Diverse Community", description: "Students from across India", icon: "🌍" },
    { title: "Active Clubs", description: "Multiple societies for every interest", icon: "🎯" }
  ];

  const dayInLife = [
    { time: "7:00 AM", activity: "Morning wake-up, freshen up", icon: "☀️" },
    { time: "8:00 AM", activity: "Breakfast at cafeteria", icon: "🍳" },
    { time: "9:00 AM", activity: "Classes and practical sessions begin", icon: "📖" },
    { time: "1:00 PM", activity: "Lunch break and socializing", icon: "🍽️" },
    { time: "2:00 PM", activity: "Afternoon classes/lab work", icon: "🔬" },
    { time: "5:00 PM", activity: "Sports, gym, or club activities", icon: "⚽" },
    { time: "7:00 PM", activity: "Dinner and relaxation", icon: "🌙" },
    { time: "8:00 PM", activity: "Study time, assignments, projects", icon: "💻" },
    { time: "10:00 PM", activity: "Free time, hostel activities", icon: "🎮" }
  ];

  const testimonials = [
    {
      name: "Amit Kumar",
      course: "BPT Final Year",
      hostel: "Boys Hostel",
      message: "Campus life at GIPS has been incredible! The hostel feels like a second home, and the friends I've made here are for life."
    },
    {
      name: "Sneha Patel",
      course: "B.Optom 3rd Year",
      hostel: "Girls Hostel",
      message: "The best part about GIPS is the supportive environment. From academics to extracurriculars, there's something for everyone!"
    },
    {
      name: "Rahul Singh",
      course: "BMRIT 2nd Year",
      hostel: "Day Scholar",
      message: "The campus facilities are amazing! The library, labs, and sports facilities make learning enjoyable and holistic."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 mt-0">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-400  bg-opacity-20 p-4 rounded-full backdrop-blur-sm">
              <Home className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">Campus Life at GIPS</h1>
          <p className="text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Where Learning Meets Living - Experience a Vibrant, Inclusive, and Memorable Journey
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {campusHighlights.slice(0, 4).map((highlight, index) => (
              <div key={index} className="bg-blue-400 bg-opacity-20 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-3xl mb-2">{highlight.icon}</div>
                <div className="font-bold text-sm">{highlight.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12 border-t-4 border-green-600">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to GIPS Campus</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              The campus of GIPS offers a vibrant and inclusive environment that blends academics with 
              holistic development. Students enjoy access to modern classrooms, well-equipped laboratories, 
              comprehensive libraries, and diverse recreational spaces that make learning engaging and enjoyable.
            </p>
            <p>
              Clubs and societies on campus encourage participation in diverse fields such as innovation, 
              health awareness, environmental care, and social outreach programs. These initiatives help 
              students develop leadership skills, social responsibility, and a well-rounded personality.
            </p>
            <p>
              With a perfect mix of learning and leisure, GIPS ensures that every student&apos;s journey is 
              memorable, engaging, and filled with opportunities to grow personally and professionally. 
              Our campus is not just a place to study - it&apos;s a community where friendships are forged 
              and memories are created.
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
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Overview
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
              onClick={() => setActiveTab('clubs')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'clubs'
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Clubs & Societies
            </button>
            <button
              onClick={() => setActiveTab('dayinlife')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'dayinlife'
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              A Day in Life
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            {/* Campus Highlights */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">What Makes Our Campus Special</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {campusHighlights.map((highlight, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all text-center">
                    <div className="text-5xl mb-4">{highlight.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Life Aspects */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-10 mb-12">
              <h2 className="text-4xl font-bold mb-8 text-center">Student Life at GIPS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {studentLife.map((aspect, index) => {
                  const IconComponent = aspect.icon;
                  return (
                    <div key={index} className=" bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
                      <IconComponent className="w-10 h-10 mb-3" />
                      <h3 className="text-2xl font-bold mb-2">{aspect.aspect}</h3>
                      <p className="text-blue-100">{aspect.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Student Experiences</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-600">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.course}</p>
                        <p className="text-xs text-green-600 font-semibold">{testimonial.hostel}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">{testimonial.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Facilities Tab */}
        {activeTab === 'facilities' && (
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Campus Facilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {campusFacilities.map((facility) => {
                const IconComponent = facility.icon;
                return (
                  <div key={facility.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                    <div className={`bg-gradient-to-r ${facility.color} p-6 text-white`}>
                      <div className="flex items-center">
                        <div className="text-5xl mr-4">{facility.emoji}</div>
                        <div>
                          <h3 className="text-2xl font-bold">{facility.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="space-y-3">
                        {facility.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <span className="text-green-600 mr-3 mt-1">✓</span>
                            <span className="text-gray-700">{feature}</span>
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

        {/* Clubs Tab */}
        {activeTab === 'clubs' && (
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Clubs & Societies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {clubsAndSocieties.map((club, index) => {
                const IconComponent = club.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                    <div className={`${club.color} p-6 text-white text-center`}>
                      <IconComponent className="w-16 h-16 mx-auto mb-3" />
                      <h3 className="text-xl font-bold">{club.name}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">{club.description}</p>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                      <div className="space-y-2">
                        {club.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <span className="text-green-600 mr-2">•</span>
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-10 text-white text-center">
              <Users className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Join a Club Today!</h3>
              <p className="text-xl mb-6 max-w-3xl mx-auto">
                Every student is encouraged to join at least one club or society. It&apos;s a great way to 
                pursue your interests, develop new skills, and make lasting friendships!
              </p>
              <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all shadow-lg">
                Explore All Clubs
              </button>
            </div>
          </div>
        )}

        {/* Day in Life Tab */}
        {activeTab === 'dayinlife' && (
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">A Typical Day at GIPS</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <div className="space-y-4">
                {dayInLife.map((slot, index) => (
                  <div key={index} className="flex items-center bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all">
                    <div className="text-4xl mr-6">{slot.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800">{slot.time}</h4>
                      <p className="text-gray-600">{slot.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-10 text-center">
              <Smile className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Every Day is an Adventure!</h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                While this represents a typical schedule, every day at GIPS brings new experiences, 
                surprises, and opportunities. From impromptu jam sessions to late-night study groups, 
                from sports matches to cultural events - there&apos;s never a dull moment on campus!
              </p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mt-0 text-center">
          <TreePine className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Be Part of GIPS Family?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Campus life at GIPS is more than just academics - it&apos;s about creating memories, 
            building friendships, and discovering yourself. Join us and experience the difference!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
              Schedule Campus Visit
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Download Prospectus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}