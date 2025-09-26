// app/about/gips/page.js
import Link from "next/link";

export default function AboutGipsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          About GIPS
        </h1>

        {/* Intro paragraph */}
        <p className="text-gray-700 leading-relaxed mb-4">
          Garhwal Institute of Paramedical Sciences (GIPS) is a premier
          institution committed to excellence in healthcare education.
          Established with the vision of empowering students with both
          knowledge and values, GIPS has become a trusted name in
          paramedical training and allied health sciences.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          At GIPS, we believe in holistic development — combining
          academic rigor with practical exposure. With experienced
          faculty, modern laboratories, and strong industry linkages,
          our students are prepared to become skilled, compassionate
          healthcare professionals.
        </p>

        {/* Quick facts or highlights */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">
            Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Affiliated with H.N.B. Uttarakhand Medical Education University, Dehradun</li>
            <li>State-of-the-art laboratories and training facilities</li>
            <li>Experienced and dedicated faculty members</li>
            <li>Strong placement and career support</li>
          </ul>
        </div>

        {/* Back link */}
        <Link
          href="/about"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
        >
          ← Back to About Overview
        </Link>
      </div>
    </div>
  );
}
