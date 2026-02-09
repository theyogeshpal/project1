import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TrainingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const programs = [
    { id: 1, title: 'Summer Training Program 2024', duration: '6 Weeks', students: '500+' },
    { id: 2, title: 'Winter Internship Program', duration: '8 Weeks', students: '300+' },
    { id: 3, title: 'Full Stack Development Bootcamp', duration: '12 Weeks', students: '200+' },
    { id: 4, title: 'Data Science Training', duration: '10 Weeks', students: '150+' },
  ];

  const cardsPerSlide = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(programs.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900">
          Our Training Programs
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-12 rounded"></div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                    {programs.slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide).map((program) => (
                      <div key={program.id} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-6 shadow-xl border-2 border-orange-200">
                        {/* Square Placeholder Image */}
                        <div className="w-3/4 aspect-square mx-auto bg-gradient-to-br from-orange-300 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                          <span className="text-white text-4xl font-bold opacity-50">Banner</span>
                        </div>
                        
                        {/* Content */}
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                          <div className="space-y-2 mb-4">
                            <p className="text-base text-gray-700">
                              <span className="font-semibold">Duration:</span> {program.duration}
                            </p>
                            <p className="text-base text-gray-700">
                              <span className="font-semibold">Students:</span> {program.students}
                            </p>
                          </div>
                          <button className="bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-2 rounded-full font-bold hover:shadow-xl transition-all">
                            Learn More
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-orange-50 transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6 text-orange-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-orange-50 transition-all z-10"
          >
            <ChevronRight className="w-6 h-6 text-orange-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-orange-600 w-8' : 'bg-orange-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCarousel;
