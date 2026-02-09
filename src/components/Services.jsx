import { Code, Smartphone, Palette, Lightbulb, Globe, Database, Cloud, Shield, Cpu, Briefcase, Users, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      title: 'Web Development', 
      desc: 'Custom websites and web applications with modern frameworks',
      features: ['React/Angular', 'Node.js/PHP', 'Responsive Design'],
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Mobile App Development', 
      desc: 'Native and cross-platform mobile applications',
      features: ['iOS & Android', 'React Native', 'Flutter'],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'UI/UX Design', 
      desc: 'Modern and user-friendly interface designs',
      features: ['Figma/Adobe XD', 'Prototyping', 'User Research'],
      icon: Palette,
      color: 'from-orange-500 to-red-500'
    },
    { 
      title: 'Cloud Solutions', 
      desc: 'Scalable cloud infrastructure and deployment',
      features: ['AWS/Azure', 'DevOps', 'CI/CD Pipeline'],
      icon: Cloud,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      title: 'Database Management', 
      desc: 'Efficient database design and optimization',
      features: ['MySQL/MongoDB', 'PostgreSQL', 'Data Migration'],
      icon: Database,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      title: 'Cybersecurity', 
      desc: 'Security audits and penetration testing',
      features: ['Security Audit', 'Pen Testing', 'Compliance'],
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    { 
      title: 'AI/ML Solutions', 
      desc: 'Artificial intelligence and machine learning integration',
      features: ['TensorFlow', 'Data Analytics', 'Automation'],
      icon: Cpu,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      title: 'IT Consulting', 
      desc: 'Technical consulting and digital transformation',
      features: ['Strategy', 'Architecture', 'Best Practices'],
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
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
              💼 Professional Services
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">
              Development <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Services</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-6 rounded"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              End-to-end software development and IT solutions for businesses of all sizes
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Projects Delivered', value: '200+' },
              { label: 'Happy Clients', value: '150+' },
              { label: 'Team Members', value: '25+' },
              { label: 'Years Experience', value: '5+' }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-gray-100 text-center">
                <h3 className="text-4xl font-bold text-orange-600 mb-2">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🚀 What We Offer
            </div>
            <h2 className="text-5xl font-extrabold mb-4 text-gray-900">
              Our <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-6 rounded"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 hover:border-orange-300 overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  
                  <div className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                    
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-orange-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full bg-gradient-to-r from-orange-500 to-orange-700 text-white py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              Why Choose <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">The Code Spark?</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                desc: 'Skilled developers with years of industry experience',
                icon: '👨‍💻'
              },
              {
                title: 'Quality Assurance',
                desc: 'Rigorous testing and quality control processes',
                icon: '✅'
              },
              {
                title: 'Timely Delivery',
                desc: 'On-time project delivery with agile methodology',
                icon: '⏱️'
              },
              {
                title: 'Cost-Effective',
                desc: 'Competitive pricing without compromising quality',
                icon: '💰'
              },
              {
                title: '24/7 Support',
                desc: 'Round-the-clock technical support and maintenance',
                icon: '🛠️'
              },
              {
                title: 'Scalable Solutions',
                desc: 'Future-proof architecture that grows with your business',
                icon: '📈'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-gray-100 hover:border-orange-300">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔄 How We Work
            </div>
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              Our Development <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Process</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your requirements and business goals', icon: '🔍' },
              { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap and timeline', icon: '📋' },
              { step: '03', title: 'Development', desc: 'Building your solution with best practices', icon: '⚙️' },
              { step: '04', title: 'Deployment', desc: 'Launching and providing ongoing support', icon: '🚀' }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-orange-200">
                  <div className="text-6xl font-bold text-orange-200 mb-4">{process.step}</div>
                  <div className="text-4xl mb-4">{process.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="text-orange-400 text-3xl">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              Industries We <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Serve</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'E-Commerce', icon: '🛒' },
              { name: 'Healthcare', icon: '🏥' },
              { name: 'Education', icon: '🎓' },
              { name: 'Finance', icon: '💳' },
              { name: 'Real Estate', icon: '🏢' },
              { name: 'Travel', icon: '✈️' }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-gray-100 hover:border-orange-300 text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help transform your ideas into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
              Get Started
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Request Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
