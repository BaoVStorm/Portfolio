import React, { useState, useRef } from 'react';
import { listCers } from '@/entities/certificate/config/certificateData';

export const CertificateSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setIndicatorLeft(e.clientX - rect.left);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="section" id="certificate">
      <h1 className="title-section">Cer.</h1>
      <div className="certificate-container">
        <div 
          className="certificate-container-indicator"
          style={{ left: `${indicatorLeft}px` }}
        >
          {hoveredIndex !== null ? listCers[hoveredIndex].title : ''}
        </div>
        <div 
          className={`certificate-container-gallery ${hoveredIndex !== null ? 'hover' : ''}`}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {listCers.map((cer, index) => {
            const isHovered = hoveredIndex === index;
            const flexValue = isHovered ? `1 ${cer.flex}` : '1';
            
            return (
              <div 
                key={index} 
                className={`certificate-container-gallery-item ${isHovered ? 'active' : ''}`}
                style={{ flex: flexValue }}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <img src={`${import.meta.env.BASE_URL}${cer.image}`} alt={cer.title} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
