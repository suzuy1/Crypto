
import React, { useState, useEffect } from 'react';
import { THEME } from '../constants';

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};


const ScrollIndicator: React.FC = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 z-[100] h-1 bg-gradient-to-r from-[#64FFDA] to-[#52D8BB]"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ScrollIndicator;
