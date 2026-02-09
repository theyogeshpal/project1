const Hero = () => {
  const icons = [
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Angular', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Flutter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'PHP', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ];

  return (
    <section id="home" className="text-gray-900 py-24 pt-10 px-6 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.pixabay.com/photo/2024/12/03/08/08/ai-generated-9241538_1280.jpg" 
          alt="Coding Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/95 via-white/90 to-orange-50/95"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 relative z-10">
        <div className="w-full lg:w-1/2 text-left space-y-6">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔥 Best Summer Training in Lucknow
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              Ignite Your Coding Journey
            </span>
            <br />
            <span className="text-gray-800">with The Code Spark</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Industry-focused training with live projects in Python, Java, PHP, MERN, Android & ASP.NET. Build real skills. Get real placement support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
            <a href="#courses" className="bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all text-center">
              Explore Courses
            </a>
            <a href="#register" className="border-2 border-orange-500 text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-orange-50 transition-all text-center">
              Register Now
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
            {/* Central hero circle with gradient border */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden p-4">
                  <img src="https://www.chawtechsolutions.com/wp-content/uploads/2019/03/developer.gif" alt="Coding Hero" className="w-[85%] h-[85%] object-contain" />
                </div>
              </div>
            </div>

            {/* Rotating container for icons and dotted circle */}
            <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
              {/* Dotted circular path */}
              <svg className="absolute w-full h-full" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <circle cx="250" cy="250" r="200" fill="none" stroke="rgba(249,115,22,0.3)" strokeWidth="2" strokeDasharray="10 15" />
              </svg>

              {/* Tech icons around the circle */}
              {icons.map((icon, i) => {
                const n = icons.length;
                const angle = (360 / n) * i;
                const radius = 200;
                const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
                
                return (
                  <div
                    key={icon.name}
                    className="absolute w-16 h-16 lg:w-18 lg:h-18 rounded-xl bg-white shadow-lg flex items-center justify-center border-2 border-orange-200"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(-${(360/20)*i}turn)`
                    }}
                  >
                    <img
                      src={icon.url}
                      alt={icon.name}
                      className="w-9 h-9 lg:w-10 lg:h-10 object-contain"
                      style={{ transform: `rotate(${angle}deg)` }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
