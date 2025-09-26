import Link from "next/link";

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Vision & Mission</h1>

        <p className="text-gray-700 mb-4">
          Our vision is to be a center of excellence in paramedical education,
          research, and healthcare service. At GIPS, we aim to nurture
          professionals who combine technical knowledge with compassion.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Mission</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Provide quality paramedical education with modern facilities.</li>
            <li>Encourage research and innovation in healthcare sciences.</li>
            <li>Promote values of empathy, integrity, and service to society.</li>
          </ul>
        </div>

        <Link href="/about" className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
          ← Back to About Overview
        </Link>
      </div>
    </div>
  );
}
