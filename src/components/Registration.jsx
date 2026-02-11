import { useState } from 'react';
import { UserPlus, Mail, Phone, BookOpen, Calendar, CheckCircle, ArrowRight, GraduationCap, User, Building2, IndianRupee, Shield } from 'lucide-react';
import Swal from 'sweetalert2';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', trainingType: '', technology: '', 
    qualification: '', year: '', fatherName: '', collegeName: '', 
    registrationFeePaid: false
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      Swal.fire({
        icon: 'warning',
        title: 'Verification Required',
        text: 'Please verify you are not a robot',
        confirmButtonColor: '#ea580c'
      });
      return;
    }
    if (formData.registrationFeePaid) {
      console.log('Registration Fee: ₹200');
    }
    Swal.fire({
      icon: 'success',
      title: 'Registration Successful!',
      text: 'Our team will contact you soon.',
      confirmButtonColor: '#ea580c'
    });
    setFormData({ name: '', email: '', mobile: '', trainingType: '', technology: '', 
      qualification: '', year: '', fatherName: '', collegeName: '', registrationFeePaid: false });
    setCaptchaVerified(false);
  };

  const trainingTypes = ['Course'];
  
  const technologies = [
    'Dot Net Core Full Stack', 'Java Full Stack', 'MERN Stack', 'PHP Laravel', 
    'Python Full Stack', 'Data Analytics', 'Android App Development', 'Flutter'
  ];

  const qualifications = ['B.Tech', 'BCA', 'MCA', 'M.Tech', 'BSc', 'MSc', 'Diploma', 'Other'];
  
  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Passout'];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="absolute top-40 left-20 w-20 h-20 border-4 border-purple-400/30 rounded-lg animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-40 right-32 w-16 h-16 border-4 border-blue-400/30 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/4 right-20 w-12 h-12 bg-indigo-400/20 rotate-45 animate-pulse" style={{ animationDuration: '2s' }}></div>
        <div className="absolute bottom-1/3 left-32 w-14 h-14 bg-purple-400/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce">
            🎓 Start Your Journey
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Register Now</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Fill the form below and our team will contact you within 24 hours
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <UserPlus className="w-4 h-4 text-orange-600" />
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-orange-600" />
                  Father's Name *
                </label>
                <input
                  type="text"
                  value={formData.fatherName}
                  onChange={(e) => setFormData({...formData, fatherName: e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                  placeholder="Enter father's name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-orange-600" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-600" />
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                    placeholder="10-digit mobile number"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-orange-600" />
                    Training Type *
                  </label>
                  <select
                    value={formData.trainingType}
                    onChange={(e) => setFormData({...formData, trainingType: e.target.value})}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                  >
                    <option value="">Select training type</option>
                    {trainingTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-orange-600" />
                    Technology *
                  </label>
                  <select
                    value={formData.technology}
                    onChange={(e) => setFormData({...formData, technology: e.target.value})}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                  >
                    <option value="">Select technology</option>
                    {technologies.map((tech, index) => (
                      <option key={index} value={tech}>{tech}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-orange-600" />
                    Qualification *
                  </label>
                  <select
                    value={formData.qualification}
                    onChange={(e) => setFormData({...formData, qualification: e.target.value})}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                  >
                    <option value="">Select qualification</option>
                    {qualifications.map((qual, index) => (
                      <option key={index} value={qual}>{qual}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-600" />
                    Year *
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                  >
                    <option value="">Select year</option>
                    {years.map((year, index) => (
                      <option key={index} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-orange-600" />
                  College Name *
                </label>
                <input
                  type="text"
                  value={formData.collegeName}
                  onChange={(e) => setFormData({...formData, collegeName: e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                  placeholder="Enter your college name"
                />
              </div>

              <div className="bg-orange-50 p-4 rounded-xl border-2 border-orange-200">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.registrationFeePaid}
                    onChange={(e) => setFormData({...formData, registrationFeePaid: e.target.checked})}
                    className="w-5 h-5 text-orange-600 border-2 border-orange-300 rounded focus:ring-orange-500"
                  />
                  <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-orange-600" />
                    I agree to pay Registration Fee of ₹200
                  </span>
                </label>
                {formData.registrationFeePaid && (
                  <p className="mt-2 text-sm text-orange-700 font-medium">Registration Fee: ₹200 (Non-refundable)</p>
                )}
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border-2 border-gray-200">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={captchaVerified}
                    onChange={(e) => setCaptchaVerified(e.target.checked)}
                    className="w-5 h-5 text-orange-600 border-2 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-gray-600" />
                    I'm not a robot
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-700 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 group"
              >
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
        </div>

        <div className="mt-8 text-center text-white">
          <p>Already registered? <a href="/contact" className="text-purple-300 font-semibold hover:underline">Contact us</a></p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
