"use client";
import Image from "next/image";

export default function PlacementOverview() {
  return (
    <main className="bg-gray-50 text-gray-800 ">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-indigo-700 via-purple-600 to-blue-600">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,_#ffffff_0%,_transparent_60%)]"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Placement Overview
          </h1>
          <p className="text-lg md:text-2xl font-light text-violet-100 mb-10">
            Building careers through excellence, opportunity, and partnerships
          </p>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full text-gray-50"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <path
            fillOpacity="1"
            d="M0,128L48,122.7C96,117,192,107,288,138.7C384,171,480,245,576,240C672,235,768,149,864,122.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* ==================== ABOUT PLACEMENT ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">
            Placement Cell at GIPS
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto">
            The Placement Cell at Garhwal Institute of Paramedical Sciences
            (GIPS) prepares students for real-world healthcare careers. From
            training sessions to hospital collaborations, our mission is to
            connect talent with opportunity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Career Counseling",
                desc: "Personalized career guidance ensures every student is prepared for professional success.",
              },
              {
                title: "Skill Development",
                desc: "Specialized workshops and certifications to boost employability and confidence.",
              },
              {
                title: "Industry Exposure",
                desc: "Strong links with reputed hospitals and labs provide hands-on clinical experience.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all text-center border border-indigo-100"
              >
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PLACEMENT STATISTICS ==================== */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 via-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-indigo-700 mb-10">
            Placement Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "96%", label: "Placement Rate" },
              { value: "150+", label: "Recruiter Hospitals" },
              { value: "500+", label: "Students Placed" },
              { value: "20+", label: "Workshops Conducted" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-4xl font-bold text-purple-700 mb-2">
                  {item.value}
                </h3>
                <p className="text-gray-600 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== RECRUITERS ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-indigo-700 mb-10">
            Our Top Recruiters
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[
              "/aiims.png",
              "/fortis.png",
              "/max.png",
              "/apollo.png",
              "/nehru.png",
            ].map((logo, i) => (
              <div
                key={i}
                className="bg-indigo-50 p-6 rounded-xl shadow-sm hover:bg-purple-50 transition-all"
              >
                <Image
                  src={logo}
                  alt="Recruiter Logo"
                  width={120}
                  height={80}
                  className="mx-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TRAINING & DEVELOPMENT ==================== */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 via-purple-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Training & Development</h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto text-indigo-100">
            Our Placement Cell conducts professional training modules focusing
            on interview skills, communication, personality enhancement, and
            domain-specific workshops led by healthcare experts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Soft Skill Enhancement",
              "Clinical Internship Programs",
              "Hospital Collaboration Workshops",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:bg-white/20 transition-all"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ALUMNI SUCCESS ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-indigo-700 mb-10">
            Alumni Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Anjali Mehta",
                position: "Physiotherapist - Apollo Hospital",
                quote:
                  "The placement guidance and industry exposure at GIPS transformed my career.",
              },
              {
                name: "Rahul Negi",
                position: "Radiology Assistant - AIIMS Delhi",
                quote:
                  "Internships arranged by GIPS gave me hands-on experience before joining my first job.",
              },
              {
                name: "Pooja Rawat",
                position: "Pharmacist - Max Healthcare",
                quote:
                  "GIPS training sessions polished both my technical and communication skills.",
              },
            ].map((alumni, i) => (
              <div
                key={i}
                className="bg-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                <p className="italic text-gray-600 mb-4">“{alumni.quote}”</p>
                <h4 className="text-lg font-semibold text-indigo-700">
                  {alumni.name}
                </h4>
                <p className="text-sm text-gray-500">{alumni.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CALL TO ACTION ==================== */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Begin Your Career Journey with GIPS
          </h2>
          <p className="text-lg mb-8 text-violet-100">
            Be part of an institution that focuses on excellence, innovation,
            and professional success in healthcare education.
          </p>
          <a
            href="/admission"
            className="inline-block bg-white text-purple-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition-all"
          >
            Apply Now
          </a>
        </div>
      </section>
    </main>
  );
}
