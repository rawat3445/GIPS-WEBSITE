"use client";
import { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  ChevronDown,
  Menu,
  Phone,
  FacebookIcon,
  InstagramIcon,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
} from "lucide-react";
import { gsap } from "gsap";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navRef = useRef(null);
  const navItemsRef = useRef([]); // store references to nav items

  useEffect(() => {
    const navElement = navRef.current;

    // Initially hide the navbar and its children
    gsap.set(navElement, { y: -150, opacity: 0 });
    gsap.set(navItemsRef.current, { y: 30, opacity: 0 });

    let hasShown = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      if (scrollY > 50 && !hasShown) {
        hasShown = true;

        // Create timeline animation
        const tl = gsap.timeline({ ease: "power4.out" });
        tl.to(navElement, {
          y: 0,
          opacity: 1,
          duration: 0.8,
        }).to(
          navItemsRef.current,
          {
            y: 0,
            opacity: 1,
            stagger: 0.08, // each item appears one by one
            duration: 0.4,
          },
          "-=0.2" // overlap slightly with navbar animation
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        {
          name: "Curriculum Innovations",
          href: "/academics/curriculum-innovations",
        },
        { name: "Examination", href: "/academics/examination" },
        { name: "Student Mentoring", href: "/academics/student-mentoring" },
        { name: "Libraries", href: "/academics/liby" },
        { name: "Academic Calendar", href: "/academics/academic-calendar" },
        { name: "List of Holidays", href: "/academics/holidays" },
        { name: "Student Support", href: "/academics/student-support" },
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
        { name: "Career", href: "more/career" },
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
        {/* WhatsApp */}
        <a
          href="https://wa.me/8273968106"
          className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        {/* Phone */}
        <a
          href="tel:+"
          className="flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-colors"
        >
          <Phone className="w-6 h-6" />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com"
          className="flex items-center justify-center w-12 h-12 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-lg transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className="w-6 h-6" />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          className="flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white rounded-full shadow-lg transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className="w-6 h-6" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6" />
        </a>

        {/* Twitter/X */}
        <a
          href="https://twitter.com"
          className="flex items-center justify-center w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full shadow-lg transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="w-6 h-6" />
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com"
          className="flex items-center justify-center w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube className="w-6 h-6" />
        </a>

        {/* Email */}
        <a
          href="mailto:info@example.com"
          className="flex items-center justify-center w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-colors"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>

      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${
          scrolled
            ? "bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-500 shadow-lg"
            : "bg-gradient-to-r from-yellow-400/70 via-white/50 to-blue-500/70"
        }`}
      >
        <div className="mx-auto">
          <div className="flex justify-between items-center h-40">
            {/* --- Logo --- */}
            <a
              href="/"
              className="flex flex-col items-center"
              ref={(el) => (navItemsRef.current[0] = el)}
            >
              <div className="flex items-center space-x-3">
                <img
                  src="/logo-paramedicalfinal-e1717133101289.png"
                  alt="GIPS Logo"
                  width="80"
                  height="80"
                  className="rounded-full object-cover"
                />
                <span className="text-3xl font-bold text-blue-700">GIPS</span>
              </div>
              <p className="text-lg font-medium text-gray-700 mt-1 whitespace-nowrap text-center">
                Garhwal Institute of Paramedical Sciences
              </p>
            </a>

            {/* --- Desktop Menu --- */}
            <div
              className="hidden lg:flex items-center flex-grow justify-end space-x-4"
              ref={(el) => (navItemsRef.current[1] = el)}
            >
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        className={`flex items-center px-3 py-2 text-sm font-light text-gray-700 ${item.hoverColor} transition-colors rounded-md`}
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

              <a
                href="/apply-now"
                className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
              >
                Apply Now
              </a>
            </div>

            {/* --- Mobile Button --- */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-blue-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              ref={(el) => (navItemsRef.current[2] = el)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
