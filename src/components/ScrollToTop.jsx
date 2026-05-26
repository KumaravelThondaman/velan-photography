import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

// Scroll-to-top button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gold hover:bg-gold-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 opacity-90 hover:opacity-100"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={14} />
      </button>
    )
  );
};

export default ScrollToTop;
