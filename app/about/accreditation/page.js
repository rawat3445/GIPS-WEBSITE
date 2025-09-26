import Link from "next/link";

export default function AccreditationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Approval, Accreditation & Rankings
        </h1>

        <p className="text-gray-700 mb-4">
          GIPS is recognized and approved by various statutory and professional
          bodies, ensuring that our academic programs meet the highest quality
          standards.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Key Approvals</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Affiliated to H.N.B. Uttarakhand Medical Education University</li>
            <li>Recognized by [Approving Authority]</li>
            <li>Ranked among top paramedical institutes in the region</li>
          </ul>
        </div>

        <Link href="/about" className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
          ← Back to About Overview
        </Link>
      </div>
    </div>
  );
}
