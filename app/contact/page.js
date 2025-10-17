"use client";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 text-gray-800 mt-0">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-teal-600 via-emerald-500 to-cyan-500">
  {/* Optional decorative background shapes */}
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#ffffff_0%,_transparent_70%)]"></div>

  <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
      Get in Touch with GIPS
    </h1>
    <p className="text-lg md:text-2xl font-medium text-teal-50 mb-10">
      Have questions? We’re here to help — reach out to Garhwal Institute of Paramedical Sciences for admissions, collaborations, or campus information.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="#contact-form"
        className="bg-white text-teal-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-teal-50 transition-all"
      >
        Contact Us
      </a>
      <a
        href="#location"
        className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-teal-700 transition-all"
      >
        Find Us
      </a>
    </div>
  </div>

  {/* Optional subtle wave at bottom */}
  <svg
    className="absolute bottom-0 left-0 w-full text-white"
    viewBox="0 0 1440 320"
    fill="currentColor"
  >
    <path
      fillOpacity="1"
      d="M0,128L48,122.7C96,117,192,107,288,138.7C384,171,480,245,576,240C672,235,768,149,864,122.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
</section>


      {/* ==================== CONTACT INFO SECTION ==================== */}
<section id="contact-info" className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
      Contact Information
    </h2>

    {/* Grid layout to hold contact cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Email Card */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all text-center">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Email</h3>
        <p className="text-gray-600 break-words">
          garhwalparamedicalinstitute@gmail.com
        </p>
      </div>

      {/* Phone Card */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all text-center">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Phone</h3>
        <p className="text-gray-600">+91 8273968106</p>
        <p className="text-gray-600">+91 9634099389</p>
      </div>

      {/* Location Card */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all text-center">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Location</h3>
        <p className="text-gray-600">
          Village & PO-Kyark, Pauri Garhwal, Uttarakhand
        </p>
      </div>
    </div>
  </div>
</section>


      {/* ==================== CONTACT FORM ==================== */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-teal-700 mb-10">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-teal-500 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-teal-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-teal-500 outline-none"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-all shadow-md"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ==================== GOOGLE MAP ==================== */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-teal-700 mb-8">
            Find Us on Map
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55187.17768054628!2d78.7179829!3d30.1743202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390947dfb9a937a5%3A0x83019f7b6a30c918!2sGarhwal%20Institute%20of%20Paramedical%20Sciences!5e0!3m2!1sen!2sin!4v1696789000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ==================== RESEARCH / INQUIRY SECTION ==================== */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-teal-700 mb-6">
            Research & Collaboration Inquiries
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            GIPS welcomes partnerships with healthcare institutions, research
            organizations, and NGOs. If your institution is interested in
            collaboration or community outreach initiatives, please reach out to
            our academic office. We encourage innovation and shared learning to
            advance healthcare education and paramedical sciences in the Garhwal
            region.
          </p>
        </div>
      </section>

      {/* ==================== OFFICE / TEAM SECTION ==================== */}
      <section className="bg-gradient-to-br from-teal-50 to-emerald-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-teal-700 mb-12">
            Contact Our Office
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { name: "Dr. P. C. Sharma", role: "Principal", img: "/principal.jpg" },
              { name: "Admission Office", role: "Student Inquiries", img: "/admission.jpg" },
              { name: "Administration", role: "General Information", img: "/office.jpg" },
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

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-16 text-center bg-teal-700 text-white">
        <h2 className="text-3xl font-semibold mb-4">Stay Connected with GIPS</h2>
        <p className="text-teal-100 mb-8">
          Follow us on our official platforms for updates, admissions, and news.
        </p>
        <Link
          href="/"
          className="bg-white text-teal-700 px-6 py-3 rounded-full font-medium shadow hover:bg-gray-100 transition-all"
        >
          Visit Homepage
        </Link>
      </section>
    </div>
  );
}
