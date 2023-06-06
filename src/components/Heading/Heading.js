import { useState, useEffect } from "react";
import "./Heading.css";

const Heading = (props) => {
  const [scrollLeft, setScrollLeft] = useState(0)
  const [tilt, setTilt] = useState(0)
  const [animationRequestId, setAnimationRequestId] = useState(null)
  const [scrollCount, setScrollCount] = useState(0)

  const handleScroll = (event) => {
    const newScrollLeft = props.scrollLeft
    setTilt(-event.deltaY / 10)
    setScrollLeft(newScrollLeft)
    setScrollCount((prevCount) => prevCount + 1)
  }

  useEffect(() => {
    window.addEventListener("wheel", handleScroll)

    return () => window.removeEventListener("wheel", handleScroll)
  }, [props.scrollLeft])

  useEffect(() => {
    const animate = () => {
      setTilt((prevTilt) => {
        const diff = tilt - prevTilt
        const nextTilt = prevTilt + diff * 0.01;
        if (Math.abs(nextTilt - tilt) < 10) {
          // Stop the animation when the tilt is close enough to the target
          setAnimationRequestId(null)
          return tilt;
        }
        return nextTilt
      });
    };

    if (animationRequestId === null && scrollCount % 500 === 0) {
      // Start the animation loop if it hasn't been started yet and the scrollCount is divisible by 10
      setAnimationRequestId(requestAnimationFrame(animate))
    }

    // Cleanup function
    return () => {
      if (animationRequestId !== null) {
        // Cancel the animation loop if it's still running
        cancelAnimationFrame(animationRequestId)
        setAnimationRequestId(null);
      }
    };
  }, [tilt, animationRequestId, scrollCount])
  

  return (
    <div className="heading" style={{ transform: `skewX(${tilt}deg)`, transformOrigin: "bottom", }}>
      <h1>Gallery Heading.</h1>
    </div>
  );
};

export default Heading;
