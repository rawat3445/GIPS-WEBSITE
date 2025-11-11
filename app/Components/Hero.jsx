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
  const [showPopup, setShowPopup] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNo: "",
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

  // Animate form on load
  useEffect(() => {
    if (popupRef.current && showPopup) {
      gsap.fromTo(
        popupRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
      );
    }
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

    // Special handling for mobile number - only allow digits
    if (name === "mobileNo") {
      const numericValue = value.replace(/[^0-9]/g, "").slice(0, 10);
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle close button click
  const handleCloseForm = () => {
    if (popupRef.current) {
      gsap.to(popupRef.current, {
        x: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          setShowPopup(false);
        },
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("🚀 Sending form data:", formData);

      const res = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("📬 Server response:", data);

      if (res.ok && data.success) {
        alert("✅ Form submitted successfully!");

        // Animate form out before hiding
        handleCloseForm();

        // Reset form data
        setFormData({
          firstName: "",
          middleName: "",
          lastName: "",
          mobileNo: "",
          streetAddress: "",
          city: "",
          state: "",
          country: "",
          zipCode: "",
          courseName: "",
        });
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("🔥 Error submitting form:", err);
      alert("⚠️ Server error. Check console for details.");
    }
  };

  const courses = [
    "Bachelor in Physiotherapy",
    "Bachelor in Operation Theater Technologist",
    "Diploma in Optometry",
    "B.Sc in Optometry",
    "Bachelor in Medical Radio Imaging Technology",
  ];

  // Scroll handlers
  const onPopupWheel = (e) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const atTop = el.scrollTop === 0;
    const atBottom =
      Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;

    if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
      e.preventDefault();
    }
    e.stopPropagation();
  };

  const onTouchStart = (e) => {
    touchStartY.current = e.touches ? e.touches[0].clientY : e.clientY;
  };

  const onTouchMove = (e) => {
    const el = scrollContainerRef.current;
    if (!el || touchStartY.current == null) return;

    const currentY = e.touches ? e.touches[0].clientY : e.clientY;
    const deltaY = touchStartY.current - currentY;

    const atTop = el.scrollTop === 0;
    const atBottom =
      Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;

    if ((atTop && deltaY < 0) || (atBottom && deltaY > 0)) {
      e.preventDefault();
    }
    e.stopPropagation();
  };

  const onTouchEnd = () => {
    touchStartY.current = null;
  };

  // Don't render form if showPopup is false
  if (!showPopup) {
    return (
      <section className="relative w-full h-[100vh] md:h-screen overflow-hidden">
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
                className="object-cover object-center w-full h-full"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 flex flex-col mt-55 items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white m-6 drop-shadow-lg gap-1">
            <span ref={leftTextRef} className="inline-block">
              Garhwal Institute of{" "}
            </span>
            <span
              ref={rightTextRef}
              className="text-cyan-300 inline-block ml-3"
            >
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
      </section>
    );
  }

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
      <div className="relative z-20 flex flex-col mt-55 items-center justify-center h-full text-center px-6">
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

      {/* GLASSMORPHISM FORM with CLOSE BUTTON */}
      <div
        ref={popupRef}
        className="fixed top-40 right-17 w-70 max-h-[calc(80vh-170px)] z-40 rounded-2xl shadow-2xl flex flex-col"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
      >
        {/* Header with Glassmorphism and Close Button */}
        <div
          className="flex-shrink-0 px-4 py-3 border-b rounded-t-2xl relative"
          style={{
            background: "rgba(6, 182, 212, 0.4)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <h2 className="text-base font-bold text-white text-center drop-shadow-lg">
            Quick Registration
          </h2>

          {/* Close Button */}
          <button
            onClick={handleCloseForm}
            className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all group"
            aria-label="Close form"
          >
            <svg
              className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable Form */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto px-4 py-3"
          onWheel={onPopupWheel}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{ touchAction: "auto", WebkitOverflowScrolling: "touch" }}
        >
          <form onSubmit={handleSubmit} className="space-y-2.5">
            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-white mb-1 drop-shadow-md">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-2.5 py-2 text-sm font-medium text-gray-900 bg-white/90 border border-white/50 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none mb-1.5 placeholder-gray-500"
              />
              <input
                type="text"
                name="middleName"
                placeholder="Middle Name (Optional)"
                value={formData.middleName}
                onChange={handleInputChange}
                className="w-full px-2.5 py-2 text-sm font-medium text-gray-900 bg-white/90 border border-white/50 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none mb-1.5 placeholder-gray-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-2.5 py-2 text-sm font-medium text-gray-900 bg-white/90 border border-white/50 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none placeholder-gray-500"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-bold text-white mb-1 drop-shadow-md">
                Mobile No <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="mobileNo"
                placeholder="10-digit mobile number"
                value={formData.mobileNo}
                onChange={handleInputChange}
                required
                minLength={10}
                maxLength={10}
                className="w-full px-2.5 py-2 text-sm font-medium text-gray-900 bg-white/90 border border-white/50 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none placeholder-gray-500"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-bold text-white mb-1 drop-shadow-md">
                Address <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="streetAddress"
                placeholder="Street Address"
                value={formData.streetAddress}
                onChange={handleInputChange}
                required
                className="w-full px-2.5 py-2 text-sm font-medium text-gray-900 bg-white/90 border border-white/50 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none mb-1.5 placeholder-gray-500"
              />
              <div className="grid grid-cols-2 gap-1.5 mb-1.5">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-2.5 py-2 text-sm font-medium text-gray-900 bg-white/90 border border-white/50 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none placeholder-gray-500"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="w-full px-2.5 py-2 text-sm font-medium text-gray-900 bg-white/90 border border-white/50 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none placeholder-gray-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-2.5 py-2 text-sm font-medium text-gray-900 bg-white/90 border border-white/50 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none placeholder-gray-500"
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-2.5 py-2 text-sm font-medium text-gray-900 bg-white/90 border border-white/50 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none placeholder-gray-500"
                />
              </div>
            </div>

            {/* Course */}
            <div>
              <label className="block text-xs font-bold text-white mb-1 drop-shadow-md">
                Course <span className="text-red-400">*</span>
              </label>
              <select
                name="courseName"
                value={formData.courseName}
                onChange={handleInputChange}
                required
                className="w-full px-2.5 py-2 text-sm font-medium text-gray-900 bg-white/90 border border-white/50 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
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
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-2.5 text-sm rounded-lg transition-all shadow-lg hover:shadow-xl mt-3"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
