import { useEffect, useState } from "react";
import axios from "axios";
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return width;
};

export default useWindowWidth;
