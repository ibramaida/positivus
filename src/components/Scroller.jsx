import React, { useEffect, useRef, useState } from "react";
import "./scroller.css";

const Slider = ({ id, images }) => {
  const scrollerRef = useRef(null);

  const [slides, setSlides] = useState([]);
  // const [dir, setDir] = useState(true)

  useEffect(() => {
    setSlides([...images, ...images, ...images]);
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollerRef.current.setAttribute("data-animation", true);
    }
  }, []);

  return (
    <div ref={scrollerRef} className="scroller" id={id}>
      <div className={`scroller__inner`}>
        {slides.map((src, index) => (
          <div key={index} className="slide">
            <img className="grayscale" src={src} alt={`slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
