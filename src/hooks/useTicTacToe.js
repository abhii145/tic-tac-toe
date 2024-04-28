import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());

  const [isNext, setIsNext] = useState(true);

  const winnningPatters = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < winnningPatters.length; i++) {
      const [a, b, c] = winnningPatters[i];

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isNext ? "X" : "O";
    setBoard(newBoard);
    setIsNext(!isNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins !`;
    if (!board.includes(null)) return `It's a draw!`;
    return `Player ${isNext ? "X" : "O"} turn`;
  };

  const resetGame = () => {
    setBoard(initialBoard());
    setIsNext(true);
  };

  return { board, handleClick, calculateWinner, resetGame, getStatusMessage };
};

export default useTicTacToe;
