"use client";
import Image from "next/image";

export default function NewsEventPage() {
  return (
    <div className="bg-gray-50 text-gray-800 mt-05">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/Marathon pic.jpg"
          alt="GIPS Marathon 2025"
          fill
          className=" brightness-50 object-contain"
        />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Code Blue Marathon 2025
          </h1>
          <p className="text-lg md:text-xl font-light">
            Organized by Garhwal Institute of Paramedical Sciences • 11 October 2025
          </p>
        </div>
      </section>

      {/* ==================== SUMMARY SECTION ==================== */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-teal-700 mb-4">
            A Celebration of Fitness, Unity & Health Awareness
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The “Code Blue Marathon 2025” was organized by the Garhwal Institute of
            Paramedical Sciences (GIPS) to promote health consciousness and
            encourage physical activity among students and the local community.
          </p>
        </div>
      </section>

      {/* ==================== DETAILED CONTENT ==================== */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="/marathon1.jpg"
                alt="Marathon event photo"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Event Highlights
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The marathon began at 6:30 AM from the GIPS campus and covered a
                distance of 5 kilometers around the scenic Garhwal region. Over 300
                participants, including students, faculty, and community members,
                took part with enthusiasm.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Winners were awarded in both Boys & Girls categories.</li>
                <li>Principal and faculty members inaugurated the event.</li>
                <li>Health awareness stalls and refreshments were provided.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PHOTO GALLERY ==================== */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-teal-700 mb-10">
            Event Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["/marathon2.jpg", "/marathon3.jpg", "/marathon4.jpg"].map(
              (img, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <Image src={img} alt={`Gallery ${index + 1}`} fill className="object-cover" />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ==================== RESEARCH / IMPACT SECTION ==================== */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-teal-700 mb-6">
            Research & Community Impact
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The event also served as a small-scale public health research initiative.
            Students from the Paramedical Department collected fitness and
            participation data, which will be analyzed to study community health
            awareness and the benefits of youth engagement in outdoor activities.
          </p>
        </div>
      </section>

      {/* ==================== ORGANIZERS ==================== */}
      <section className="bg-gradient-to-br from-teal-50 to-emerald-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-teal-700 mb-12">
            Organized By
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { name: "Animesh Mondol", role: "Principal, GIPS", img: "/principal.jpg" },
              { name: "Event Committee", role: "Faculty & Student Coordinators", img: "/faculty.jpg" },
              { name: "Garhwal Institute", role: "Paramedical Sciences", img: "/gips-logo.png" },
            ].map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={member.img} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-teal-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA / RELATED NEWS ==================== */}
      <section className="py-16 text-center bg-teal-700 text-white">
        <h2 className="text-3xl font-semibold mb-4">
          Explore More Events & Achievements
        </h2>
        <p className="text-teal-100 mb-8">
          Stay connected with GIPS for upcoming academic and community activities.
        </p>
        <a
          href="/news"
          className="bg-white text-teal-700 px-6 py-3 rounded-full font-medium shadow hover:bg-gray-100 transition-all"
        >
          View All News
        </a>
      </section>
    </div>
  );
}
