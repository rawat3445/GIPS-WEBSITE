// app/Components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <img
            src="/logo-paramedicalfinal-e1717133101289.png"
            alt="GIPS Logo"
            className="w-16 h-16 mb-4 object-contain"
          />
          <h2 className="text-lg font-semibold mb-2 text-white">
            Garhwal Institute of Paramedical Sciences
          </h2>
          <p className="text-sm">
            Providing quality paramedical education and empowering healthcare
            professionals from the heart of Pauri Garhwal, Uttarakhand.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-white">
                Courses
              </a>
            </li>
            <li>
              <a href="/admissions" className="hover:text-white">
                Admissions
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-md font-semibold mb-3 text-white">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Village &amp; PO - Kyark, Edwalsyun Pauri</li>
            <li>Pauri Garhwal, Uttarakhand</li>
            <li>
              Email:{" "}
              <a
                href="mailto:garhwalparamedicalinstitute@gmail.com"
                className="hover:text-white"
              >
                garhwalparamedicalinstitute@gmail.com
              </a>
            </li>
            <li>
              Mob:{" "}
              <a href="tel:+918273968106" className="hover:text-white">
                8273968106
              </a>
            </li>
          </ul>
        </div>

        {/* Social / Follow */}
        <div>
          <h3 className="text-md font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="px-3 py-2 bg-gray-800 rounded hover:bg-gray-700 text-sm"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/gips.pauri/"
              aria-label="Instagram"
              className="px-3 py-2 bg-gray-800 rounded hover:bg-gray-700 text-sm"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/garhwal-institute-of-paramedical-sciences-of-paramedical-sciences-445405345/"
              aria-label="LinkedIn"
              className="px-3 py-2 bg-gray-800 rounded hover:bg-gray-700 text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="px-3 py-2 bg-gray-800 rounded hover:bg-gray-700 text-sm"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center text-xs py-4">
        © {new Date().getFullYear()} Garhwal Institute of Paramedical Sciences.
        All Rights Reserved.
      </div>
    </footer>
  );
}
