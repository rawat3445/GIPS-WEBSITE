"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const images = [
    "/Hero.webp",
    "/2025-04-22.webp",
    "/entrance.webp",
    "/2025-04-22 (2).webp",
  ];

  const [current, setCurrent] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    courseName: "",
  });

  // Refs for GSAP animation
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const popupRef = useRef(null);
  const backdropRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // For touch handling
  const touchStartY = useRef(null);

  // Animation on load
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    tl.fromTo(
      leftTextRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1 }
    )
      .fromTo(
        rightTextRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1 },
        "-=0.7"
      )
      .fromTo(
        [paragraphRef.current, buttonRef.current],
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.3 },
        "-=0.4"
      );
  }, []);

  // Popup animation on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Handle body scroll lock when popup shows
  useEffect(() => {
    if (showPopup) {
      // Get scrollbar width to prevent layout shift
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Lock body scroll
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      // Animate popup entrance
      if (popupRef.current && backdropRef.current) {
        gsap.set(popupRef.current, { x: "100%", opacity: 0 });
        gsap.set(backdropRef.current, { opacity: 0 });

        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        tl.to(backdropRef.current, { opacity: 1, duration: 0.3 }).to(
          popupRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.1"
        );
      }
    } else {
      // Unlock body scroll
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      // Cleanup on unmount
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [showPopup]);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    closePopup();
  };

  // Close popup with smooth animation
  const closePopup = () => {
    if (popupRef.current && backdropRef.current) {
      const tl = gsap.timeline({
        defaults: { ease: "power2.in" },
        onComplete: () => {
          setShowPopup(false);
        },
      });

      tl.to(popupRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      }).to(
        backdropRef.current,
        {
          opacity: 0,
          duration: 0.3,
        },
        "-=0.2"
      );
    }
  };

  const courses = [
    "Bachelor in Physiotherapy",
    "Bachelor in Operation Theater Technologist",
    "Diploma in Optometry",
    "B.Sc in Optometry",
    "Bachelor in Medical Radio Imaging Technology",
  ];

  // --- Scroll handlers for popup scrollable area ---
  const onPopupWheel = (e) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    // Determine if we're at the top or bottom
    const atTop = el.scrollTop === 0;
    const atBottom =
      Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;

    // If trying to scroll past top or bottom, prevent default (so body doesn't attempt to scroll)
    if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
      e.preventDefault();
    }
    // Stop propagation so global listeners won't intercept.
    e.stopPropagation();
    // Let default otherwise so the container scrolls normally.
  };

  // Touch handling for mobile to prevent overscroll from propagating to the body
  const onTouchStart = (e) => {
    touchStartY.current = e.touches ? e.touches[0].clientY : e.clientY;
  };

  const onTouchMove = (e) => {
    const el = scrollContainerRef.current;
    if (!el || touchStartY.current == null) return;

    const currentY = e.touches ? e.touches[0].clientY : e.clientY;
    const deltaY = touchStartY.current - currentY; // positive means scrolling down

    const atTop = el.scrollTop === 0;
    const atBottom =
      Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;

    if ((atTop && deltaY < 0) || (atBottom && deltaY > 0)) {
      // Trying to scroll past bounds: prevent default to avoid body bounce
      e.preventDefault();
    }
    e.stopPropagation();
  };

  const onTouchEnd = () => {
    touchStartY.current = null;
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`GIPS Banner ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col mt-55 items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white m-6 drop-shadow-lg gap-1">
          <span ref={leftTextRef} className="inline-block">
            Garhwal Institute of{" "}
          </span>
          <span ref={rightTextRef} className="text-cyan-300 inline-block ml-3">
            Paramedical Sciences
          </span>
        </h1>
        <p
          ref={paragraphRef}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
        >
          Empowering students with excellence in paramedical education,
          research, and clinical training.
        </p>
        <Link
          ref={buttonRef}
          href="/programs"
          className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all"
        >
          Explore Courses
        </Link>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Popup Form */}
      {showPopup && (
        <>
          {/* Backdrop */}
          <div
            ref={backdropRef}
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            onClick={closePopup}
          />

          {/* Form Container - Scrollable */}
          <div
            ref={popupRef}
            className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header - Fixed */}
            <div className="flex-shrink-0 flex justify-between items-center p-6 border-b border-gray-200 bg-white">
              <h2 className="text-2xl font-bold text-gray-800">
                Student Registration
              </h2>
              <button
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700 text-3xl font-bold transition-colors leading-none"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            {/* Scrollable Form Content */}
            <div
              ref={scrollContainerRef}
              className="flex-1 overflow-y-auto p-6"
              // Wheel/touch handlers to allow inner scrolling and prevent overscroll propagation
              onWheel={onPopupWheel}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              // ensure touch-action is auto so touchmove is delivered
              style={{ touchAction: "auto", WebkitOverflowScrolling: "touch" }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Student Name Section */}
                <div>
                  <label className="block text-base font-semibold text-gray-900 mb-3">
                    Student Name <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-900 placeholder-gray-400 transition-all outline-none"
                    />
                    <input
                      type="text"
                      name="middleName"
                      placeholder="Middle Name (Optional)"
                      value={formData.middleName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-900 placeholder-gray-400 transition-all outline-none"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-900 placeholder-gray-400 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Address Section */}
                <div>
                  <label className="block text-base font-semibold text-gray-900 mb-3">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="streetAddress"
                      placeholder="Street Address"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-900 placeholder-gray-400 transition-all outline-none"
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-900 placeholder-gray-400 transition-all outline-none"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State/Province"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-900 placeholder-gray-400 transition-all outline-none"
                    />
                    <input
                      type="text"
                      name="country"
                      placeholder="Country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-900 placeholder-gray-400 transition-all outline-none"
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="Zip Code"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-900 placeholder-gray-400 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block text-base font-semibold text-gray-900 mb-3">
                    Course Name <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-gray-900 bg-white transition-all outline-none"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
