"use client";
import { useState } from 'react';
import { Library, BookOpen, Laptop, Users, Search, Clock, BookMarked, Download, Wifi, Coffee, Volume2, Lightbulb, CheckCircle, Calendar } from 'lucide-react';

export default function Libraries() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const facilities = [
    {
      icon: BookOpen,
      title: "Extensive Collection",
      description: "10,000+ books, journals, and reference materials",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Laptop,
      title: "Digital Library",
      description: "Access to online journals and international databases",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Reading Zones",
      description: "Quiet individual study areas and group discussion spaces",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Search,
      title: "Research Facilities",
      description: "Computer-enabled workstations for research activities",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Free Wi-Fi access throughout the library premises",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Coffee,
      title: "Comfortable Environment",
      description: "Climate-controlled spaces with ergonomic seating",
      color: "from-red-500 to-red-600"
    }
  ];

  const collections = [
    {
      category: "Medical Textbooks",
      count: "5,000+",
      description: "Comprehensive collection covering all paramedical disciplines"
    },
    {
      category: "Reference Books",
      count: "2,000+",
      description: "Encyclopedias, dictionaries, and specialized references"
    },
    {
      category: "Research Journals",
      count: "150+",
      description: "National and international peer-reviewed journals"
    },
    {
      category: "E-Books",
      count: "3,000+",
      description: "Digital books accessible 24/7 through online portal"
    },
    {
      category: "Thesis & Projects",
      count: "500+",
      description: "Archive of student dissertations and research projects"
    },
    {
      category: "Multimedia Resources",
      count: "200+",
      description: "Educational CDs, DVDs, and video materials"
    }
  ];

  const digitalResources = [
    "PubMed - Medical literature database",
    "MEDLINE - Biomedical journals",
    "Cochrane Library - Systematic reviews",
    "ScienceDirect - Scientific research",
    "JSTOR - Academic journals",
    "SpringerLink - Research publications",
    "ProQuest - Dissertations and theses",
    "Google Scholar - Academic search"
  ];

  const services = [
    {
      icon: BookMarked,
      title: "Book Lending",
      details: [
        "Borrow up to 5 books at a time",
        "14-day lending period",
        "Renewal facility available",
        "Online reservation system"
      ]
    },
    {
      icon: Download,
      title: "Digital Access",
      details: [
        "24/7 access to e-resources",
        "Remote login facility",
        "Download and print services",
        "Mobile app access"
      ]
    },
    {
      icon: Search,
      title: "Reference Services",
      details: [
        "Assistance in literature search",
        "Bibliography compilation",
        "Citation guidance",
        "Research support"
      ]
    },
    {
      icon: Lightbulb,
      title: "User Training",
      details: [
        "Library orientation programs",
        "Database usage workshops",
        "Research methodology sessions",
        "Information literacy classes"
      ]
    }
  ];

  const timings = [
    { day: "Monday - Friday", hours: "10:00 AM - 4:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Exam Period", hours: "11:00 AM - 2:00 PM" }
  ];

  const rules = [
    "Maintain silence in the library premises",
    "Carry your library card for book transactions",
    "Handle books and materials with care",
    "Return borrowed books on time to avoid fines",
    "Use mobile phones only in designated areas",
    "No food or beverages in reading areas",
    "Respect other library users",
    "Report any damaged or lost materials immediately"
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-0">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-4">
            <Library className="w-12 h-12 mr-4" />
            <h1 className="text-5xl font-bold">Library & Learning Resources</h1>
          </div>
          <p className="text-xl text-indigo-100 mb-8">
            Your Gateway to Knowledge and Academic Excellence at GIPS
          </p>
          
          <div className="max-w-2xl">
            <div className="flex bg-white rounded-lg overflow-hidden shadow-lg">
              <input
                type="text"
                placeholder="Search books, journals, authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1 px-6 py-4 text-gray-800 text-lg focus:outline-none"
              />
              <button
                onClick={handleSearch}
                className="bg-purple-600 hover:bg-purple-700 px-8 py-4 flex items-center transition-colors cursor-pointer"
              >
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to GIPS Library</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              The library at GIPS is a comprehensive knowledge hub designed to support learning, teaching, 
              and research activities across all programs. With a vast collection of books, journals, 
              research papers, and e-resources, our library serves as the intellectual heart of the institution.
            </p>
            <p className="text-lg">
              We provide a conducive learning environment with modern facilities, digital resources, 
              and expert assistance to help students and faculty excel in their academic pursuits. 
              Our library is not just a repository of books, but a dynamic learning space that fosters 
              curiosity, creativity, and academic excellence.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('collections')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'collections'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Collections
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'services'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('timings')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'timings'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Timings & Rules
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Library Facilities</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {facilities.map((facility, index) => {
                    const IconComponent = facility.icon;
                    return (
                      <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-500 transition-all hover:shadow-lg">
                        <div className={`bg-gradient-to-r ${facility.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">{facility.title}</h4>
                        <p className="text-gray-600">{facility.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'collections' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Collections</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {collections.map((collection, index) => (
                    <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-l-4 border-indigo-600">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-semibold text-gray-800">{collection.category}</h4>
                        <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {collection.count}
                        </span>
                      </div>
                      <p className="text-gray-700">{collection.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-6 text-white">
                  <h4 className="text-2xl font-bold mb-4">Digital Resources & Databases</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {digitalResources.map((resource, index) => (
                      <div key={index} className="flex items-center bg-blue-500 bg-opacity-20 rounded-lg px-4 py-3">
                        <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                        <span>{resource}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Library Services</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-purple-500 transition-all">
                        <div className="flex items-center mb-4">
                          <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                            <IconComponent className="w-6 h-6 text-purple-600" />
                          </div>
                          <h4 className="text-xl font-semibold text-gray-800">{service.title}</h4>
                        </div>
                        <ul className="space-y-2">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-purple-600 mr-2">•</span>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'timings' && (
              <div>
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <Clock className="w-8 h-8 text-indigo-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">Library Timings</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {timings.map((timing, index) => (
                      <div key={index} className="flex justify-between items-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-l-4 border-indigo-600">
                        <span className="font-semibold text-gray-800">{timing.day}</span>
                        <span className="text-indigo-600 font-bold">{timing.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-6">
                    <Volume2 className="w-8 h-8 text-indigo-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-800">Library Rules & Regulations</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {rules.map((rule, index) => (
                      <div key={index} className="flex items-start bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-indigo-500 transition-colors">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Library at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-indigo-100">Books & Resources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-indigo-100">Journals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">3,000+</div>
              <div className="text-indigo-100">E-Books</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-indigo-100">Seating Capacity</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Need Assistance?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our librarians are always ready to help you find the resources you need and guide you in your research activities.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center bg-indigo-50 rounded-lg px-6 py-3">
              <Calendar className="w-5 h-5 text-indigo-600 mr-3" />
              <span className="text-gray-700">Visit the library circulation desk</span>
            </div>
            <div className="flex items-center bg-purple-50 rounded-lg px-6 py-3">
              <Search className="w-5 h-5 text-purple-600 mr-3" />
              <span className="text-gray-700">Contact reference section for research help</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}