import { Sparkles, Users, Trophy, Rocket } from 'lucide-react';

const OurStory = () => {
  const milestones = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Started with a vision to transform IT education in Lucknow. Our founders, industry veterans with 15+ years of experience, identified the gap between academic learning and industry requirements.',
      icon: Sparkles
    },
    {
      year: '2020',
      title: 'First Batch Success',
      description: 'Trained our first batch of 50 students with 100% placement rate. This success validated our teaching methodology and practical approach to learning.',
      icon: Users
    },
    {
      year: '2021',
      title: 'Recognition & Growth',
      description: 'Received recognition as the Best IT Training Institute in Lucknow. Expanded our team and infrastructure to accommodate growing demand.',
      icon: Trophy
    },
    {
      year: '2024',
      title: 'Leading the Way',
      description: 'Now training 500+ students annually with partnerships with top companies. Continuing to innovate and set new standards in IT education.',
      icon: Rocket
    }
  ];

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900">
            Our <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Story</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-6 rounded"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From a small training center to Lucknow's most trusted IT institute - our journey has been driven by passion, dedication, and a commitment to excellence.
          </p>
        </div>

        {/* Story Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">The Spark That Started It All</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              The Code Spark was born from a simple observation: talented students were graduating with degrees but lacked the practical skills needed to succeed in the industry. Our founders, having worked with leading tech companies, understood exactly what employers were looking for.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We started with a mission to bridge this gap by providing hands-on, industry-relevant training that prepares students not just for their first job, but for a successful career in technology.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <p className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">500+</p>
                <p className="text-gray-600 font-semibold">Students Trained</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">95%</p>
                <p className="text-gray-600 font-semibold">Placement Rate</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">50+</p>
                <p className="text-gray-600 font-semibold">Partner Companies</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800" 
              alt="Team working together" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-orange-700 p-6 rounded-2xl shadow-xl">
              <p className="text-white font-bold text-lg">Empowering Future Developers</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h3>
          
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-orange-700 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-all hover:-translate-y-2">
                      <p className="text-orange-600 font-bold text-2xl mb-2">{milestone.year}</p>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center shadow-xl z-10 relative">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-orange-700 rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">Our Vision for the Future</h3>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
            We envision becoming India's leading IT training institute, known for producing industry-ready professionals who don't just get jobs, but build remarkable careers. We're committed to continuously evolving our curriculum, expanding our reach, and maintaining the highest standards of education.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
