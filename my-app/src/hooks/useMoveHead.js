import { useState, useEffect } from "react";

export const useMoveHead = (rows, headRef, cellsArrayRef) => {
  const moveHeadUp = (headID) => {
    if (!(headID - rows) < cellsArrayRef.length) return headID - rows;
  };
  const moveHeadRight = (headID) => {
    return headID + 1;
  };
  const moveHeadDown = (headID) => {
    return headID + rows;
  };
  const moveHeadLeft = (headID) => {
    return headID - 1;
  };

  return {};
};
