import { useState } from "react";

export default function App(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);

  function handleClick(i){
    if(squares[i] || winner) return;

    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares); 
    setXIsNext(!xIsNext);
  }

  function resetGame(){
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  let status;
  if(winner){
    status =  `Người thắng: ${winner}`;
  }else if(!squares.includes(null)){
    status = "Hòa";
  }else{
    status = `Lượt tiếp theo: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="game">
      <h1>TIC TAC TOE</h1>
      <div className="board">
        {squares.map((value, i) => (
          <button key={i} className="squares" onClick={() => handleClick(i)}>
            {value}
          </button>
        ))}
      </div>
      <h2>{status}</h2>
      <button onClick={resetGame}>Chơi lại</button>
    </div>
  );
}

//Hàm kiểm tra người thắng
function calculateWinner(squares){
  const lines = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

for (let [a,b,c] of lines) {
  if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
    return squares[a];
  }
}
return null;
}