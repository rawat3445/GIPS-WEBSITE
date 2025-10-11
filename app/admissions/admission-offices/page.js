export default function AdmissionOffice() {
  return (
    <main className="bg-white text-gray-800 min-h-screen py-12">
      {/* Header Section */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4 border-b-4 border-green-700 inline-block pb-1">
          Admission Office
        </h1>
        <p className="text-gray-700 leading-relaxed mt-6">
          The <strong>Admission Office</strong> of <strong>Garhwal Institute of Paramedical Sciences (GIPS)</strong>
          is dedicated to guiding students and parents throughout the admission process. We ensure transparency,
          clarity, and a student-friendly approach so that every applicant feels supported from enquiry to enrollment.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Our admission counselors provide complete assistance on course selection, eligibility, fee structure,
          documentation, and important deadlines — making your journey to GIPS smooth and stress-free.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Services Provided</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Guidance about available programs and eligibility requirements.</li>
            <li>Information regarding admission procedure and important deadlines.</li>
            <li>Help with application form submission and document verification.</li>
            <li>Support for hostel and transportation-related queries.</li>
            <li>Orientation and counseling sessions for newly admitted students.</li>
          </ul>
        </div>
      </section>

      {/* Office Timings Section */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Office Timings</h2>
          <div className="bg-green-50 border-l-4 border-green-700 p-5 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              <strong>Monday – Saturday:</strong> 9:30 AM – 4:30 PM<br />
              <strong>Sunday:</strong> Closed
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Contact Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-green-700 mb-2">Address</h3>
              <p className="text-gray-700 leading-relaxed">
                Garhwal Institute of Paramedical Sciences (GIPS)<br />
                Chandrabani Chowk, Near ISBT,<br />
                Dehradun, Uttarakhand – 248001
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-green-700 mb-2">Get in Touch</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Phone:</strong> +91 9927070453<br />
                <strong>Email:</strong> admissions@gips.edu.in
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6 text-gray-700 leading-relaxed">
          <p>
            The Admission Office welcomes all aspiring students and parents to reach out for queries or guidance.
            Our team is committed to helping you begin your educational journey with <strong>GIPS</strong> and
            ensuring that your admission process is smooth, transparent, and student-centered.
          </p>
        </div>
      </section>
    </main>
  );
}
