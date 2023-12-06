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
      [1, 1],
      [1, 0],
    ],
    { x: 0, y: 0 }
  );
  const renderedPiece = piece.render();

  return (
    <div className="main">
      <div className="side">{renderedPiece}</div>
      <div className="grid">{renderedGrid}</div>
      <div className="side"></div>
    </div>
  );
};

export default App;
