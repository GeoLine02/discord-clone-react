import { useState } from "react";

const useSlide = () => {
  const [translate, setTranslate] = useState(0);

  const handleSlideLeft = () => {
    setTranslate((prev: number) => prev - 100);
  };

  const handleSlideRight = () => {
    setTranslate((prev: number) => prev + 100);
  };

  return [translate, handleSlideLeft, handleSlideRight] as const;
};

export default useSlide;
