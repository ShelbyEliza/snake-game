import { createContext, useReducer } from "react";

export const StatusContext = createContext();

const statusReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_SCORE":
      return { ...state, score: action.payload };
    case "CHANGE_RESET_REQUEST":
      return { ...state, resetRequest: action.payload };
    case "CHANGE_PAUSE_STATE":
      return { ...state, pauseState: action.payload };
    case "CHANGE_DIFFICULTY_LEVEL":
      return { ...state, difficultyLevel: action.payload };
    default:
      return state;
  }
};

export function StatusProvider({ children }) {
  const [state, dispatch] = useReducer(statusReducer, {
    score: 0,
    resetRequest: false,
    pauseState: true,
    difficultyLevel: 1000,
  });

  const changeScore = (score) => {
    dispatch({ type: "CHANGE_SCORE", payload: score });
  };
  const changeResetRequest = (resetRequest) => {
    dispatch({ type: "CHANGE_RESET_REQUEST", payload: resetRequest });
  };
  const changePauseState = (pauseState) => {
    dispatch({ type: "CHANGE_PAUSE_STATE", payload: pauseState });
  };
  const changeDifficultyLevel = (difficultyLevel) => {
    dispatch({ type: "CHANGE_DIFFICULTY_LEVEL", payload: difficultyLevel });
  };

  return (
    <StatusContext.Provider
      value={{
        ...state,
        changeScore,
        changeResetRequest,
        changePauseState,
        changeDifficultyLevel,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
}
