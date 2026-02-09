import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What are the prerequisites for joining a training program?",
      answer: "Most of our programs are designed for beginners to intermediate learners. Basic computer knowledge is sufficient. For advanced courses like Full Stack Development or Data Science, some programming fundamentals are recommended but not mandatory as we cover basics in the initial modules."
    },
    {
      question: "Do you provide placement assistance after course completion?",
      answer: "Yes! We offer comprehensive placement assistance including resume building, mock interviews, soft skills training, and direct connections with our 100+ hiring partners. Our placement team works closely with students until they secure their desired position."
    },
    {
      question: "What is the duration and timing of the training programs?",
      answer: "Program durations vary from 6 weeks to 6 months depending on the course. We offer flexible timings including weekday batches (9 AM - 5 PM), weekend batches (Saturday-Sunday), and evening batches (6 PM - 9 PM) to accommodate working professionals and students."
    },
    {
      question: "Are the training programs online or offline?",
      answer: "We provide both online and offline training options. Our offline classes are conducted at our Gomti Nagar, Lucknow center with state-of-the-art facilities. Online classes are conducted via live interactive sessions with recorded lectures available for revision."
    },
    {
      question: "Will I receive a certificate after completing the course?",
      answer: "Yes, upon successful completion of the program and final project, you'll receive an industry-recognized certificate from The Code Spark. We also provide additional certifications from our technology partners for specific courses."
    },
    {
      question: "What is the fee structure and payment options?",
      answer: "Our fee structure varies by program. We offer flexible payment options including one-time payment with discounts, EMI options, and installment plans. Early bird discounts and group discounts are also available. Contact us for detailed pricing."
    },
    {
      question: "Do you provide hands-on project experience?",
      answer: "Absolutely! Every program includes multiple hands-on projects, live industry projects, and a capstone project. Students work on real-world applications, build portfolios, and gain practical experience that employers value."
    },
    {
      question: "What is the batch size and student-teacher ratio?",
      answer: "We maintain small batch sizes of 15-20 students to ensure personalized attention. Each batch has a dedicated instructor and teaching assistants, maintaining an optimal student-teacher ratio for effective learning and doubt resolution."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-orange-50/30 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-bounce">
            ❓ Got Questions?
          </div>
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900">
            Frequently Asked <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-6 rounded"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our training programs, certifications, and more
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:border-orange-300 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-orange-50/50 transition-all group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-gradient-to-r from-orange-500 to-orange-700 text-white scale-110' 
                      : 'bg-orange-100 text-orange-600 group-hover:scale-110'
                  }`}>
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-orange-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pl-20">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-700 rounded-3xl p-8 shadow-2xl text-white text-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8" />
          </div>
          <h3 className="text-3xl font-bold mb-3">Still Have Questions?</h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Our team is here to help! Get in touch with us and we'll answer all your queries.
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
            Contact Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
