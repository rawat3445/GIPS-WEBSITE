"use client";
import { useState } from 'react';
import { Calendar, Clock, BookOpen, GraduationCap, FileText, AlertCircle, CheckCircle, Award, Bell } from 'lucide-react';

export default function AcademicCalendar() {
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');

  const academicYear = "2024-2025";

  const semesters = [
    { id: 'odd', name: 'Odd Semester (Jul - Dec)', color: 'blue' },
    { id: 'even', name: 'Even Semester (Jan - Jun)', color: 'purple' }
  ];

  const eventCategories = [
    { type: 'exam', label: 'Examinations', color: 'bg-red-500', icon: FileText },
    { type: 'registration', label: 'Registration', color: 'bg-blue-500', icon: BookOpen },
    { type: 'holiday', label: 'Holidays', color: 'bg-green-500', icon: Calendar },
    { type: 'activity', label: 'Activities', color: 'bg-purple-500', icon: Award },
    { type: 'important', label: 'Important Dates', color: 'bg-orange-500', icon: Bell }
  ];

  const calendarEvents = [
    // July 2024
    { month: 'July', date: '1-7', title: 'Admission Process', type: 'registration', semester: 'odd', description: 'New student admissions open' },
    { month: 'July', date: '15', title: 'Odd Semester Begins', type: 'important', semester: 'odd', description: 'Classes commence for all courses' },
    { month: 'July', date: '20', title: 'Orientation Program', type: 'activity', semester: 'odd', description: 'Welcome program for new students' },
    
    // August 2024
    { month: 'August', date: '15', title: 'Independence Day', type: 'holiday', semester: 'odd', description: 'National holiday' },
    { month: 'August', date: '26', title: 'Janmashtami', type: 'holiday', semester: 'odd', description: 'Festival holiday' },
    
    // September 2024
    { month: 'September', date: '5', title: 'Teachers Day Celebration', type: 'activity', semester: 'odd', description: 'Honoring faculty members' },
    { month: 'September', date: '20-25', title: 'Mid-Term Examinations', type: 'exam', semester: 'odd', description: 'First internal assessment' },
    
    // October 2024
    { month: 'October', date: '2', title: 'Gandhi Jayanti', type: 'holiday', semester: 'odd', description: 'National holiday' },
    { month: 'October', date: '12', title: 'Dussehra', type: 'holiday', semester: 'odd', description: 'Festival holiday' },
    { month: 'October', date: '31', title: 'Diwali Break Begins', type: 'holiday', semester: 'odd', description: 'Festival vacation starts' },
    
    // November 2024
    { month: 'November', date: '1-5', title: 'Diwali Vacation', type: 'holiday', semester: 'odd', description: 'Festival break' },
    { month: 'November', date: '15', title: 'Sports Week', type: 'activity', semester: 'odd', description: 'Inter-departmental sports' },
    { month: 'November', date: '25-30', title: 'Pre-Final Examinations', type: 'exam', semester: 'odd', description: 'Second internal assessment' },
    
    // December 2024
    { month: 'December', date: '5-20', title: 'End Semester Exams', type: 'exam', semester: 'odd', description: 'Final theory and practical exams' },
    { month: 'December', date: '25', title: 'Christmas', type: 'holiday', semester: 'odd', description: 'Festival holiday' },
    { month: 'December', date: '26-31', title: 'Winter Break', type: 'holiday', semester: 'odd', description: 'Year-end vacation' },
    
    // January 2025
    { month: 'January', date: '1', title: 'New Year', type: 'holiday', semester: 'even', description: 'Public holiday' },
    { month: 'January', date: '10', title: 'Result Declaration', type: 'important', semester: 'even', description: 'Odd semester results' },
    { month: 'January', date: '15', title: 'Even Semester Begins', type: 'important', semester: 'even', description: 'New semester starts' },
    { month: 'January', date: '26', title: 'Republic Day', type: 'holiday', semester: 'even', description: 'National holiday' },
    
    // February 2025
    { month: 'February', date: '14', title: 'Valentine Social Activity', type: 'activity', semester: 'even', description: 'Blood donation camp' },
    { month: 'February', date: '19', title: 'Maha Shivaratri', type: 'holiday', semester: 'even', description: 'Festival holiday' },
    { month: 'February', date: '24-28', title: 'Mid-Term Examinations', type: 'exam', semester: 'even', description: 'First internal assessment' },
    
    // March 2025
    { month: 'March', date: '8', title: 'Holi', type: 'holiday', semester: 'even', description: 'Festival holiday' },
    { month: 'March', date: '14', title: 'Science Exhibition', type: 'activity', semester: 'even', description: 'Student project showcase' },
    { month: 'March', date: '25-30', title: 'Pre-Final Examinations', type: 'exam', semester: 'even', description: 'Second internal assessment' },
    
    // April 2025
    { month: 'April', date: '10', title: 'Clinical Training Begins', type: 'important', semester: 'even', description: 'Hospital rotation starts' },
    { month: 'April', date: '14', title: 'Ambedkar Jayanti', type: 'holiday', semester: 'even', description: 'National holiday' },
    { month: 'April', date: '18', title: 'Good Friday', type: 'holiday', semester: 'even', description: 'Festival holiday' },
    
    // May 2025
    { month: 'May', date: '1', title: 'Labour Day', type: 'holiday', semester: 'even', description: 'Public holiday' },
    { month: 'May', date: '5-20', title: 'End Semester Exams', type: 'exam', semester: 'even', description: 'Final examinations' },
    { month: 'May', date: '25', title: 'Summer Vacation Begins', type: 'holiday', semester: 'even', description: 'Break period starts' },
    
    // June 2025
    { month: 'June', date: '1-30', title: 'Summer Break', type: 'holiday', semester: 'even', description: 'Vacation period' },
    { month: 'June', date: '15', title: 'Result Declaration', type: 'important', semester: 'even', description: 'Even semester results' }
  ];

  const months = ['July', 'August', 'September', 'October', 'November', 'December', 
                  'January', 'February', 'March', 'April', 'May', 'June'];

  const filteredEvents = calendarEvents.filter(event => {
    const semesterMatch = selectedSemester === 'all' || event.semester === selectedSemester;
    const monthMatch = selectedMonth === 'all' || event.month === selectedMonth;
    return semesterMatch && monthMatch;
  });

  const getEventIcon = (type) => {
    const category = eventCategories.find(cat => cat.type === type);
    return category ? category.icon : Calendar;
  };

  const getEventColor = (type) => {
    const category = eventCategories.find(cat => cat.type === type);
    return category ? category.color : 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 mt-30">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className=" bg-opacity-20 p-4 rounded-full backdrop-blur-sm">
              <Calendar className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-4 text-center">Academic Calendar</h1>
          <p className="text-2xl text-blue-100 text-center mb-6">
            Academic Year {academicYear}
          </p>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-center text-blue-500 text-lg">
              Plan your academic journey with our comprehensive calendar featuring important dates, 
              examinations, holidays, and campus activities throughout the year.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Semester Selector */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Clock className="w-8 h-8 text-indigo-600 mr-3" />
            Select Semester
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button
              onClick={() => setSelectedSemester('all')}
              className={`p-6 rounded-xl font-semibold text-lg transition-all ${
                selectedSemester === 'all'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Full Year
            </button>
            {semesters.map((semester) => (
              <button
                key={semester.id}
                onClick={() => setSelectedSemester(semester.id)}
                className={`p-6 rounded-xl font-semibold text-lg transition-all ${
                  selectedSemester === semester.id
                    ? `bg-gradient-to-r from-${semester.color}-600 to-${semester.color}-700 text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {semester.name}
              </button>
            ))}
          </div>
        </div>

        {/* Event Categories Legend */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Event Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {eventCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.type} className="flex items-center bg-gray-50 rounded-lg p-4">
                  <div className={`${category.color} w-4 h-4 rounded-full mr-3`}></div>
                  <span className="text-sm font-medium text-gray-700">{category.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Month Filter */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Filter by Month</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedMonth('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedMonth === 'all'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Months
            </button>
            {months.map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedMonth === month
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        {/* Events Timeline */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <BookOpen className="w-8 h-8 text-indigo-600 mr-3" />
            Events & Important Dates
          </h2>
          
          {filteredEvents.length > 0 ? (
            <div className="space-y-4">
              {months.map((month) => {
                const monthEvents = filteredEvents.filter(e => e.month === month);
                if (monthEvents.length === 0) return null;
                
                return (
                  <div key={month}>
                    <h3 className="text-2xl font-bold text-indigo-600 mb-4 mt-8">{month}</h3>
                    <div className="space-y-3">
                      {monthEvents.map((event, index) => {
                        const IconComponent = getEventIcon(event.type);
                        const colorClass = getEventColor(event.type);
                        
                        return (
                          <div
                            key={index}
                            className="flex items-start bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border-l-4 hover:shadow-lg transition-all"
                            style={{ borderLeftColor: colorClass.replace('bg-', '#') }}
                          >
                            <div className={`${colorClass} w-12 h-12 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-xl font-bold text-gray-800">{event.title}</h4>
                                <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-semibold">
                                  {event.date}
                                </span>
                              </div>
                              <p className="text-gray-600">{event.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No events found for selected filters</p>
            </div>
          )}
        </div>

        {/* Important Notes */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-8 mt-8 text-white">
          <div className="flex items-center mb-6">
            <AlertCircle className="w-8 h-8 mr-3" />
            <h2 className="text-3xl font-bold">Important Notes</h2>
          </div>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
              <span>Students must maintain 75% attendance to be eligible for examinations</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
              <span>Exam schedules and hall tickets will be published 2 weeks before examinations</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
              <span>Holiday list may be subject to changes as per government notifications</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
              <span>Keep checking the student portal and notice board for updates</span>
            </li>
          </ul>
        </div>

        {/* Download Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8 text-center">
          <GraduationCap className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Need a Printable Version?</h3>
          <p className="text-gray-600 mb-6">Download the complete academic calendar as PDF</p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all">
            Download Calendar PDF
          </button>
        </div>
      </div>
    </div>
  );
}