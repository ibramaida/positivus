import React, { useEffect, useState } from "react";

const useProgress = () => {
  const [scrolled, setScrolled] = useState(0);
  //   console.log(scrolled);

  useEffect(() => {
    const updateScroll = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScrolled(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener("scroll", updateScroll);

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return scrolled;
};

export default useProgress;
