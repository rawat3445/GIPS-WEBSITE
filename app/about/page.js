"use client";

export default function AboutPage() {
  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-100 to-blue-100 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6">
          About Garhwal Institute of Paramedical Sciences (GIPS)
        </h1>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Garhwal Institute of Paramedical Sciences (GIPS) is a premier institution 
          dedicated to excellence in paramedical education and healthcare training. 
          Since its establishment, GIPS has been committed to nurturing skilled 
          healthcare professionals who combine academic excellence with a human touch.
        </p>
      </section>

      {/* Info Cards Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "About GIPS",
            desc: "Learn about our history, growth, and unique approach to paramedical education.",
            link: "/about/gips",
          },
          {
            title: "Vision & Mission",
            desc: "Discover our guiding principles and the mission that drives us forward.",
            link: "/about/vision-mission",
          },
          {
            title: "Accreditations",
            desc: "Approved and recognized by national councils with top rankings.",
            link: "/about/accreditation",
          },
          {
            title: "Awards & Achievements",
            desc: "Celebrating excellence through institutional, faculty, and student awards.",
            link: "/about/awards",
          },
          {
            title: "Social Responsibilities",
            desc: "Contributing to society with community health, awareness, and outreach programs.",
            link: "/about/social-responsibilities",
          },
          {
            title: "Departments",
            desc: "Explore our diverse academic departments and world-class facilities.",
            link: "/about/departments",
          },
          {
            title: "Student Services",
            desc: "Supporting students with mentoring, counseling, and career guidance.",
            link: "/about/student-services",
          },
          {
            title: "How to Reach Us",
            desc: "Get directions to our campus and contact details for easy reach.",
            link: "/about/location",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              {item.title}
            </h2>
            <p className="text-gray-600 mb-4">{item.desc}</p>
            <a
              href={item.link}
              className="text-cyan-600 font-medium hover:text-cyan-800 transition-colors"
            >
              Read More →
            </a>
          </div>
        ))}
      </section>

      {/* Highlight Section */}
      <section className="bg-blue-50 py-16 text-center border-t border-gray-200">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Why Choose GIPS?
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          With a legacy of excellence, GIPS combines modern education, expert faculty, 
          and hands-on training to shape healthcare leaders of tomorrow.
        </p>
      </section>
    </main>
  );
}
