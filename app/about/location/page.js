import Link from "next/link";

export default function LocationPage() {

  const LAT = 30.1743203;
  const LNG = 78.7583602;
  const transportOptions = [
    {
      id: 1,
      mode: "By Air",
      icon: "✈️",
      details: [
        "Nearest Airport: Indira Gandhi International Airport (Delhi) - 350 km",
        "Alternative: Jolly Grant Airport (Dehradun) - 165 km",
        "Cab services and rental cars available from both airports"
      ]
    },
    {
      id: 2,
      mode: "By Train",
      icon: "🚂",
      details: [
        "Nearest Railway Station: Dehradun Junction - 165 km",
        "Alternative: Haridwar Junction - 70 km",
        "Regular taxi and bus services from station to campus"
      ]
    },
    {
      id: 3,
      mode: "By Road",
      icon: "🚗",
      details: [
        "NH48 Connectivity: Easily accessible via National Highway",
        "Distance from Dehradun: 165 km (3.5 - 4 hours drive)",
        "Well-maintained roads with clear signage to campus"
      ]
    },
    {
      id: 4,
      mode: "By Bus",
      icon: "🚌",
      details: [
        "Regular intercity bus services from major cities",
        "Local buses connecting nearby towns",
        "Direct services from Delhi, Dehradun, and Haridwar"
      ]
    }
  ];

  const contactMethods = [
    {
      icon: "📍",
      title: "Campus Address",
      details: "Vill. & P.O. Kyark, Patti Idealshyun, Dist. Pauri Garhwal, Uttarakhand - 246001"
    },
    {
      icon: "📧",
      title: "Email",
      details: "garhwalparamedicalinstitute@gmail.com"
    },
    {
      icon: "📱",
      title: "Mobile",
      details: "+91-8273968106"
    },
    {
      icon: "🕐",
      title: "Office Hours",
      details: "Monday - Saturday: 9:00 AM - 4:00 PM "
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 mt-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow-md rounded-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">How to Reach Us</h1>
          <p className="text-gray-700 text-lg">
            GIPS is strategically located in Pauri Garhwal, Uttarakhand with excellent accessibility from major cities. Whether you&apos;re visiting our campus for admissions, events, or other purposes, we&apos;ve made it easy for you to find us. Here&apos;s all the information you need to reach our college.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {contactMethods.map((method) => (
            <div key={method.icon} className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-blue-600 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">{method.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{method.title}</h3>
              <p className="text-gray-700 text-sm">{method.details}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Transport Options */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-md rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Transportation Options</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {transportOptions.map((option) => (
                  <div key={option.id} className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{option.icon}</span>
                      <h3 className="text-lg font-semibold text-blue-800">{option.mode}</h3>
                    </div>
                    <ul className="space-y-2">
                      {option.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-700 text-sm flex items-start">
                          <span className="mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Info Box */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-600 to-green-800 shadow-md rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="mr-3 text-lg">✓</span>
                  <span>Located in scenic Pauri Garhwal</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-lg">✓</span>
                  <span>65 km from Dehradun city</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-lg">✓</span>
                  <span>Easy highway connectivity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-lg">✓</span>
                  <span>Peaceful campus environment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-lg">✓</span>
                  <span>Close to nature and amenities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-orange-800 shadow-md rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Visit Us</h3>
              <p className="text-sm mb-4">
                We welcome prospective students, parents, and visitors to explore our campus. Schedule a guided tour today!
              </p>
              <button className="w-full bg-white text-orange-700 font-semibold py-2 rounded-lg hover:bg-orange-50 transition-colors">
                Schedule Campus Tour
              </button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white shadow-md rounded-2xl overflow-hidden mb-8">
          <div className="h-96 md:h-96 bg-gray-200 relative">
           <div className="h-96 md:h-96 bg-gray-200 relative">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55187.17768054628!2d78.7179829!3d30.1743202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909a5b487640e03%3A0xf61d9be9411bf214!2sGarhwal%20Institute%20of%20Paramedical%20Sciences!5e0!3m2!1sen!2sin!4v1760341326908!5m2!1sen!2sin">   </iframe>
         </div>


          </div>
          <div className="p-6 bg-blue-50 border-t-2 border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">📌 Locate Us on Google Maps</h3>
            <p className="text-gray-700 text-sm mb-4">
              Our campus is located in Vill. & P.O. Kyark, Patti Idealshyun, Pauri Garhwal. The map above shows our exact location with a pinpoint marker. You can also search &quot;Garhwal Paramedical Institute Kyark&quot; on Google Maps.
            </p>
            <a
  href="https://www.google.com/maps/place/Garhwal+Institute+of+Paramedical+Sciences,+Kyark,+Pauri+Garhwal,+Uttarakhand+246001"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
>
  Open in Google Maps →
</a>


          </div>
        </div>

        {/* Directions from Major Cities */}
        <div className="bg-white shadow-md rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Directions from Major Cities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-3">From Dehradun</h3>
              <p className="text-gray-700 text-sm mb-3">
                <strong>Distance:</strong> 150.9 km | <strong>Time:</strong> 3.5 - 4 hours
              </p>
              <p className="text-gray-700 text-sm">
                Take NH48 towards Mussoorie and continue towards Pauri Garhwal. Follow signage to reach our campus.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">From Delhi</h3>
              <p className="text-gray-700 text-sm mb-3">
                <strong>Distance:</strong> 350 km | <strong>Time:</strong> 7 - 8 hours
              </p>
              <p className="text-gray-700 text-sm">
                Drive via NH48 towards Haridwar, then continue to Dehradun and towards Pauri Garhwal.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-3">From Haridwar</h3>
              <p className="text-gray-700 text-sm mb-3">
                <strong>Distance:</strong> 133 km | <strong>Time:</strong> 3.5 - 4 hours
              </p>
              <p className="text-gray-700 text-sm">
                Head towards Dehradun via NH48, then take the route towards Pauri Garhwal.
              </p>
            </div>
          </div>
        </div>

        {/* Nearby Landmarks */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 shadow-md rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Nearby Landmarks & Amenities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Landmarks</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Pauri Garhwal District headquarters</li>
                <li>✓ Surkanda Devi Temple (pilgrimage site)</li>
                <li>✓ Kantoli Temple nearby</li>
                <li>✓ Beautiful hill station surroundings</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Amenities</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Medical facilities and hospitals</li>
                <li>✓ Shopping centers and markets</li>
                <li>✓ Restaurants and cafes</li>
                <li>✓ Communication and banking services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-md rounded-2xl p-8 mb-8 text-white text-center">
          <h2 className="text-2xl font-semibold mb-3">Have Questions About Visiting?</h2>
          <p className="mb-4">
            Our admission and visitor support team is ready to help you plan your visit. Get in touch with us today!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="mailto:garhwalparamedicalinstitute@gmail.com" className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              Send Email
            </a>
            <a href="tel:+918273968106" className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              Call Now
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/about" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
            ← Back to About Overview
          </Link>
        </div>
      </div>
    </div>
  );
}