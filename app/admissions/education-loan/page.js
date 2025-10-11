export default function EducationLoan() {
  return (
    <main className="bg-white text-gray-800 min-h-screen py-12">
      {/* Header Section */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4 border-b-4 border-green-700 inline-block pb-1">
          Education Loan Assistance
        </h1>
        <p className="text-gray-700 leading-relaxed mt-6">
          At <strong>Garhwal Institute of Paramedical Sciences (GIPS)</strong>, we believe that financial constraints should never be a barrier to education.
          To support deserving students, our institution provides complete guidance and assistance for availing
          <strong> Education Loans</strong> from various nationalized and private banks.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Our dedicated team helps students understand the loan process, prepare required documents, and connect with banking partners.
          We aim to ensure that every eligible student can pursue their studies without financial stress.
        </p>
      </section>

      {/* Assistance Section */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Loan Assistance Services</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Guidance in choosing suitable education loan schemes from reputed banks.</li>
            <li>Help with completing and verifying loan documentation.</li>
            <li>Issuance of necessary certificates from the college for bank submission.</li>
            <li>Assistance in coordinating between student and bank officials for smooth processing.</li>
            <li>Support for renewal or continuation of education loans for subsequent academic years.</li>
          </ul>
        </div>
      </section>

      {/* Partner Banks Section */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Associated Banks</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            GIPS maintains close associations with leading nationalized and private banks that offer flexible and affordable
            education loan options. Students may approach any of the following banks for assistance:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>State Bank of India (SBI)</li>
            <li>Punjab National Bank (PNB)</li>
            <li>Canara Bank</li>
            <li>HDFC Bank</li>
            <li>ICICI Bank</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Students may also approach other banks as per their convenience. The Admission Office provides
            all necessary institutional documents and fee structures required by banks for processing.
          </p>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Eligibility for Education Loan</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>The applicant must have secured admission to GIPS through a recognized admission process.</li>
            <li>The course must be approved by the relevant university or affiliating body.</li>
            <li>Loan sanction is subject to the eligibility criteria set by the respective bank.</li>
            <li>Parents or guardians may be required as co-applicants depending on the loan amount.</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Need Help?</h2>
          <div className="bg-green-50 border-l-4 border-green-700 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              For guidance regarding the Education Loan process, please contact our <strong>Admission Office</strong>.
              The staff will assist you in preparing necessary documents and coordinating with the concerned bank.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Phone:</strong> +91 9927070453<br />
              <strong>Email:</strong> admissions@gips.edu.in
            </p>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6 text-gray-700 leading-relaxed">
          <p>
            GIPS is committed to making quality education accessible to all deserving students.
            Through our education loan assistance program, we ensure that financial challenges never stand in the way of your dreams.
          </p>
        </div>
      </section>
    </main>
  );
}
