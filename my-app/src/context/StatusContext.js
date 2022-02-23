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

  return (
    <StatusContext.Provider
      value={{
        ...state,
        changeOverStatus,
        changeWonStatus,
        changeLostStatus,
        changeScore,
        changeResetRequest,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
}
