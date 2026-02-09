import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const courses = [
    { name: 'Summer Training', href: '#' },
    { name: 'Winter Training', href: '#' },
    { name: 'Full Stack Development', href: '#' },
    { name: 'Data Science', href: '#' },
    { name: 'Mobile App Development', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/Gemini_Generated_Image_9nq63t9nq63t9nq6-removebg-preview.png" alt="The Code Spark" className="h-16 w-auto object-contain" />
              {/* <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  The Code Spark
                </h3>
                <p className="text-xs text-gray-400">Pvt. Ltd.</p>
              </div> */}
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering future developers with industry-focused training and real-world project experience. Your success is our mission.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700 transition-all hover:scale-110 hover:-translate-y-1 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Popular Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href={course.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <span>Gomti Nagar, Lucknow<br />Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-orange-500 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@thecodespark.com" className="hover:text-orange-500 transition-colors">
                  info@thecodespark.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2024 The Code Spark Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>in Lucknow</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
