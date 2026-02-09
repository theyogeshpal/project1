import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919876543210"
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Call"
      >
        <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
};

export default FloatingButtons;
