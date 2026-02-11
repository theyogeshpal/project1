import { useState } from 'react';
import { Filter } from 'lucide-react';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    { title: 'E-Commerce Platform', category: 'Web Development', tech: 'MERN Stack', desc: 'Full-featured online shopping platform', img: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400' },
    { title: 'Healthcare App', category: 'Mobile App', tech: 'Flutter', desc: 'Patient management and appointment booking', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400' },
    { title: 'School Management System', category: 'Web Application', tech: 'PHP Laravel', desc: 'Complete school administration solution', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400' },
    { title: 'Real Estate Portal', category: 'Full Stack', tech: 'Java Spring Boot', desc: 'Property listing and management platform', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400' },
    { title: 'Restaurant POS System', category: 'Web Application', tech: 'Python Django', desc: 'Point of sale and inventory management', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400' },
    { title: 'Fitness Tracking App', category: 'Mobile App', tech: 'Android', desc: 'Workout and nutrition tracking application', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400' },
    { title: 'Hotel Booking System', category: 'Web Development', tech: 'Dot Net Core', desc: 'Online hotel reservation platform', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
    { title: 'Inventory Management', category: 'Web Application', tech: 'PHP Laravel', desc: 'Stock and warehouse management system', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=400' },
    { title: 'Social Media App', category: 'Mobile App', tech: 'Flutter', desc: 'Social networking mobile application', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400' },
    { title: 'CRM Software', category: 'Full Stack', tech: 'MERN Stack', desc: 'Customer relationship management tool', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400' },
    { title: 'Learning Management System', category: 'Web Development', tech: 'Java Spring Boot', desc: 'Online education platform', img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400' },
    { title: 'Food Delivery App', category: 'Mobile App', tech: 'Flutter', desc: 'Restaurant and food ordering application', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400' },
    { title: 'Banking Portal', category: 'Web Application', tech: 'Dot Net Core', desc: 'Online banking and transaction system', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400' },
    { title: 'Travel Booking Platform', category: 'Full Stack', tech: 'MERN Stack', desc: 'Flight and hotel booking system', img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400' },
    { title: 'Pharmacy Management', category: 'Web Application', tech: 'PHP Laravel', desc: 'Medicine inventory and billing system', img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400' },
    { title: 'Taxi Booking App', category: 'Mobile App', tech: 'Android', desc: 'Ride-hailing mobile application', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400' },
    { title: 'HR Management System', category: 'Web Development', tech: 'Python Django', desc: 'Employee and payroll management', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400' },
    { title: 'Event Management App', category: 'Mobile App', tech: 'Flutter', desc: 'Event planning and ticketing platform', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400' },
    { title: 'E-Learning Portal', category: 'Web Application', tech: 'MERN Stack', desc: 'Online course and training platform', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400' },
    { title: 'Salon Booking System', category: 'Web Development', tech: 'PHP Laravel', desc: 'Appointment and service management', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400' },
    { title: 'Grocery Delivery App', category: 'Mobile App', tech: 'Flutter', desc: 'Online grocery shopping application', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400' },
    { title: 'Hospital Management', category: 'Full Stack', tech: 'Java Spring Boot', desc: 'Complete hospital administration system', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400' },
    { title: 'Gym Management System', category: 'Web Application', tech: 'Dot Net Core', desc: 'Membership and class scheduling', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400' },
    { title: 'News Portal', category: 'Web Development', tech: 'MERN Stack', desc: 'News publishing and content management', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400' },
    { title: 'Job Portal', category: 'Web Application', tech: 'PHP Laravel', desc: 'Job listing and recruitment platform', img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400' },
    { title: 'Music Streaming App', category: 'Mobile App', tech: 'Android', desc: 'Audio streaming mobile application', img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400' },
    { title: 'Accounting Software', category: 'Web Development', tech: 'Python Django', desc: 'Financial accounting and reporting', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400' },
    { title: 'Courier Tracking System', category: 'Web Application', tech: 'MERN Stack', desc: 'Package tracking and delivery management', img: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400' },
    { title: 'Car Rental Platform', category: 'Full Stack', tech: 'Java Spring Boot', desc: 'Vehicle booking and rental system', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400' },
    { title: 'Laundry Service App', category: 'Mobile App', tech: 'Flutter', desc: 'Laundry pickup and delivery service', img: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400' },
    { title: 'Library Management', category: 'Web Application', tech: 'PHP Laravel', desc: 'Book inventory and lending system', img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400' },
    { title: 'Auction Platform', category: 'Web Development', tech: 'Dot Net Core', desc: 'Online bidding and auction system', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400' },
    { title: 'Telemedicine App', category: 'Mobile App', tech: 'Flutter', desc: 'Online doctor consultation platform', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400' },
    { title: 'Warehouse Management', category: 'Web Application', tech: 'MERN Stack', desc: 'Inventory and logistics management', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400' },
    { title: 'Pet Care App', category: 'Mobile App', tech: 'Android', desc: 'Pet health and grooming services', img: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400' },
    { title: 'Construction Management', category: 'Full Stack', tech: 'Java Spring Boot', desc: 'Project and resource management', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400' },
    { title: 'Matrimonial Portal', category: 'Web Development', tech: 'PHP Laravel', desc: 'Matchmaking and profile management', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400' },
    { title: 'Parking Management', category: 'Web Application', tech: 'Python Django', desc: 'Parking slot booking and management', img: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400' },
    { title: 'Blood Bank System', category: 'Web Development', tech: 'MERN Stack', desc: 'Blood donation and inventory management', img: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=400' },
    { title: 'Tutor Booking App', category: 'Mobile App', tech: 'Flutter', desc: 'Home tutor booking and scheduling', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400' },
    { title: 'Complaint Management', category: 'Web Application', tech: 'Dot Net Core', desc: 'Customer complaint tracking system', img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400' },
    { title: 'Voting System', category: 'Web Development', tech: 'Java Spring Boot', desc: 'Online voting and polling platform', img: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=400' },
    { title: 'Charity Platform', category: 'Web Application', tech: 'PHP Laravel', desc: 'Donation and fundraising system', img: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400' },
    { title: 'Rental Property App', category: 'Mobile App', tech: 'Flutter', desc: 'Property rental and tenant management', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400' },
    { title: 'Clinic Management', category: 'Full Stack', tech: 'MERN Stack', desc: 'Patient and appointment management', img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400' },
    { title: 'Bus Booking System', category: 'Web Development', tech: 'Python Django', desc: 'Bus ticket booking platform', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400' },
    { title: 'Freelance Marketplace', category: 'Web Application', tech: 'MERN Stack', desc: 'Freelancer and project marketplace', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400' },
    { title: 'Exam Portal', category: 'Web Development', tech: 'PHP Laravel', desc: 'Online examination and assessment', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400' },
    { title: 'Meditation App', category: 'Mobile App', tech: 'Android', desc: 'Mindfulness and meditation guide', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400' },
    { title: 'Survey Platform', category: 'Web Application', tech: 'Dot Net Core', desc: 'Online survey and feedback system', img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400' }
  ];

  const categories = ['All', 'Web Development', 'Mobile App', 'Web Application', 'Full Stack'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

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
              💼 Our Portfolio
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">
              Our <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Projects</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-6 rounded"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse portfolio of successful projects across various industries
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Filter className="w-5 h-5 text-orange-600" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-orange-500 to-orange-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-gray-100 hover:border-orange-300 overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">{project.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2 group-hover:text-orange-600 transition-colors">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{project.desc}</p>
                  <p className="text-xs text-gray-500 mb-4">Built with {project.tech}</p>
                  <button className="text-orange-600 font-semibold hover:underline">View Project →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can bring your ideas to life
          </p>
          <a href="/contact" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
