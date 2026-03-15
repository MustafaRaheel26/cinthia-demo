import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSources?: string[];
  placeholder?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  fallbackSources = [], 
  placeholder = 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?auto=format&fit=crop&w=800&q=80',
  alt,
  className,
  ...props 
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [fallbackIdx, setFallbackIdx] = useState<number>(-1);
  const [hasError, setHasError] = useState(false);

  // Reset state if src prop changes
  useEffect(() => {
    setCurrentSrc(src);
    setFallbackIdx(-1);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    const nextIdx = fallbackIdx + 1;
    
    if (fallbackSources && nextIdx < fallbackSources.length) {
      setFallbackIdx(nextIdx);
      setCurrentSrc(fallbackSources[nextIdx]);
    } else {
      setHasError(true);
      setCurrentSrc(placeholder);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};
