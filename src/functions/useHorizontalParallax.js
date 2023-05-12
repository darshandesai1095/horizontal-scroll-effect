import { useState, useEffect } from "react";

const useHorizontalParallax = (speed = 1.5) => {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollX);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    transform: `translateX(-${scrollX / speed}px)`
  };
};

export default useHorizontalParallax;
