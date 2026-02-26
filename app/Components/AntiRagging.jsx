import {
  Phone,
  Mail,
  Globe,
  AlertTriangle,
  Shield,
  Users,
  FileText,
} from "lucide-react";

export default function AntiRagging() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            National Ragging Prevention Programme
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* National Anti-Ragging Helpline */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                National Anti-Ragging Helpline
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-sm text-red-700 font-medium mb-2">
                  24×7 Toll Free Emergency Line
                </p>
                <p className="text-3xl font-bold text-red-800">1800-180-5522</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" />
                  <a
                    href="mailto:helpline@antiragging.in"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    helpline@antiragging.in
                  </a>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" />
                  <a
                    href="https://www.antiragging.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    www.antiragging.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* UGC Monitoring Agency */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                UGC Monitoring Agency
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-semibold text-gray-700">
                Centre for Youth (C4Y)
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" />
                  <a
                    href="mailto:antiragging@c4yindia.org"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    antiragging@c4yindia.org
                  </a>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" />
                  <a
                    href="https://www.c4yindia.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    www.c4yindia.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Committee Information */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Institutional Support
            </h2>
          </div>

          <p className="text-gray-600 mb-4">
            Contact Details of the Anti-Ragging Committee and Squad
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.antiragging.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-medium transition-colors"
            >
              Anti-Ragging Committee (ARC)
            </a>
            <a
              href="https://www.antiragging.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-medium transition-colors"
            >
              Anti-Ragging Squad (ARS)
            </a>
          </div>
        </div>

        {/* Warning Notice */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-lg p-8 text-white">
          <div className="flex items-start mb-6">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
              <AlertTriangle className="w-6 h-6 text-yellow-500 drop-shadow" />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 drop-shadow">
                Important Legal Notice
              </h2>
              <p className="text-lg font-semibold mb-6 drop-shadow">
                RAGGING IS A CRIMINAL OFFENCE AND THE CULPRITS WILL ATTRACT
                PUNITIVE ACTION AS MENTIONED IN THE UGC REGULATIONS
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.antiragging.in/assets/pdf/annexure/Annexure-I.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-700 rounded-lg font-semibold shadow hover:bg-gray-100 transition-colors"
            >
              <FileText className="w-5 h-5 mr-2" />
              Read UGC Regulations
            </a>
            <a
              href="https://www.ugc.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-800 text-white rounded-lg font-semibold shadow hover:bg-red-900 transition-colors"
            >
              <Globe className="w-5 h-5 mr-2" />
              Visit UGC Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
