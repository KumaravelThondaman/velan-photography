import { FaAward, FaCamera, FaHeart } from 'react-icons/fa';

// About page with biography, experience, and philosophy
const About = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-6" data-aos="fade-up">
          <p className="text-gold text-sm uppercase tracking-[4px] mb-4">About</p>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white font-semibold mb-4">
            The Photographer
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Passionate about light, composition, and the art of storytelling through images.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div data-aos="fade-right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Velan - Photographer"
                  className="w-full max-w-md mx-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold -z-10"></div>
              </div>
            </div>

            {/* Bio Text */}
            <div data-aos="fade-left">
              <p className="text-gold text-sm uppercase tracking-[4px] mb-4">Hello, I'm</p>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-primary font-semibold mb-6">
                Velan
              </h2>
              <p className="text-gray leading-relaxed mb-4">
                With over 12 years behind the lens, I have dedicated my life to the art of 
                photography. What started as a childhood fascination with my father's old camera 
                has evolved into a passionate career capturing life's most beautiful moments.
              </p>
              <p className="text-gray leading-relaxed mb-4">
                My style blends classic elegance with modern storytelling. I believe in capturing 
                authentic emotions — the stolen glances, the spontaneous laughter, the quiet moments 
                of reflection that make each story uniquely yours.
              </p>
              <p className="text-gray leading-relaxed mb-8">
                Based in Chennai, I travel across India and internationally for destination shoots. 
                Every session is a collaboration, and I take great pride in making my clients feel 
                comfortable and natural in front of the camera.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-gold font-['Playfair_Display'] text-2xl font-semibold">12+</p>
                  <p className="text-gray text-xs uppercase tracking-wider mt-1">Years</p>
                </div>
                <div className="text-center">
                  <p className="text-gold font-['Playfair_Display'] text-2xl font-semibold">500+</p>
                  <p className="text-gray text-xs uppercase tracking-wider mt-1">Sessions</p>
                </div>
                <div className="text-center">
                  <p className="text-gold font-['Playfair_Display'] text-2xl font-semibold">200+</p>
                  <p className="text-gray text-xs uppercase tracking-wider mt-1">Weddings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-gray-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-gold text-sm uppercase tracking-[4px] mb-4">Philosophy</p>
            <h2 className="font-['Playfair_Display'] text-3xl text-primary font-semibold">
              What drives my work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <FaHeart />,
                title: 'Passion',
                text: 'Every shoot is approached with genuine love for the craft. Photography isn\'t just my profession — it\'s my calling.',
              },
              {
                icon: <FaCamera />,
                title: 'Authenticity',
                text: 'I believe the most powerful images are unscripted. I capture real emotions, real connections, real moments.',
              },
              {
                icon: <FaAward />,
                title: 'Excellence',
                text: 'From the first consultation to final delivery, I maintain the highest standards of quality and professionalism.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="text-gold text-2xl mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-['Playfair_Display'] text-xl text-primary font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards/Recognition */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
          <p className="text-gold text-sm uppercase tracking-[4px] mb-4">Recognition</p>
          <h2 className="font-['Playfair_Display'] text-3xl text-white font-semibold mb-12">
            Awards & Features
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'Best Wedding Photographer 2023',
              'Featured in Vogue India',
              'National Photography Award',
              'WedMeGood Top Choice',
            ].map((award, index) => (
              <div key={index} className="text-center">
                <p className="text-white/70 text-sm">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
