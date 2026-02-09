import { Award, Users, Briefcase, Target, BookOpen, TrendingUp, Clock, Shield } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Industry Experts',
      description: 'Learn from professionals with 10+ years of experience in top tech companies'
    },
    {
      icon: Users,
      title: '500+ Students',
      description: 'Successfully trained and placed in companies like TCS, Infosys, Wipro, and startups'
    },
    {
      icon: Briefcase,
      title: 'Live Projects',
      description: 'Work on 5+ real-world projects during training to build your portfolio'
    },
    {
      icon: Target,
      title: '100% Placement',
      description: 'Dedicated placement cell with interview preparation and resume building'
    },
    {
      icon: BookOpen,
      title: 'Updated Curriculum',
      description: 'Course content aligned with latest industry trends and technologies'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning support and alumni network for career advancement'
    },
    {
      icon: Clock,
      title: 'Flexible Batches',
      description: 'Weekend and weekday batches available to suit your schedule'
    },
    {
      icon: Shield,
      title: 'Certified Training',
      description: 'Get industry-recognized certificates upon successful completion'
    }
  ];

  const stats = [
    { number: '500+', label: 'Students Trained', color: 'from-orange-500 to-orange-700' },
    { number: '50+', label: 'Projects Delivered', color: 'from-orange-600 to-red-600' },
    { number: '95%', label: 'Placement Rate', color: 'from-orange-500 to-orange-800' },
    { number: '5+', label: 'Years Experience', color: 'from-orange-600 to-orange-900' }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900">
            About <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">The Code Spark</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-6 rounded"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A registered Private Limited Company in Lucknow, dedicated to transforming aspiring developers into industry-ready professionals. We specialize in providing comprehensive IT training programs with a focus on practical learning, live projects, and guaranteed placement assistance. Our mission is to bridge the gap between academic knowledge and industry requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" 
                alt="Team collaboration" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent"></div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border-2 border-orange-200">
              <div className="text-center">
                <p className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">5+</p>
                <p className="text-gray-600 font-semibold">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Why Choose The Code Spark?</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are not just another training institute. We are your career transformation partner. Our training programs are meticulously designed by industry veterans who understand what companies are looking for. We combine theoretical knowledge with extensive hands-on practice to ensure you're job-ready from day one.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With state-of-the-art infrastructure, modern teaching methodologies, and a proven track record of successful placements, we have become Lucknow's most trusted name in IT training. Our alumni work in leading companies across India and abroad.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">Industry-relevant curriculum updated quarterly based on market demands</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">One-on-one mentorship sessions with industry experts and career counselors</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">Modern labs with latest software and tools used in the industry</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">Lifetime access to learning resources and alumni community support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center border-2 border-orange-100 hover:border-orange-300 transition-all">
              <p className={`text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </p>
              <p className="text-gray-600 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-orange-100 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
