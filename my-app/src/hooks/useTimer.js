import { useState, useEffect } from "react";

export const useTimer = (isGamePaused) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (isGamePaused) {
      setTimer(0);
    }
    if (!isGamePaused) {
      const id = setInterval(() => {
        setTimer((c) => c + 1);
        console.log(timer);
      }, 3000);
      return () => clearInterval(id);
    }
  }, [timer, isGamePaused]);
  return { timer: timer };
};
