import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const recaptchaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Execute invisible reCAPTCHA
    recaptchaRef.current.execute();
  };

  const onReCAPTCHAChange = (value) => {
    setRecaptchaValue(value);
    if (value) {
      // Submit form after reCAPTCHA verification
      console.log('Form submitted:', formData, 'reCAPTCHA:', value);
      alert('Registration successful!');
      // Reset form
      setFormData({ name: '', email: '', phone: '', course: '' });
      recaptchaRef.current.reset();
      setRecaptchaValue(null);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="register" className="py-16 bg-gray-50">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Register Now</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Select Course</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="mern">MERN Stack</option>
            <option value="php">PHP</option>
            <option value="android">Android</option>
          </select>
          
          <div className="hidden">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeSAmYsAAAAADc7zoaD7r2_Y7Lswa7S4N-64GG9"
              size="invisible"
              onChange={onReCAPTCHAChange}
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-700 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;