import { Link } from 'react-router-dom';
import { FaCamera, FaHeart, FaUsers, FaMountain } from 'react-icons/fa';

// Services page with photography packages
const Services = () => {
  const packages = [
    {
      icon: <FaHeart />,
      name: 'Wedding Photography',
      description: 'Complete coverage of your special day, from preparation to reception. Candid moments, posed portraits, and every detail in between.',
      startingPrice: '₹50,000',
      features: ['Full day coverage (8-10 hours)', 'Second photographer', '500+ edited photos', 'Online gallery', 'Pre-wedding shoot included'],
    },
    {
      icon: <FaCamera />,
      name: 'Portrait Sessions',
      description: 'Professional portraits for individuals, couples, or families. Studio or outdoor sessions tailored to your personality.',
      startingPrice: '₹8,000',
      features: ['1-2 hour session', 'Multiple outfit changes', '30+ edited photos', 'Indoor or outdoor', 'Prints available'],
    },
    {
      icon: <FaUsers />,
      name: 'Event Coverage',
      description: 'Corporate events, birthday parties, anniversaries, and celebrations captured with an artistic eye.',
      startingPrice: '₹25,000',
      features: ['Up to 5 hours coverage', '200+ edited photos', 'Quick turnaround', 'Online delivery', 'Highlight reel option'],
    },
    {
      icon: <FaMountain />,
      name: 'Nature & Fine Art',
      description: 'Commissioned landscape and fine art photography for homes, offices, or publications.',
      startingPrice: '₹15,000',
      features: ['Custom location shoots', 'High-resolution files', 'Print-ready formats', 'Licensed for personal use', 'Framing options'],
    },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-6" data-aos="fade-up">
          <p className="text-gold text-sm uppercase tracking-[4px] mb-4">Services</p>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white font-semibold mb-4">
            Photography Packages
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Professional photography services tailored to your needs. Every package can be customized.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="border border-gray-100 p-8 hover:border-gold/50 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-gold text-2xl mb-4">{pkg.icon}</div>
                <h3 className="font-['Playfair_Display'] text-xl text-primary font-semibold mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray text-sm leading-relaxed mb-4">{pkg.description}</p>
                <p className="text-gold font-semibold text-lg mb-4">
                  Starting at {pkg.startingPrice}
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-gray-dark">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-3xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="font-['Playfair_Display'] text-3xl text-primary font-semibold mb-4">
            Need something custom?
          </h2>
          <p className="text-gray text-lg mb-8">
            Every project is unique. Let's discuss your specific requirements and create a package 
            that fits your vision and budget perfectly.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-white px-10 py-4 text-sm uppercase tracking-wider transition-all duration-300"
          >
            Request a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
