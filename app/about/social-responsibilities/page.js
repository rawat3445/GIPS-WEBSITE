import Link from "next/link";

export default function SocialResponsibilitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 mt-0">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow-md rounded-2xl p-8 mb-6">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Institutional Social Responsibilities</h1>
          <p className="text-gray-700 text-lg">
            GIPS is committed to giving back to society through various outreach
            and healthcare initiatives. We encourage our students to contribute
            actively to community welfare and make a meaningful difference in people&apos;s lives.
          </p>
        </div>

        {/* Key Initiatives */}
        <div className="bg-blue-50 shadow-md rounded-2xl p-8 mb-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Key Initiatives</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>Free medical camps for rural communities</li>
            <li>Awareness programs on public health and preventive care</li>
            <li>Collaborations with NGOs for social impact</li>
            <li>Environmental conservation and sustainability programs</li>
            <li>Educational scholarships for underprivileged students</li>
          </ul>
        </div>

        {/* Community Outreach */}
        <div className="bg-green-50 shadow-md rounded-2xl p-8 mb-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Community Outreach Programs</h2>
          <p className="text-gray-700 mb-4">
            Our community outreach initiatives focus on creating sustainable development and improving quality of life across various sectors. Through these programs, students gain hands-on experience in social work and leadership.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Health & Wellness</h3>
              <p className="text-sm text-gray-600">Medical camps, health seminars, and wellness workshops</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Education Support</h3>
              <p className="text-sm text-gray-600">Scholarships and educational programs for disadvantaged youth</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Environmental Care</h3>
              <p className="text-sm text-gray-600">Tree plantation and eco-friendly sustainability initiatives</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Disaster Relief</h3>
              <p className="text-sm text-gray-600">Emergency response and humanitarian aid programs</p>
            </div>
          </div>
        </div>

        {/* Student Involvement */}
        <div className="bg-purple-50 shadow-md rounded-2xl p-8 mb-6">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">Student Involvement & Volunteering</h2>
          <p className="text-gray-700 mb-4">
            We believe that active participation of students in social responsibility activities helps shape compassionate healthcare professionals. Our volunteering opportunities include:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Regular volunteer opportunities in nearby villages and underprivileged areas</li>
            <li>Student-led health awareness campaigns</li>
            <li>Mentorship programs for rural students</li>
            <li>Leadership training through social service activities</li>
          </ul>
        </div>

        {/* Impact & Goals */}
        <div className="bg-orange-50 shadow-md rounded-2xl p-8 mb-6">
          <h2 className="text-2xl font-semibold text-orange-800 mb-4">Our Impact & Future Goals</h2>
          <p className="text-gray-700 mb-4">
            Through our sustained efforts, GIPS has made a positive impact on thousands of lives. Our goals for the future include:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Expanding healthcare services to remote areas</li>
            <li>Establishing specialized health clinics in underserved regions</li>
            <li>Increasing student participation in community service activities</li>
            <li>Creating sustainable development models for long-term social impact</li>
            <li>Strengthening partnerships with government and private organizations</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-md rounded-2xl p-8 mb-6 text-white text-center">
          <h2 className="text-2xl font-semibold mb-3">Join Our Mission</h2>
          <p className="mb-4">
            Be part of GIPS&apos;s social responsibility journey and contribute to building a healthier and more equitable society.
          </p>
          <p className="text-blue-100">Contact us to learn more about volunteering opportunities and partnerships.</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/about" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
            ← Back to About Overview
          </Link>
        </div>
      </div>
    </div>
  );
}