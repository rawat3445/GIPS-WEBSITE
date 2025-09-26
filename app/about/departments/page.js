import Link from "next/link";

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Departments</h1>

        <p className="text-gray-700 mb-4">
          GIPS offers diverse programs through specialized departments, each
          designed to provide focused knowledge and training.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Departments at GIPS</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Physiotherapy</li>
            <li>Radiology & Imaging Technology</li>
            <li>Operation Theatre Technology</li>
            <li>Optometry</li>
          </ul>
        </div>

        <Link href="/about" className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
          ← Back to About Overview
        </Link>
      </div>
    </div>
  );
}
