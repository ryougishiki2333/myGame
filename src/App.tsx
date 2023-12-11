import React from "react";
import "./App.css";
import { Grid } from "./board/grid";
import { Piece } from "./board/piece";

const App: React.FC = () => {
  const gridSize = 10;
  const grid = new Grid(gridSize);
  const renderedGrid = grid.render();

  const piece = new Piece(
    [
      [1, 1, 1],
      [1, 0, 0],
      [1, 0, 0],
    ],
    { x: 0, y: 0 },
    1
  );
  const renderedPiece = piece.render();

  const piece2 = new Piece(
    [
      [1, 1, 1],
      [0, 1, 0],
      [0, 1, 0],
    ],
    { x: 0, y: 0 },
    2
  );
  const renderedPiece2 = piece2.render();

  return (
    <div className="main">
      <div className="half">
        {renderedPiece}
        {renderedPiece2}
      </div>
      <div className="half">{renderedGrid}</div>
    </div>
  );
};

export default App;
