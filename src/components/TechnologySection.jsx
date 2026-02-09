const TechnologySection = () => {
  const technologies1 = [
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ];

  const technologies2 = [
    { name: 'Angular', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Vue.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Flutter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'PHP', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Laravel', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
    { name: 'Django', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900">
            Technologies <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">We Teach</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-6 rounded"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master the most in-demand technologies and frameworks used by top companies worldwide
          </p>
        </div>

        {/* First Carousel - Left to Right */}
        <div className="relative mb-12 overflow-hidden">
          <div className="flex animate-scroll-left">
            {[...technologies1, ...technologies1].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-52 h-52 mx-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center p-8 border-2 border-orange-100 hover:border-orange-300 group"
              >
                <img
                  src={tech.url}
                  alt={tech.name}
                  className="w-28 h-28 object-contain mb-4 group-hover:scale-110 transition-transform"
                />
                <p className="text-base font-semibold text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Carousel - Right to Left */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right">
            {[...technologies2, ...technologies2].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-52 h-52 mx-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center p-8 border-2 border-orange-100 hover:border-orange-300 group"
              >
                <img
                  src={tech.url}
                  alt={tech.name}
                  className="w-28 h-28 object-contain mb-4 group-hover:scale-110 transition-transform"
                />
                <p className="text-base font-semibold text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechnologySection;
