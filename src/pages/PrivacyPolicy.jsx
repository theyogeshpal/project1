import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔒 Privacy Policy
          </div>
          <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
            Your <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Privacy Matters</span>
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
                <Shield className="w-8 h-8 text-orange-600" />
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The Code Spark Pvt. Ltd. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Eye className="w-8 h-8 text-orange-600" />
                Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Name, email address, and phone number</li>
                <li>Course enrollment and training information</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
                <li>Feedback and correspondence</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Lock className="w-8 h-8 text-orange-600" />
                How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your enrollment and payments</li>
                <li>Send you course updates and educational content</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze usage patterns and improve user experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-8 h-8 text-orange-600" />
                Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
