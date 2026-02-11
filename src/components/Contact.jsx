import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Zap, Award, HeadphonesIcon, TrendingUp, Facebook, Twitter, Instagram, Linkedin, Youtube, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: "We'll get back to you within 24 hours.",
      confirmButtonColor: '#ea580c'
    });
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  const courses = [
    'Dot Net Core Full Stack', 'Java Full Stack', 'MERN Stack', 'PHP Laravel',
    'Python Full Stack', 'Data Analytics', 'Android App Development', 'Flutter'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce">
              📞 Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">
              Let's Start Your <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Coding Journey</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-6 rounded"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions? We're here to help! Reach out and our team will get back to you within 24 hours
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Phone, title: 'Call Us', info: '+91 98765 43210', subInfo: 'Mon-Sat, 9AM-7PM', color: 'from-green-500 to-emerald-500' },
              { icon: Mail, title: 'Email Us', info: 'info@thecodespark.com', subInfo: 'Quick Response', color: 'from-blue-500 to-cyan-500' },
              { icon: MapPin, title: 'Visit Us', info: 'Gomti Nagar, Lucknow', subInfo: 'Uttar Pradesh, India', color: 'from-orange-500 to-red-500' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-lg text-orange-600 font-semibold mb-1">{item.info}</p>
                <p className="text-sm text-gray-500">{item.subInfo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
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
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Interested Course *</label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({...formData, course: e.target.value})}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none"
                    >
                      <option value="">Select a course</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
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

            {/* Right Side */}
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

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help! Get in touch and we'll answer all your queries
          </p>
          <a href="tel:+919876543210" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
            Call Us Now
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
