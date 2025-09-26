export default function feerefund() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 mt-15">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Fee Refund & Cancellation</h1>
        <p className="text-gray-700 mb-4">
          GIPS follows UGC norms for fee refund and cancellation of admission.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Full refund if withdrawal before course commencement.</li>
          <li>Partial refund as per UGC guidelines after course starts.</li>
          <li>Processing charges will be deducted where applicable.</li>
        </ul>
      </div>
    </div>
  );
}
