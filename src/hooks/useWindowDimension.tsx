"use client";

import { useEffect, useState } from "react";

interface windowSizeProps {
  width: number;
  height: number;
}

export function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState({} as windowSizeProps);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
