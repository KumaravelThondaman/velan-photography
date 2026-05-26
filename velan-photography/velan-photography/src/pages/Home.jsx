import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Home page with full-screen hero slideshow and testimonials
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
      title: 'Weddings',
    },
    {
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1920&q=80',
      title: 'Portraits',
    },
    {
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80',
      title: 'Landscapes',
    },
    {
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80',
      title: 'Events',
    },
  ];

  const testimonials = [
    {
      name: 'Priya & Arjun',
      text: 'Velan captured every precious moment of our wedding. The photos are breathtaking and timeless.',
      event: 'Wedding Photography',
    },
    {
      name: 'Meera Krishnan',
      text: 'The portrait session was so comfortable and natural. The results exceeded all my expectations.',
      event: 'Portrait Session',
    },
    {
      name: 'Suresh Kumar',
      text: 'Professional, creative, and incredibly talented. Velan made our corporate event look extraordinary.',
      event: 'Corporate Event',
    },
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      {/* Hero Slideshow */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-gold text-sm uppercase tracking-[6px] mb-4" data-aos="fade-down">
            Velan Photography
          </p>
          <h1
            className="font-['Playfair_Display'] text-white text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 max-w-4xl leading-tight"
            data-aos="fade-up"
          >
            Capturing Moments,<br />Creating Memories
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10" data-aos="fade-up" data-aos-delay="200">
            Every frame tells a story worth preserving forever
          </p>
          <Link
            to="/portfolio"
            className="border border-gold text-gold hover:bg-gold hover:text-black px-8 py-3 text-sm uppercase tracking-wider transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            View Portfolio
          </Link>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-gold w-8' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-gold text-xl z-10 hidden md:block"
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-gold text-xl z-10 hidden md:block"
          aria-label="Next slide"
        >
          <FaChevronRight />
        </button>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
          <p className="text-gold text-sm uppercase tracking-[4px] mb-4">Welcome</p>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-primary font-semibold mb-6">
            Stories told through light
          </h2>
          <p className="text-gray leading-relaxed text-lg">
            With over a decade of experience, I specialize in capturing the authentic beauty 
            of life's most meaningful moments. From intimate weddings to breathtaking landscapes, 
            every session is an opportunity to create art that lasts generations.
          </p>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-gold text-sm uppercase tracking-[4px] mb-4">Featured Work</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-primary font-semibold">
              Recent captures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80', title: 'Wedding Bliss' },
              { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80', title: 'Portrait Session' },
              { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80', title: 'Nature\'s Beauty' },
            ].map((photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end">
                  <p className="text-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 font-['Playfair_Display'] text-lg">
                    {photo.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link
              to="/portfolio"
              className="inline-block border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-sm uppercase tracking-wider transition-all duration-300"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-gold text-sm uppercase tracking-[4px] mb-4">Testimonials</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-white font-semibold">
              Kind words from clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <p className="text-white/70 italic text-sm leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <p className="text-gold font-semibold text-sm">{testimonial.name}</p>
                <p className="text-white/40 text-xs uppercase tracking-wider mt-1">
                  {testimonial.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-primary font-semibold mb-6">
            Let's create something beautiful
          </h2>
          <p className="text-gray text-lg mb-10">
            Ready to capture your special moments? Get in touch and let's discuss your vision.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-white px-10 py-4 text-sm uppercase tracking-wider transition-all duration-300"
          >
            Book a Session
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
