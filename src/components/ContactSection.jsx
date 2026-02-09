import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Youtube, CheckCircle, Zap, Award, HeadphonesIcon, TrendingUp } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 98765 43210',
      subInfo: 'Mon-Sat, 9AM-7PM',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'info@thecodespark.com',
      subInfo: 'Quick Response',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Gomti Nagar, Lucknow',
      subInfo: 'Uttar Pradesh, India',
      color: 'from-orange-400 to-red-500'
    }
  ];

  const courses = [
    'Summer Training',
    'Winter Training',
    'Full Stack Development',
    'Data Science',
    'Mobile App Development',
    'DevOps Engineering',
    'UI/UX Design',
    'Cybersecurity',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce">
            📞 Get In Touch
          </div>
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900">
            Let's Start Your <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Coding Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-6 rounded"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We're here to help! Reach out and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 hover:border-orange-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-lg text-orange-600 font-semibold mb-1">{item.info}</p>
              <p className="text-sm text-gray-500">{item.subInfo}</p>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12 animate-pulse">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h4>
                <p className="text-gray-600">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Interested Course *</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>{course}</option>
                    ))}
                  </select>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none resize-none"
                    placeholder="Tell us about your goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-700 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            )}

            {/* Social Media */}
            <div className="border-t border-gray-200 mt-8 pt-6">
              <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, link: '#' },
                  { icon: Twitter, link: '#' },
                  { icon: Instagram, link: '#' },
                  { icon: Linkedin, link: '#' },
                  { icon: Youtube, link: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700 hover:text-white text-orange-600 transition-all hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Map & Info */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100 h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973753945!2d80.77769894863283!3d26.848927800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>

            {/* Why Contact Us */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl p-8 shadow-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Why Contact Us?</h3>
              
              <div className="space-y-4">
                {[
                  { icon: Zap, text: 'Quick Response within 24 hours' },
                  { icon: Award, text: 'Free Career Counseling Session' },
                  { icon: HeadphonesIcon, text: 'Dedicated Support Team' },
                  { icon: TrendingUp, text: 'Personalized Course Guidance' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
