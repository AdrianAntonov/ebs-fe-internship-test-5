import { useState, useEffect } from 'react';

function getWindowDimensions() {
  // if (typeof window !== 'undefined') {
  //   const { innerWidth: width, innerHeight: height } = window;
  //   return {
  //     width,
  //     height,
  //   };
  // }

if(typeof globalThis.window !== "undefined") {
  const {innerWidth: width} = globalThis.window;
  return {width};
}

  return { width: 500, height: 500 };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
