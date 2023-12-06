import React from "react";
import "./App.css";
import { Grid } from "./board/grid";
import { Piece } from "./board/piece";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
    { x: 0, y: 0 }
  );
  const renderedPiece = piece.render();

  const piece2 = new Piece(
    [
      [1, 1, 1],
      [0, 1, 0],
      [0, 1, 0],
    ],
    { x: 0, y: 0 }
  );
  const renderedPiece2 = piece2.render();

  const onDragEnd = (result: any) => {
    console.log(result);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="main">
        <div>{renderedPiece}</div>
        <div>{renderedPiece2}</div>
      </div>
    </DragDropContext>
  );
};

export default App;
