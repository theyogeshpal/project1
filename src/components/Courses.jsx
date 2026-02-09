import { BookOpen, Code2, Layers, Smartphone, Award, Users, Clock, TrendingUp } from 'lucide-react';

const Courses = () => {
  const courses = [
    { 
      title: 'Summer Training', 
      desc: 'Intensive 6-8 weeks program with hands-on projects', 
      duration: '6-8 Weeks', 
      students: '200+ Enrolled',
      technologies: ['Python', 'Java', 'React'],
      icon: BookOpen 
    },
    { 
      title: 'Winter Training', 
      desc: 'Comprehensive program focusing on latest technologies', 
      duration: '6-8 Weeks', 
      students: '150+ Enrolled',
      technologies: ['PHP', 'MySQL', 'JavaScript'],
      icon: Code2 
    },
    { 
      title: 'Full Stack Development', 
      desc: 'Master MERN stack with deployment and DevOps', 
      duration: '12 Weeks', 
      students: '180+ Enrolled',
      technologies: ['MongoDB', 'React', 'Node.js'],
      icon: Layers 
    },
    { 
      title: 'Data Science Bootcamp', 
      desc: 'Python, ML, AI and data analytics with real datasets', 
      duration: '10 Weeks', 
      students: '120+ Enrolled',
      technologies: ['Python', 'TensorFlow', 'Pandas'],
      icon: BookOpen 
    },
    { 
      title: 'Mobile App Development', 
      desc: 'Build Android and iOS apps with React Native and Flutter', 
      duration: '8 Weeks', 
      students: '90+ Enrolled',
      technologies: ['React Native', 'Flutter', 'Firebase'],
      icon: Smartphone 
    },
    { 
      title: 'DevOps Engineering', 
      desc: 'CI/CD, Docker, Kubernetes, AWS and cloud deployment', 
      duration: '8 Weeks', 
      students: '80+ Enrolled',
      technologies: ['Docker', 'Kubernetes', 'AWS'],
      icon: Code2 
    },
    { 
      title: 'UI/UX Design', 
      desc: 'Design thinking, Figma, prototyping and user research', 
      duration: '6 Weeks', 
      students: '70+ Enrolled',
      technologies: ['Figma', 'Adobe XD', 'Sketch'],
      icon: Layers 
    },
    { 
      title: 'Cybersecurity Training', 
      desc: 'Ethical hacking, network security and penetration testing', 
      duration: '10 Weeks', 
      students: '60+ Enrolled',
      technologies: ['Kali Linux', 'Metasploit', 'Wireshark'],
      icon: Code2 
    },
  ];

  const technologies = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
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
              🎓 Transform Your Career
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">
              Explore Our <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Training Programs</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-6 rounded"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Industry-focused training programs with live projects, expert mentorship, and guaranteed placement support
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Users, label: 'Students Trained', value: '1000+', color: 'from-blue-500 to-cyan-500' },
              { icon: Award, label: 'Courses Offered', value: '15+', color: 'from-orange-500 to-red-500' },
              { icon: TrendingUp, label: 'Placement Rate', value: '95%', color: 'from-green-500 to-emerald-500' },
              { icon: Clock, label: 'Training Hours', value: '500+', color: 'from-purple-500 to-pink-500' }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-gray-100">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📚 Our Programs
          </div>
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900">Explore Our <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Courses</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-6 rounded"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-focused training programs designed to accelerate your career
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 overflow-hidden group">
                {/* Square Banner Placeholder */}
                <div className="w-3/4 aspect-square mx-auto mt-6 bg-gradient-to-br from-orange-300 to-orange-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-4xl font-bold opacity-50">Banner</span>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{course.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.desc}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">⏱️ {course.duration}</span>
                    <span className="text-sm text-gray-500">👥 {course.students}</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-700 text-white py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all" onClick={() => window.location.href='/register'}>
                    Enroll Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              Why Choose <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Our Courses?</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry-Relevant Curriculum',
                desc: 'Learn the latest technologies and tools used by top companies',
                icon: '💼'
              },
              {
                title: 'Hands-On Projects',
                desc: 'Build real-world projects to strengthen your portfolio',
                icon: '🚀'
              },
              {
                title: 'Expert Mentorship',
                desc: 'Learn from industry professionals with years of experience',
                icon: '👨‍🏫'
              },
              {
                title: 'Flexible Learning',
                desc: 'Choose from weekday, weekend, or online batch options',
                icon: '⏰'
              },
              {
                title: 'Placement Support',
                desc: 'Get interview preparation and job placement assistance',
                icon: '🎯'
              },
              {
                title: 'Certification',
                desc: 'Receive industry-recognized certificates upon completion',
                icon: '🏆'
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

      {/* Technologies Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              💻 Technologies We Teach
            </div>
            <h3 className="text-4xl font-extrabold mb-4 text-gray-900">
              Master <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Industry-Leading</span> Technologies
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 flex flex-col items-center justify-center group"
              >
                <div className="w-16 h-16 mb-3 group-hover:scale-110 transition-transform">
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-orange-600 transition-colors text-center">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students who have transformed their careers with our training programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
              Enroll Now
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
