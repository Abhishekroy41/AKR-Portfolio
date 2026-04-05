import React, { useEffect, useRef } from 'react';

export const ImageSlider = ({ images }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slider-container" ref={scrollRef}>
      {images && images.length > 0 ? (
        images.map((img, i) => (
          <div key={i} className="slider-item">
            <img src={img} alt={`Slide ${i}`} loading="lazy" />
          </div>
        ))
      ) : (
        <div className="empty-slider">
          <p>No images added yet.</p>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
