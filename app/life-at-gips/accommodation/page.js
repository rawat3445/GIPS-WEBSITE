"use client";
import Image from "next/image";
import { Bed, ShieldCheck, Wifi, Utensils, Droplets, Users } from "lucide-react";

export default function Accommodation() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-100 text-gray-800">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[85vh] flex items-center justify-center bg-gradient-to-r from-cyan-700 via-blue-700 to-sky-600 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ffffff22,_transparent_70%)]"></div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Accommodation at GIPS
          </h1>
          <p className="text-lg md:text-xl text-cyan-100 leading-relaxed">
            Comfortable, secure, and student-friendly hostels designed to provide
            a peaceful environment that nurtures both learning and living.
          </p>
        </div>

        {/* Wave Divider */}
        <svg
          className="absolute bottom-0 left-0 w-full text-sky-50"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <path d="M0,288L48,272C96,256,192,224,288,186.7C384,149,480,107,576,112C672,117,768,171,864,186.7C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224V320H0Z" />
        </svg>
      </section>

      {/* ==================== INTRO SECTION ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-sky-700 mb-6">Welcome to Your Second Home</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At Garhwal Institute of Paramedical Sciences, we understand that a comfortable and safe living
            environment is essential for students’ success. Our hostels offer not just accommodation, but
            a space to grow, connect, and recharge.
          </p>
          <Image
            src="/api/placeholder/900/400"
            alt="GIPS Hostel Overview"
            width={900}
            height={400}
            className="rounded-2xl shadow-lg mx-auto"
          />
        </div>
      </section>

      {/* ==================== FACILITIES SECTION ==================== */}
      <section className="py-20 bg-gradient-to-b from-sky-50 via-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Hostel Facilities & Features
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Bed className="w-10 h-10 text-cyan-600 mb-4" />,
                title: "Spacious Rooms",
                desc: "Clean and airy rooms equipped with comfortable beds, study tables, and storage for every student.",
              },
              {
                icon: <Wifi className="w-10 h-10 text-cyan-600 mb-4" />,
                title: "24×7 Wi-Fi Connectivity",
                desc: "High-speed internet access across hostel premises to support academic and personal use.",
              },
              {
                icon: <Utensils className="w-10 h-10 text-cyan-600 mb-4" />,
                title: "Hygienic Dining",
                desc: "Nutritious and well-balanced meals served in a clean and spacious dining hall.",
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-cyan-600 mb-4" />,
                title: "24×7 Security",
                desc: "CCTV surveillance, dedicated wardens, and strict access control ensure student safety at all times.",
              },
              {
                icon: <Droplets className="w-10 h-10 text-cyan-600 mb-4" />,
                title: "Clean Water Supply",
                desc: "RO-purified drinking water and hot-water facilities ensure hygiene and comfort year-round.",
              },
              {
                icon: <Users className="w-10 h-10 text-cyan-600 mb-4" />,
                title: "Community Living",
                desc: "Hostel life at GIPS fosters teamwork, empathy, and lifelong friendships among students.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl border border-cyan-100 text-center transition-all"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-sky-700 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BOYS & GIRLS HOSTELS ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-cyan-700 mb-12">
            Separate Hostels for Boys & Girls
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Boys Hostel */}
            <div className="bg-gradient-to-r from-sky-50 to-cyan-100 p-8 rounded-2xl shadow-md hover:shadow-lg">
              <Image
                src="/api/placeholder/500/300"
                alt="Boys Hostel"
                width={500}
                height={300}
                className="rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold text-cyan-700 mb-3">Boys Hostel</h3>
              <p className="text-gray-600 leading-relaxed">
                The boys’ hostel is equipped with spacious rooms, a gym corner, and recreational areas.
                Supervised by a dedicated warden, it ensures discipline and security without compromising freedom.
              </p>
            </div>

            {/* Girls Hostel */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-100 p-8 rounded-2xl shadow-md hover:shadow-lg">
              <Image
                src="/api/placeholder/500/300"
                alt="Girls Hostel"
                width={500}
                height={300}
                className="rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold text-blue-700 mb-3">Girls Hostel</h3>
              <p className="text-gray-600 leading-relaxed">
                Our girls’ hostel prioritizes safety, privacy, and comfort. The facility is monitored round-the-clock
                and includes laundry, Wi-Fi, and healthy dining options for a peaceful living experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RULES & REGULATIONS ==================== */}
      <section className="py-20 bg-gradient-to-b from-blue-50 via-cyan-50 to-sky-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-cyan-700 mb-8">Rules & Regulations</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            To maintain harmony and discipline, GIPS hostels follow a set of rules that ensure every resident enjoys
            a respectful and safe environment.
          </p>

          <ul className="text-left list-disc list-inside text-gray-700 leading-relaxed space-y-3">
            <li>Hostel gates close by 9:00 PM every day.</li>
            <li>Visitors are allowed only during designated hours.</li>
            <li>Ragging, bullying, or harassment is strictly prohibited.</li>
            <li>Students must maintain cleanliness in their rooms and common areas.</li>
            <li>Electrical appliances like heaters or irons require prior permission.</li>
            <li>Any damage to hostel property must be reported immediately.</li>
          </ul>
        </div>
      </section>

      {/* ==================== CALL TO ACTION ==================== */}
      <section className="py-20 bg-gradient-to-r from-cyan-700 via-blue-700 to-sky-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Experience the GIPS Hostel Life</h2>
          <p className="text-lg text-cyan-100 mb-8">
            Join a vibrant, supportive, and comfortable student community where learning continues beyond classrooms.
          </p>
          <button className="bg-white text-cyan-700 px-8 py-4 font-semibold rounded-full shadow-md hover:bg-cyan-50 transition-all">
            Apply for Hostel Accommodation
          </button>
        </div>
      </section>
    </main>
  );
}
