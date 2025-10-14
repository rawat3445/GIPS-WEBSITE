"use client"
import { useState } from 'react';
import { Calendar, Sun, Moon, Filter, Download, PartyPopper, MapPin, Clock, Info } from 'lucide-react';

export default function Holidays() {
  const [filterType, setFilterType] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const academicYear = "2024-2025";

  const holidayCategories = [
    { id: 'national', name: 'National Holidays', color: 'from-orange-500 to-red-600', icon: '🇮🇳' },
    { id: 'festival', name: 'Festival Holidays', color: 'from-purple-500 to-pink-600', icon: '🎉' },
    { id: 'academic', name: 'Academic Breaks', color: 'from-blue-500 to-indigo-600', icon: '📚' }
  ];

  const holidays = [
    // National Holidays
    { date: '2024-08-15', day: 'Thursday', occasion: 'Independence Day', type: 'national', description: 'Celebrating 78th Independence Day of India', month: 'August' },
    { date: '2024-10-02', day: 'Wednesday', occasion: 'Gandhi Jayanti', type: 'national', description: 'Birth anniversary of Mahatma Gandhi', month: 'October' },
    { date: '2025-01-26', day: 'Sunday', occasion: 'Republic Day', type: 'national', description: 'Celebrating the Constitution of India', month: 'January' },
    { date: '2025-05-01', day: 'Thursday', occasion: 'Labour Day', type: 'national', description: 'International Workers Day', month: 'May' },
    
    // Festival Holidays
    { date: '2024-08-26', day: 'Monday', occasion: 'Janmashtami', type: 'festival', description: 'Birth of Lord Krishna', month: 'August' },
    { date: '2024-10-12', day: 'Saturday', occasion: 'Dussehra', type: 'festival', description: 'Victory of good over evil', month: 'October' },
    { date: '2024-10-31', day: 'Thursday', occasion: 'Diwali', type: 'festival', description: 'Festival of lights', month: 'October' },
    { date: '2024-11-01', day: 'Friday', occasion: 'Govardhan Puja', type: 'festival', description: 'Day after Diwali', month: 'November' },
    { date: '2024-11-02', day: 'Saturday', occasion: 'Bhai Dooj', type: 'festival', description: 'Brother-sister celebration', month: 'November' },
    { date: '2024-12-25', day: 'Wednesday', occasion: 'Christmas', type: 'festival', description: 'Birth of Jesus Christ', month: 'December' },
    { date: '2025-01-01', day: 'Wednesday', occasion: 'New Year', type: 'festival', description: 'Beginning of calendar year', month: 'January' },
    { date: '2025-02-19', day: 'Wednesday', occasion: 'Maha Shivaratri', type: 'festival', description: 'Great night of Lord Shiva', month: 'February' },
    { date: '2025-03-08', day: 'Saturday', occasion: 'Holi', type: 'festival', description: 'Festival of colors', month: 'March' },
    { date: '2025-04-14', day: 'Monday', occasion: 'Ambedkar Jayanti', type: 'festival', description: 'Birth anniversary of Dr. B.R. Ambedkar', month: 'April' },
    { date: '2025-04-18', day: 'Friday', occasion: 'Good Friday', type: 'festival', description: 'Crucifixion of Jesus Christ', month: 'April' },
    
    // Academic Breaks
    { date: '2024-12-26', day: 'Thursday', occasion: 'Winter Break Start', type: 'academic', description: 'Year-end vacation begins', month: 'December' },
    { date: '2024-12-31', day: 'Tuesday', occasion: 'Winter Break', type: 'academic', description: 'Continued vacation', month: 'December' },
    { date: '2025-05-25', day: 'Sunday', occasion: 'Summer Vacation Begins', type: 'academic', description: 'Summer break starts', month: 'May' },
    { date: '2025-06-30', day: 'Monday', occasion: 'Summer Vacation Ends', type: 'academic', description: 'Preparing for new session', month: 'June' }
  ];

  const months = ['July', 'August', 'September', 'October', 'November', 'December', 
                  'January', 'February', 'March', 'April', 'May', 'June'];

  const filteredHolidays = holidays.filter(holiday => {
    const typeMatch = filterType === 'all' || holiday.type === filterType;
    const monthMatch = selectedMonth === 'all' || holiday.month === selectedMonth;
    return typeMatch && monthMatch;
  });

  const getCategoryColor = (type) => {
    const category = holidayCategories.find(cat => cat.id === type);
    return category ? category.color : 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (type) => {
    const category = holidayCategories.find(cat => cat.id === type);
    return category ? category.icon : '📅';
  };

  const getTotalHolidaysByType = (type) => {
    return holidays.filter(h => h.type === type).length;
  };

  const upcomingHolidays = holidays
    .filter(h => new Date(h.date) >= new Date())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 mt-30">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-white px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-red bg-opacity-20 p-4 rounded-full backdrop-blur-sm animate-bounce">
              <PartyPopper className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-4 text-center">List of Holidays</h1>
          <p className="text-2xl text-orange-100 text-center mb-6">
            Academic Year {academicYear}
          </p>
          <div className="bg-pink-900 bg-opacity-20 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-center text-lg">
              Plan your year ahead with our comprehensive list of holidays, festivals, and academic breaks 
              observed at GIPS throughout the academic session.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Statistics Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {holidayCategories.map((category) => (
            <div key={category.id} className={`bg-gradient-to-r ${category.color} rounded-2xl shadow-xl p-8 text-white transform hover:scale-105 transition-all`}>
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
              <div className="text-4xl font-bold">{getTotalHolidaysByType(category.id)}</div>
              <p className="text-sm opacity-90">holidays this year</p>
            </div>
          ))}
        </div>

        {/* Upcoming Holidays Preview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <Clock className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Upcoming Holidays</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingHolidays.map((holiday, index) => (
              <div key={index} className={`bg-gradient-to-br ${getCategoryColor(holiday.type)} rounded-xl p-6 text-white`}>
                <div className="text-4xl mb-3">{getCategoryIcon(holiday.type)}</div>
                <h4 className="text-xl font-bold mb-2">{holiday.occasion}</h4>
                <p className="text-sm opacity-90 mb-2">{holiday.date}</p>
                <p className="text-xs opacity-80">{holiday.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filters and View Controls */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center">
              <Filter className="w-6 h-6 text-gray-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Filter Holidays</h3>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  viewMode === 'grid' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  viewMode === 'list' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                List View
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-600 mb-3">Filter by Type:</p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFilterType('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  filterType === 'all'
                    ? 'bg-gradient-to-r from-orange-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Holidays
              </button>
              {holidayCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilterType(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    filterType === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Month Filter */}
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-3">Filter by Month:</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedMonth('all')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedMonth === 'all'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Months
              </button>
              {months.map((month) => (
                <button
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedMonth === month
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Holidays Display */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {filterType === 'all' ? 'All Holidays' : holidayCategories.find(c => c.id === filterType)?.name}
            <span className="text-lg text-gray-500 ml-3">({filteredHolidays.length} holidays)</span>
          </h2>

          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHolidays.map((holiday, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 border-l-4 hover:shadow-2xl transition-all transform hover:-translate-y-1"
                  style={{ borderLeftColor: `var(--${holiday.type}-color)` }}
                >
                  <div className={`bg-gradient-to-r ${getCategoryColor(holiday.type)} w-14 h-14 rounded-full flex items-center justify-center text-3xl mb-4`}>
                    {getCategoryIcon(holiday.type)}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{holiday.occasion}</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{holiday.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Sun className="w-4 h-4 mr-2" />
                      <span>{holiday.day}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{holiday.month}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm italic">{holiday.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-600 to-pink-600 text-white">
                    <th className="px-6 py-4 text-left text-lg font-semibold">Date</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Day</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Occasion</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Type</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredHolidays.map((holiday, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      } border-b hover:bg-orange-50 transition-colors`}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-800">{holiday.date}</td>
                      <td className="px-6 py-4 text-gray-700">{holiday.day}</td>
                      <td className="px-6 py-4 font-bold text-gray-800">{holiday.occasion}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${getCategoryColor(holiday.type)}`}>
                          {getCategoryIcon(holiday.type)} {holiday.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{holiday.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Important Information */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex items-center mb-6">
            <Info className="w-8 h-8 mr-3" />
            <h2 className="text-3xl font-bold">Important Information</h2>
          </div>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-2xl mr-3">📌</span>
              <span>Holidays falling on Sundays may be compensated with a working Saturday</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">📌</span>
              <span>Festival dates may vary based on lunar calendar and will be confirmed closer to the date</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">📌</span>
              <span>Additional holidays may be declared by the government and will be notified separately</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">📌</span>
              <span>Students should check the notice board regularly for any changes or updates</span>
            </li>
          </ul>
        </div>

        {/* Download Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <Download className="w-16 h-16 text-orange-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Download Holiday List</h3>
          <p className="text-gray-600 mb-6">Get a printable PDF version of the complete holiday list</p>
          <button className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}