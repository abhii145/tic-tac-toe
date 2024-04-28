import useTicTacToe from "../hooks/useTicTacToe";




const TicTacToe = () => {
  const  { board, handleClick, calculateWinner, resetGame, getStatusMessage } = useTicTacToe();

    const winner = calculateWinner(board);
    const isDraw = !winner && !board.includes(null);

    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-xl mb-4">
        {getStatusMessage()}
        <button
          className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={resetGame}
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => (
          <button
            key={index}
            className={`w-16 h-16 text-2xl font-bold ${
              winner && winner === value ? "text-red-600" : "text-gray-800"
            } border border-gray-300 rounded-md transition-colors duration-300 hover:bg-gray-200`}
            onClick={() => handleClick(index)}
            disabled={winner || isDraw || value !== null}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
