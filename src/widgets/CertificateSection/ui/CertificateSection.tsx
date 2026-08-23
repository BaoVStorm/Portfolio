import React, { useState } from 'react';
import { listCers } from '@/entities/certificate/config/certificateData';
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';

export const CertificateSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, isLoaded } = useScrollAnimation(300);

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const renderCertItems = (isDuplicate = false) => {
    return listCers.map((cer, index) => {
      const isHovered = hoveredIndex === index;
      // When hovered on desktop, allow it to grow from cer.flex to avoid cropping
      // When unhovered, take 1 part of remaining space (flex: 1 1 0%).
      const flexValue = isHovered ? `1 1 ${cer.flex}` : '1 1 0%';
      const animDelay = isLoaded && !isDuplicate ? `${index * 0.1}s` : '0s';
      
      return (
        <div 
          key={`${isDuplicate ? 'dup-' : ''}${index}`} 
          className={`certificate-container-gallery-item ${isHovered ? 'active' : ''}`}
          style={{ flex: flexValue, animationDelay: animDelay }}
          onMouseEnter={() => setHoveredIndex(index)}
          onTouchStart={() => setHoveredIndex(index)}
        >
          <div className="cert-title-item">{cer.title}</div>
          <div className="cert-img-wrapper">
            <img 
              src={`${import.meta.env.BASE_URL}${cer.image}`} 
              alt={cer.title} 
              loading="eager" 
              decoding="async" 
            />
          </div>
        </div>
      );
    });
  };

  return (
    <section className="section" id="certificate" ref={ref}>
      <h1 className="title-section">Cer.</h1>
      
      <div className={`certificate-container ${isLoaded ? 'load' : ''}`}>
        <div 
          className={`certificate-container-gallery ${hoveredIndex !== null ? 'hover' : ''}`}
          onMouseLeave={handleMouseLeave}
        >
          <div className="certificate-track">
            {renderCertItems(false)}
          </div>
          <div className="certificate-track duplicate-track" aria-hidden="true">
            {renderCertItems(true)}
          </div>
        </div>
      </div>
    </section>
  );
};
