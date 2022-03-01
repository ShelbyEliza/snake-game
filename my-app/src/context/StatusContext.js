import { createContext, useReducer } from "react";

export const StatusContext = createContext();

const statusReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_OVER_STATUS":
      return { ...state, overStatus: action.payload };
    case "CHANGE_WON_STATUS":
      return { ...state, wonStatus: action.payload };
    case "CHANGE_LOST_STATUS":
      return { ...state, lostStatus: action.payload };
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
    overStatus: false,
    wonStatus: false,
    lostStatus: false,
    score: 0,
    resetRequest: false,
    pauseState: true,
    difficultyLevel: 1000,
  });

  const changeOverStatus = (overStatus) => {
    dispatch({ type: "CHANGE_OVER_STATUS", payload: overStatus });
  };
  const changeWonStatus = (wonStatus) => {
    dispatch({ type: "CHANGE_WON_STATUS", payload: wonStatus });
  };
  const changeLostStatus = (lostStatus) => {
    dispatch({ type: "CHANGE_LOST_STATUS", payload: lostStatus });
  };
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
        changeOverStatus,
        changeWonStatus,
        changeLostStatus,
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
