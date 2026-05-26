import { useForm } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';

// Contact page with form and social links
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-6" data-aos="fade-up">
          <p className="text-gold text-sm uppercase tracking-[4px] mb-4">Contact</p>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white font-semibold mb-4">
            Let's Connect
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something beautiful together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div data-aos="fade-right">
              <h2 className="font-['Playfair_Display'] text-2xl text-primary font-semibold mb-8">
                Send a Message
              </h2>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6 text-sm">
                  Thank you! Your message has been sent. I'll get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-dark mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gold outline-none transition-colors text-sm bg-transparent"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gold outline-none transition-colors text-sm bg-transparent"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Please write at least 10 characters' },
                    })}
                    rows="5"
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:border-gold outline-none transition-colors text-sm bg-transparent resize-none"
                    placeholder="Tell me about your project, the date, and any details..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-dark text-white px-10 py-3 text-sm uppercase tracking-wider transition-all duration-300 mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div data-aos="fade-left">
              <h2 className="font-['Playfair_Display'] text-2xl text-primary font-semibold mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8 mb-12">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold mb-2">Phone</p>
                  <p className="text-gray-dark flex items-center space-x-3">
                    <FaPhone className="text-gold text-sm" />
                    <span>+91 98765 43210</span>
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gold mb-2">Email</p>
                  <p className="text-gray-dark flex items-center space-x-3">
                    <FaEnvelope className="text-gold text-sm" />
                    <span>hello@velanphotography.com</span>
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gold mb-2">Based in</p>
                  <p className="text-gray-dark">Chennai, Tamil Nadu, India</p>
                  <p className="text-gray text-sm mt-1">Available for travel worldwide</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gold mb-2">Follow Along</p>
                  <div className="flex space-x-4 mt-3">
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-gray-dark hover:text-gold transition-colors"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="text-lg" />
                      <span className="text-sm">@velanphotography</span>
                    </a>
                  </div>
                  <div className="flex space-x-4 mt-3">
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-gray-dark hover:text-gold transition-colors"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="text-lg" />
                      <span className="text-sm">Velan Photography</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Availability note */}
              <div className="border border-gold/30 p-6 bg-gold/5">
                <p className="font-['Playfair_Display'] text-primary font-semibold mb-2">
                  Currently Booking
                </p>
                <p className="text-gray text-sm">
                  Accepting bookings for 2026-2027. Weekend dates fill up quickly — 
                  reach out early to secure your preferred date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
