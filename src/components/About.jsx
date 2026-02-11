import { Target, Eye, Award, Users, TrendingUp, Heart, Zap, Shield } from 'lucide-react';

const About = () => {
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
              🏛️ About The Code Spark
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">
              Empowering <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Future Developers</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-6 rounded"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A registered Private Limited Company specializing in coding education and software development since 2019
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Students Trained', value: '1000+', icon: Users },
              { label: 'Projects Delivered', value: '200+', icon: Award },
              { label: 'Years Experience', value: '5+', icon: TrendingUp },
              { label: 'Success Rate', value: '95%', icon: Target }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-gray-100 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-orange-600 mb-2">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                📚 Our Journey
              </div>
              <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
                Building <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Tomorrow's Tech Leaders</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2019, The Code Spark Pvt. Ltd. started with a vision to bridge the gap between academic learning and industry requirements. Based in Lucknow, we've grown from a small training center to a comprehensive technology solutions provider.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our team of experienced professionals brings together expertise in software development, training, and mentorship. We believe in hands-on learning, real-world projects, and continuous innovation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to have trained over 1000 students and delivered 200+ successful projects, making us one of the most trusted names in tech education and development in Lucknow.
              </p>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" alt="Team" className="rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-orange-700 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">5+ Years</p>
                <p className="text-sm">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-orange-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower individuals with cutting-edge technical skills and provide businesses with innovative software solutions that drive growth and success. We strive to create a learning environment that fosters creativity, innovation, and excellence.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-orange-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become India's leading technology education and development company, recognized for producing industry-ready professionals and delivering world-class software solutions that transform businesses and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              Our Core <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Values</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Excellence', desc: 'Committed to delivering the highest quality in everything we do', icon: Award },
              { title: 'Innovation', desc: 'Embracing new technologies and creative solutions', icon: Zap },
              { title: 'Integrity', desc: 'Building trust through transparency and honesty', icon: Shield },
              { title: 'Passion', desc: 'Driven by love for technology and education', icon: Heart }
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-orange-200 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              Why Choose <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">The Code Spark?</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Industry Experts', desc: 'Learn from professionals with real-world experience', icon: '👨🏫' },
              { title: 'Practical Learning', desc: 'Hands-on projects and live industry exposure', icon: '💻' },
              { title: 'Placement Support', desc: 'Dedicated placement assistance and career guidance', icon: '🎯' },
              { title: 'Modern Curriculum', desc: 'Updated content aligned with industry standards', icon: '📚' },
              { title: 'Flexible Batches', desc: 'Weekend, weekday, and online options available', icon: '⏰' },
              { title: 'Affordable Fees', desc: 'Quality education at competitive pricing', icon: '💰' }
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

      {/* Founders Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              👥 Meet Our Founders
            </div>
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              The Visionaries Behind <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">The Code Spark</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: 'Founder Name 1',
                role: 'Co-Founder & CEO',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
                bio: 'With 10+ years of experience in software development and education, leading The Code Spark with a vision to transform tech education in India.',
                expertise: ['Software Architecture', 'Team Leadership', 'Business Strategy']
              },
              {
                name: 'Founder Name 2',
                role: 'Co-Founder & CTO',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
                bio: 'Expert in full-stack development and training, passionate about creating innovative learning experiences and building scalable solutions.',
                expertise: ['Full-Stack Development', 'Technical Training', 'Innovation']
              }
            ].map((founder, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-orange-200">
                <div className="flex flex-col items-center text-center">
                  <img src={founder.image} alt={founder.name} className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-orange-500 shadow-lg" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-orange-600 font-semibold mb-4">{founder.role}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{founder.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {founder.expertise.map((skill, idx) => (
                      <span key={idx} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              👥 Our Team
            </div>
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              Meet Our <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Expert Team</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Keshav Singh', role: 'Java & .NET Specialist', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400', tech: 'Java, Spring & .NET' },
              { name: 'Diksha Chauhan', role: 'Business Development Manager', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400', tech: 'Business Strategy & Growth' },
              { name: 'Aman Tyagi', role: 'App Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', tech: 'Flutter & Android' },
              { name: 'Kanishka Sharma', role: 'Graphic Designer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400', tech: 'UI/UX & Branding' }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-gray-100 text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-orange-500" />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-orange-600 font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students who have transformed their careers with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/courses" className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
              Explore Courses
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
