import { Rocket, Heart, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Rocket,
      title: 'Career Acceleration',
      description: 'Fast-track your career with our industry-aligned curriculum and placement assistance. Our students land jobs 3x faster than traditional learners.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50'
    },
    {
      icon: Heart,
      title: 'Personalized Mentorship',
      description: 'Get dedicated one-on-one guidance from industry veterans. We care about your success and provide continuous support throughout your journey.',
      gradient: 'from-orange-600 to-orange-800',
      bgGradient: 'from-orange-50 to-orange-100'
    },
    {
      icon: Zap,
      title: 'Hands-On Learning',
      description: 'Learn by doing with real-world projects and live coding sessions. Build a portfolio that impresses recruiters and showcases your skills.',
      gradient: 'from-orange-500 to-yellow-600',
      bgGradient: 'from-orange-50 to-yellow-50'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900">
            Why <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Choose Us?</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-6 rounded"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We don't just teach code, we transform careers. Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className={`relative bg-gradient-to-br ${reason.bgGradient} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-orange-200 overflow-hidden h-full`}>
                  {/* Animated background circle */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${reason.gradient} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700`}></div>
                  
                  {/* Icon */}
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed relative">
                    {reason.description}
                  </p>

                  {/* Decorative element */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${reason.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>

                {/* Number badge */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${reason.gradient} rounded-full flex items-center justify-center shadow-lg z-10`}>
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-700 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of successful students who transformed their careers with us. Your dream job is just one step away.
            </p>
            <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all" onClick={() => window.location.href='/register'}>
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
