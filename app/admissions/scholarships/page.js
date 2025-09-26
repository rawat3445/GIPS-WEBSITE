export default function Scholarships() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 mt-15">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Scholarships</h1>
        <p className="text-gray-700 mb-4">
          GIPS provides scholarships to meritorious and deserving students to encourage 
          academic excellence.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Merit-based scholarships.</li>
          <li>Government scholarships for reserved categories.</li>
          <li>Special financial aid for economically weaker students.</li>
        </ul>
      </div>
    </div>
  );
}
