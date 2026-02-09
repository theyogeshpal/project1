import { Calendar, Clock, Users, Award } from 'lucide-react';

const TrainingPrograms = () => {
  const programs = [
    {
      title: 'Summer Training',
      duration: '6-8 Weeks',
      students: '200+ Enrolled',
      description: 'Intensive summer program with hands-on projects and industry exposure',
      gif: 'https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      title: 'Winter Training',
      duration: '6-8 Weeks',
      students: '150+ Enrolled',
      description: 'Comprehensive winter program focusing on latest technologies',
      gif: 'https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Apprenticeship Program',
      duration: '6 Months',
      students: '100+ Enrolled',
      description: 'Work-integrated learning with real company projects',
      gif: 'https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Full Stack Development',
      duration: '12 Weeks',
      students: '180+ Enrolled',
      description: 'Master MERN stack with deployment and DevOps',
      gif: 'https://media.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Data Science Bootcamp',
      duration: '10 Weeks',
      students: '120+ Enrolled',
      description: 'Python, ML, AI and data analytics with real datasets',
      gif: 'https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif',
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      title: 'Mobile App Development',
      duration: '8 Weeks',
      students: '90+ Enrolled',
      description: 'Build Android and iOS apps with React Native and Flutter',
      gif: 'https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif',
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      title: 'DevOps Engineering',
      duration: '8 Weeks',
      students: '80+ Enrolled',
      description: 'CI/CD, Docker, Kubernetes, AWS and cloud deployment',
      gif: 'https://media.giphy.com/media/kH6CqYiquZawmU1HI6/giphy.gif',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'UI/UX Design',
      duration: '6 Weeks',
      students: '70+ Enrolled',
      description: 'Design thinking, Figma, prototyping and user research',
      gif: 'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif',
      gradient: 'from-teal-400 to-cyan-500'
    },
    {
      title: 'Cybersecurity Training',
      duration: '10 Weeks',
      students: '60+ Enrolled',
      description: 'Ethical hacking, network security and penetration testing',
      gif: 'https://media.giphy.com/media/077i6AULCXc0FKTj9s/giphy.gif',
      gradient: 'from-red-400 to-orange-500'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900">
            Our <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Training Programs</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-6 rounded"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse range of industry-focused training programs designed to accelerate your career
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 hover:border-orange-300"
            >
              {/* GIF Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.gif} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <p className="text-sm font-bold text-gray-800">{program.duration}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {program.description}
                </p>

                {/* Info Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center gap-1 bg-orange-50 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span className="text-sm text-orange-700 font-semibold">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-orange-50 px-3 py-1 rounded-full">
                    <Users className="w-4 h-4 text-orange-600" />
                    <span className="text-sm text-orange-700 font-semibold">{program.students}</span>
                  </div>
                </div>

                {/* Register Button */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-700 text-white py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2" onClick={() => window.location.href='/register'}>
                  <Award className="w-5 h-5" />
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-500 to-orange-700 rounded-3xl p-10 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            We offer customized training programs tailored to your specific needs. Contact us to discuss your requirements.
          </p>
          <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all" onClick={() => window.location.href='/contact'}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
