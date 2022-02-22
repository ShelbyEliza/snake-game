import "../css/GameBoard.css";

import { useState, useEffect, useRef } from "react";
import { useTimer } from "../hooks/useTimer";

import Cell from "./Cell";
import Score from "./Score";
import GameStatus from "./GameStatus";
import CheckForOpposite from "./CheckForOpposite";
import ControlDirection from "./ControlDirection";
import GenerateFood from "./GenerateFood";
import ModifySnakeBody from "./ModifySnakeBody";

const GameBoard = ({
  board,
  rows,
  isGamePaused,
  initialHead,
  initialFood,
  handleGameOver,
  resetBoard,
}) => {
  const { timer } = useTimer(isGamePaused);
  const controller = useRef(null);
  const [gameStatus, setGameStatus] = useState({
    gameWon: false,
    gameLost: false,
  });
  const [inputDirection, setInputDirection] = useState("ArrowDown");
  const [size, setSize] = useState();
  const [length, setLength] = useState(board.length);
  const [cells, setCells] = useState();

  const endGameRef = useRef(board);
  const cellsRef = useRef(board);
  const prevHeadRef = useRef(initialHead);
  const snakeBodyRef = useRef();
  const foodRef = useRef();
  const amountEatenRef = useRef(0);
  const notFood = (cell) => cell.status !== "isFood";

  useEffect(() => {
    if (board) {
      console.log(rows);
      endGameRef.current = board;
      cellsRef.current = board;
      prevHeadRef.current = initialHead;
      snakeBodyRef.current = [];
      foodRef.current = initialFood;
      amountEatenRef.current = 0;

      setGameStatus({
        gameWon: false,
        gameLost: false,
      });
      setInputDirection("ArrowDown");
      setLength(board.length);
      setSize(rows * 60);
      setCells(board);
    }
  }, [board, rows, length, initialHead, initialFood]);

  // focuses on input when game is not paused:
  useEffect(() => {
    if (!isGamePaused) {
      controller.current.focus();
    }
  }, [isGamePaused]);

  // function logs whatever key was pressed:
  const handleDirection = (e) => {
    if (inputDirection !== e.key) {
      setInputDirection(CheckForOpposite(inputDirection, e.key));
    }
  };

  useEffect(() => {
    if (timer) {
      let wasFoodEaten = false;
      let newHead = ControlDirection(
        prevHeadRef.current,
        inputDirection,
        rows,
        length
      );

      let cellsArray = cellsRef.current.map((cell) => {
        if (cell.id === prevHeadRef.current.id) {
          return { ...cell, status: "notSnake" };
        }
        if (cell.id === newHead) {
          if (cell.status === "isSnake") {
            setGameStatus((prevGameStatus) => {
              return { ...prevGameStatus, gameLost: true };
            });
            console.log("Opps, Game Over!");
          }
          if (cell.status === "isFood") {
            wasFoodEaten = true;
            amountEatenRef.current++;
          }
          cell.status = "isSnakeHead";
          newHead = cell;
          return cell;
        } else {
          return cell;
        }
      });

      if (cellsArray.every(notFood)) {
        foodRef.current = GenerateFood(cellsArray, length);
        cellsArray[foodRef.current.id - 1] = foodRef.current;
      }

      let newBody = ModifySnakeBody(
        snakeBodyRef.current,
        newHead,
        wasFoodEaten,
        amountEatenRef.current,
        cellsArray
      );

      let ids = newBody.map((segment) => segment.id);

      let matches = cellsArray.filter((cell) => {
        return ids.includes(cell.id) && cell.status !== "isSnakeHead";
      });

      cellsArray = cellsArray.map((cell) => {
        if (matches.includes(cell)) {
          return { ...cell, status: "isSnake" };
        } else if (cell.status === "isSnake") {
          return { ...cell, status: "notSnake" };
        }
        return cell;
      });

      cellsRef.current = cellsArray;
      prevHeadRef.current = newHead;
      setCells(cellsArray);
    }
  }, [timer, rows, length, inputDirection]);

  useEffect(() => {
    handleGameOver(gameStatus.gameLost, gameStatus.gameWon);
  }, [gameStatus, handleGameOver]);

  const resetStatus = () => {
    setGameStatus({
      gameWon: false,
      gameLost: false,
    });
  };

  return (
    <>
      <Score score={amountEatenRef.current} size={size} />
      <div
        className="GameBoard"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {cells &&
          !gameStatus.gameLost &&
          !gameStatus.gameWon &&
          cells.map((cell) => (
            <Cell
              key={cell.row.toString() + "-" + cell.col.toString()}
              cell={cell}
              inputDirection={inputDirection}
            ></Cell>
          ))}
        {(gameStatus.gameLost || gameStatus.gameWon) && (
          <GameStatus
            winStatus={gameStatus.gameWon}
            loseStatus={gameStatus.gameLost}
            score={amountEatenRef.current}
            resetBoard={resetBoard}
            resetStatus={resetStatus}
          ></GameStatus>
        )}
      </div>
      <div>
        <input
          className="direction"
          type="text"
          onKeyUp={(e) => handleDirection(e)}
          ref={controller}
        />
      </div>
    </>
  );
};

export default GameBoard;
