import { useState, useEffect } from "react";
import { useStatus } from "./useStatus";

export const useTimer = (isGamePaused) => {
  const [timer, setTimer] = useState(0);
  const { difficultyLevel } = useStatus();

  useEffect(() => {
    const id = setInterval(() => {
      if (!isGamePaused) {
        setTimer((c) => c + 1);
      }
    }, difficultyLevel);

    return () => clearInterval(id);
  }, [isGamePaused, difficultyLevel]);

  return { timer };
};
