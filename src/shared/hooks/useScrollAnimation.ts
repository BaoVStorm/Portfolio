import { useEffect, useState, useRef } from 'react';

export function useScrollAnimation(threshold: number) {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isLoaded) return;

    const handleScroll = () => {
      if (isLoaded || !ref.current) return;
      const position = ref.current.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      
      if (position < screenHeight - threshold) {
        setIsLoaded(true);
      }
    };

    // Initial check
    if (window.scrollY <= 600 && threshold === 450) { 
       // Special case for home section to load immediately if at top
       handleScroll();
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoaded, threshold]);

  return { ref, isLoaded };
}
