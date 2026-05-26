import { useState } from 'react';
import Lightbox from '../components/Lightbox';

// Portfolio page with category filters and lightbox viewing
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Nature'];

  const photos = [
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', title: 'Wedding Ceremony', category: 'Weddings' },
    { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80', title: 'First Dance', category: 'Weddings' },
    { src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80', title: 'Bridal Portrait', category: 'Weddings' },
    { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80', title: 'Natural Light Portrait', category: 'Portraits' },
    { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', title: 'Studio Session', category: 'Portraits' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', title: 'Professional Headshot', category: 'Portraits' },
    { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', title: 'Corporate Gala', category: 'Events' },
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', title: 'Birthday Celebration', category: 'Events' },
    { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80', title: 'Festival Night', category: 'Events' },
    { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80', title: 'Misty Forest', category: 'Nature' },
    { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80', title: 'Mountain Vista', category: 'Nature' },
    { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80', title: 'Sunlit Path', category: 'Nature' },
  ];

  const filteredPhotos = activeCategory === 'All'
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-6" data-aos="fade-up">
          <p className="text-gold text-sm uppercase tracking-[4px] mb-4">Portfolio</p>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white font-semibold mb-4">
            My Work
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            A curated collection of moments captured through my lens.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'text-gray-dark hover:text-gold border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPhotos.map((photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden cursor-pointer aspect-[4/3]"
                onClick={() => setLightboxIndex(index)}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
                    <p className="text-white font-['Playfair_Display'] text-lg">{photo.title}</p>
                    <p className="text-gold text-xs uppercase tracking-wider mt-1">{photo.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filteredPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length)}
      />
    </div>
  );
};

export default Portfolio;
