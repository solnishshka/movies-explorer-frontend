import { useState } from "react";

const useWindowResize = () => {
  const [isWindowSize, setisWindowSize] = useState(window.innerWidth > 480 ? "big" : "small");

  const handleResize = () => {
    if (window.innerWidth < 480) {
      setisWindowSize("small");
    } else setisWindowSize("big");
  };

  window.addEventListener("resize", () => {
    setTimeout(handleResize, 1000);
  });

  return isWindowSize;
};

export default useWindowResize;
