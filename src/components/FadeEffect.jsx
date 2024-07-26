import React, { useState, useEffect } from 'react';


const FadeEffect = ({ delay, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [delay]);

  return (
    <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeEffect;
