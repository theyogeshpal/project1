import { FileCheck, AlertCircle, Scale, Users } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📋 Terms of Service
          </div>
          <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
            Terms & <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Conditions</span>
          </h1>
          <p className="text-xl text-gray-600">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileCheck className="w-8 h-8 text-orange-600" />
                Agreement to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using The Code Spark Pvt. Ltd.'s services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Users className="w-8 h-8 text-orange-600" />
                User Responsibilities
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Provide accurate and complete information during enrollment</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Attend classes regularly and complete assignments on time</li>
                <li>Respect intellectual property rights of course materials</li>
                <li>Behave professionally and respectfully with instructors and peers</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Scale className="w-8 h-8 text-orange-600" />
                Payment Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All fees must be paid in full before or at the start of the course unless otherwise agreed. We accept various payment methods including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Online payment (Credit/Debit cards, UPI, Net Banking)</li>
                <li>Cash payment at our office</li>
                <li>EMI options (subject to approval)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Refund requests must be made within 7 days of course commencement and are subject to our refund policy.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All course materials, including but not limited to videos, documents, code samples, and presentations, are the intellectual property of The Code Spark Pvt. Ltd. Unauthorized distribution, reproduction, or commercial use is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-orange-600" />
                Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The Code Spark Pvt. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. We do not guarantee specific employment outcomes or salary packages.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website. Continued use of our services after such modifications constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of courts in Lucknow, Uttar Pradesh.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these Terms of Service, please contact us at:
                <br /><br />
                <strong>The Code Spark Pvt. Ltd.</strong><br />
                Email: info@thecodespark.com<br />
                Phone: +91 98765 43210<br />
                Address: Gomti Nagar, Lucknow, Uttar Pradesh, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
