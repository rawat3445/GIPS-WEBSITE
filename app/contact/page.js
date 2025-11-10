"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";

export default function ContactPage() {
  const lenisRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 5000);
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, {
        offset: -80,
        duration: 1.5,
        easing: (t) =>
          t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
      });
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }

        .gradient-text {
          background: linear-gradient(
            135deg,
            #0d9488 0%,
            #14b8a6 50%,
            #06b6d4 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 text-gray-800">
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0">
              <Image
                fill
                src="/Contact_Hero.jpg"
                alt="Garhwal Mountains"
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/85 via-emerald-500/75 to-cyan-600/85"></div>
          </div>

          <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight floating drop-shadow-2xl">
              Get in Touch with GIPS
            </h1>
            <p className="text-lg md:text-2xl font-medium text-white/90 mb-10 drop-shadow-lg">
              Have questions? We&apos;re here to help — reach out to Garhwal
              Institute of Paramedical Sciences for admissions, collaborations,
              or campus information.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection("#contact-form")}
                className="bg-white text-teal-700 font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-teal-50 hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>📧</span>
                Contact Us
              </button>
              <button
                onClick={() => scrollToSection("#location")}
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-teal-700 hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>📍</span>
                Find Us
              </button>
            </div>
          </div>

          <svg
            className="absolute bottom-0 left-0 w-full text-white z-10"
            viewBox="0 0 1440 320"
            fill="currentColor"
          >
            <path
              fillOpacity="1"
              d="M0,128L48,122.7C96,117,192,107,288,138.7C384,171,480,245,576,240C672,235,768,149,864,122.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>
        {/* CONTACT INFO SECTION */}
        <section
          id="contact-info"
          className="py-20 bg-white relative overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              <span className="gradient-text">Contact Information</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
              Connect with us through any of these channels — we&apos;re always
              here to help
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all text-center border-2 border-teal-200">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Email
                </h3>
                <a
                  href="mailto:garhwalparamedicalinstitute@gmail.com"
                  className="text-teal-600 font-medium break-words hover:text-teal-700"
                >
                  garhwalparamedicalinstitute@gmail.com
                </a>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all text-center border-2 border-emerald-200">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Phone
                </h3>
                <p className="text-gray-700 font-medium">+91 8273968106</p>
                <p className="text-gray-700 font-medium">+91 9634099389</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all text-center border-2 border-cyan-200">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Location
                </h3>
                <p className="text-gray-700 font-medium">
                  Village & PO-Kyark, Pauri Garhwal, Uttarakhand
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT FORM SECTION */}
        <section
          id="contact-form"
          className="py-20 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600 relative overflow-hidden"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Send Us a Message
              </h2>
              <p className="text-lg text-white/90">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white/95 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-white border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-gray-800"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full bg-white border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-gray-800"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="w-full bg-white border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-gray-800"
                  required
                />
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full bg-white border-2 border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-vertical text-gray-800"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white hover:from-teal-700 hover:to-emerald-700 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform inline-flex items-center gap-3"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>

              {status === "sending" && (
                <div className="mt-6 p-4 bg-blue-100 text-blue-800 rounded-xl text-center font-semibold">
                  Sending message...
                </div>
              )}
              {status === "success" && (
                <div className="mt-6 p-4 bg-emerald-100 text-emerald-800 rounded-xl text-center font-semibold">
                  ✅ Message sent successfully!
                </div>
              )}
              {status === "error" && (
                <div className="mt-6 p-4 bg-red-100 text-red-800 rounded-xl text-center font-semibold">
                  ❌ Error sending message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </section>
        {/* GOOGLE MAP SECTION */}
        <section id="location" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Find Us on the Map</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Visit our campus nestled in the beautiful Garhwal region of
                Uttarakhand
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-2 ring-teal-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.1986024176927!2d78.75577991155279!3d30.174320274753477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909a5b487640e03%3A0xf61d9be9411bf214!2sGarhwal%20Institute%20of%20Paramedical%20Sciences!5e0!3m2!1sen!2sin!4v1761801199053!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://maps.google.com/?q=Garhwal+Institute+of+Paramedical+Sciences"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  ></path>
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </section>
        {/* TEAM SECTION */}
        <section className="py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              <span className="gradient-text">Meet Our Team</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
              Our dedicated team is ready to assist you with any inquiries
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all text-center border-2 border-teal-100">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg text-5xl">
                  👨‍⚕️
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Dr. Animsh Mondal
                </h3>
                <p className="text-teal-600 font-semibold mb-3">
                  Vice Principal
                </p>
                <p className="text-gray-600 text-sm">
                  Academic affairs and student guidance
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all text-center border-2 border-emerald-100">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg text-5xl">
                  🎓
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Admission Office
                </h3>
                <p className="text-emerald-600 font-semibold mb-3">
                  Student Inquiries
                </p>
                <p className="text-gray-600 text-sm">
                  Admissions and course information
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all text-center border-2 border-cyan-100">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg text-5xl">
                  🏢
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Administration
                </h3>
                <p className="text-cyan-600 font-semibold mb-3">
                  General Information
                </p>
                <p className="text-gray-600 text-sm">
                  Campus facilities and general queries
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA SECTION */}
        <section className="py-20 text-center bg-gradient-to-r from-teal-700 via-emerald-700 to-cyan-700 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Stay Connected with GIPS
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Follow us on our official platforms for updates, admissions, and
              news about Garhwal Institute of Paramedical Sciences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-3 bg-white text-teal-700 px-10 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:bg-teal-50 hover:scale-105 transition-all"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                Visit Homepage
              </Link>
              <button
                onClick={() => scrollToSection("#contact-info")}
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-teal-700 hover:scale-105 transition-all"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Contact Info
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
