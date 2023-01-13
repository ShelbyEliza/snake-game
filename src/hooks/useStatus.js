import { useContext } from "react";
import { StatusContext } from "../context/StatusContext";

export const useStatus = () => {
  const context = useContext(StatusContext);

  if (context === undefined) {
    throw new Error("useStatus() must be used inside a StatusProvider");
  }

  return context;
};
