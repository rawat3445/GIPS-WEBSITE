// app/about/page.js
export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">About GIPS</h1>
      <p className="text-gray-700 leading-relaxed mb-8">
        Garhwal Institute of Paramedical Sciences (GIPS) is a premier institution 
        dedicated to excellence in paramedical education and healthcare training. 
        Since its establishment, GIPS has been committed to nurturing skilled 
        healthcare professionals who combine academic excellence with a human touch.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* About GIPS */}
        <div className="p-6 bg-gray-50 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">About GIPS</h2>
          <p className="text-gray-600 mb-3">
            Learn about our history, growth, and unique approach to paramedical education.
          </p>
          <a href="/about/gips" className="text-blue-600 hover:underline">Read More →</a>
        </div>

        {/* Vision & Mission */}
        <div className="p-6 bg-gray-50 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Vision & Mission</h2>
          <p className="text-gray-600 mb-3">
            Discover our guiding principles and the mission that drives us forward.
          </p>
          <a href="/about/vision-mission" className="text-blue-600 hover:underline">Read More →</a>
        </div>

        {/* Accreditation */}
        <div className="p-6 bg-gray-50 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Accreditations</h2>
          <p className="text-gray-600 mb-3">
            Approved and recognized by national councils with top rankings.
          </p>
          <a href="/about/accreditation" className="text-blue-600 hover:underline">Read More →</a>
        </div>

        {/* Awards */}
        <div className="p-6 bg-gray-50 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Awards & Achievements</h2>
          <p className="text-gray-600 mb-3">
            Celebrating excellence through institutional, faculty, and student awards.
          </p>
          <a href="/about/awards" className="text-blue-600 hover:underline">Read More →</a>
        </div>

        {/* ISR */}
        <div className="p-6 bg-gray-50 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Social Responsibilities</h2>
          <p className="text-gray-600 mb-3">
            Contributing to society with community health, awareness, and outreach programs.
          </p>
          <a href="/about/social-responsibilities" className="text-blue-600 hover:underline">Read More →</a>
        </div>

        {/* Departments */}
        <div className="p-6 bg-gray-50 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Departments</h2>
          <p className="text-gray-600 mb-3">
            Explore our diverse academic departments and world-class facilities.
          </p>
          <a href="/about/departments" className="text-blue-600 hover:underline">Read More →</a>
        </div>

        {/* Student Services */}
        <div className="p-6 bg-gray-50 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Student Services</h2>
          <p className="text-gray-600 mb-3">
            Supporting students with mentoring, counseling, and career guidance.
          </p>
          <a href="/about/student-services" className="text-blue-600 hover:underline">Read More →</a>
        </div>

        {/* Location */}
        <div className="p-6 bg-gray-50 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">How to Reach Us</h2>
          <p className="text-gray-600 mb-3">
            Get directions to our campus and contact details for easy reach.
          </p>
          <a href="/about/location" className="text-blue-600 hover:underline">Read More →</a>
        </div>
      </div>
    </main>
  );
}
