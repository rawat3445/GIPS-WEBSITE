export default function After12th() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 mt-15">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Admissions After 12th</h1>
        <p className="text-gray-700 mb-4">
          Students who have completed their 10+2 (Science stream with PCB) are eligible 
          to apply for various programs offered by GIPS. Admission is strictly based on merit 
          and availability of seats.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Eligibility: 10+2 with PCB from a recognized board.</li>
          <li>Selection process: Merit-based / entrance test (if applicable).</li>
          <li>Documents required: Mark sheets, Transfer Certificate, ID proof, etc.</li>
        </ul>
      </div>
    </div>
  );
}
