import { useEffect, useState } from "react";

const useWindowResize = () => {
  const [isWindowSize, setisWindowSize] = useState(
    window.innerWidth > 480 ? "big" : "small"
  );

  const handleResize = () => {
    if (window.innerWidth < 481) {
      setisWindowSize("small");
    } else setisWindowSize("big");
  };

  const handleTimeoutResize = () => {
    setTimeout(handleResize, 500);
  };

  useEffect(() => {
    window.addEventListener("resize", handleTimeoutResize);
    return () => {
      window.removeEventListener("resize", handleTimeoutResize);
    };
  });

  return isWindowSize;
};

export default useWindowResize;
