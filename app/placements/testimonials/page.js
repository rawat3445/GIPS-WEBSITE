"use client";
import Image from "next/image";
import { Star, Heart, Quote } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <main className="bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50 text-gray-800">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-orange-600 via-rose-600 to-amber-500">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,_#fff_0%,_transparent_60%)]"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Voices of GIPS
          </h1>
          <p className="text-lg md:text-2xl font-light text-amber-100 mb-10">
            Real experiences from students and alumni who’ve walked the GIPS journey
          </p>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full text-amber-50"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <path
            fillOpacity="1"
            d="M0,224L48,197.3C96,171,192,117,288,90.7C384,64,480,64,576,85.3C672,107,768,149,864,154.7C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* ==================== INTRO SECTION ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-orange-700 mb-6">
            What Our Students & Alumni Say
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At Garhwal Institute of Paramedical Sciences, our students are our pride.
            Their testimonials reflect our commitment to academic excellence, clinical training,
            and a culture of compassion that defines GIPS.
          </p>
        </div>
      </section>

      {/* ==================== STUDENT TESTIMONIALS ==================== */}
      <section className="py-20 bg-gradient-to-b from-orange-50 via-amber-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-rose-700 mb-10">
            Student Testimonials
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Aditi Sharma",
                course: "BPT (2022 Batch)",
                quote:
                  "The faculty at GIPS go beyond textbooks. They mentor you, prepare you for challenges, and make you feel confident in clinical practice.",
                image: "/api/placeholder/200/200",
              },
              {
                name: "Rahul Singh",
                course: "BMRIT (2021 Batch)",
                quote:
                  "The internships and placement support here are unmatched. I got placed in a reputed Delhi hospital right after graduation.",
                image: "/api/placeholder/200/200",
              },
              {
                name: "Simran Kaur",
                course: "B.Optom (2020 Batch)",
                quote:
                  "The labs, workshops, and real hospital exposure at GIPS gave me hands-on experience that no book could teach.",
                image: "/api/placeholder/200/200",
              },
              {
                name: "Piyush Rawat",
                course: "BOTT (2019 Batch)",
                quote:
                  "GIPS is not just a college; it’s a family. The support and motivation from professors shaped my professional values.",
                image: "/api/placeholder/200/200",
              },
              {
                name: "Neha Joshi",
                course: "BPT (2023 Batch)",
                quote:
                  "The placement cell guided me through every step of my job interviews and skill development sessions.",
                image: "/api/placeholder/200/200",
              },
              {
                name: "Aman Verma",
                course: "BMLT (2022 Batch)",
                quote:
                  "I learned teamwork, clinical ethics, and compassion – all thanks to GIPS. Truly life-changing experience.",
                image: "/api/placeholder/200/200",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all border border-amber-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 relative">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <Quote className="w-8 h-8 text-orange-500 mb-3" />
                  <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
                  <h4 className="text-lg font-semibold text-orange-700">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">{t.course}</p>
                  <div className="flex mt-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ALUMNI EXPERIENCE ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-orange-700 mb-10">
            Alumni Experiences
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: "Dr. Meenakshi Thakur",
                role: "Senior Physiotherapist, Fortis Hospital",
                message:
                  "The exposure I received at GIPS helped me blend theory with practice. I’m proud to represent my college at one of India’s leading hospitals.",
              },
              {
                name: "Arjun Sharma",
                role: "Radiology Assistant, AIIMS Delhi",
                message:
                  "From faculty support to lab training, everything at GIPS is industry-oriented. I owe my success to the foundation built here.",
              },
            ].map((a, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-amber-50 to-rose-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-amber-100"
              >
                <p className="text-gray-700 italic mb-4">“{a.message}”</p>
                <h4 className="font-bold text-orange-700">{a.name}</h4>
                <p className="text-sm text-gray-600">{a.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== JOIN SECTION ==================== */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-rose-600 to-amber-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Be Part of Our Growing Family
          </h2>
          <p className="text-lg mb-8 text-amber-100">
            Your story can inspire future generations of healthcare professionals.
            Share your experience and stay connected with the GIPS alumni network.
          </p>
          <button className="bg-white text-rose-600 font-semibold px-8 py-4 rounded-full shadow-md hover:bg-amber-50 transition-all">
            Share Your Testimonial
          </button>
        </div>
      </section>
    </main>
  );
}
