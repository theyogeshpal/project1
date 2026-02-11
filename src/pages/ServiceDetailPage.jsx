import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { CheckCircle, ArrowLeft, Code, Smartphone, Palette, Cloud, Database, Shield, Cpu, Lightbulb } from 'lucide-react';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-orange-600 hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  const iconMap = {
    'web-development': Code,
    'mobile-app-development': Smartphone,
    'ui-ux-design': Palette,
    'cloud-solutions': Cloud,
    'database-management': Database,
    'cybersecurity': Shield,
    'ai-ml-solutions': Cpu,
    'it-consulting': Lightbulb
  };

  const Icon = iconMap[service.id] || Code;

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold mb-8 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-extrabold text-gray-900">{service.title}</h1>
              <p className="text-xl text-gray-600 mt-2">{service.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{service.detailedDesc}</p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 bg-orange-50 p-4 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
                        <div className="text-5xl font-bold text-orange-200 mb-2">{String(index + 1).padStart(2, '0')}</div>
                        <h3 className="text-lg font-bold text-gray-900">{step}</h3>
                      </div>
                      {index < service.process.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                          <div className="text-orange-400 text-2xl">→</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg border-2 border-orange-200 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies We Use</h3>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, index) => (
                    <span key={index} className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 border-2 border-orange-200 hover:border-orange-400 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-orange-200">
                  <h4 className="font-bold text-gray-900 mb-4">Ready to get started?</h4>
                  <a href="/contact" className="block w-full bg-gradient-to-r from-orange-500 to-orange-700 text-white py-3 rounded-full font-bold text-center hover:shadow-xl hover:scale-105 transition-all">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Interested in {service.title}?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help transform your business
          </p>
          <a href="/contact" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
            Get a Free Consultation
          </a>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
