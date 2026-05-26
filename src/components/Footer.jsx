import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';

// Minimal elegant footer with social links
const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-['Playfair_Display'] text-gold text-2xl font-semibold mb-2">
              Velan
            </h3>
            <p className="text-white/50 text-xs uppercase tracking-[3px] mb-4">Photography</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Capturing moments, creating memories. Every frame tells a story worth preserving.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold text-sm uppercase tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-2">
              {['Home', 'Portfolio', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-gold text-sm uppercase tracking-wider mb-4">Get in Touch</h4>
            <div className="space-y-3 mb-6">
              <p className="flex items-center space-x-3 text-white/60 text-sm">
                <FaPhone className="text-gold text-xs" />
                <span>+91 98765 43210</span>
              </p>
              <p className="flex items-center space-x-3 text-white/60 text-sm">
                <FaEnvelope className="text-gold text-xs" />
                <span>hello@velanphotography.com</span>
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-gold text-lg transition-colors" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="text-white/60 hover:text-gold text-lg transition-colors" aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-xs uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Velan Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
