import React, { useState } from 'react';
import { listCers } from '@/entities/certificate/config/certificateData';

export const CertificateSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="section" id="certificate">
      <h1 className="title-section">Cer.</h1>
      
      <div className="certificate-container">
        <div 
          className={`certificate-container-gallery ${hoveredIndex !== null ? 'hover' : ''}`}
          onMouseLeave={handleMouseLeave}
        >
          {/* Render duplicated list for infinite marquee on mobile. On desktop, duplicates are hidden via CSS */}
          {[...listCers, ...listCers].map((cer, index) => {
            const realIndex = index % listCers.length;
            const isHovered = hoveredIndex === realIndex;
            // When hovered, allow it to grow slightly from cer.flex to avoid cropping
            // When unhovered, take 1 part of remaining space (flex: 1 1 0%).
            const flexValue = isHovered ? `1 1 ${cer.flex}` : '1 1 0%';
            
            return (
              <div 
                key={index} 
                className={`certificate-container-gallery-item ${isHovered ? 'active' : ''} ${index >= listCers.length ? 'duplicate-item' : ''}`}
                style={{ flex: flexValue }}
                onMouseEnter={() => setHoveredIndex(realIndex)}
                onTouchStart={() => setHoveredIndex(realIndex)}
              >
                <div className="cert-title-item">{cer.title}</div>
                <div className="cert-img-wrapper">
                  <img src={`${import.meta.env.BASE_URL}${cer.image}`} alt={cer.title} loading="lazy" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
