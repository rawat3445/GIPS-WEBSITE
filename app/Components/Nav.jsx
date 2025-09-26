"use client";
import { useState } from "react";
import { ChevronDown, Menu, X, Phone, MessageCircle } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      name: "Home",
      href: "/",
      hoverColor: "hover:text-green-700 hover:bg-green-100",
    },
    {
      name: "About",
      href: "/about",
      hoverColor: "hover:text-red-700 hover:bg-red-100",
      dropdown: [
        { name: "About GIPS", href: "/about/gips" },
        { name: "Vision and Mission", href: "/about/vision-mission" },
        {
          name: "Approval, Accreditation & Rankings",
          href: "/about/accreditation",
        },
        { name: "Awards & Rankings", href: "/about/awards" },
        {
          name: "Institutional Social Responsibilities",
          href: "/about/social-responsibilities",
        },
        { name: "Departments", href: "/about/departments" },
        { name: "Student Services", href: "/about/student-services" },
        { name: "How to Reach Us", href: "/about/location" },
      ],
    },
    {
      name: "Programs",
      href: "/programs",
      hoverColor: "hover:text-purple-700 hover:bg-purple-100",
      dropdown: [
        { name: "BPT", href: "/programs/bpt" },
        { name: "BMRIT", href: "/programs/bmrit" },
        { name: "BOTT", href: "/programs/bott" },
        { name: "B.Sc. in Optometry", href: "/programs/optometry" },
        { name: "Diploma in Optometry", href: "/programs/diploma-optometry" },
      ],
    },
    {
      name: "Admissions",
      href: "/admissions",
      hoverColor: "hover:text-orange-700 hover:bg-orange-100",
      dropdown: [
        { name: "After 12th", href: "/admissions/after12th" },
        { name: "How to Apply", href: "/admissions/how-to-apply" },
        { name: "Scholarships", href: "/admissions/scholarships" },
        { name: "Fee Payment", href: "/admissions/fee-payment" },
        {
          name: "Fee Refund & Cancellation",
          href: "/admissions/fee-refund-cancellation",
        },
        { name: "Admission Offices", href: "/admissions/admission-offices" },
        { name: "Education Loan", href: "/admissions/education-loan" },
      ],
    },
    {
      name: "Academics",
      href: "/academics",
      hoverColor: "hover:text-blue-700 hover:bg-blue-100",
      dropdown: [
        { name: "Academic Overview", href: "/academics/overview" },
        { name: "Curriculum Innovations", href: "/academics/curriculum" },
        { name: "Examination", href: "/academics/examination" },
        { name: "Student Mentoring", href: "/academics/mentoring" },
        { name: "Libraries", href: "/academics/libraries" },
        { name: "Academic Calendar", href: "/academics/calendar" },
        { name: "List of Holidays", href: "/academics/holidays" },
        { name: "Student Support", href: "/academics/support" },
      ],
    },
    {
      name: "Life at GIPS",
      href: "/life-at-gips",
      hoverColor: "hover:text-pink-700 hover:bg-pink-100",
      dropdown: [
        { name: "Sports", href: "/life-at-gips/sports" },
        { name: "Cultural", href: "/life-at-gips/cultural" },
        { name: "Accommodation", href: "/life-at-gips/accommodation" },
        { name: "Campus Life", href: "/life-at-gips/campus" },
        { name: "Anti-ragging", href: "/life-at-gips/anti-ragging" },
      ],
    },
    {
      name: "Research",
      href: "/research",
      hoverColor: "hover:text-teal-700 hover:bg-teal-100",
      dropdown: [
        { name: "Overview", href: "/research/overview" },
        { name: "Research & Development Cell", href: "/research/rd-cell" },
        {
          name: "Intellectual Property Rights Cell",
          href: "/research/ipr-cell",
        },
        { name: "Centre of Excellence", href: "/research/excellence" },
        { name: "Student Research Cell", href: "/research/student-cell" },
        { name: "Startups & Innovation Cell", href: "/research/innovation" },
      ],
    },
    {
      name: "Placements",
      href: "/placements",
      hoverColor: "hover:text-indigo-700 hover:bg-indigo-100",
      dropdown: [
        { name: "Placement Overview", href: "/placements/overview" },
        { name: "Testimonials", href: "/placements/testimonials" },
      ],
    },
    {
      name: "IQAC",
      href: "/iqac",
      hoverColor: "hover:text-yellow-700 hover:bg-yellow-100",
    },
    {
      name: "More",
      href: "#",
      hoverColor: "hover:text-violet-700 hover:bg-violet-100",
      dropdown: [
        { name: "Career", href: "/career" },
        { name: "Alumni", href: "/alumni" },
        { name: "News & Events", href: "/news-events" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      {/* Fixed Side Support Links */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        <a
          href="https://wa.me/1234567890"
          className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:+1234567890"
          className="flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-colors"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className=" mx-auto   ">
          <div className="flex justify-between items-center h-24">
            {/* --- Logo + GIPS (Left) --- */}
            <a href="/" className="flex flex-col items-center">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo-paramedicalfinal-e1717133101289.png"
                  alt="GIPS Logo"
                  width="40"
                  height="40"
                  className="rounded-full object-cover"
                />
                <span className="text-2xl font-bold text-blue-700">GIPS</span>
              </div>
              <p className="text-lg font-medium text-gray-700 mt-1 whitespace-nowrap text-center">
                Garhwal Institute of Paramedical Sciences
              </p>
            </a>

            {/* --- Desktop Menu (Right, full width) --- */}
            <div className="hidden lg:flex items-center flex-grow justify-end space-x-4">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        className={`flex items-center px-3 py-2 text-sm font-medium text-gray-700 ${item.hoverColor} transition-colors rounded-md`}
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </button>
                      {activeDropdown === index && (
                        <div
                          className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                          onMouseEnter={() => setActiveDropdown(index)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.dropdown.map((dropdownItem, dropIndex) => (
                            <a
                              key={dropIndex}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-100 hover:text-emerald-800 transition-colors"
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium text-gray-700 ${item.hoverColor} transition-colors rounded-md`}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}

              {/* Apply Now Button */}
              <a
                href="/apply-now"
                className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
              >
                Apply Now
              </a>
            </div>

            {/* --- Mobile Menu Button --- */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-blue-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* --- Mobile Menu --- */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 max-h-96 overflow-y-auto">
            <div className="px-4 py-3 space-y-1">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <div>
                      <button
                        className={`flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 ${item.hoverColor} rounded-md`}
                        onClick={() => handleDropdownToggle(index)}
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === index && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdown.map((dropdownItem, dropIndex) => (
                            <a
                              key={dropIndex}
                              href={dropdownItem.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-cyan-100 hover:text-cyan-800 rounded-md"
                              onClick={() => setIsOpen(false)}
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={`block px-3 py-2 text-gray-700 ${item.hoverColor} rounded-md`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}

              <a
                href="/apply-now"
                className="block w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-center text-sm font-medium rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
