import { useState, useEffect } from "react";
import { useStatus } from "./useStatus";

export const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const { pauseState, difficultyLevel } = useStatus();

  useEffect(() => {
    const id = setInterval(() => {
      if (!pauseState) {
        setTimer((c) => c + 1);
      }
    }, difficultyLevel);

    return () => clearInterval(id);
  }, [pauseState, difficultyLevel]);

  return { timer };
};
