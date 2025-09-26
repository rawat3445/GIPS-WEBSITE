export default function FeePayment() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 mt-15">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Fee Payment</h1>
        <p className="text-gray-700 mb-4">Students can pay their fees via the following methods:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Online payment gateway (credit/debit card, net banking, UPI).</li>
          <li>Bank draft in favor of GIPS.</li>
          <li>Cash payment at the Admission Office.</li>
        </ul>
      </div>
    </div>
  );
}
