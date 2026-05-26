import { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Lightbox component for full-screen image viewing
const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  if (currentIndex === null) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl z-10"
        aria-label="Close lightbox"
      >
        <FaTimes />
      </button>

      {/* Previous button */}
      <button
        onClick={onPrev}
        className="absolute left-4 md:left-8 text-white/60 hover:text-white text-2xl z-10"
        aria-label="Previous image"
      >
        <FaChevronLeft />
      </button>

      {/* Image */}
      <div className="max-w-[90vw] max-h-[85vh] flex items-center justify-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title || 'Photo'}
          className="max-w-full max-h-[85vh] object-contain"
        />
      </div>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 md:right-8 text-white/60 hover:text-white text-2xl z-10"
        aria-label="Next image"
      >
        <FaChevronRight />
      </button>

      {/* Caption */}
      {images[currentIndex].title && (
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <p className="text-white/80 text-sm font-['Playfair_Display']">
            {images[currentIndex].title}
          </p>
        </div>
      )}
    </div>
  );
};

export default Lightbox;
