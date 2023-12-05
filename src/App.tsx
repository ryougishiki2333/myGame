import React from 'react';
import './App.css';

const App: React.FC = () => {
  const gridSize = 10;

  const renderGrid = () => {
    const grid = [];

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const cellId = `cell-${row}-${col}`;
        grid.push(<div key={cellId} className="cell" id={cellId}></div>);
      }
    }

    return grid;
  };

  return (
    <div className="App">
      <div className="grid">{renderGrid()}</div>
    </div>
  );
};

export default App;